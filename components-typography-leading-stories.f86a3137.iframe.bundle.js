"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[602],{"./_site/components/typography/leading.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Leading:()=>Leading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Typography/Leading",argTypes:{label:{control:"text",description:"Set the label for all text at once"}},parameters:{docs:{subtitle:"Utilities for controlling the leading (line height) of an element."}}},Leading=({label="Default Label for All Sizes"})=>{let output="";return[{value:"leading-none",label},{value:"leading-tightest",label},{value:"leading-tight",label},{value:"leading-normal",label}].forEach((({value,label})=>{output+=((value,label)=>`\n        <div class="flex flex-row gap-3 items-start">\n          <code class="text-sm bg-neutral-10 pl-2" style="width: 10.5rem;">${value}</code>\n          <div class="${value} text-lg" style="width: 100%;">${label}</div>\n        </div>\n    `)(value,label)})),`\n  <div class="flex flex-col gap-10">\n      ${output}\n      \n  </div>`};Leading.args={label:"The quick brown fox jumps over the lazy dog. This is a ‘pangram’ – it includes every letter in the alphabet used at least once so it’s useful for seeing how a font looks"},Leading.parameters={docs:{canvas:{sourceState:"none"}}};const __namedExportsOrder=["Leading"];Leading.parameters={...Leading.parameters,docs:{...Leading.parameters?.docs,source:{originalSource:'({\n  label = "Default Label for All Sizes"\n}) => {\n  // Define an array of type sizes\n  const setValues = [{\n    value: "leading-none",\n    label\n  }, {\n    value: "leading-tightest",\n    label\n  }, {\n    value: "leading-tight",\n    label\n  }, {\n    value: "leading-normal",\n    label\n  }];\n\n  // Generate the HTML content dynamically\n  let output = "";\n  setValues.forEach(({\n    value,\n    label\n  }) => {\n    output += generateBoxes(value, label);\n  });\n\n  // Return the final HTML to render\n  return `\n  <div class="flex flex-col gap-10">\n      ${output}\n      \n  </div>`;\n}',...Leading.parameters?.docs?.source}}}}}]);