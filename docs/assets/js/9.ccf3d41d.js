(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{373:function(e,t,a){"use strict";a.r(t);var n=a(43),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#VS_GENERATORS"}},[e._v("Why should I use a Parsing DSL instead of a Parser Generator?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#VS_OTHERS"}},[e._v("What Differentiates Chevrotain from other Parsing Libraries?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#WHY_ERROR_RECOVERY"}},[e._v("Why are Error Recovery / Fault Tolerant capabilities needed in a Parser?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#DEBUGGING"}},[e._v("How do I debug my parser?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#NUMERICAL_SUFFIXES"}},[e._v("Why are the unique numerical suffixes (CONSUME1/CONSUME2/...) needed for the DSL Rules?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#MINIFIED"}},[e._v("Why does Chevrotain not work correctly after I minified my Sources?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#WEBPACK"}},[e._v("Why does Chevrotain not work correctly after I webpacked my Sources?")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#STUCK_AMBIGUITY"}},[e._v("Why does my parser appear to be stuck during its initialization?")])])]),e._v(" "),a("h2",{attrs:{id:"VS_GENERATORS"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#VS_GENERATORS"}},[e._v("#")]),e._v(" Why should I use a Parsing DSL instead of a Parser Generator?")]),e._v(" "),a("p",[e._v("A Parser Generator adds an (unnecessary) level of abstraction between the grammar implementation and the actual parser.\nThis is because the grammar is written in a "),a("strong",[e._v("different")]),e._v(" language than the target runtime.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Debugging a generated parser means looking at "),a("strong",[e._v("different")]),e._v(" code than the actual grammar specifications.\nThis generated code is often huge, verbose and hard to understand. On the other hand, when debugging a Parser\nimplemented using a Parsing DSL, The "),a("strong",[e._v("actual Grammar's code")]),e._v(" the implementer wrote(not generated code) is debugged.\nSo debugging Chevrotain is "),a("strong",[e._v("just like")]),e._v(" debugging any other JavaScript code.")])]),e._v(" "),a("li",[a("p",[e._v("No need to handle grammar generation as part of the build process or commit generated files to the source code.")])]),e._v(" "),a("li",[a("p",[e._v("No need to learn a new syntax, as Chevrotain is a "),a("strong",[e._v("Pure")]),e._v(" JavasScript Library. instead the problem is reduced to learning a new API.")])]),e._v(" "),a("li",[a("p",[e._v("No need for a special editor to write the Grammar, just use your favorite JavaScript editor.")])])]),e._v(" "),a("h2",{attrs:{id:"VS_OTHERS"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#VS_OTHERS"}},[e._v("#")]),e._v(" What Differentiates Chevrotain from other JavaScript Parsing Solutions?")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Performance")]),e._v(": Chevrotain is generally faster (often much more so) than other existing JavaScript Parsing Solutions.\nAnd can even compete with the performance of hand built parsers.\nSee an "),a("a",{attrs:{href:"https://chevrotain.io/performance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Online Benchmark"),a("OutboundLink")],1),e._v(" that compares the performance of JSON Parsers implemented using multiple JavaScript Parsing solutions.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Error Recovery / Fault Tolerance")]),e._v(": With the exception of Antlr4, other JavaScript Parsing Solutions usually do not have Error Recovery capabilities.")])])]),e._v(" "),a("h2",{attrs:{id:"WHY_ERROR_RECOVERY"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#WHY_ERROR_RECOVERY"}},[e._v("#")]),e._v(" Why are Error Recovery / Fault Tolerant capabilities needed in a Parser?")]),e._v(" "),a("p",[e._v("When building a standard compiler that should only handle completely valid inputs these capabilities are indeed irrelevant.\nBut for the use case of building Editor Tools / Language Services the parser must be able to handle partially invalid inputs as well.\nSome examples:")]),e._v(" "),a("ul",[a("li",[e._v("All syntax errors should be reported and not just the first one.")]),e._v(" "),a("li",[e._v("Refactoring should work even if there is a missing comma somewhere.")]),e._v(" "),a("li",[e._v("Autocomplete / Intellisense should work even if there is a syntax error prior to the requested suggestion position.")])]),e._v(" "),a("h2",{attrs:{id:"DEBUGGING"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#DEBUGGING"}},[e._v("#")]),e._v(" How do I debug my parser?")]),e._v(" "),a("p",[e._v("Just add a breakpoint in your favorites IDE and debug, same as you would for any other JavaScript code.\nChevrotain Grammars are "),a("strong",[e._v("pure")]),e._v(" javascript code. No special handling required.")]),e._v(" "),a("p",[e._v("Note that the breakpoints may also trigger during the Parser's initialization.\nSee: the "),a("RouterLink",{attrs:{to:"/guide/internals.html#debugging-implications"}},[e._v("relevant section")]),e._v(" in grammar recording phase docs.")],1),e._v(" "),a("h2",{attrs:{id:"NUMERICAL_SUFFIXES"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#NUMERICAL_SUFFIXES"}},[e._v("#")]),e._v(" Why are the unique numerical suffixes (CONSUME1/CONSUME2/...) needed for the DSL Rules?")]),e._v(" "),a("p",[e._v("Lets look at an example first:")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("RULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"someRule"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("OPTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("CONSUME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("MyToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("OPTION1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// A different suffix is not needed because the argument is different!")]),e._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("CONSUME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("MyOtherToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// OPTION has no "named" argument so a different suffix is **always** needed')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// within the same top level rule.")]),e._v("\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("OPTION2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("CONSUME2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("MyToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v('This snippet uses three different variations of OPTION(""|1|2) and two variations of CONSUME(""|2).\nThis is because during the parsing runtime Chevrotain must be able to '),a("strong",[e._v("distinguish")]),e._v(" between the variations of the "),a("strong",[e._v("same")]),e._v(" Parsing rule.")]),e._v(" "),a("p",[e._v("The combination of the DSL Rule(OPTION/MANY/CONSUME), the DSL Rule's optional numerical suffix and the DSL rule's parameter (if available)\nare mapped to a "),a("strong",[e._v("unique")]),e._v(" key which Chevrotain uses to "),a("strong",[e._v("figure out")]),e._v(" the current location in the grammar. This location information is then\nused for many things such as:")]),e._v(" "),a("ul",[a("li",[e._v("Computing the lookahead function which decides if a DSL rule should be entered or which alternatives should be taken.")]),e._v(" "),a("li",[e._v("Computing an appropriate error message which includes the list of next valid possible tokens.")]),e._v(" "),a("li",[e._v('Performing automatic Error Recovery by figuring out "re-sync" tokens.')])]),e._v(" "),a("h2",{attrs:{id:"MINIFIED"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#MINIFIED"}},[e._v("#")]),e._v(" Why does Chevrotain not work correctly after I minified my Grammar?")]),e._v(" "),a("p",[a("s",[e._v("Chevrotain relies on "),a("strong",[e._v("Function.prototype.toString()")]),e._v(".\nThis means that certain aggressive minification options can break Chevrotain grammars.")])]),e._v(" "),a("p",[e._v("The dependence on "),a("code",[e._v("Function.prototype.toString")]),e._v(" was removed in\n"),a("a",{attrs:{href:"http://chevrotain.io/docs/changes/CHANGELOG.html#_6-0-0-8-20-2019",target:"_blank",rel:"noopener noreferrer"}},[e._v("version 6.0.0"),a("OutboundLink")],1),e._v(" of Chevrotain.\nSpecial handling is no longer needed during minification scenarios.")]),e._v(" "),a("h2",{attrs:{id:"WEBPACK"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#WEBPACK"}},[e._v("#")]),e._v(" Why does Chevrotain not work correctly after I webpacked my Grammar?")]),e._v(" "),a("p",[a("s",[e._v("Chevrotain relies on "),a("strong",[e._v("Function.prototype.toString()")]),e._v(".\nThis means that certain webpack optimizations can break Chevrotain grammars.")])]),e._v(" "),a("p",[e._v("The dependence on "),a("code",[e._v("Function.prototype.toString")]),e._v(" was removed in\n"),a("a",{attrs:{href:"http://chevrotain.io/docs/changes/CHANGELOG.html#_6-0-0-8-20-2019",target:"_blank",rel:"noopener noreferrer"}},[e._v("version 6.0.0"),a("OutboundLink")],1),e._v(" of Chevrotain.\nSpecial handling is no longer needed during WebPacking scenarios.")]),e._v(" "),a("h2",{attrs:{id:"STUCK_AMBIGUITY"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#STUCK_AMBIGUITY"}},[e._v("#")]),e._v(" Why does my parser appear to be stuck during its initialization?")]),e._v(" "),a("p",[e._v("The first time a Chevrotain parser is initialized additional validations and computations are performed.\nSome of these can take a very long time under certain edge cases. Specifically the detection of ambiguous alternatives\nwhen the parser uses a larger than the default "),a("a",{attrs:{href:"https://chevrotain.io/documentation/9_0_1/interfaces/iparserconfig.html#maxlookahead",target:"_blank",rel:"noopener noreferrer"}},[e._v("maxLookahead"),a("OutboundLink")],1),e._v("\nand there are many (thousands) of ambiguous paths.")]),e._v(" "),a("p",[e._v("To resolve this try reducing the maxLookahead and inspect the ambiguity errors to fix\nthe grammar ambiguity which is the root cause of the problem.")]),e._v(" "),a("p",[e._v("Also have a look at the "),a("RouterLink",{attrs:{to:"/guide/initialization_performance.html"}},[e._v("Initialization Performance Guide")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);