(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{296:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"parallel-execution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parallel-execution"}},[t._v("#")]),t._v(" Parallel Execution")]),t._v(" "),e("p",[t._v("CodeceptJS has two engines for running tests in parallel:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("run-workers")]),t._v(" - which spawns "),e("a",{attrs:{href:"https://nodejs.org/api/worker_threads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS Worker"),e("OutboundLink")],1),t._v(" in a thread. Tests are split by scenarios, scenarios are mixed between groups, each worker runs tests from its own group.")]),t._v(" "),e("li",[e("code",[t._v("run-multiple")]),t._v(" - which spawns a subprocess with CodeceptJS. Tests are split by files and configured in "),e("code",[t._v("codecept.conf.js")]),t._v(".")])]),t._v(" "),e("p",[t._v("Workers are faster and simpler to start, while "),e("code",[t._v("run-multiple")]),t._v(" requires additional configuration and can be used to run tests in different browsers at once.")]),t._v(" "),e("h2",{attrs:{id:"parallel-execution-by-workers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parallel-execution-by-workers"}},[t._v("#")]),t._v(" Parallel Execution by Workers")]),t._v(" "),e("p",[t._v("It is easy to run tests in parallel if you have a lots of tests and free CPU cores. Just execute your tests using "),e("code",[t._v("run-workers")]),t._v(" command specifying the number of workers to spawn:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npx codeceptjs run-workers 2\n")])])]),e("blockquote",[e("p",[t._v("ℹ Workers require NodeJS >= 11.7")])]),t._v(" "),e("p",[t._v("This command is similar to "),e("code",[t._v("run")]),t._v(", however, steps output can't be shown in workers mode, as it is impossible to synchronize steps output from different processes.")]),t._v(" "),e("p",[t._v("Each worker spins an instance of CodeceptJS, executes a group of tests, and sends back report to the main process.")]),t._v(" "),e("p",[t._v("By default the tests are assigned one by one to the avaible workers this may lead to multiple execution of "),e("code",[t._v("BeforeSuite()")]),t._v(". Use the option "),e("code",[t._v("--suites")]),t._v(" to assigne the suites one by one to the workers.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("npx codeceptjs run-workers --suites "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),e("h2",{attrs:{id:"multiple-browsers-execution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-browsers-execution"}},[t._v("#")]),t._v(" Multiple Browsers Execution")]),t._v(" "),e("p",[t._v("This is useful if you want to execute same tests but on different browsers and with different configurations or different tests on same browsers in parallel.")]),t._v(" "),e("p",[t._v("Create "),e("code",[t._v("multiple")]),t._v(" section in configuration file, and fill it with run suites. Each suite should have "),e("code",[t._v("browser")]),t._v(" array with browser names or driver helper's configuration:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("multiple"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  basic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// run all tests in chrome and firefox")]),t._v("\n    browsers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firefox"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  smoke"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    browsers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      firefox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replace any config values from WebDriver helper")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        browser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        windowSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"maximize"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        desiredCapabilities"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          acceptSslCerts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("You can use "),e("code",[t._v("grep")]),t._v(" and "),e("code",[t._v("outputName")]),t._v(" params to filter tests and output directory for suite:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"multiple"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"smoke"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// run only tests containing "@smoke" in name')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"grep"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@smoke"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store results into `output/smoke` directory")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outputName"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"smoke"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browsers"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firefox"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browser"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"windowSize"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"maximize"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Then tests can be executed using "),e("code",[t._v("run-multiple")]),t._v(" command.")]),t._v(" "),e("p",[t._v("Run all suites for all browsers:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("codeceptjs run-multiple --all\n")])])]),e("p",[t._v("Run "),e("code",[t._v("basic")]),t._v(" suite for all browsers")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("codeceptjs run-multiple basic\n")])])]),e("p",[t._v("Run "),e("code",[t._v("basic")]),t._v(" suite for chrome only:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("codeceptjs run-multiple basic:chrome\n")])])]),e("p",[t._v("Run "),e("code",[t._v("basic")]),t._v(" suite for chrome and "),e("code",[t._v("smoke")]),t._v(" for firefox")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("codeceptjs run-multiple basic:chrome smoke:firefox\n")])])]),e("p",[t._v("Run basic tests with grep and junit reporter")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("codeceptjs run-multiple basic --grep signin --reporter mocha-junit-reporter\n")])])]),e("p",[t._v("Run regression tests specifying different config path:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("codeceptjs run-multiple regression -c path/to/config\n")])])]),e("p",[t._v("Each executed process uses custom folder for reports and output. It is stored in subfolder inside an output directory. Subfolders will be named in "),e("code",[t._v("suite_browser")]),t._v(" format.")]),t._v(" "),e("p",[t._v("Output is printed for all running processes. Each line is tagged with a suite and browser name:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("basic:firefox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" GitHub --\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("basic:chrome"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" GitHub --\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("basic:chrome"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    it should not enter\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("basic:chrome"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  ✓ signin "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 2869ms\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("basic:chrome"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   OK  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" passed   // 30s\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("basic:firefox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    it should not enter\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("basic:firefox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  ✖ signin "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 2743ms\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("basic:firefox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -- FAILURES:\n")])])]),e("h3",{attrs:{id:"hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),e("p",[t._v("Hooks are available when using the "),e("code",[t._v("run-multiple")]),t._v(" command to perform actions before the test suites start and after the test suites have finished. See "),e("router-link",{attrs:{to:"/hooks/#bootstrap-teardown"}},[t._v("Hooks")]),t._v(" for an example.")],1),t._v(" "),e("h3",{attrs:{id:"parallel-execution-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parallel-execution-2"}},[t._v("#")]),t._v(" Parallel Execution")]),t._v(" "),e("p",[t._v("CodeceptJS can be configured to run tests in parallel.")]),t._v(" "),e("p",[t._v("When enabled, it collects all test files and executes them in parallel by the specified amount of chunks. Given we have five test scenarios ("),e("code",[t._v("a_test.js")]),t._v(","),e("code",[t._v("b_test.js")]),t._v(","),e("code",[t._v("c_test.js")]),t._v(","),e("code",[t._v("d_test.js")]),t._v(" and "),e("code",[t._v("e_test.js")]),t._v("), by setting "),e("code",[t._v('"chunks": 2')]),t._v(" we tell the runner to run two suites in parallel. The first suite will run "),e("code",[t._v("a_test.js")]),t._v(","),e("code",[t._v("b_test.js")]),t._v(" and "),e("code",[t._v("c_test.js")]),t._v(", the second suite will run "),e("code",[t._v("d_test.js")]),t._v(" and "),e("code",[t._v("e_test.js")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("multiple"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  parallel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Splits tests into 2 chunks")]),t._v("\n    chunks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("To execute them use "),e("code",[t._v("run-multiple")]),t._v(" command passing configured suite, which is "),e("code",[t._v("parallel")]),t._v(" in this example:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("codeceptjs run-multiple parallel\n")])])]),e("p",[t._v("Grep and multiple browsers are supported. Passing more than one browser will multiply the amount of suites by the amount of browsers passed. The following example will lead to four parallel runs.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("multiple"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2x chunks + 2x browsers = 4")]),t._v("\n  parallel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Splits tests into chunks")]),t._v("\n    chunks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// run all tests in chrome and firefox")]),t._v("\n    browsers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firefox"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Passing a function will enable you to provide your own chunking algorithm. The first argument passed to you function is an array of all test files, if you enabled grep the test files passed are already filtered to match the grep pattern.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("multiple"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  parallel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Splits tests into chunks by passing an anonymous function,")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// only execute first and last found test file")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chunks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("files")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" files"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// chunk 1")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" files"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("files"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// chunk 2")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// run all tests in chrome and firefox")]),t._v("\n    browsers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firefox"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Chunking will be most effective if you have many individual test files that contain only a small amount of scenarios. Otherwise the combined execution time of many scenarios or big scenarios in one single test file potentially lead to an uneven execution time.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);