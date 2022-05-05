"use strict";(self.webpackChunkhome_control=self.webpackChunkhome_control||[]).push([[7288],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,c(c({ref:t},l),{},{components:n})):o.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:3},s="Actuator",u={unversionedId:"Models/actuator",id:"Models/actuator",title:"Actuator",description:"This model allows you to add actuators to your house.",source:"@site/docs/Models/actuator.md",sourceDirName:"Models",slug:"/Models/actuator",permalink:"/HomeControl/docs/Models/actuator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Models/actuator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"User",permalink:"/HomeControl/docs/Models/user"},next:{title:"Sensor",permalink:"/HomeControl/docs/Models/sensor"}},l={},p=[{value:"Create the model",id:"create-the-model",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"actuator"},"Actuator"),(0,a.kt)("p",null,"This model allows you to add actuators to your house."),(0,a.kt)("h2",{id:"create-the-model"},"Create the model"),(0,a.kt)("p",null,"We have different types of actuators, so first of all, we create an enum for the type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { Schema } = mongoose;\n\nenum ActuatorType{\n    BLINDS = "BLINDS",\n    LIGHT = "LIGHT"\n}\n')),(0,a.kt)("p",null,"Then, we can create the schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const actuatorSchema = new Schema({\n    type: {type: String, enum: ["BLINDS", "LIGHT"]},\n    designation: String,\n    state: Boolean\n});\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you want to have ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"_id"),", you can add this line :"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"actuatorSchema.set('toJSON', { virtuals: true });\n")))),(0,a.kt)("p",null,"To export, you have ton ",(0,a.kt)("strong",{parentName:"p"},"convert your shema into a model"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const actuator = mongoose.model("Actuator", actuatorSchema);\n')),(0,a.kt)("p",null,"Then, export with an ",(0,a.kt)("inlineCode",{parentName:"p"},"export default"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"You are supposed to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"actuator.ts")," file like this :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Actuator.ts"',title:'"Actuator.ts"'},'import mongoose from \'mongoose\';\n\nconst { Schema } = mongoose;\nenum ActuatorType{\n    BLINDS = "BLINDS",\n    LIGHT = "LIGHT"\n}\n\nconst actuatorSchema = new Schema({\n    type: {type: String, enum: ["BLINDS", "LIGHT"]},\n    designation: String,\n    state: Boolean\n});\n\nactuatorSchema.set(\'toJSON\', { virtuals: true });\nconst actuator = mongoose.model("Actuator", actuatorSchema);\n\nexport default actuator;\n')))}d.isMDXComponent=!0}}]);