(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{312:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vue-cli-plugin-e2e-codeceptjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-plugin-e2e-codeceptjs"}},[e._v("#")]),e._v(" vue-cli-plugin-e2e-codeceptjs")]),e._v(" "),s("p",[s("em",[e._v("Hey, how about some end 2 end testing for your Vue apps?")]),e._v(" 🤔")]),e._v(" "),s("p",[s("em",[e._v("Let's do it together! Vue, me, "),s("a",{attrs:{href:"https://codecept.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeceptJS"),s("OutboundLink")],1),e._v(" & "),s("a",{attrs:{href:"https://pptr.dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Puppeteer"),s("OutboundLink")],1),e._v(".")]),e._v(" 🤗")]),e._v(" "),s("p",[s("em",[e._v("Browser testing was never that simple. Just see it!")]),e._v(" 😍")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("amOnPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'My Component Button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("see")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'My Component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'I am happy!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// that's right, this is a valid test!")]),e._v("\n")])])]),s("h2",{attrs:{id:"how-to-try-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-try-it"}},[e._v("#")]),e._v(" How to try it?")]),e._v(" "),s("p",[s("strong",[e._v("Requirements:")])]),e._v(" "),s("ul",[s("li",[e._v("NodeJS >= 8.9")]),e._v(" "),s("li",[e._v("NPM / Yarn")]),e._v(" "),s("li",[e._v("Vue CLI installed globally")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i vue-cli-plugin-codeceptjs-puppeteer --save-dev\n")])])]),s("p",[e._v("This will install CodeceptJS, CodeceptUI & Puppeteer with Chrome browser.")]),e._v(" "),s("p",[e._v("To add CodeceptJS to your project invoke installer:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vue invoke vue-cli-plugin-codeceptjs-puppeteer\n")])])]),s("blockquote",[s("p",[e._v("You will be asked about installing a demo component. If you start a fresh project "),s("strong",[e._v("it is recommended to agree and install a demo component")]),e._v(", so you could see tests passing.")])]),e._v(" "),s("h2",{attrs:{id:"running-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[e._v("#")]),e._v(" Running Tests")]),e._v(" "),s("p",[e._v("We added npm scripts:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("test:e2e")]),e._v(" - will execute tests with browser opened. If you installed test component, and started a test server, running this command will show you a brower window passed test.\n"),s("ul",[s("li",[e._v("Use "),s("code",[e._v("--headless")]),e._v(" option to run browser headlessly")]),e._v(" "),s("li",[e._v("Use "),s("code",[e._v("--serve")]),e._v(" option to start a dev server before tests")])])])]),e._v(" "),s("p",[e._v("Examples:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm run test:e2e\nnpm run test:e2e -- --headless\nnpm run test:e2e -- --serve\n")])])]),s("blockquote",[s("p",[e._v("This command is a wrapper for "),s("code",[e._v("codecept run --steps")]),e._v(". You can use the "),s("a",{attrs:{href:"/commands#run"}},[e._v("Run arguments and options")]),e._v(" here.")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("test:e2e:parallel")]),e._v(" - will execute tests headlessly in parallel processes (workers). By default runs tests in 2 workers.\n"),s("ul",[s("li",[e._v("Use an argument to set number of workers")]),e._v(" "),s("li",[e._v("Use "),s("code",[e._v("--serve")]),e._v(" option to start dev server before running")])])])]),e._v(" "),s("p",[e._v("Examples:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm run test:e2e:parallel\nnpm run test:e2e:parallel -- 3\nnpm run test:e2e:parallel -- 3 --serve\n")])])]),s("blockquote",[s("p",[e._v("This command is a wrapper for "),s("code",[e._v("codecept run-workers 2")]),e._v(". You can use the "),s("a",{attrs:{href:"/commands#run-workers"}},[e._v("Run arguments and options")]),e._v(" here.")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("test:e2e:open")]),e._v(" - this opens interactive web test runner. So you could see, review & run your tests from a browser.")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/220264/70399222-b7a1bc00-1a2a-11ea-8f0b-2878b0328161.gif",alt:""}})]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm run test:e2e:open\n")])])]),s("h2",{attrs:{id:"directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[e._v("#")]),e._v(" Directory Structure")]),e._v(" "),s("p",[e._v("Generator has created these files:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("codecept"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("js          👈 codeceptjs config\njsconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("json             👈 enabling type definitons\ntests\n├── e2e\n│   ├── app_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("js       👈 demo test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" edit it"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n│   ├── output            👈 temp directory "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" screenshots"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" reports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" etc\n│   └── support\n│       └── steps_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("js 👈 common steps\n└── steps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ts            👈 type definitions\n")])])]),s("p",[e._v("If you agreed to create a demo component, you will also see "),s("code",[e._v("TestMe")]),e._v(" component in "),s("code",[e._v("src/components")]),e._v(" folder.")]),e._v(" "),s("h2",{attrs:{id:"how-to-write-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-write-tests"}},[e._v("#")]),e._v(" How to write tests?")]),e._v(" "),s("ul",[s("li",[e._v("Open "),s("code",[e._v("tests/e2e/app_js")]),e._v(" and see the demo test")]),e._v(" "),s("li",[e._v("Execute a test & use interactive pause to see how CodeceptJS works")]),e._v(" "),s("li",[s("a",{attrs:{href:"/basics"}},[e._v("Learn CodeceptJS basics")])]),e._v(" "),s("li",[s("a",{attrs:{href:"/puppeteer"}},[e._v("Learn how to write CodeceptJS tests with Puppeteer")])]),e._v(" "),s("li",[s("a",{attrs:{href:"/helpers/Puppeteer"}},[e._v("See full reference for CodeceptJS Puppeteer Helper")])]),e._v(" "),s("li",[e._v("Ask your questions in "),s("a",{attrs:{href:"http://bit.ly/chat-codeceptjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),s("OutboundLink")],1),e._v(" & "),s("a",{attrs:{href:"https://codecept.discourse.group/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forum"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"enjoy-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enjoy-testing"}},[e._v("#")]),e._v(" Enjoy testing!")]),e._v(" "),s("p",[e._v("Testing is simple & fun, enjoy it!")]),e._v(" "),s("p",[e._v("With ❤ "),s("a",{attrs:{href:"https://codecept.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeceptJS Team"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);