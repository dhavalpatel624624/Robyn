## import robyn ## Manual, no need
import numpy as np
import pandas as pd
## from robyn import robyn_inputs, Wrong import
from robyn import data, inputs ## Manual, Added manually

# Set up Robyn environment
## robyn.set_env(robyn_directory="~/Desktop") ## Manual, NOT NEEDED

# Load data
## dt_simulated_weekly = robyn.data("dt_simulated_weekly")
## dt_prophet_holidays = robyn.data("dt_prophet_holidays")

dt_simulated_weekly = data.dt_simulated_weekly()
dt_prophet_holidays = data.dt_prophet_holidays()

# Define input variables
## manually converted to
input_collect = inputs.robyn_inputs(
    dt_input=dt_simulated_weekly,
    dt_holidays=dt_prophet_holidays,
    date_var="DATE",
    dep_var="revenue",
    dep_var_type="revenue",
    prophet_vars=["trend", "season", "holiday"],
    prophet_country="DE",
    context_vars=["competitor_sales_B", "events"],
    paid_media_spends=["tv_S", "ooh_S", "print_S", "facebook_S", "search_S"],
    paid_media_vars=["tv_S", "ooh_S", "print_S", "facebook_I", "search_clicks_P"],
    organic_vars="newsletter",
    window_start="2016-01-01",
    window_end="2018-12-31",
    adstock="geometric"
)

# Print input collection
print(input_collect)

# Define and add hyperparameters
# Corrected
hyper_names = inputs.hyper_names(adstock=input_collect['robyn_inputs']['adstock'], all_media=input_collect['robyn_inputs']['all_media'])

## Manually added
transformations.plot_adstock(plot = False)
transformations.plot_saturation(plot = False)

inputs.hyper_limits()

# Define hyperparameters ranges
facebook_S_alphas = np.array([0.5, 3])
facebook_S_gammas = np.array([0.3, 1])
facebook_S_thetas = np.array([0, 0.3])
print_S_alphas = np.array([0.5, 3])
print_S_gammas = np.array([0.3, 1])
print_S_thetas = np.array([0.1, 0.4])
tv_S_alphas = np.array([0.5, 3])
tv_S_gammas = np.array([0.3, 1])
tv_S_thetas = np.array([0.3, 0.8])
search_S_alphas = np.array([0.5, 3])
search_S_gammas = np.array([0.3, 1])
search_S_thetas = np.array([0, 0.3])
ooh_S_alphas = np.array([0.5, 3])
ooh_S_gammas = np.array([0.3, 1])
ooh_S_thetas = np.array([0.1, 0.4])
newsletter_alphas = np.array([0.5, 3])
newsletter_gammas = np.array([0.3, 1])
newsletter_thetas = np.array([0.1, 0.4])
train_size = np.array([0.5, 0.8])

hyperparameters = pd.DataFrame({
        'facebook_S_alphas': facebook_S_alphas,
        'facebook_S_gammas': facebook_S_gammas,
        'facebook_S_thetas': facebook_S_thetas,
        'print_S_alphas': print_S_alphas,
        'print_S_gammas': print_S_gammas,
        'print_S_thetas': print_S_thetas,
        'tv_S_alphas': tv_S_alphas,
        'tv_S_gammas': tv_S_gammas,
        'tv_S_thetas': tv_S_thetas,
        'search_S_alphas': search_S_alphas,
        'search_S_gammas': search_S_gammas,
        'search_S_thetas': search_S_thetas,
        'ooh_S_alphas': ooh_S_alphas,
        'ooh_S_gammas': ooh_S_gammas,
        'ooh_S_thetas': ooh_S_thetas,
        'newsletter_alphas': newsletter_alphas,
        'newsletter_gammas': newsletter_gammas,
        'newsletter_thetas': newsletter_thetas,
        'train_size': train_size
    })

# Define InputCollect
## Manually converted, parameters defined wrong.
input_collect = robyn_inputs(
    InputCollect = input_collect,
    hyperparameters = hyperparameters
)

# Print InputCollect
print(input_collect)

# Check spend exposure fit if available
if len(input_collect['exposure_vars']) > 0:
    lapply(input_collect['modNLS$plots'], plot)

import robyn

# Initialize Robyn
robyn.init()

# Define the input collector
input_collector = robyn.InputCollect(
    # Feed in all model specification
    model_specs=['my_model'],
    # Set to NULL to use all available CPU cores
    cores=None,
    # Run 2000 iterations
    iterations=2000,
    # Run 5 trials
    trials=5,
    # Use 3-way-split time series for NRMSE validation
    ts_validation=True,
    # Add penalty factor for experimental feature
    add_penalty_factor=False
)

# Run all trials and iterations
output_models = robyn.run(input_collector)

# Print the output models
print(output_models)

# Check MOO convergence plots
convergence = output_models.convergence
print(convergence.moo_distrb_plot)
print(convergence.moo_cloud_plot)

# Check time-series validation plot
if output_models.ts_validation:
    print(output_models.ts_validation_plot)

# Calculate Pareto fronts, cluster and export results and plots
output_collector = robyn.outputs(
    input_collector,
    output_models,
    # Automatically pick how many Pareto fronts to fill
    pareto_fronts='auto',
    # Set to 100 top Pareto models for clustering
    min_candidates=100,
    # Calibration constraint
    calibration_constraint=0.1,
    # Export results to CSV files
    csv_out='pareto',
    # Cluster similar models by ROAS
    clusters=True,
    # Create files locally
    export=True,
    # Path for plots exports and files creation
    plot_folder=robyn.directory,
    # Set to FALSE to deactivate plotting and saving model one-pagers
    plot_pareto=False
)

# Print the output collector
print(output_collector)

# Select and save any model
select_model = '1_122_7'
exported_model = robyn.write(input_collector, output_collector, select_model, export=True)
print(exported_model)

# Plot any model's one-pager
my_one_pager = robyn.onepagers(input_collector, output_collector, select_model, export=False)
print(my_one_pager)

# Check each of the one-pager's plots
my_one_pager.patches.plots[1]
my_one_pager.patches.plots[2]
my_one_pager.patches.plots[3]

# Get budget allocation based on the selected model
allocator_collector = robyn.allocator(
    input_collector=input_collector,
    output_collector=output_collector,
    select_model=select_model,
    # Date range for budget allocation
    date_range=None,
    # Total budget for budget allocation
    total_budget=None,
    # Channel constraints
    channel_constr_low=0.7,
    channel_constr_up=[1.2, 1.5, 1.5, 1.5, 1.5],
    # Scenario for budget allocation
    scenario='max_response',
    # Export results to CSV files
    export=True
)

# Print and plot allocator's output
print(allocator_collector)
plot(allocator_collector)


import robyn

# Example 2: maximize response for latest 10 periods with given spend

allocator_collect2 = robyn.allocator(
    InputCollect=InputCollect,
    OutputCollect=OutputCollect,
    select_model=select_model,
    date_range="last_10",
    total_budget=5000000,
    channel_constr_low=[0.8, 0.7, 0.7, 0.7, 0.7],
    channel_constr_up=[1.2, 1.5, 1.5, 1.5, 1.5],
    channel_constr_multiplier=5,
    scenario="max_response",
    export=create_files
)

print(allocator_collect2)

plot(allocator_collect2)

# Example 3: Use default ROAS target for revenue or CPA target for conversion

allocator_collect3 = robyn.allocator(
    InputCollect=InputCollect,
    OutputCollect=OutputCollect,
    select_model=select_model,
    date_range=None,  # Default last month as initial period
    scenario="target_efficiency",
    target_value=2,  # Customize target ROAS or CPA value
    export=create_files
)

print(allocator_collect3)

plot(allocator_collect3)

# Example 4: Customize target_value for ROAS or CPA (using json_file)

json_file = "~/Desktop/Robyn_202302221206_init/RobynModel-1_117_11.json"

allocator_collect4 = robyn.allocator(
    json_file=json_file,  # Using json file from robyn_write() for allocation
    dt_input=dt_simulated_weekly,
    dt_holidays=dt_prophet_holidays,
    date_range=None,  # Default last month as initial period
    scenario="target_efficiency",
    target_value=2,  # Customize target ROAS or CPA value
    plot_folder="~/Desktop/my_dir",
    plot_folder_sub="my_subdir",
    export=create_files
)

# A csv is exported into the folder for further usage. Check schema here:
# https://github.com/facebookexperimental/Robyn/blob/main/demo/schema.R

# QA optimal response

select_media = "search_S"  # Pick any media variable: InputCollect$all_media

metric_value = allocator_collect1.dt_optimOut.optmSpendUnit[
    allocator_collect1.dt_optimOut.channels == select_media
]  # For paid_media_spends set metric_value as your optimal spend

# # For paid_media_vars and organic_vars, manually pick a value
# metric_value = 10000

# Saturation curve for adstocked metric results (example)

robyn.response(
    InputCollect=InputCollect,
    OutputCollect=OutputCollect,
    select_model=select_model,
    metric_name=select_media,
    metric_value=metric_value,
    date_range="last_5"
)

import json
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from sklearn.linear_model import LinearRegression

# Load JSON file
with open('~/Desktop/Robyn_202211211853_init/RobynModel-1_100_6.json') as f:
    data = json.load(f)

# Define functions
def robyn_refresh(json_file, dt_input, dt_holidays, refresh_steps, refresh_iters, refresh_trials):
    # Load JSON file
    with open(json_file) as f:
        data = json.load(f)

    # Extract relevant data
    input_collect = data['listRefresh1']['InputCollect']
    output_collect = data['listRefresh1']['OutputCollect']
    select_model = data['listRefresh1']['OutputCollect']['selectID']

    # Split data into training and testing sets
    train_input, test_input, train_output, test_output = train_test_split(input_collect, output_collect, test_size=0.2, random_state=42)

    # Initialize model
    model = LinearRegression()

    # Train model
    for i in range(refresh_steps):
        # Fit model on training data
        model.fit(train_input, train_output)

        # Predict on testing data
        predictions = model.predict(test_input)

        # Calculate mean squared error
        mse = mean_squared_error(test_output, predictions)

        # Print iteration information
        print(f'Refresh Step {i+1}, MSE: {mse:.2f}')

        # Update model
        model.coef_ = np.random.rand(model.coef_.shape[0], 1)

    # Return model
    return model

def robyn_response(input_collect, output_collect, select_model, metric_name, metric_value, date_range):
    # Initialize response
    response = {}

    # Calculate response
    for i in range(len(input_collect)):
        # Extract relevant data
        input_data = input_collect.iloc[i]
        output_data = output_collect.iloc[i]

        # Calculate metric value
        metric_value = calculate_metric(input_data, output_data, select_model, metric_name)

        # Add to response
        response[f'{date_range}'] = metric_value

    # Return response
    return response

def calculate_metric(input_data, output_data, select_model, metric_name):
    # Calculate metric value
    if metric_name == 'facebook_S':
        # Calculate Facebook S metric
        metric_value = (output_data['facebook_S'] - input_data['facebook_S']) / input_data['facebook_S']
    else:
        # Calculate other metrics
        raise NotImplementedError

    return metric_value

# Load JSON file
with open('~/Desktop/Robyn_202208231837_init/Robyn_202208231841_rf1/RobynModel-1_12_5.json') as f:
    data = json.load(f)

# Extract relevant data
input_collect = data['listRefresh1']['InputCollect']
output_collect = data['listRefresh1']['OutputCollect']
select_model = data['listRefresh1']['OutputCollect']['selectID']

# Split data into training and testing sets
train_input, test_input, train_output, test_output = train_test_split(input_collect, output_collect, test_size=0.2, random_state=42)

# Initialize model
model = robyn_refresh(json_file=data, dt_input=dt_simulated_weekly, dt_holidays=dt_prophet_holidays, refresh_steps=7, refresh_iters=1000, refresh_trials=1)

# Train model
model.fit(train_input, train_output)

# Predict on testing data
predictions = model.predict(test_input)

# Calculate mean squared error
mse = mean_squared_error(test_output, predictions)

# Print iteration information
print(f'Refresh Step 1, MSE: {mse:.2f}')

# Define response
response = robyn_response(input_collect, output_collect, select_model, 'facebook_S', 20000, 'last_1')

# Plot response
import matplotlib.pyplot as plt
plt.plot(response['last_1'])
plt.xlabel('Date')
plt.ylabel('Facebook S')
plt.title('Facebook S vs. Date')
plt.show()

# Calculate spend
spend = 20000

# Define response
response1 = robyn_response(input_collect, output_collect, select_model, 'facebook_S', spend, 'last_1')

# Plot response
import matplotlib.pyplot as plt
plt.plot(response1['last_1'])
plt.xlabel('Date')
plt.ylabel('Facebook S')
plt.title('Facebook S vs. Date')
plt.show()

# Calculate spend
spend2 = spend + 100

# Define response
response2 = robyn_response(input_collect, output_collect, select_model, 'facebook_S', spend2, 'last_1')

# Plot response
import matplotlib.pyplot as plt
plt.plot(response2['last_1'])
plt.xlabel('Date')
plt.ylabel('Facebook S')
plt.title('Facebook S vs. Date')
plt.show()

# Calculate difference
difference = (response2['response_total'] - response1['response_total']) / (spend2 - spend)

print(f'Difference: {difference:.2f}')

import robyn

# Set up Robyn environment
robyn.set_env(robyn.Environment(
    input_collect=robyn.InputCollect(
        dt_input='~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json',
        dt_holidays='~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json'
    ),
    output_collect=robyn.OutputCollect(
        select_model='select_model'
    )
))

# Define budget and date range for Spend3
spend3 = 100000
date_range = 'last_5'

# Create Robyn response object
response3 = robyn.response(
    InputCollect=robyn.InputCollect(
        dt_input='~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json',
        dt_holidays='~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json'
    ),
    OutputCollect=robyn.OutputCollect(
        select_model='select_model'
    ),
    metric_name='facebook_S',
    metric_value=spend3,
    date_range=date_range
)

# Plot the response
response3.plot()

# Define sendings and create Robyn response object
sendings = 30000
response_sending = robyn.response(
    InputCollect=robyn.InputCollect(
        dt_input='~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json',
        dt_holidays='~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json'
    ),
    OutputCollect=robyn.OutputCollect(
        select_model='select_model'
    ),
    metric_name='newsletter',
    metric_value=sendings
)

# Calculate and print the response total
response_sending.response_total / sendings * 1000
print(response_sending.plot())

# Write Robyn inputs and outputs to files
robyn.write(robyn.InputCollect(
    dt_input='~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json',
    dt_holidays='~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json'
), '~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json')
robyn.write(robyn.OutputCollect(
    select_model='select_model'
), '~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json')

# Read Robyn inputs and outputs from files
json_file = '~/Desktop/Robyn_202208231837_init/RobynModel-1_100_6.json'
json_data = robyn.read(json_file)
print(json_data)

# Create Robyn inputs and outputs for recreated model
input_collect = robyn.InputCollect(
    dt_input=json_data['dt_input'],
    dt_holidays=json_data['dt_holidays']
)
output_collect = robyn.OutputCollect(
    select_model=json_data['select_model']
)

# Recreate Robyn model
robyn_recreate(
    json_file=json_file,
    dt_input=input_collect.dt_input,
    dt_holidays=input_collect.dt_holidays,
    quiet=False
)

# Write Robyn inputs and outputs to files
robyn.write(input_collect, output_collect, export=False, dir='~/Desktop')
my_model = robyn.read(json_file)
print(my_model)

# Create one-pagers for Robyn model
robyn_onepagers(input_collect, output_collect, export=False)

# Refresh Robyn model
robyn_refresh(
    json_file=json_file,
    dt_input=input_collect.dt_input,
    dt_holidays=input_collect.dt_holidays,
    refresh_steps=6,
    refresh_mode='manual',
    refresh_iters=1000,
    refresh_trials=1
)

# Create Robyn response object
response = robyn.response(
    InputCollect=input_collect,
    OutputCollect=output_collect,
    metric_name='newsletter',
    metric_value=50000
)

# Print the response
print(response.plot())