"use strict";(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[664],{2542:function(e,t,s){s.d(t,{A:function(){return d}});var a=s(6768),n=s(4232);const i={key:0,class:"page-footer"},r=["href"];function o(e,t,s,o,l,c){const g=(0,a.g2)("font-awesome-icon");return c.disableFooter?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("p",null,[(0,a.eW)("© 2024-"+(0,n.v_)(c.thisYear)+" Designed by ",1),t[0]||(t[0]=(0,a.Lk)("a",{class:"footer-name",href:"https://github.com/MarSeventh",target:"_blank"},"SanyueQi",-1)),t[1]||(t[1]=(0,a.eW)(" for You! ")),(0,a.Lk)("a",{href:c.footerLink,target:"_blank"},[(0,a.bF)(g,{icon:"paper-plane",class:"footer-link-icon"})],8,r)])]))}var l=s(782),c={name:"Footer",computed:{...(0,l.L8)(["userConfig"]),footerLink(){return this.userConfig?.footerLink||"https://github.com/MarSeventh/CloudFlare-ImgBed"},thisYear(){return(new Date).getFullYear()},disableFooter(){return this.userConfig?.disableFooter||!1}}},g=s(1241);const u=(0,g.A)(c,[["render",o],["__scopeId","data-v-6eac6ae4"]]);var d=u},3525:function(e,t,s){s.d(t,{A:function(){return h}});var a=s(6768),n=s(4232);const i={id:"themeMask"},r=["cx","cy","r"],o=["r"],l=["opacity"];function c(e,t,s,c,g,u){return(0,a.uX)(),(0,a.CE)("div",{id:"themeToggle",onClick:t[0]||(t[0]=(...e)=>u.handleToggleClick&&u.handleToggleClick(...e))},[((0,a.uX)(),(0,a.CE)("svg",{class:(0,n.C4)(["theme_toggle_svg",{dark:g.isDark}]),width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",stroke:"currentColor"},[(0,a.Lk)("mask",i,[t[1]||(t[1]=(0,a.Lk)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"},null,-1)),(0,a.Lk)("circle",{class:"theme_toggle_circle1",fill:"black",cx:g.isDark?"50%":"100%",cy:g.isDark?"23%":"0%",r:g.isDark?"9":"5"},null,8,r)]),(0,a.Lk)("circle",{class:"theme_toggle_circle2",cx:"12",cy:"12",r:g.isDark?"9":"5",mask:"url(#themeMask)"},null,8,o),(0,a.Lk)("g",{class:"theme_toggle_g",stroke:"currentColor",opacity:g.isDark?0:1},t[2]||(t[2]=[(0,a.Fv)('<line x1="12" y1="1" x2="12" y2="3" data-v-019ed83e></line><line x1="12" y1="21" x2="12" y2="23" data-v-019ed83e></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-019ed83e></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-019ed83e></line><line x1="1" y1="12" x2="3" y2="12" data-v-019ed83e></line><line x1="21" y1="12" x2="23" y2="12" data-v-019ed83e></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-019ed83e></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-019ed83e></line>',8)]),8,l)],2))])}var g={name:"ToggleDark",data(){return{isDark:this.$store.getters.useDarkMode}},methods:{handleToggleClick(){this.isDark=!this.isDark,this.$store.commit("setUseDarkMode",this.isDark),this.$store.commit("setCusDarkMode",!0)}}},u=s(1241);const d=(0,u.A)(g,[["render",c],["__scopeId","data-v-019ed83e"]]);var h=d},1664:function(e,t,s){s.r(t),s.d(t,{default:function(){return I}});var a=s(2542),n=s(47),i=(s(5331),s(9648),s(2105)),r=(s(9092),s(3525)),o=s(6768),l=s(4232),c=s(5130);const g={class:"login"},u={class:"login-container"},d={class:"login-title"},h={class:"input-container"};function k(e,t,s,k,p,y){const m=r.A,b=i.WK,f=n.S2,v=a.A;return(0,o.uX)(),(0,o.CE)("div",g,[t[3]||(t[3]=(0,o.Lk)("img",{id:"bg1",class:"background-image1",alt:"Background Image"},null,-1)),t[4]||(t[4]=(0,o.Lk)("img",{id:"bg2",class:"background-image2",alt:"Background Image"},null,-1)),(0,o.bF)(m,{class:"toggle-dark"}),(0,o.Lk)("div",u,[(0,o.Lk)("h1",d,"身份验证",1),(0,o.Lk)("div",h,[t[1]||(t[1]=(0,o.Lk)("a",{class:"input-name"},"通行证",-1)),(0,o.bF)(b,{class:"password-input",modelValue:p.password,"onUpdate:modelValue":t[0]||(t[0]=e=>p.password=e),placeholder:"请输入认证码",type:"password","show-password":"",onKeyup:(0,c.jR)(y.login,["enter","native"])},null,8,["modelValue","onKeyup"])]),(0,o.bF)(f,{class:"submit",type:"primary",onClick:y.login},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("身份认证")]))),_:1},8,["onClick"])]),(0,o.bF)(v,{class:"footer"})])}s(4114);var p=s(4570),y=s.n(p),m=s(4373),b=s(782),f={data(){return{password:"",writtenPass:"",bingWallPaperIndex:0,customWallPaperIndex:0,useDefaultWallPaper:!1}},watch:{isDark:{handler(e){if(this.useDefaultWallPaper){const t=document.getElementById("bg1");t.src=s(e?732:7835),t.onload=()=>{t.style.opacity=this.bkOpacity}}}}},computed:{...(0,b.L8)(["userConfig","bingWallPapers"]),bkInterval(){return this.userConfig?.bkInterval||3e3},bkOpacity(){return this.userConfig?.bkOpacity||1},ownerName(){return this.userConfig?.ownerName||"Sanyue"},isDark(){return this.$store.getters.useDarkMode}},components:{Footer:a.A,ToggleDark:r.A},mounted(){const e=document.getElementById("bg1"),t=document.getElementById("bg2");"bing"===this.userConfig?.loginBkImg?this.$store.dispatch("fetchBingWallPapers").then((()=>{e.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,e.onload=()=>{e.style.opacity=this.bkOpacity,document.querySelector(".login").style.background="transparent"},setInterval((()=>{let s=0!=e.style.opacity?e:t,a=0!=e.style.opacity?t:e;s.style.opacity=0,this.bingWallPaperIndex=(this.bingWallPaperIndex+1)%this.bingWallPapers.length,a.src=this.bingWallPapers[this.bingWallPaperIndex]?.url,a.onload=()=>{a.style.opacity=this.bkOpacity}}),this.bkInterval)})):this.userConfig?.loginBkImg instanceof Array&&this.userConfig?.loginBkImg?.length>1?(e.src=this.userConfig.loginBkImg[this.customWallPaperIndex],e.onload=()=>{e.style.opacity=this.bkOpacity,document.querySelector(".login").style.background="transparent"},setInterval((()=>{let s=0!=e.style.opacity?e:t,a=0!=e.style.opacity?t:e;s.style.opacity=0,this.customWallPaperIndex=(this.customWallPaperIndex+1)%this.userConfig.loginBkImg.length,a.src=this.userConfig.loginBkImg[this.customWallPaperIndex],a.onload=()=>{a.style.opacity=this.bkOpacity}}),this.bkInterval)):this.userConfig?.loginBkImg instanceof Array&&1==this.userConfig?.loginBkImg?.length&&(e.src=this.userConfig.loginBkImg[0],e.onload=()=>{e.style.opacity=this.bkOpacity,document.querySelector(".login").style.background="transparent"})},methods:{login(){""===this.password?this.writtenPass="unset":this.writtenPass=this.password,m.A.post("/api/login",{authCode:this.password}).then((e=>{200===e.status?(y().set("authCode",this.writtenPass,"14d"),this.$router.push("/"),this.$message.success("登录成功")):this.$message.error("登录失败，请检查密码是否正确")})).catch((e=>{this.$message.error("登录失败，请检查密码是否正确")}))}}},v=s(1241);const C=(0,v.A)(f,[["render",k],["__scopeId","data-v-7ecd2a2b"]]);var I=C},7835:function(e,t,s){e.exports=s.p+"img/background-light.f17603bc.jpg"},732:function(e,t,s){e.exports=s.p+"img/background.ea1b7ee7.jpg"}}]);
//# sourceMappingURL=664.25b540b2.js.map
