"use strict";(self.webpackChunkmmm_for_all=self.webpackChunkmmm_for_all||[]).push([[277],{6197:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=(a(4996),["components"]),l={id:"releases",title:"Releases"},s=void 0,p={unversionedId:"releases",id:"releases",isDocsHomePage:!1,title:"Releases",description:"3.8.2 (2022-11-23)",source:"@site/docs/releases.mdx",sourceDirName:".",slug:"/releases",permalink:"/Robyn/docs/releases",editUrl:"https://github.com/facebookexperimental/Robyn/edit/main/website/docs/releases.mdx",tags:[],version:"current",frontMatter:{id:"releases",title:"Releases"},sidebar:"someSidebar",previous:{title:"Features",permalink:"/Robyn/docs/features"},next:{title:"Success Stories using Robyn",permalink:"/Robyn/docs/success-stories"}},m=[{value:"3.8.2 (2022-11-23)",id:"382-2022-11-23",children:[{value:"Memory friendly outputs, progress bars for Pareto-front models, bugs and docs",id:"memory-friendly-outputs-progress-bars-for-pareto-front-models-bugs-and-docs",children:[]}]},{value:"3.8.0 (2022-10-27)",id:"380-2022-10-27",children:[{value:"Bootstrapped CI, Immediate vs Carryover, Multi-channel calibration",id:"bootstrapped-ci-immediate-vs-carryover-multi-channel-calibration",children:[]}]},{value:"3.7.2 (2022-09-01)",id:"372-2022-09-01",children:[{value:"CRAN update, partial results, more reproducibility",id:"cran-update-partial-results-more-reproducibility",children:[]}]},{value:"3.7.1 (2022-08-26)",id:"371-2022-08-26",children:[{value:"JSON import/export, reactivate spend exposure fitting Latest",id:"json-importexport-reactivate-spend-exposure-fitting-latest",children:[]}]},{value:"3.7.0 (2022-07-27)",id:"370-2022-07-27",children:[{value:"Total recoding, UX feats, and combined errors fix",id:"total-recoding-ux-feats-and-combined-errors-fix",children:[]}]},{value:"3.6.3 (2022-05-06)",id:"363-2022-05-06",children:[{value:"CRAN Version, Site &amp; Documentation Revamp, More Inputs Flexibility",id:"cran-version-site--documentation-revamp-more-inputs-flexibility",children:[]}]},{value:"3.6.2 (2022-03-31)",id:"362-2022-03-31",children:[{value:"Allocation and plot improvements, new warnings, bugs fixed",id:"allocation-and-plot-improvements-new-warnings-bugs-fixed",children:[]}]},{value:"3.6.0 (2022-02-22)",id:"360-2022-02-22",children:[]}],d={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"382-2022-11-23"},"3.8.2 (2022-11-23)"),(0,i.kt)("h3",{id:"memory-friendly-outputs-progress-bars-for-pareto-front-models-bugs-and-docs"},"Memory friendly outputs, progress bars for Pareto-front models, bugs and docs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": new status bars for Pareto-Front models per trial to provide information on calculation status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": included carryover results into pareto_aggregated.csv output and ",(0,i.kt)("inlineCode",{parentName:"li"},"OutputCollect$xDecompAgg$carryover_pct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": new error message shows which hyperparameters inputs are missing #543"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),":  substantially reduced the size of ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_run()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_outputs()")," results (around -80% compared with 3.8.1 version's size) by removing redundant and unused data from outputs #534"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": invalid argument type in check_factorvars() and issue recreating calibrated models #520"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"add_penalty_factor")," parameter now works correctly with JSON files and ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_refresh()")," #543"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": correct hyper-parameters length for custom data #533"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": bug in RobynLearn when checking numerical data #532"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": removed .iData format for legacy demo .RData files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": passing custom ",(0,i.kt)("inlineCode",{parentName:"li"},"pareto_fronts"),' input instead of "auto" now works as is expected'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docs"),": updated released version on website, meta.com emails, update CRAN link on ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_update()"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/compare/v3.8.0...v3.8.2"},"https://github.com/facebookexperimental/Robyn/compare/v3.8.0...v3.8.2")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"380-2022-10-27"},"3.8.0 (2022-10-27)"),(0,i.kt)("h3",{id:"bootstrapped-ci-immediate-vs-carryover-multi-channel-calibration"},"Bootstrapped CI, Immediate vs Carryover, Multi-channel calibration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat:")," Added in-cluster bootstrapped confidence intervals (CI) for ROAS and CPA. We treat each cluster of Pareto-optimal model candidates as a sample from a local optimum of the entire population. Default parameters can be customized manually with ",(0,i.kt)("inlineCode",{parentName:"li"},"boot_n")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sim_n")," arguments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat:")," New ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_calibrate()")," function that replaces  previous un-exported function ",(0,i.kt)("inlineCode",{parentName:"li"},"calibrate_mmm()"),". The new calibration method is able to separate immediate & carryover effects. When calibrating using experimental results, only the immediate response and its future carryover serve as a calibration target, as opposed to previously the total response. The historical response is excluded from calibration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": Enabled multi-channel calibration so we can use experiments that measured more than one channel with a single experiment to be used for calibration (i.e. incrementality experiment measured all ",(0,i.kt)("inlineCode",{parentName:"li"},"fb")," but you had ",(0,i.kt)("inlineCode",{parentName:"li"},"fb_brand")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"fb_perf")," as two separate media channels/variables)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat:")," Added 2 new plots into model one-pager: bootstrapped CI plot and immediate vs carryover response plot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": Changed default Pareto-fronts from ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),"  to ",(0,i.kt)("inlineCode",{parentName:"li"},'\u201dauto"')," to pick the N that contains at least 100 models (threshold can be changed manually with ",(0,i.kt)("inlineCode",{parentName:"li"},"min_candidates")," parameter)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recode"),": improved CodeFactor's code quality score from C- to A"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": Additional CI outputs containing revamped plot and CSV file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": Enabled turning off parallel calculations when ",(0,i.kt)("inlineCode",{parentName:"li"},"cores = 1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": Fixed few minor bugs and doumentations (#496, #506, #507, #515)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/compare/v3.7.2...v3.8.0"},"https://github.com/facebookexperimental/Robyn/compare/v3.7.2...v3.8.0")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"372-2022-09-01"},"3.7.2 (2022-09-01)"),(0,i.kt)("h3",{id:"cran-update-partial-results-more-reproducibility"},"CRAN update, partial results, more reproducibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": wrap ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_mmm()")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"tryCatch()")," to return partial results if the function crashes after a certain time running and warns the user when this happens"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": auto-detect categorical variables (no need to set ",(0,i.kt)("inlineCode",{parentName:"li"},"factor_vars")," parameter in ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_inputs()"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": include R and Robyn's versions to JSON files and InputCollect for reproducibility"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": export/save raw data input for reproducibility (raw_data.csv file)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": set ",(0,i.kt)("inlineCode",{parentName:"li"},"Robyn::dt_prophet_holidays")," as default input on ",(0,i.kt)("inlineCode",{parentName:"li"},"dt_holidays")," parameters"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": inverted counters in ",(0,i.kt)("inlineCode",{parentName:"li"},"check_hyperparameters()")," message #474"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": force date format before binding rows in ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_refresh()")," #480"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"check_context()")," was being skipped in some cases"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),":  when only 1 categorical value with 2 unique values crashed one-hot-encoding"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docs"),": updated templates for issues and pull requests")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/compare/v3.7.1...v3.7.2"},"https://github.com/facebookexperimental/Robyn/compare/v3.7.1...v3.7.2")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog since last CRAN update"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/compare/v3.6.3...v3.7.2"},"https://github.com/facebookexperimental/Robyn/compare/v3.6.3...v3.7.2")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"371-2022-08-26"},"3.7.1 (2022-08-26)"),(0,i.kt)("h3",{id:"json-importexport-reactivate-spend-exposure-fitting-latest"},"JSON import/export, reactivate spend exposure fitting Latest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": new ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_read()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_write()")," functions to save and load Robyn models in a transparent, flexible, and cost-efficient way using JSON instead of RDS files (read ",(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/groups/robynmmm/posts/1252761488825315/"},"more"),"); also, new ",(0,i.kt)("inlineCode",{parentName:"li"},"print")," methods for both objects containing the most relevant information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": new ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_recreate()")," to rebuild any model's ",(0,i.kt)("inlineCode",{parentName:"li"},"InputCollect")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"OutputCollect")," objects based on their JSON files and data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": reactivated spend exposure fitting and plotting #463"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": updated ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_response()")," to receive numeric vectors #464"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": enabled ",(0,i.kt)("inlineCode",{parentName:"li"},"calibration_input")," on ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_refresh()")," to calibrate on the fly and more robust checks on data inputs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat")," added Robyn and R versions as the caption in one-pagers to help users debug"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": trimmed spend response curves on ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_allocator()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_onepagers()")," plots outputs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": missed intercept calculation in fitted vs residual plot #462"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": when single categorical value had 2 levels it crashed the one-hot-encoding process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": datasets with no categorical data crashed when using one-hot-encoding #419"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": no need to manually sort the dates before passing the data to ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_inputs()"),". Ref: ",(0,i.kt)("inlineCode",{parentName:"li"},"check_datevar()")," #448"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": fixed ggplot warnings on some plots (previously hidden with suppressWarnings)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Other"),": added badges with website and Facebook group in README files (see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Robyn#readme"},"here"),"), updated documentation and website, and more data checks on user inputs")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/compare/v3.7.0...v3.7.1"},"https://github.com/facebookexperimental/Robyn/compare/v3.7.0...v3.7.1")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"370-2022-07-27"},"3.7.0 (2022-07-27)"),(0,i.kt)("h3",{id:"total-recoding-ux-feats-and-combined-errors-fix"},"Total recoding, UX feats, and combined errors fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recode"),": got rid of data.table dependency for r2py wrapper and removed all ",(0,i.kt)("inlineCode",{parentName:"li"},"globalVariables")," associated noise"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recode"),": all code is now clean and formatted under the tidyverse code style for better code reading and standardization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": trimmed functionality for response curves on one-pagers outputs to have coherent ranges plotted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": enabled channels removal on ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_allocator()")," by setting their constraints to 0 #411"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": when manually selecting refresh models in ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_refresh()"),", re-ask user until valid solID is provided, instead of crashing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": new ",(0,i.kt)("inlineCode",{parentName:"li"},"plot")," and improved ",(0,i.kt)("inlineCode",{parentName:"li"},"print")," methods for ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_refresh()")," outputs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": include time units used in adstock plots for clarity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": enabled organic media variables to be calibrated (no spend)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": when best model based on minimum combined errors was tied with other models, inconsistent outputs (one-pagers / clustering). Standardized combined errors methodology with new ",(0,i.kt)("inlineCode",{parentName:"li"},"errors_scores()"),' function, especially normalizing errors before filtering models. The largest the "error_score", the better the model\'s performance #428'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": show blue dots on top of grey dots in Pareto plots #420"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),":  positive/negative colour palette on waterfall plot when all values are positive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),":  set prophet's print as disabled when prophet_vars input is NULL (off)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docs"),": added CRAN, site, and FB group badges on README files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docs"),": several typos and documentation updates")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/compare/v3.6.3...v3.7.0"},"https://github.com/facebookexperimental/Robyn/compare/v3.6.3...v3.7.0")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"363-2022-05-06"},"3.6.3 (2022-05-06)"),(0,i.kt)("h3",{id:"cran-version-site--documentation-revamp-more-inputs-flexibility"},"CRAN Version, Site & Documentation Revamp, More Inputs Flexibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CRAN"),": First Robyn version available via CRAN. From now on, install CRAN's for stable version, GitHub's for dev version."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docs"),": Site revamp ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Robyn/pull/372"},"#372"),", documentation updates and demo enrichment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": Added ",(0,i.kt)("inlineCode",{parentName:"li"},"version_prompt")," parameter to robyn_refresh() ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Robyn/pull/375"},"#375")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": Added new calibration checks to ensure quality experiments usage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": New ",(0,i.kt)("inlineCode",{parentName:"li"},"date_min")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"date_max")," parameters on ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_allocator()")," to pick non-0 means window"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": New ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_update()")," function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": More checks and warnings included to push users to follow best practices."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Refactor"),": Changed 1 to 3 Pareto fronts as default to enrich ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_clusters()")," results"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Refactor"),": Changed default thresholds on ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_converge()")," to be more flexible"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": Several bugs squashed")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog"),": (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/compare/v3.6.2...v3.6.3"},"https://github.com/facebookexperimental/Robyn/compare/v3.6.2...v3.6.3"),")"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"362-2022-03-31"},"3.6.2 (2022-03-31)"),(0,i.kt)("h3",{id:"allocation-and-plot-improvements-new-warnings-bugs-fixed"},"Allocation and plot improvements, new warnings, bugs fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Viz"),": removed redundant information on plots and standardized styles and contents on all visualizations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": new ",(0,i.kt)("inlineCode",{parentName:"li"},"date_min")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"date_max")," parameters on ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_allocator()")," to pick specific date range to consider mean spend values (",(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/groups/robynmmm/permalink/1072870463481086"},"user request"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": new ",(0,i.kt)("inlineCode",{parentName:"li"},"plot")," methods for ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_allocator()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_save()")," outputs, and ",(0,i.kt)("inlineCode",{parentName:"li"},"print")," method for ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_inputs()")," with and without hyperparameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),": provide recommendations on calibration inputs depending on the experiments' confidence, spending, and KPI measured ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Robyn/issues/307"},"#307"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feat"),': warn and avoid weekly trend input when data granularity is larger than "week".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": issues on several ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_allocator()")," specific cases (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Robyn/issues/349"},"#349"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Robyn/issues/344"},"#344"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Robyn/issues/345"},"#345"),"), especially when some coefficients were 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix"),": bug with Weibull adstock scenario ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Robyn/issues/353"},"#353"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docs"),": fixed some typos, updated, and standardized internal documentation.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog"),":",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/compare/v3.6.0...v3.6.2"},"https://github.com/facebookexperimental/Robyn/compare/v3.6.0...v3.6.2")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"360-2022-02-22"},"3.6.0 (2022-02-22)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("strong",{parentName:"li"},'hyperparameter "lambda"')," finds MOO-optimal lambda and thus removes the need of manual lambda selection."),(0,i.kt)("li",{parentName:"ul"},"New optional ",(0,i.kt)("strong",{parentName:"li"},"hyperparameter ",(0,i.kt)("inlineCode",{parentName:"strong"},"penalty.factor"))," that further extends hyperparameter spaces and thus potentially better fit."),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("strong",{parentName:"li"},"optimisation convergence rules & plots")," for each objective function showing if set iterations have converged or not (NRMSE, DECOMP.RSSD, and MAPE if calibrated)"),(0,i.kt)("li",{parentName:"ul"},"Improved ",(0,i.kt)("strong",{parentName:"li"},"response function")," now also returns the response for exposure metrics (response on imps, GRP, newsletter sendings, etc) and plots. Note that argument names and output class has changed. See updated ",(0,i.kt)("inlineCode",{parentName:"li"},"demo.R")," for more details."),(0,i.kt)("li",{parentName:"ul"},"More ",(0,i.kt)("strong",{parentName:"li"},"budget allocation stability")," by defaulting fitting media variables from ",(0,i.kt)("inlineCode",{parentName:"li"},"paid_media_vars")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"paid_media_spends"),". Spend exposure fitting with Michaelis Menten function will only serve ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_response()")," function output and plotting. ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_allocator()")," now only relies on direct spend - response transformation."),(0,i.kt)("li",{parentName:"ul"},"Default ",(0,i.kt)("strong",{parentName:"li"},"beta coefficient signs"),": positive for paid & organic media and unconstrained for the rest. Users can still set signs manually."),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("strong",{parentName:"li"},"print methods")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_inputs()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_run()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_outputs()"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_allocator()")," outputs to enable visibility on each step's results and objects content.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/compare/v3.5.1...v3.6.0"},"https://github.com/facebookexperimental/Robyn/compare/v3.5.1...v3.6.0")))}u.isMDXComponent=!0}}]);