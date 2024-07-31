"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3691],{3620:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(85893),i=a(11151);const r={title:"A brief introduction"},t="A brief introduction",s={id:"user/introduction",title:"A brief introduction",description:"What is conda-forge?",source:"@site/docs/user/introduction.md",sourceDirName:"user",slug:"/user/introduction",permalink:"/docs/user/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/afshin/conda-forge.github.io/tree/refs/heads/main/docs/user/introduction.md",tags:[],version:"current",lastUpdatedAt:1722387848e3,frontMatter:{title:"A brief introduction"},sidebar:"docs",previous:{title:"User Documentation",permalink:"/docs/user/"},next:{title:"Tips & tricks",permalink:"/docs/user/tipsandtricks"}},c={},d=[{value:"What is conda-forge?",id:"what-is-conda-forge",level:2},{value:"Why conda-forge?",id:"why-conda-forge",level:2},{value:"How can I install packages from conda-forge?",id:"how-can-i-install-packages-from-conda-forge",level:2},{value:"Can I contribute packages to conda-forge?",id:"can-i-contribute-packages-to-conda-forge",level:2},{value:"How can I give credit to conda-forge?",id:"how-can-i-give-credit-to-conda-forge",level:2},{value:"Display conda-forge packages in Anaconda Navigator",id:"display-conda-forge-packages-in-anaconda-navigator",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{id:"a-brief-introduction"})}),"\n",(0,o.jsx)(e.h1,{id:"a-brief-introduction",children:"A brief introduction"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{id:"what-is-conda-forge"})}),"\n",(0,o.jsx)(e.h2,{id:"what-is-conda-forge",children:"What is conda-forge?"}),"\n",(0,o.jsx)(e.p,{children:"conda-forge is a community effort that provides conda packages for a wide range of software."}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Missing a package that you would love to install with conda?"})," - Chances are we have already packaged it for you!"]}),"\n",(0,o.jsxs)(e.p,{children:["You can ",(0,o.jsx)(e.a,{href:"https://anaconda.org/",children:"search"})," for packages online. Look out for packages provided by our conda-forge organization."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Cannot find a package or only outdated versions of a package?"})," - Everybody is welcome to contribute to our package stack! Please refer to ",(0,o.jsx)(e.a,{href:"/docs/user/contributing#becoming-involved",children:"Becoming involved"}),", for an overview on how to start contributing."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{id:"why-conda-forge"})}),"\n",(0,o.jsx)(e.h2,{id:"why-conda-forge",children:"Why conda-forge?"}),"\n",(0,o.jsxs)(e.p,{children:["The packaging team from ",(0,o.jsx)(e.a,{href:"https://anaconda.org/",children:"Anaconda, Inc."}),", packages a multitude of packages and provides them to all users free of charge in their ",(0,o.jsx)(e.code,{children:"defaults"})," channel."]}),"\n",(0,o.jsxs)(e.p,{children:["But what if a package you are looking for is not in the ",(0,o.jsx)(e.code,{children:"defaults"})," channel?\nIn the past users only had the option to create an ",(0,o.jsx)(e.a,{href:"https://anaconda.org/",children:"Anaconda Cloud"})," account and create their own channel."]}),"\n",(0,o.jsx)(e.p,{children:"This came with a list of disadvantages:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Locating packages was difficult due to them being scattered over many channels."}),"\n",(0,o.jsx)(e.li,{children:"Combining packages across channels was not always possible due to binary incompatibilities."}),"\n",(0,o.jsx)(e.li,{children:"Packages were only available for architectures the developer was interested in or had access to."}),"\n",(0,o.jsx)(e.li,{children:"Channels were often abandoned, updating required locating new channels."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"conda-forge is a community effort that tackles these issues:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"All packages are shared in a single channel named conda-forge."}),"\n",(0,o.jsx)(e.li,{children:"Care is taken that all packages are up-to-date."}),"\n",(0,o.jsx)(e.li,{children:"Common standards ensure that all packages have compatible versions."}),"\n",(0,o.jsx)(e.li,{children:"By default, we build packages for macOS, Linux AMD64 and Windows AMD64.\nOther architectures are also available on request (e.g. Apple Silicon, PowerPC, Linux ARM)."}),"\n",(0,o.jsx)(e.li,{children:"Many packages are updated by multiple maintainers with an easy option to become a maintainer."}),"\n",(0,o.jsx)(e.li,{children:"An active core developer team is trying to also maintain abandoned packages."}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["You can refer to the glossary ",(0,o.jsx)(e.a,{href:"/docs/glossary",children:"Glossary"}),"."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{id:"how-to-install"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{id:"how-can-i-install-packages-from-conda-forge"})}),"\n",(0,o.jsx)(e.h2,{id:"how-can-i-install-packages-from-conda-forge",children:"How can I install packages from conda-forge?"}),"\n",(0,o.jsx)(e.p,{children:"Using conda-forge is easy!"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Make sure you have ",(0,o.jsx)(e.code,{children:"conda >=4.9"}),".\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"conda --version\nconda update conda\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["Add conda-forge as the highest priority channel.\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"conda config --add channels conda-forge\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["Activate ",(0,o.jsx)(e.code,{children:"strict"})," channel priority (",(0,o.jsx)(e.code,{children:"strict"})," will be activated by default in conda 5.0).\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"conda config --set channel_priority strict\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["From now on using ",(0,o.jsx)(e.code,{children:"conda install <package-name>"})," will also find packages in our conda-forge channels."]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["In addition to the channel priority,\nwe recommend always installing your packages inside a new environment instead of the ",(0,o.jsx)(e.code,{children:"base"})," (formerly known as ",(0,o.jsx)(e.code,{children:"root"}),") environment,\nand we also recommend the use of ",(0,o.jsx)(e.a,{href:"https://github.com/conda-forge/miniforge",children:(0,o.jsx)(e.code,{children:"miniforge"})})," instead of the Anaconda Distribution.\nUsing environments make it easier to debug problems with packages and ensure the stability of your ",(0,o.jsx)(e.code,{children:"base"})," environment.\nAvoiding the Anaconda Distribution reduces chances of unsolvable/conflicting installations, it is also a smaller download."]})}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["Please be aware that the order of your conda package channels is important, especially when you combine conda-forge with other channels, e.g. ",(0,o.jsx)(e.code,{children:"bioconda"}),"."]})}),"\n",(0,o.jsxs)(e.admonition,{type:"note",children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://github.com/conda-forge/miniforge",children:"Miniforge"})," is a community\neffort to provide Miniconda-like installers, with the added feature that\nconda-forge is the default channel.\nMiniforge is the easiest way to get started with conda-forge!"]}),(0,o.jsxs)(e.p,{children:["Please refer to ",(0,o.jsx)(e.a,{href:"/docs/user/tipsandtricks#multiple-channels",children:"Using multiple channels"})," for pitfalls and more information."]})]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{id:"can-i-contribute-packages-to-conda-forge"})}),"\n",(0,o.jsx)(e.h2,{id:"can-i-contribute-packages-to-conda-forge",children:"Can I contribute packages to conda-forge?"}),"\n",(0,o.jsxs)(e.p,{children:["Anyone can contribute packages to the ",(0,o.jsx)(e.code,{children:"conda-forge"})," channel.\nYou don't have to be the upstream maintainer of a package in order to contribute it to conda-forge.\nTo learn how to contribute your first package read ",(0,o.jsx)(e.a,{href:"/docs/maintainer/adding_pkgs#creating-recipes",children:"the staging process"}),"."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{id:"how-can-i-give-credit-to-conda-forge"})}),"\n",(0,o.jsx)(e.h2,{id:"how-can-i-give-credit-to-conda-forge",children:"How can I give credit to conda-forge?"}),"\n",(0,o.jsxs)(e.p,{children:["If you'd like to credit conda-forge in your work, please cite our ",(0,o.jsx)(e.a,{href:"https://doi.org/10.5281/zenodo.4774216",children:"Zenodo entry"}),". This citation is"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-default",children:"conda-forge community. (2015). The conda-forge Project: Community-based\nSoftware Distribution Built on the conda Package Format and Ecosystem.\nZenodo. http://doi.org/10.5281/zenodo.4774216\n"})}),"\n",(0,o.jsx)(e.p,{children:"or in bibtex it is"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-default",children:"@misc{conda_forge_community_2015_4774216,\n  author       = {conda-forge community},\n  title        = {{The conda-forge Project: Community-based Software\n       Distribution Built on the conda Package Format and\n       Ecosystem}},\n  month        = jul,\n  year         = 2015,\n  publisher    = {Zenodo},\n  doi          = {10.5281/zenodo.4774216},\n  url          = {https://doi.org/10.5281/zenodo.4774216}\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{id:"display-conda-forge-packages-in-anaconda-navigator"})}),"\n",(0,o.jsx)(e.h2,{id:"display-conda-forge-packages-in-anaconda-navigator",children:"Display conda-forge packages in Anaconda Navigator"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Open ",(0,o.jsx)(e.strong,{children:"Anaconda Navigator"})," by running ",(0,o.jsx)(e.code,{children:"anaconda-navigator"})]}),"\n",(0,o.jsxs)(e.li,{children:["Go to the ",(0,o.jsx)(e.strong,{children:"Environments"})," tab."]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Channels"})," button."]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Add"})," button."]}),"\n",(0,o.jsxs)(e.li,{children:["Enter the channel url: ",(0,o.jsx)(e.a,{href:"https://conda.anaconda.org/conda-forge/",children:"https://conda.anaconda.org/conda-forge/"})]}),"\n",(0,o.jsxs)(e.li,{children:["Press the ",(0,o.jsx)(e.strong,{children:"Enter key"})," on your keyboard."]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Update channels"})," button."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["From now on, whenever the ",(0,o.jsx)(e.strong,{children:"package filter"})," is set to ",(0,o.jsx)(e.strong,{children:"All"})," on the Environments tab, all conda-forge packages will be displayed."]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>s,a:()=>t});var o=a(67294);const i={},r=o.createContext(i);function t(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);