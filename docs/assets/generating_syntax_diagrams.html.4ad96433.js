import{_ as r,r as s,o,c as i,a as e,b as t,e as a}from"./app.19e89400.js";const l={},d=e("h1",{id:"syntax-diagrams",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#syntax-diagrams","aria-hidden":"true"},"#"),a(" Syntax Diagrams")],-1),h=e("p",null,"It is often useful to visually inspect a grammar's syntax diagrams during development or for documentation purposes.",-1),c=a("This document contains instructions on how to generate Syntax railroad diagrams for a Chevrotain grammar using the "),_={href:"https://github.com/tabatkins/railroad-diagrams",target:"_blank",rel:"noopener noreferrer"},m=a("railroad-diagrams"),u=a(" library by @tabatkins."),g=e("h2",{id:"examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),a(" Examples")],-1),p={href:"https://chevrotain.io/diagrams_samples/json.html",target:"_blank",rel:"noopener noreferrer"},f=a("JSON Syntax diagrams"),b=a("."),x={href:"https://chevrotain.io/diagrams_samples/css.html",target:"_blank",rel:"noopener noreferrer"},y=a("CSS Syntax diagrams"),v=a("."),k=e("h2",{id:"features",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),a(" Features")],-1),C=e("ul",null,[e("li",null,"Highlight usages and definitions on mouse hover."),e("li",null,"Scroll to definition of non-terminal on mouse click.")],-1),S=e("h2",{id:"instructions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#instructions","aria-hidden":"true"},"#"),a(" Instructions")],-1),w=a("Chevrotain provides the "),E={href:"https://chevrotain.io/documentation/10_2_0/modules.html#createsyntaxdiagramscode",target:"_blank",rel:"noopener noreferrer"},j=e("strong",null,"createSyntaxDiagramsCode",-1),B=a(" API to generate the "),I=e("strong",null,"html source code",-1),N=a(" of syntax diagrams. This html source code can then be used by an end user in either node.js or a browser:"),T=e("ol",null,[e("li",null,"By writing it directly to the disk in a pure node.js runtime scenario."),e("li",null,"By inserting it dynamically into an iframe in a browser scenario.")],-1),z=e("p",null,[e("strong",null,"Examples:")],-1),D={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/parser/diagrams/gen_diagrams.js",target:"_blank",rel:"noopener noreferrer"},q=a("Generating syntax diagrams to a file"),G=e("ul",null,[e("li",null,"Self contained, no need for Chevrotain or the grammar when rendering the html.")],-1),L={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/parser/diagrams/diagrams_browser.html",target:"_blank",rel:"noopener noreferrer"},V=a("Generating syntax diagrams dynamically into an iframe"),A=e("ul",null,[e("li",null,[a("Requires loading "),e("strong",null,"both"),a(" Chevrotain and the grammar (and dependencies!) when rendering the html.")])],-1),F=e("h2",{id:"customization",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customization","aria-hidden":"true"},"#"),a(" Customization")],-1),H=a("The "),R={href:"https://github.com/Chevrotain/chevrotain/blob/master/packages/chevrotain/src/diagrams/render_public.ts",target:"_blank",rel:"noopener noreferrer"},J=a("logic for generating the HTML"),M=a(" is quite trivial and the generated code itself is also very simple with a decent separation of concerns. These can be used as a basis for creating more advanced custom scenarios, for example:"),O=e("ul",null,[e("li",null,"Adding a module loader such as system.js/require.js"),e("li",null,"Dynamically rendering diagrams of a Grammar in an IDE."),e("li",null,"Rendering diagrams of a pure EBNF grammar (Not a Chevrotain grammar) as the diagrams are rendered using a serialized format.")],-1);function P(K,Q){const n=s("ExternalLinkIcon");return o(),i("div",null,[d,h,e("p",null,[c,e("a",_,[m,t(n)]),u]),g,e("ul",null,[e("li",null,[e("a",p,[f,t(n)]),b]),e("li",null,[e("a",x,[y,t(n)]),v])]),k,C,S,e("p",null,[w,e("a",E,[j,t(n)]),B,I,N]),T,z,e("ul",null,[e("li",null,[e("p",null,[e("a",D,[q,t(n)])]),G]),e("li",null,[e("p",null,[e("a",L,[V,t(n)])]),A])]),F,e("p",null,[H,e("a",R,[J,t(n)]),M]),O])}var W=r(l,[["render",P],["__file","generating_syntax_diagrams.html.vue"]]);export{W as default};