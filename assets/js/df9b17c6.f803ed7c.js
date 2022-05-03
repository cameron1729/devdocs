"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[578],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6297:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],r={title:"Moodle App Translation",sidebar_label:"Translation",sidebar_position:3,tags:["Moodle App","Translation"]},s=void 0,p={unversionedId:"guides/moodleapp/translation",id:"guides/moodleapp/translation",title:"Moodle App Translation",description:"Moodle App translations",source:"@site/docs/guides/moodleapp/translation.md",sourceDirName:"guides/moodleapp",slug:"/guides/moodleapp/translation",permalink:"/devdocs/docs/guides/moodleapp/translation",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/translation.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"},{label:"Translation",permalink:"/devdocs/docs/tags/translation"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1651585547,formattedLastUpdatedAt:"03/05/2022",sidebarPosition:3,frontMatter:{title:"Moodle App Translation",sidebar_label:"Translation",sidebar_position:3,tags:["Moodle App","Translation"]},sidebar:"docs",previous:{title:"Accessibility",permalink:"/devdocs/docs/guides/moodleapp/accessibility"},next:{title:"FAQ",permalink:"/devdocs/docs/guides/moodleapp/faq"}},d={},c=[{value:"Moodle App translations",id:"moodle-app-translations",level:2},{value:"How do I translate words and phrases used in the Moodle App?",id:"how-do-i-translate-words-and-phrases-used-in-the-moodle-app",level:2},{value:"Advanced selection of strings",id:"advanced-selection-of-strings",level:3},{value:"I am not a language pack maintainer. How can I contribute a translation?",id:"i-am-not-a-language-pack-maintainer-how-can-i-contribute-a-translation",level:2},{value:"When will the translated strings be shown in the Moodle App?",id:"when-will-the-translated-strings-be-shown-in-the-moodle-app",level:2},{value:"My language does not appear in the app",id:"my-language-does-not-appear-in-the-app",level:2},{value:"How can I translate my plugin?",id:"how-can-i-translate-my-plugin",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"moodle-app-translations"},"Moodle App translations"),(0,l.kt)("p",null,"The Moodle App is being translated into more and more languages! Check out ",(0,l.kt)("a",{parentName:"p",href:"https://moodle.org/plugins/translations.php?plugin=local_moodlemobileapp"},"the latest translation stats"),"."),(0,l.kt)("h2",{id:"how-do-i-translate-words-and-phrases-used-in-the-moodle-app"},"How do I translate words and phrases used in the Moodle App?"),(0,l.kt)("p",null,"To help with translating, you first need to create an account on the ",(0,l.kt)("a",{parentName:"p",href:"http://lang.moodle.org"},"Moodle translation site"),"."),(0,l.kt)("p",null,"Moodle App strings may be found using this filter: ",(0,l.kt)("a",{parentName:"p",href:"https://lang.moodle.org/local/amos/view.php?t=1&v=l&l=&c=*app&s&d&m=1&a=1"},"https://lang.moodle.org/local/amos/view.php?t=1&v=l&l=&c=*app&s&d&m=1&a=1")),(0,l.kt)("p",null,'Just select the desired language and click "Save filter" to display them.'),(0,l.kt)("h3",{id:"advanced-selection-of-strings"},"Advanced selection of strings"),(0,l.kt)("p",null,"All strings used in the app are indexed in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodleapp/blob/master/scripts/langindex.json"},"the langindex.json file"),"."),(0,l.kt)("p",null,"They have the following format:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"{module}.{string-identifier}": "{component}"')," \u2014 In this case the string will be translated using the ",(0,l.kt)("inlineCode",{parentName:"li"},"{string-identifier}")," on the ",(0,l.kt)("inlineCode",{parentName:"li"},"{component}")," file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"{module}.{string-identifier}": "{component}/{component-string}"')," \u2014 In this case the string will be translated using the ",(0,l.kt)("inlineCode",{parentName:"li"},"{component-string}")," on the ",(0,l.kt)("inlineCode",{parentName:"li"},"{component}")," file.")),(0,l.kt)("p",null,"Some examples are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"addon.block_recentlyaccessedcourses.nocourses": "block_recentlyaccessedcourses"')," \u2014 This means it will use the ",(0,l.kt)("inlineCode",{parentName:"li"},"nocourses")," translation from the ",(0,l.kt)("inlineCode",{parentName:"li"},"block_recentlyaccessedcourses")," component in AMOS."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"addon.mod_workshop.yourassessment": "workshop/assessmentbyyourself"')," \u2014 This means it will use the ",(0,l.kt)("inlineCode",{parentName:"li"},"assessmentbyyourself")," string from the ",(0,l.kt)("inlineCode",{parentName:"li"},"workshop")," component in AMOS.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"local_moodlemobileapp"),' component has the specific strings of the Moodle App, but most of the strings are located in other components. To select all the Moodle App strings, click on "Moodle App" below the components selector. This action will auto-select the following:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Last version available option (it is selected by default). The propagation to other version is done automatically."),(0,l.kt)("li",{parentName:"ul"},"Components used in the App."),(0,l.kt)("li",{parentName:"ul"},"Only strings that are being used in the Moodle App: This will filter only the strings used in every component on the app.")),(0,l.kt)("p",null,"Additionally, you will see a little mobile in the strings used in the app. Hovering over this icon, you can read the string identifier in the app."),(0,l.kt)("h2",{id:"i-am-not-a-language-pack-maintainer-how-can-i-contribute-a-translation"},"I am not a language pack maintainer. How can I contribute a translation?"),(0,l.kt)("p",null,"The process is the same as for core Moodle. See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Contributing%20a%20translation"},"Contributing a translation"),"."),(0,l.kt)("p",null,"Note: Please contact the maintainer of your language pack as listed in the ",(0,l.kt)("a",{parentName:"p",href:"http://lang.moodle.org/local/amos/credits.php"},"Translation credits")," to tell them that you are translating the Moodle App. If you don't receive a reply within a reasonable time, contact our Moodle translation coordinator, Koen Roggemans, at ",(0,l.kt)("a",{parentName:"p",href:"mailto:translation@moodle.org"},"translation@moodle.org"),"."),(0,l.kt)("h2",{id:"when-will-the-translated-strings-be-shown-in-the-moodle-app"},"When will the translated strings be shown in the Moodle App?"),(0,l.kt)("p",null,"Translations are not automatically synchronised with the app, you will have to wait to the next release to see your latest contributions."),(0,l.kt)("h2",{id:"my-language-does-not-appear-in-the-app"},"My language does not appear in the app"),(0,l.kt)("p",null,"Only some languages are available in the app, the selection is done using the following criteria:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Over 75% of the strings used in the app are available in the language and more than 50 strings are from the ",(0,l.kt)("inlineCode",{parentName:"li"},"local_moodlemobileapp")," component."),(0,l.kt)("li",{parentName:"ul"},"Over 50% of the strings used in the app are available in the language and more than 75 strings are from the ",(0,l.kt)("inlineCode",{parentName:"li"},"local_moodlemobileapp")," component.")),(0,l.kt)("p",null,"This is done to ensure translations are rich enough."),(0,l.kt)("h2",{id:"how-can-i-translate-my-plugin"},"How can I translate my plugin?"),(0,l.kt)("p",null,"If you are developing a plugin, you'll have to indicate which strings you want to use in the ",(0,l.kt)("inlineCode",{parentName:"p"},"lang")," configuration option. You can learn more about this in the ",(0,l.kt)("a",{parentName:"p",href:"./development/plugins-development-guide"},"Moodle App Plugins Development Guide"),"."))}m.isMDXComponent=!0}}]);