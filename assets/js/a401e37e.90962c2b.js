"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3288],{63851:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=i(85893),t=i(11151);const o={title:"2019-11-12"},l="2019-11-12 conda-forge core meeting",r={id:"minutes/2019-11-12",title:"2019-11-12",description:"Attendees",source:"@site/community/minutes/2019-11-12.md",sourceDirName:"minutes",slug:"/minutes/2019-11-12",permalink:"/community/minutes/2019-11-12",draft:!1,unlisted:!1,editUrl:"https://github.com/afshin/conda-forge.github.io/tree/refs/heads/main/community/minutes/2019-11-12.md",tags:[],version:"current",lastUpdatedAt:1722387848e3,frontMatter:{title:"2019-11-12"},sidebar:"community",previous:{title:"2020-01-08",permalink:"/community/minutes/2020-01-08"},next:{title:"2019-10-30",permalink:"/community/minutes/2019-10-30"}},c={},a=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Your agenda items",id:"your-agenda-items",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"cfep-03 Manual upload of builds",id:"cfep-03-manual-upload-of-builds",level:4},{value:"cfep-04 X11 and CDT policy",id:"cfep-04-x11-and-cdt-policy",level:4},{value:"cfep-05 dev/rc builds",id:"cfep-05-devrc-builds",level:4},{value:"cfep-06 Staged-recipes review lifecycle",id:"cfep-06-staged-recipes-review-lifecycle",level:4},{value:"cfep-08 Too Big To Fail",id:"cfep-08-too-big-to-fail",level:4},{value:"cfep-10 Feedstock statuses, unmaintained",id:"cfep-10-feedstock-statuses-unmaintained",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"Last meeting",id:"last-meeting",level:3},{value:"2 meetings ago",id:"2-meetings-ago",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"4 meetings ago",id:"4-meetings-ago",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2019-11-12-conda-forge-core-meeting",children:"2019-11-12 conda-forge core meeting"}),"\n",(0,s.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,s.jsx)(n.h2,{id:"agenda",children:"Agenda"}),"\n",(0,s.jsx)(n.h3,{id:"your-agenda-items",children:"Your agenda items"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Qt update strategies. Marius said he was going to talk with Microsoft at the Numfocus summit / Pydata NYC. We agreed that we'd get updates from Marius at this dev meeting."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Context: We should be building Qt more regularly. How do we achieve this? Provisioning Windows Azure VMs seems like the best path forward.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We'd need to make an Azure org (or whatever their term is) and then distribute credentials"}),"\n",(0,s.jsx)(n.li,{children:"We should consider talking to Microsoft about help doing this on Azure."}),"\n",(0,s.jsx)(n.li,{children:"Marius will run point on these conversations this week at NumFocus Summit and PyData."}),"\n",(0,s.jsx)(n.li,{children:"Get updates from Marius at next dev meeting."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(John/Eric) Aligning on GPU packages between CF and defaults"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(Eric) Currently working internally and then with Josh to align on funding half time developer on distribution team for the rapids GPU needs."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Reach out to NumFocus to figure out legal ramifications of not including licenses in files."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Suggestion to changing linter to error when license is missing, can still merge  with a failure."}),"\n",(0,s.jsx)(n.li,{children:"Can include license file which mentions that license is unclear."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-smithy/pull/1102#issuecomment-553503902",children:"https://github.com/conda-forge/conda-smithy/pull/1102#issuecomment-553503902"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Advertise AMD GPU support."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AMD GPU runtime is in conda-forge now. Only need a recent Linux kernel in the user machine (And a supported AMD GPU of course)"}),"\n",(0,s.jsx)(n.li,{children:"write a note to NumFOCUS newsletter"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Should conda-forge be ping-ing maintainers for projects who's packages are being added to staged recipes?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"eg. torchvision issue"}),"\n",(0,s.jsx)(n.li,{children:'Find the right wording to ping people without "bothering" them too much.'}),"\n",(0,s.jsx)(n.li,{children:"Invite to feedstock rather than in staged-recipes"}),"\n",(0,s.jsx)(n.li,{children:"What if maintainer says no, or asks to take the package down?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This is an email I got when one of my (Jonathan's) packages was added to Fedora.\nThe author might have contacts me only about the issues."}),"\n",(0,s.jsx)(n.p,{children:"Greetings from a fellow NMR spectroscopist. In my role as a Fedora\npackager, I have built nmrglue for Fedora and Centos (or RHEL,\nScientific linux, etc,). Users of these distributions can now install\nnmrglue using their respective package management tools."}),"\n",(0,s.jsx)(n.p,{children:'I am writing to you to bring up two "issues".\n...'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Getting more contributors to conda-forge:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Should we do outchreachy with part of our funds? (GSoC but with our own funds. Higher contributor "conversion" rate than GSoC.)'}),"\n",(0,s.jsx)(n.li,{children:"Send stickers/t-shirts to reviewers on staged-recipes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Vote for Staged reciepes reminder!"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Python 3.8 migration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+archived%3Afalse+org%3Aconda-forge+-review%3Achanges_requested+-repo%3Aconda-forge%2Fstaged-recipes+author%3Aregro-cf-autotick-bot+Rebuild+python38+",children:"https://github.com/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+archived%3Afalse+org%3Aconda-forge+-review%3Achanges_requested+-repo%3Aconda-forge%2Fstaged-recipes+author%3Aregro-cf-autotick-bot+Rebuild+python38+"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,s.jsx)(n.h4,{id:"bot",children:"Bot"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bot underwent some refactoring, causing outages, outages have been fixed"}),"\n",(0,s.jsx)(n.li,{children:"Bot now supports bumping and not bumping build numbers"}),"\n",(0,s.jsx)(n.li,{children:"We've started pushing out on the backlog of pins (arrow-cpp, protobuf, occt)"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/jjhelmus/conda_recipe_tools",children:"https://github.com/jjhelmus/conda_recipe_tools"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/jjhelmus/conda_recipe_tools/blob/master/conda_recipe_tools/find_version.py#L74-L102",children:"https://github.com/jjhelmus/conda_recipe_tools/blob/master/conda_recipe_tools/find_version.py#L74-L102"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"arm",children:"ARM"}),"\n",(0,s.jsx)(n.h4,{id:"power",children:"POWER"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Have access to a ppc64le machine for conda-forge through OSU OSL."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["conda-forge is a supported FOSS project. (",(0,s.jsx)(n.a,{href:"https://osuosl.org/services/powerdev/current-projects/",children:"https://osuosl.org/services/powerdev/current-projects/"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"If anybody needs access send your public SSH-key to Isuru"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"conda-forge is now self-hosting. Drop defaults?"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"docs",children:"Docs"}),"\n",(0,s.jsx)(n.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,s.jsx)(n.h4,{id:"website",children:"website"}),"\n",(0,s.jsx)(n.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,s.jsx)(n.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,s.jsx)(n.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,s.jsx)(n.p,{children:"How do we start getting traction on these?"}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-03-manual-upload-of-builds",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/5",children:"cfep-03"})," Manual upload of builds"]}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-04-x11-and-cdt-policy",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"* proposal is not long being worked on\n* could be solved by virtual packages\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-05-devrc-builds",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/3",children:"cfep-05"})," dev/rc builds"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"* 2 Nays, needs voting\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-06-staged-recipes-review-lifecycle",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"* Is this necessary now that pinging staged-recipes works\n"})}),"\n",(0,s.jsx)(n.h4,{id:"cfep-08-too-big-to-fail",children:"cfep-08 Too Big To Fail"}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-10-feedstock-statuses-unmaintained",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,s.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,s.jsx)(n.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,s.jsx)(n.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,s.jsx)(n.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) regarding cfep-05, We should implement this in whatever way is as simple as possible for the conda-forge tooling ecosystem. If there is enough of sentiment that people want something more sophisticated, PRs welcome. Make this comment on cfep05"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-meetings-ago",children:"2 meetings ago"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Filipe) CFEP-03: Review, fix any text and merge it in.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minor updates that are needed. This will likely get done in December."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (CJ) CFEP-08: Merge in with deferred status\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Will check in next meeting."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,s.jsx)(n.h3,{id:"4-meetings-ago",children:"4 meetings ago"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Email out to see if we can get more engagement on regular dev meetings."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (Sophia) Set up meeting to talk about Condafile stuff.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Will punt on this until she's working on this actively again"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (Filipe) Ping Bjorn to try and get Debian community more involved with conda-forge\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Going to drop this from our tracker"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var s=i(67294);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);