"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3359],{53445:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=i(85893),t=i(11151);const s={title:"Becoming involved"},r="Becoming involved",c={id:"user/contributing",title:"Becoming involved",description:"conda-forge is a community-driven effort of cross-platform packaging and relies on volunteers to sustain and improve.",source:"@site/docs/user/contributing.md",sourceDirName:"user",slug:"/user/contributing",permalink:"/docs/user/contributing",draft:!1,unlisted:!1,editUrl:"https://github.com/afshin/conda-forge.github.io/tree/refs/heads/main/docs/user/contributing.md",tags:[],version:"current",lastUpdatedAt:1722387848e3,frontMatter:{title:"Becoming involved"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/user/faq"},next:{title:"How to get help at conda-forge",permalink:"/docs/user/how_to_get_help"}},d={},l=[{value:"Improve the website",id:"improve-the-website",level:2},{value:"Website repository structure",id:"website-repository-structure",level:3},{value:"Docs &amp; Community",id:"docs--community",level:4},{value:"News &amp; blog",id:"news--blog",level:4},{value:"Standalone pages and sections",id:"standalone-pages-and-sections",level:4},{value:"Editing the documentation directly through Github",id:"editing-the-documentation-directly-through-github",level:3},{value:"Editing the documentation locally",id:"editing-the-documentation-locally",level:3},{value:"Writing guidelines",id:"writing-guidelines",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"becoming-involved"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"id1"})}),"\n",(0,o.jsx)(n.h1,{id:"becoming-involved",children:"Becoming involved"}),"\n",(0,o.jsx)(n.p,{children:"conda-forge is a community-driven effort of cross-platform packaging and relies on volunteers to sustain and improve."}),"\n",(0,o.jsx)(n.p,{children:"We encourage you to contribute to conda-forge. You can do so in several ways:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/maintainer/adding_pkgs",children:"Contribute new packages"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Help update and ",(0,o.jsx)(n.a,{href:"/docs/maintainer/updating_pkgs",children:"maintain packages"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Suggest or implement improvements for our ",(0,o.jsx)(n.a,{href:"/docs/maintainer/infrastructure",children:"infrastructure"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Help ",(0,o.jsx)(n.a,{href:"#improve-the-website",children:"improve the website and documentation"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{id:"improve-docs"})}),"\n",(0,o.jsx)(n.h2,{id:"improve-the-website",children:"Improve the website"}),"\n",(0,o.jsxs)(n.p,{children:["The conda-forge website is version-controlled in the\n",(0,o.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io",children:"conda-forge.github.io repository"})," on GitHub.\nIt is built with ",(0,o.jsx)(n.a,{href:"https://docusaurus.io",children:"Docusaurus"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"website-repository-structure",children:"Website repository structure"}),"\n",(0,o.jsx)(n.admonition,{title:"MD, MDX and JSX",type:"info",children:(0,o.jsxs)(n.p,{children:["While most of the content is written with\n",(0,o.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features",children:"Docusaurus' Markdown"})," (",(0,o.jsx)(n.code,{children:"*.md"})," files),\nsome specific pages and sections include dynamic blocks (",(0,o.jsx)(n.code,{children:"*.mdx"})," files) or are straight JSX files\n(",(0,o.jsx)(n.code,{children:"*.jsx"})," files). This allows you to mix Markdown and JavaScript/React in the same document,\ndepending on the file extension. In MDX mode, the parser is much stricter though.\nRead more about in the ",(0,o.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/react",children:'"MDX and React" docs from Docusaurus'}),"."]})}),"\n",(0,o.jsx)(n.h4,{id:"docs--community",children:"Docs & Community"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["These two sections use ",(0,o.jsx)(n.a,{href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs",children:(0,o.jsx)(n.code,{children:"plugin-content-docs"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"Docs"})," section corresponds to the ",(0,o.jsx)(n.code,{children:"/docs"})," directory. Most of the pages use regular Markdown\n(",(0,o.jsx)(n.code,{children:"*.md"}),"), but some are dynamic pages with some JavaScript (",(0,o.jsx)(n.code,{children:"*.mdx"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"Community"})," section comes from the ",(0,o.jsx)(n.code,{children:"/community"})," directory."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"news--blog",children:"News & blog"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["These two sections use ",(0,o.jsx)(n.a,{href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog",children:(0,o.jsx)(n.code,{children:"plugin-content-blog"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"News"})," section comes from the ",(0,o.jsx)(n.code,{children:"/news"})," directory.\nIt is considered a changelog of important changes in our infrastructure and packages."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"Blog"})," section corresponds to the ",(0,o.jsx)(n.code,{children:"/blog"})," directory.\nIt usually discusses important updates from the extended ecosystem."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"standalone-pages-and-sections",children:"Standalone pages and sections"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["These rely on ",(0,o.jsx)(n.a,{href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages",children:(0,o.jsx)(n.code,{children:"plugin-content-pages"})}),"."]}),"\n",(0,o.jsx)(n.li,{children:"They can be simple Markdown pages or more elaborate React applications."}),"\n",(0,o.jsxs)(n.li,{children:["Find them under ",(0,o.jsx)(n.code,{children:"/src/pages"}),". MDX and JSX pages will usually call components defined in ",(0,o.jsx)(n.code,{children:"/src/components"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"editing-the-documentation-directly-through-github",children:"Editing the documentation directly through Github"}),"\n",(0,o.jsxs)(n.p,{children:["You can propose quick edits directly through the GitHub website if you have\na GitHub account \u2014 for instance, ",(0,o.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/edit/main/docs/index.md",children:"this link"}),"\nwill take you directly to a web-based editor for this very webpage. In\ngeneral, the file corresponding to each page in the GitHub browser has a\nlittle pencil icon in its top-right corner that lets you open it up for editing."]}),"\n",(0,o.jsx)(n.h3,{id:"editing-the-documentation-locally",children:"Editing the documentation locally"}),"\n",(0,o.jsx)(n.p,{children:"We are glad to know that you would like to contribute to the conda-forge documentation.\nIf you are new to the conda-forge community, follow the steps below to make your first contribution:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://help.github.com/articles/fork-a-repo/",children:"Fork"})," the\n",(0,o.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io",children:"conda-forge.github.io repository"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Clone this fork onto your local machine:\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git clone https://github.com/<your-username>/conda-forge.github.io.git\ncd conda-forge.github.io\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Create a new branch deriving from ",(0,o.jsx)(n.code,{children:"main"})," to do your work:\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git checkout -b <new-branch-name>\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Run the following commands:\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"conda env create -f ./.ci_scripts/environment.yml\n"})}),"\nconda activate conda-forge-docs"]}),"\n",(0,o.jsxs)(n.li,{children:["While writing your new documentation, you can use the live preview mode with:\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"npm install"})," to make sure ",(0,o.jsx)(n.code,{children:"node_modules"})," is up-to-date"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"npm run start"})," to start the live preview. Every time you save a file, the changes will be reflected instantaneously."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Once ready, you can also check how the production build would look like with the commands:\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:".ci_scripts/update_docs\npython -m http.server --directory build/\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Add and commit your changes:\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'git add .\ngit commit -m "your commit message"\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Submit a ",(0,o.jsx)(n.a,{href:"https://help.github.com/articles/about-pull-requests/",children:"pull request"})," to the main repository proposing your changes.\nThe CI pipelines will include a PR preview on Netlify."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Happy contributing!"}),"\n",(0,o.jsx)(n.h3,{id:"writing-guidelines",children:"Writing guidelines"}),"\n",(0,o.jsx)(n.p,{children:"Some basic writing guidelines should be kept in mind before you start contributing:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Identify your audience and understand their skill level."}),"\n",(0,o.jsx)(n.li,{children:"Match the technical language with the audience's skill level proficiency."}),"\n",(0,o.jsx)(n.li,{children:"Try to keep it simple. In case you have to use a lot of complicated terms, provide a glossary of key terms."}),"\n",(0,o.jsx)(n.li,{children:"Address the audience directly as the user(s)."}),"\n",(0,o.jsx)(n.li,{children:'While mentioning an action, use the "command" form of the verb: "Choose an option from the menu and press Enter."'}),"\n",(0,o.jsx)(n.li,{children:"For references, provide links to related content."}),"\n",(0,o.jsx)(n.li,{children:"Use headings and bullet points, which makes it easier to read."}),"\n",(0,o.jsx)(n.li,{children:"Avoid ambiguous titles. The title should include a clear description of the page's subject."}),"\n",(0,o.jsx)(n.li,{children:"Check your spellings and grammar."}),"\n",(0,o.jsx)(n.li,{children:"conda-forge should always be spelt in lowercase, hyphenated, and without backticks.\nIt should only be backticked when used as an identifier (e.g. the Anaconda.org channel, the Github organization, etc)."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var o=i(67294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);