"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[155],{"./_site/components/typography/tracking.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tracking:()=>Tracking,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Typography/Tracking",parameters:{docs:{subtitle:"Utilities for controlling the tracking (letter spacing) of an element."}}},Tracking=({label="Default Label"})=>{let output="";return[{value:"tracking-tight",label},{value:"tracking-normal",label},{value:"tracking-wide",label},{value:"tracking-xwide",label}].forEach((({value,label})=>{output+=((value,label)=>`\n        <div class="flex flex-row gap-3 items-start">\n          <code class="text-sm bg-neutral-10 pl-2" style="width: 11.2rem;">${value}</code>\n          <div class="${value} text-lg" style="width: 100%;">${label}</div>\n        </div>\n    `)(value,label)})),`\n  <div class="flex flex-col gap-10">\n      ${output}\n      \n  </div>`};Tracking.args={label:"The quick brown fox jumps over the lazy dog. This is a ‘pangram’ – it includes every letter in the alphabet used at least once so it’s useful for seeing how a font looks"},Tracking.parameters={docs:{canvas:{sourceState:"none"}}};const __namedExportsOrder=["Tracking"];Tracking.parameters={...Tracking.parameters,docs:{...Tracking.parameters?.docs,source:{originalSource:'({\n  label = "Default Label"\n}) => {\n  // Define an array of type sizes\n  const setValues = [{\n    value: "tracking-tight",\n    label\n  }, {\n    value: "tracking-normal",\n    label\n  }, {\n    value: "tracking-wide",\n    label\n  }, {\n    value: "tracking-xwide",\n    label\n  }];\n\n  // Generate the HTML content dynamically\n  let output = "";\n  setValues.forEach(({\n    value,\n    label\n  }) => {\n    output += generateBoxes(value, label);\n  });\n\n  // Return the final HTML to render\n  return `\n  <div class="flex flex-col gap-10">\n      ${output}\n      \n  </div>`;\n}',...Tracking.parameters?.docs?.source}}}}}]);