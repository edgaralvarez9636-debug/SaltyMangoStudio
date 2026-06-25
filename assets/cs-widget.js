"use strict";(()=>{var _e,y,Je,Rt,B,Ge,Ze,Xe,ye,ie,ee,Qe,Ce,xe,we,Mt,le={},ce=[],Ht=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,de=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function Ae(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Wt(e,t,n){var r,a,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?_e.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return ae(e,s,r,a,null)}function ae(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a==null?++Je:a,__i:-1,__u:0};return a==null&&y.vnode!=null&&y.vnode(o),o}function F(e){return e.children}function se(e,t){this.props=e,this.context=t}function Z(e,t){if(t==null)return e.__?Z(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Z(e):null}function Ot(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],a=[],o=$({},t);o.__v=t.__v+1,y.vnode&&y.vnode(o),Ne(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n==null?Z(t):n,!!(32&t.__u),a),o.__v=t.__v,o.__.__k[o.__i]=o,rt(r,o,a),t.__e=t.__=null,o.__e!=n&&et(o)}}function et(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),et(e)}function Ve(e){(!e.__d&&(e.__d=!0)&&B.push(e)&&!ue.__r++||Ge!=y.debounceRendering)&&((Ge=y.debounceRendering)||Ze)(ue)}function ue(){try{for(var e,t=1;B.length;)B.length>t&&B.sort(Xe),e=B.shift(),t=B.length,Ot(e)}finally{B.length=ue.__r=0}}function tt(e,t,n,r,a,o,s,c,g,l,m){var i,p,d,C,E,w,h,x=r&&r.__k||ce,D=t.length;for(g=$t(n,t,x,g,D),i=0;i<D;i++)(d=n.__k[i])!=null&&(p=d.__i!=-1&&x[d.__i]||le,d.__i=i,w=Ne(e,d,p,a,o,s,c,g,l,m),C=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&Le(p.ref,null,d),m.push(d.ref,d.__c||C,d)),E==null&&C!=null&&(E=C),(h=!!(4&d.__u))||p.__k===d.__k?(g=nt(d,g,e,h),h&&p.__e&&(p.__e=null)):typeof d.type=="function"&&w!==void 0?g=w:C&&(g=C.nextSibling),d.__u&=-7);return n.__e=E,g}function $t(e,t,n,r,a){var o,s,c,g,l,m=n.length,i=m,p=0;for(e.__k=new Array(a),o=0;o<a;o++)(s=t[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[o]=ae(null,s,null,null,null):de(s)?s=e.__k[o]=ae(F,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[o]=ae(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[o]=s,g=o+p,s.__=e,s.__b=e.__b+1,c=null,(l=s.__i=Ut(s,n,g,i))!=-1&&(i--,(c=n[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(a>m?p--:a<m&&p++),typeof s.type!="function"&&(s.__u|=4)):l!=g&&(l==g-1?p--:l==g+1?p++:(l>g?p--:p++,s.__u|=4))):e.__k[o]=null;if(i)for(o=0;o<m;o++)(c=n[o])!=null&&(2&c.__u)==0&&(c.__e==r&&(r=Z(c)),it(c,c));return r}function nt(e,t,n,r){var a,o;if(typeof e.type=="function"){for(a=e.__k,o=0;a&&o<a.length;o++)a[o]&&(a[o].__=e,t=nt(a[o],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Z(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ut(e,t,n,r){var a,o,s,c=e.key,g=e.type,l=t[n],m=l!=null&&(2&l.__u)==0;if(l===null&&c==null||m&&c==l.key&&g==l.type)return n;if(r>(m?1:0)){for(a=n-1,o=n+1;a>=0||o<t.length;)if((l=t[s=a>=0?a--:o++])!=null&&(2&l.__u)==0&&c==l.key&&g==l.type)return s}return-1}function Ke(e,t,n){t[0]=="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||Ht.test(t)?n:n+"px"}function oe(e,t,n,r,a){var o,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ke(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Ke(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Qe,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n[ee]=r[ee]:(n[ee]=Ce,e.addEventListener(t,o?we:xe,o)):e.removeEventListener(t,o?we:xe,o);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n==null?"":n;break e}catch(c){}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ye(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[ie]==null)t[ie]=Ce++;else if(t[ie]<n[ee])return;return n(y.event?y.event(t):t)}}}function Ne(e,t,n,r,a,o,s,c,g,l){var m,i,p,d,C,E,w,h,x,D,P,T,Y,q,H,I=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(g=!!(32&n.__u),o=[c=t.__e=n.__e]),(m=y.__b)&&m(t);e:if(typeof I=="function")try{if(h=t.props,x=I.prototype&&I.prototype.render,D=(m=I.contextType)&&r[m.__c],P=m?D?D.props.value:m.__:r,n.__c?w=(i=t.__c=n.__c).__=i.__E:(x?t.__c=i=new I(h,P):(t.__c=i=new se(h,P),i.constructor=I,i.render=Ft),D&&D.sub(i),i.state||(i.state={}),i.__n=r,p=i.__d=!0,i.__h=[],i._sb=[]),x&&i.__s==null&&(i.__s=i.state),x&&I.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=$({},i.__s)),$(i.__s,I.getDerivedStateFromProps(h,i.__s))),d=i.props,C=i.state,i.__v=t,p)x&&I.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),x&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(x&&I.getDerivedStateFromProps==null&&h!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,P),t.__v==n.__v||!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,P)===!1){t.__v!=n.__v&&(i.props=h,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(R){R&&(R.__=t)}),ce.push.apply(i.__h,i._sb),i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,P),x&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,C,E)})}if(i.context=P,i.props=h,i.__P=e,i.__e=!1,T=y.__r,Y=0,x)i.state=i.__s,i.__d=!1,T&&T(t),m=i.render(i.props,i.state,i.context),ce.push.apply(i.__h,i._sb),i._sb=[];else do i.__d=!1,T&&T(t),m=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Y<25);i.state=i.__s,i.getChildContext!=null&&(r=$($({},r),i.getChildContext())),x&&!p&&i.getSnapshotBeforeUpdate!=null&&(E=i.getSnapshotBeforeUpdate(d,C)),q=m!=null&&m.type===F&&m.key==null?ot(m.props.children):m,c=tt(e,de(q)?q:[q],t,n,r,a,o,s,c,g,l),i.base=t.__e,t.__u&=-161,i.__h.length&&s.push(i),w&&(i.__E=i.__=null)}catch(R){if(t.__v=null,g||o!=null)if(R.then){for(t.__u|=g?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,t.__e=c}else{for(H=o.length;H--;)Ae(o[H]);ke(t)}else t.__e=n.__e,t.__k=n.__k,R.then||ke(t);y.__e(R,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Bt(n.__e,t,n,r,a,o,s,g,l);return(m=y.diffed)&&m(t),128&t.__u?void 0:c}function ke(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(ke))}function rt(e,t,n){for(var r=0;r<n.length;r++)Le(n[r],n[++r],n[++r]);y.__c&&y.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){y.__e(o,a.__v)}})}function ot(e){return typeof e!="object"||e==null||e.__b>0?e:de(e)?e.map(ot):$({},e)}function Bt(e,t,n,r,a,o,s,c,g){var l,m,i,p,d,C,E,w=n.props||le,h=t.props,x=t.type;if(x=="svg"?a="http://www.w3.org/2000/svg":x=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((d=o[l])&&"setAttribute"in d==!!x&&(x?d.localName==x:d.nodeType==3)){e=d,o[l]=null;break}}if(e==null){if(x==null)return document.createTextNode(h);e=document.createElementNS(a,x,h.is&&h),c&&(y.__m&&y.__m(t,o),c=!1),o=null}if(x==null)w===h||c&&e.data==h||(e.data=h);else{if(o=o&&_e.call(e.childNodes),!c&&o!=null)for(w={},l=0;l<e.attributes.length;l++)w[(d=e.attributes[l]).name]=d.value;for(l in w)d=w[l],l=="dangerouslySetInnerHTML"?i=d:l=="children"||l in h||l=="value"&&"defaultValue"in h||l=="checked"&&"defaultChecked"in h||oe(e,l,null,d,a);for(l in h)d=h[l],l=="children"?p=d:l=="dangerouslySetInnerHTML"?m=d:l=="value"?C=d:l=="checked"?E=d:c&&typeof d!="function"||w[l]===d||oe(e,l,d,w[l],a);if(m)c||i&&(m.__html==i.__html||m.__html==e.innerHTML)||(e.innerHTML=m.__html),t.__k=[];else if(i&&(e.innerHTML=""),tt(t.type=="template"?e.content:e,de(p)?p:[p],t,n,r,x=="foreignObject"?"http://www.w3.org/1999/xhtml":a,o,s,o?o[0]:n.__k&&Z(n,0),c,g),o!=null)for(l=o.length;l--;)Ae(o[l]);c||(l="value",x=="progress"&&C==null?e.removeAttribute("value"):C!=null&&(C!==e[l]||x=="progress"&&!C||x=="option"&&C!=w[l])&&oe(e,l,C,w[l],a),l="checked",E!=null&&E!=e[l]&&oe(e,l,E,w[l],a))}return e}function Le(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(a){y.__e(a,n)}}function it(e,t,n){var r,a;if(y.unmount&&y.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Le(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){y.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&it(r[a],t,n||typeof e.type!="function");n||Ae(e.__e),e.__c=e.__=e.__e=void 0}function Ft(e,t,n){return this.constructor(e,n)}function at(e,t,n){var r,a,o,s;t==document&&(t=document.documentElement),y.__&&y.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],s=[],Ne(t,e=(!r&&n||t).__k=Wt(F,null,[e]),a||le,le,t.namespaceURI,!r&&n?[n]:a?null:t.firstChild?_e.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r,s),rt(o,e,s)}_e=ce.slice,y={__e:function(e,t,n,r){for(var a,o,s;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),s=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),s=a.__d),s)return a.__E=a}catch(c){e=c}throw e}},Je=0,Rt=function(e){return e!=null&&e.constructor===void 0},se.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ve(this))},se.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ve(this))},se.prototype.render=F,B=[],Ze=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Xe=function(e,t){return e.__v.__b-t.__v.__b},ue.__r=0,ye=Math.random().toString(8),ie="__d"+ye,ee="__a"+ye,Qe=/(PointerCapture)$|Capture$/i,Ce=0,xe=Ye(!1),we=Ye(!0),Mt=0;var te,A,Se,st,ge=0,mt=[],N=y,lt=N.__b,ct=N.__r,ut=N.diffed,_t=N.__c,dt=N.unmount,pt=N.__;function Te(e,t){N.__h&&N.__h(A,e,ge||t),ge=0;var n=A.__H||(A.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function S(e){return ge=1,jt(ht,e)}function jt(e,t,n){var r=Te(te++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):ht(void 0,t),function(c){var g=r.__N?r.__N[0]:r.__[0],l=r.t(g,c);g!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=A,!A.__f)){var a=function(c,g,l){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(p){return p.__c});if(m.every(function(p){return!p.__N}))return!o||o.call(this,c,g,l);var i=r.__c.props!==c;return m.some(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(i=!0)}}),o&&o.call(this,c,g,l)||i};A.__f=!0;var o=A.shouldComponentUpdate,s=A.componentWillUpdate;A.componentWillUpdate=function(c,g,l){if(this.__e){var m=o;o=void 0,a(c,g,l),o=m}s&&s.call(this,c,g,l)},A.shouldComponentUpdate=a}return r.__N||r.__}function K(e,t){var n=Te(te++,3);!N.__s&&ft(n.__H,t)&&(n.__=e,n.u=t,A.__H.__h.push(n))}function me(e){return ge=5,qt(function(){return{current:e}},[])}function qt(e,t){var n=Te(te++,7);return ft(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function zt(){for(var e;e=mt.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(pe),t.__h.some(Ee),t.__h=[]}catch(n){t.__h=[],N.__e(n,e.__v)}}}N.__b=function(e){A=null,lt&&lt(e)},N.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),pt&&pt(e,t)},N.__r=function(e){ct&&ct(e),te=0;var t=(A=e.__c).__H;t&&(Se===A?(t.__h=[],A.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(pe),t.__h.some(Ee),t.__h=[],te=0)),Se=A},N.diffed=function(e){ut&&ut(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(mt.push(t)!==1&&st===N.requestAnimationFrame||((st=N.requestAnimationFrame)||Gt)(zt)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Se=A=null},N.__c=function(e,t){t.some(function(n){try{n.__h.some(pe),n.__h=n.__h.filter(function(r){return!r.__||Ee(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],N.__e(r,n.__v)}}),_t&&_t(e,t)},N.unmount=function(e){dt&&dt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{pe(r)}catch(a){t=a}}),n.__H=void 0,t&&N.__e(t,n.__v))};var gt=typeof requestAnimationFrame=="function";function Gt(e){var t,n=function(){clearTimeout(r),gt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);gt&&(t=requestAnimationFrame(n))}function pe(e){var t=A,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),A=t}function Ee(e){var t=A;e.__c=e.__(),A=t}function ft(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ht(e,t){return typeof t=="function"?t(e):t}var Vt=0;function _(e,t,n,r,a,o){t||(t={});var s,c,g=t;if("ref"in g)for(c in g={},t)c=="ref"?s=t[c]:g[c]=t[c];var l={type:e,props:g,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Vt,__i:-1,__u:0,__source:a,__self:o};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)g[c]===void 0&&(g[c]=s[c]);return y.vnode&&y.vnode(l),l}var Kt={es:{onboardingTitle:"Antes de comenzar",onboardingSubtitle:"Cu\xE9ntanos qui\xE9n eres para que {assistantName} pueda atenderte personalmente",nameLabel:"\xBFC\xF3mo te llamas?",namePlaceholder:"Tu nombre",whatsappLabel:"\xBFTu WhatsApp?",whatsappPlaceholder:"787-555-1234",emailLabel:"\xBFTu email?",emailPlaceholder:"tu@email.com",submitButton:"Hablar con {assistantName}",submitButtonLoading:"Conectando...",disclaimer:"Tus datos solo se usan para tu atenci\xF3n personalizada.",messagePlaceholder:"Escribe tu mensaje...",welcomeBack:"\xA1Bienvenido(a) de vuelta! \xBFEn qu\xE9 te ayudo hoy?",closeAria:"Cerrar",openChatAria:"Abrir chat con {assistantName}",onboardingDialogAria:"Registro inicial con {assistantName}",chatDialogAria:"Chat con {assistantName}",typingAria:"{assistantName} est\xE1 escribiendo",sendAria:"Enviar",errorNameRequired:"Pon tu nombre completo.",errorEmailInvalid:"Revisa tu email.",errorEmailOptional:"Si pones email, debe ser v\xE1lido.",errorWhatsappLength:"WhatsApp debe tener al menos 10 d\xEDgitos.",errorAlreadyRegistered:"Ya tienes una cuenta con nosotros. Para retomar tu conversaci\xF3n, comun\xEDcate por WhatsApp.",errorRateLimit:"Demasiados intentos. Intenta de nuevo en una hora.",errorGeneric:"Hubo un problema. Intenta de nuevo en un momento.",errorChatGeneric:"Hubo un problema. Intenta de nuevo.",errorNetwork:"No pudimos conectar. Revisa tu internet e intenta de nuevo.",defaultOrgName:"tu negocio",defaultAssistantName:"Asistente"},en:{onboardingTitle:"Before we start",onboardingSubtitle:"Tell us a bit about yourself so {assistantName} can assist you personally",nameLabel:"What's your name?",namePlaceholder:"Your name",whatsappLabel:"WhatsApp number?",whatsappPlaceholder:"+1 555 123 4567",emailLabel:"Your email?",emailPlaceholder:"you@email.com",submitButton:"Talk to {assistantName}",submitButtonLoading:"Connecting...",disclaimer:"Your data is only used to provide you personalized service.",messagePlaceholder:"Write your message...",welcomeBack:"Welcome back! How can I help you today?",closeAria:"Close",openChatAria:"Open chat with {assistantName}",onboardingDialogAria:"Initial registration with {assistantName}",chatDialogAria:"Chat with {assistantName}",typingAria:"{assistantName} is typing",sendAria:"Send",errorNameRequired:"Please enter your full name.",errorEmailInvalid:"Please check your email.",errorEmailOptional:"If you provide an email, it must be valid.",errorWhatsappLength:"WhatsApp must be at least 10 digits.",errorAlreadyRegistered:"Looks like you already have an account. Please reach out via WhatsApp to continue your conversation.",errorRateLimit:"Too many attempts. Please try again in an hour.",errorGeneric:"Something went wrong. Please try again in a moment.",errorChatGeneric:"Something went wrong. Please try again.",errorNetwork:"Couldn't connect. Please check your internet and try again.",defaultOrgName:"your business",defaultAssistantName:"Assistant"}};function Yt(e,t=null){let n=(typeof navigator!="undefined"&&navigator.language||"").toLowerCase();if(n.startsWith("es"))return"es";if(n.startsWith("en"))return"en";if(e.defaultLocale==="es"||e.defaultLocale==="en")return e.defaultLocale;if(t){let r=t.toLowerCase();if(r.startsWith("en"))return"en";if(r.startsWith("es"))return"es"}return"es"}function X(e,t){return Object.entries(t).reduce((n,[r,a])=>n.split(`{${r}}`).join(a),e)}var Jt=typeof window!="undefined"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname==="0.0.0.0"),yt=Jt?"http://localhost:4001":"https://api.vectorai.digital",Zt=`${yt}/api/public/cs/web-chat`,Xt=`${yt}/api/public/cs/onboarding`,Qt="#ff8da1",bt={bgPanel:"#1a1418",bgHeader:"#221920",bgInput:"#15101a",bgAgent:"#2a2128",bgAria:"#2a2128",border:"rgba(255, 141, 161, 0.15)",borderStrong:"rgba(255, 141, 161, 0.25)",borderInput:"rgba(255, 141, 161, 0.18)",textLight:"#f5f0eb",textMuted:"#d4c8d0",textSoft:"#b8a9b3",textDark:"#1a0d10",error:"#ff7a8c"},Ie='<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2 L13.5 9 L21 10.5 L13.5 12 L12 19 L10.5 12 L3 10.5 L10.5 9 Z M19 4 L19.7 6.3 L22 7 L19.7 7.7 L19 10 L18.3 7.7 L16 7 L18.3 6.3 Z"/></svg>';function en(e){let t=/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)]+)/g,n=[],r=0,a,o=0;for(;(a=t.exec(e))!==null;){a.index>r&&n.push(e.slice(r,a.index));let s=a[1]&&a[1].trim()||"Abrir mi cuenta",c=a[2]||a[3];n.push(_("a",{className:"bubble-cta",href:c,target:"_blank",rel:"noopener noreferrer",children:[s," \u2192"]},`cta${o++}`)),r=a.index+a[0].length}return r<e.length&&n.push(e.slice(r)),n.length?n:e}var tn='<svg viewBox="0 0 24 24" width="28" height="28" fill="#1a0d10" aria-hidden="true"><path d="M12 2 L13.5 9 L21 10.5 L13.5 12 L12 19 L10.5 12 L3 10.5 L10.5 9 Z M19 4 L19.7 6.3 L22 7 L19.7 7.7 L19 10 L18.3 7.7 L16 7 L18.3 6.3 Z"/></svg>',nn='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',rn='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';function on(){let[e,t]=S(typeof window!="undefined"&&window.innerWidth<480);return K(()=>{let n=()=>t(window.innerWidth<480);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function an(e,t){if(e!=null&&e.message&&typeof e.message=="string")return e.message;switch(e==null?void 0:e.error){case"invalid_name":return t.errorNameRequired;case"invalid_email":return t.errorEmailInvalid;case"invalid_whatsapp":return t.errorWhatsappLength;case"email_exists":return t.errorAlreadyRegistered;case"rate_limit_hourly_exceeded":return t.errorRateLimit;default:return t.errorGeneric}}var xt="vai_attribution",sn=2160*60*60*1e3;function j(e){if(!e)return null;let t=e.trim();return t?t.length>255?t.slice(0,255):t:null}function wt(){if(typeof window=="undefined")return null;let e;try{e=new URLSearchParams(window.location.search)}catch(r){return null}let t={utm_source:j(e.get("utm_source")),utm_campaign:j(e.get("utm_campaign")),utm_medium:j(e.get("utm_medium")),utm_content:j(e.get("utm_content")),utm_term:j(e.get("utm_term")),fbclid:j(e.get("fbclid")),gclid:j(e.get("gclid")),referrer:j(typeof document!="undefined"?document.referrer:null),ts:Date.now()};return t.utm_source||t.utm_campaign||t.utm_medium||t.utm_content||t.utm_term||t.fbclid||t.gclid?t:null}function kt(){try{let e=localStorage.getItem(xt);if(!e)return null;let t=JSON.parse(e);return!t||typeof t.ts!="number"||Date.now()-t.ts>sn?null:t}catch(e){return null}}function ln(){if(kt())return;let e=wt();if(e)try{localStorage.setItem(xt,JSON.stringify(e))}catch(t){}}function cn({config:e}){var Fe,je,qe,ze;let t=e.accent||Qt,n=e.endpoint||Zt,r=e.onboardingEndpoint||Xt,a=e.onboardingConfigEndpoint||r.replace("/onboarding","/onboarding-config"),o=e.iconUrl,s=e.fabGlass===!0,c={...bt,...e.theme||{}},g=(ze=(qe=(Fe=e.theme)==null?void 0:Fe.bgAgent)!=null?qe:(je=e.theme)==null?void 0:je.bgAria)!=null?ze:bt.bgAgent,l=on(),m=`cs_conversation_id_${e.orgId}`,i=`cs_contact_id_${e.orgId}`,[p,d]=S(()=>{try{return localStorage.getItem(m)||""}catch(f){return""}}),[C,E]=S(()=>{try{return localStorage.getItem(i)||""}catch(f){return""}}),[w,h]=S("closed"),[x,D]=S(""),[P,T]=S([]),[Y,q]=S(""),[H,I]=S(!1),[R,Pe]=S(""),[fe,De]=S(""),[he,Re]=S(""),[Me,U]=S(null),[z,ne]=S(!1),[W,Ct]=S(["name","whatsapp","email"]),[un,At]=S(!1),[be,Nt]=S({assistant_name:null,business_name_public:null,assistant_language:null}),Lt=Yt(e,be.assistant_language),v=Kt[Lt],St=e.orgName||be.business_name_public||v.defaultOrgName,G=e.assistantName||be.assistant_name||v.defaultAssistantName,Et=e.welcomeBackMessage||v.welcomeBack,re=me(null);K(()=>{let f=new AbortController,k=setTimeout(()=>f.abort(),2e3);return fetch(a,{method:"GET",credentials:"omit",signal:f.signal}).then(u=>{if(clearTimeout(k),!u.ok)throw new Error(`config_fetch_${u.status}`);return u.json()}).then(u=>{Array.isArray(u==null?void 0:u.onboarding_required_fields)&&Ct(u.onboarding_required_fields),Nt({assistant_name:typeof(u==null?void 0:u.assistant_name)=="string"?u.assistant_name:null,business_name_public:typeof(u==null?void 0:u.business_name_public)=="string"?u.business_name_public:null,assistant_language:typeof(u==null?void 0:u.assistant_language)=="string"?u.assistant_language:null})}).catch(u=>{console.warn("[AriaWidget] config fetch failed, using fallback:",(u==null?void 0:u.message)||u)}).finally(()=>{At(!0)}),()=>{clearTimeout(k),f.abort()}},[a]),K(()=>{ln()},[]),K(()=>{re.current&&(re.current.scrollTop=re.current.scrollHeight)},[P,H,w]);let J=me(null),Q=me(new Set),He=n.replace("/web-chat","/web-chat/history");K(()=>{if(w!=="chatting"||!p){J.current=null,Q.current=new Set;return}J.current||(J.current=new Date().toISOString());let f=setInterval(async()=>{try{let k=J.current,u=k?`&since=${encodeURIComponent(k)}`:"",O=`${He}?conversation_id=${encodeURIComponent(p)}${u}`,b=await fetch(O,{method:"GET",credentials:"omit"});if(!b.ok)return;let M=await b.json();if(!(M!=null&&M.success))return;let L=(M.messages||[]).filter(V=>V.role==="assistant"&&!Q.current.has(V.id));L.length>0&&(L.forEach(V=>Q.current.add(V.id)),T(V=>[...V,...L.map(Dt=>({role:"agent",text:Dt.content}))])),M.server_time&&(J.current=M.server_time)}catch(k){console.warn("[CsWidget] polling history failed:",(k==null?void 0:k.message)||k)}},25e3);return()=>clearInterval(f)},[w,p,He]);function We(){p&&C?(P.length===0&&T([{role:"agent",text:Et}]),h("chatting")):h("onboarding")}function Tt(){h("closed")}K(()=>{function f(k){let u=k.detail||{};typeof u.service=="string"&&u.service.trim()&&D(u.service.trim()),We()}return window.addEventListener("cs-widget:open",f),()=>window.removeEventListener("cs-widget:open",f)},[p,C]);async function Oe(){if(z)return;U(null);let f=R.trim();if(W.includes("name")&&f.length<2){U(v.errorNameRequired);return}let k=he.trim().toLowerCase(),u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(W.includes("email")){if(!u.test(k)){U(v.errorEmailInvalid);return}}else if(k&&!u.test(k)){U(v.errorEmailOptional);return}let O=fe.replace(/\D/g,"");if(W.includes("whatsapp")&&O.length<10){U(v.errorWhatsappLength);return}ne(!0);let b=kt()||wt();try{let L=await(await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:f,whatsapp:O,email:k,locale:typeof navigator!="undefined"?navigator.language:void 0,requested_service:x||void 0,utm_source:(b==null?void 0:b.utm_source)||void 0,utm_campaign:(b==null?void 0:b.utm_campaign)||void 0,utm_medium:(b==null?void 0:b.utm_medium)||void 0,utm_content:(b==null?void 0:b.utm_content)||void 0,utm_term:(b==null?void 0:b.utm_term)||void 0,fbclid:(b==null?void 0:b.fbclid)||void 0,gclid:(b==null?void 0:b.gclid)||void 0,referrer:(b==null?void 0:b.referrer)||void 0})})).json();if(L!=null&&L.success&&L.conversation_id&&L.contact_id&&L.greeting){try{localStorage.setItem(m,L.conversation_id),localStorage.setItem(i,L.contact_id)}catch(V){}d(L.conversation_id),E(L.contact_id),L.greeting_message_id&&Q.current.add(L.greeting_message_id),T([{role:"agent",text:L.greeting}]),h("chatting"),Pe(""),De(""),Re(""),U(null),ne(!1);return}U(an(L,v)),ne(!1)}catch(M){U(v.errorNetwork),ne(!1)}}function $e(){return!(W.includes("name")&&!R.trim()||W.includes("whatsapp")&&!fe.trim()||W.includes("email")&&!he.trim())}function ve(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),!z&&$e()&&Oe())}async function Ue(){let f=Y.trim();if(!(!f||H)){if(!p){h("onboarding");return}T(k=>[...k,{role:"user",text:f}]),q(""),I(!0);try{let u=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({conversation_id:p,organization_id:e.orgId,message:f,locale:typeof navigator!="undefined"?navigator.language:void 0})})).json();if(u!=null&&u.conversation_id&&u.conversation_id!==p){d(u.conversation_id);try{localStorage.setItem(m,u.conversation_id)}catch(O){}}if(u!=null&&u.success&&(u==null?void 0:u.manual_control_active)===!0){let O=u.info||"Tu mensaje fue recibido. Te responderemos en un momento.";T(b=>[...b,{role:"agent",text:O}])}else{let O=u&&u.response||v.errorChatGeneric,b=u&&u.success?"agent":"system";u!=null&&u.success&&u.response_message_id&&Q.current.add(u.response_message_id),T(M=>[...M,{role:b,text:O}])}J.current=new Date().toISOString()}catch(k){T(u=>[...u,{role:"system",text:v.errorChatGeneric}])}finally{I(!1)}}}function It(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),Ue())}let Pt=`
    :host { all: initial; }
    * { box-sizing: border-box; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
    .root {
      --accent: ${t};
      --bg-panel: ${c.bgPanel};
      --bg-header: ${c.bgHeader};
      --bg-input: ${c.bgInput};
      --bg-agent: ${g};
      --text-light: ${c.textLight};
      --text-dark: ${c.textDark};
      --text-muted: ${c.textMuted};
      --text-soft: ${c.textSoft};
      --text-faint: #8a7a85;
      --error: ${c.error};
      --border: ${c.border};
      --border-strong: ${c.borderStrong};
      --border-input: ${c.borderInput};
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 2147483646;
      pointer-events: none;
    }
    .root > * { pointer-events: auto; }

    /* \u2500\u2500 Bot\xF3n flotante (estado cerrado) \u2500\u2500 */
    .fab {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: ${s?"rgba(12, 12, 14, 0.55)":"var(--accent)"};
      ${s?"backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);":""}
      border: ${s?"1px solid var(--accent)":"none"};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: ${s?"0 0 26px -4px var(--accent), 0 10px 28px rgba(0, 0, 0, 0.5)":"0 8px 24px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)"};
      transition: transform 160ms ease, box-shadow 160ms ease;
      padding: 0;
      overflow: hidden;
    }
    .fab:hover { transform: scale(1.06); box-shadow: ${s?"0 0 34px -2px var(--accent), 0 14px 32px rgba(0, 0, 0, 0.55)":"0 12px 28px rgba(0, 0, 0, 0.42), 0 4px 12px rgba(0, 0, 0, 0.25)"}; }
    .fab:active { transform: scale(0.96); }
    /* El bot\xF3n SIEMPRE es del color del tema (accent). El logo del tenant
       (iconUrl) es un PNG transparente que se muestra encima \u2014 igual que Arii. */
    .fab img { width: 38px; height: 38px; object-fit: contain; display: block; }

    /* \u2500\u2500 Panel (compartido por onboarding y chatting) \u2500\u2500 */
    .panel {
      width: 360px;
      height: 540px;
      background: var(--bg-panel);
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55), 0 4px 16px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid var(--border);
    }
    .panel.mobile {
      width: 100vw;
      height: 100vh;
      max-height: 100vh;
      border-radius: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    /* \u2500\u2500 Header (compartido) \u2500\u2500 */
    .hdr {
      background: var(--bg-header);
      padding: 14px 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }
    .hdr-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--accent);
      color: var(--text-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .hdr-meta { flex: 1; min-width: 0; }
    .hdr-name { color: var(--text-light); font-size: 14px; font-weight: 600; line-height: 1.2; }
    .hdr-status { color: var(--text-muted); font-size: 12px; line-height: 1.2; margin-top: 2px; }
    .hdr-close {
      background: transparent;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      padding: 6px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 120ms ease, color 120ms ease;
    }
    .hdr-close:hover { background: rgba(255, 255, 255, 0.06); color: var(--text-light); }

    /* \u2500\u2500 Onboarding view \u2500\u2500 */
    .onb {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
    .onb-title {
      color: var(--text-light);
      font-weight: 500;
      font-size: 18px;
      margin: 0 0 6px 0;
      line-height: 1.3;
    }
    .onb-subtitle {
      color: var(--text-soft);
      font-size: 14px;
      line-height: 1.5;
      margin: 0 0 20px 0;
    }
    .onb-fields { display: flex; flex-direction: column; gap: 14px; }
    .onb-label {
      display: block;
      color: var(--text-muted);
      font-size: 13px;
      margin-bottom: 6px;
    }
    .onb-input {
      width: 100%;
      background: var(--bg-input);
      border: 1px solid var(--border-input);
      border-radius: 8px;
      padding: 11px 14px;
      color: var(--text-light);
      font-size: 14px;
      font-family: inherit;
      outline: none;
      transition: border-color 120ms ease;
    }
    .onb-input:focus { border-color: var(--accent); }
    .onb-input::placeholder { color: var(--text-muted); opacity: 0.55; }
    .onb-error {
      color: var(--error);
      font-size: 13px;
      margin-top: 12px;
      line-height: 1.4;
    }
    .onb-submit {
      width: 100%;
      background: var(--accent);
      color: var(--text-dark);
      font-weight: 500;
      font-size: 15px;
      border-radius: 22px;
      padding: 12px 20px;
      border: none;
      cursor: pointer;
      margin-top: 20px;
      transition: opacity 120ms ease;
      font-family: inherit;
    }
    .onb-submit:hover:not(:disabled) { opacity: 0.92; }
    .onb-submit:active:not(:disabled) { opacity: 0.85; }
    .onb-submit:disabled { opacity: 0.5; cursor: not-allowed; }
    .onb-disclaimer {
      color: var(--text-faint);
      font-size: 12px;
      font-style: italic;
      text-align: center;
      line-height: 1.4;
      margin-top: 12px;
    }

    /* \u2500\u2500 Mensajes (chatting) \u2500\u2500 */
    .msgs {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .msgs::-webkit-scrollbar { width: 6px; }
    .msgs::-webkit-scrollbar-track { background: transparent; }
    .msgs::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.08); border-radius: 3px; }

    .msg-row { display: flex; gap: 8px; align-items: flex-end; max-width: 100%; }
    .msg-row.agent { justify-content: flex-start; }
    .msg-row.user { justify-content: flex-end; }
    .msg-row.system { justify-content: center; }

    .msg-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--accent);
      color: var(--text-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
    }
    .msg-avatar img { width: 100%; height: 100%; object-fit: contain; display: block; }

    .bubble {
      max-width: 76%;
      padding: 10px 14px;
      border-radius: 14px;
      font-size: 14px;
      line-height: 1.5;
      word-wrap: break-word;
      white-space: pre-wrap;
    }
    .bubble.agent { background: var(--bg-agent); color: var(--text-light); border-bottom-left-radius: 4px; }
    .bubble.user { background: var(--accent); color: var(--text-dark); border-bottom-right-radius: 4px; }
    .bubble-cta {
      display: block;
      margin-top: 8px;
      background: var(--accent);
      color: var(--text-dark) !important;
      text-decoration: none;
      text-align: center;
      font-weight: 600;
      padding: 11px 14px;
      border-radius: 10px;
    }
    .bubble-cta:hover { filter: brightness(1.06); }
    .bubble.system {
      background: rgba(255, 255, 255, 0.04);
      color: var(--text-muted);
      font-size: 12px;
      max-width: 90%;
      text-align: center;
      font-style: italic;
    }

    /* \u2500\u2500 Typing indicator \u2500\u2500 */
    .typing { background: var(--bg-agent); padding: 12px 14px; border-radius: 14px; border-bottom-left-radius: 4px; display: inline-flex; gap: 4px; }
    .typing span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--text-muted);
      opacity: 0.5;
      animation: bounce 1.2s infinite ease-in-out;
    }
    .typing span:nth-child(2) { animation-delay: 0.15s; }
    .typing span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes bounce {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
      40% { transform: translateY(-4px); opacity: 1; }
    }

    /* \u2500\u2500 Input chat \u2500\u2500 */
    .input-row {
      padding: 12px 16px;
      border-top: 1px solid var(--border);
      display: flex;
      gap: 8px;
      align-items: flex-end;
      background: var(--bg-header);
      flex-shrink: 0;
    }
    .input-field {
      flex: 1;
      min-height: 40px;
      max-height: 100px;
      padding: 10px 14px;
      border-radius: 20px;
      border: 1px solid var(--border-strong);
      background: var(--bg-input);
      color: var(--text-light);
      font-size: 14px;
      line-height: 1.4;
      outline: none;
      resize: none;
      font-family: inherit;
      transition: border-color 120ms ease;
    }
    .input-field:focus { border-color: var(--accent); }
    .input-field::placeholder { color: var(--text-muted); opacity: 0.6; }

    .send-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--accent);
      color: var(--text-dark);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: transform 120ms ease, opacity 120ms ease;
    }
    .send-btn:hover:not(:disabled) { transform: scale(1.06); }
    .send-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  `,Be=()=>_("div",{className:"hdr",children:[_("div",{className:"hdr-avatar",dangerouslySetInnerHTML:{__html:Ie}}),_("div",{className:"hdr-meta",children:[_("div",{className:"hdr-name",children:G}),_("div",{className:"hdr-status",children:St})]}),_("button",{className:"hdr-close",type:"button","aria-label":v.closeAria,onClick:Tt,dangerouslySetInnerHTML:{__html:nn}})]});return _(F,{children:[_("style",{dangerouslySetInnerHTML:{__html:Pt}}),_("div",{className:"root",children:[w==="closed"&&_("button",{className:"fab",type:"button","aria-label":X(v.openChatAria,{assistantName:G}),onClick:We,children:o?_("img",{src:o,alt:""}):_("span",{dangerouslySetInnerHTML:{__html:tn}})}),w==="onboarding"&&_("div",{className:`panel${l?" mobile":""}`,role:"dialog","aria-label":X(v.onboardingDialogAria,{assistantName:G}),children:[Be(),_("div",{className:"onb",children:[_("h2",{className:"onb-title",children:v.onboardingTitle}),_("p",{className:"onb-subtitle",children:X(v.onboardingSubtitle,{assistantName:G})}),_("div",{className:"onb-fields",children:[W.includes("name")&&_("div",{children:[_("label",{className:"onb-label",htmlFor:"cs-onb-name",children:v.nameLabel}),_("input",{id:"cs-onb-name",className:"onb-input",type:"text",placeholder:v.namePlaceholder,value:R,onInput:f=>Pe(f.currentTarget.value),onKeyDown:ve,disabled:z,autoComplete:"name"})]}),W.includes("whatsapp")&&_("div",{children:[_("label",{className:"onb-label",htmlFor:"cs-onb-whatsapp",children:v.whatsappLabel}),_("input",{id:"cs-onb-whatsapp",className:"onb-input",type:"tel",placeholder:v.whatsappPlaceholder,value:fe,onInput:f=>De(f.currentTarget.value),onKeyDown:ve,disabled:z,autoComplete:"tel"})]}),W.includes("email")&&_("div",{children:[_("label",{className:"onb-label",htmlFor:"cs-onb-email",children:v.emailLabel}),_("input",{id:"cs-onb-email",className:"onb-input",type:"email",placeholder:v.emailPlaceholder,value:he,onInput:f=>Re(f.currentTarget.value),onKeyDown:ve,disabled:z,autoComplete:"email"})]})]}),Me&&_("div",{className:"onb-error",children:Me}),_("button",{className:"onb-submit",type:"button",onClick:Oe,disabled:z||!$e(),children:z?v.submitButtonLoading:X(v.submitButton,{assistantName:G})}),_("p",{className:"onb-disclaimer",children:v.disclaimer})]})]}),w==="chatting"&&_("div",{className:`panel${l?" mobile":""}`,role:"dialog","aria-label":X(v.chatDialogAria,{assistantName:G}),children:[Be(),_("div",{className:"msgs",ref:re,children:[P.map((f,k)=>_("div",{className:`msg-row ${f.role}`,children:[f.role==="agent"&&_("div",{className:"msg-avatar",children:o?_("img",{src:o,alt:""}):_("span",{dangerouslySetInnerHTML:{__html:Ie}})}),_("div",{className:`bubble ${f.role}`,children:f.role==="agent"?en(f.text):f.text})]},k)),H&&_("div",{className:"msg-row agent",children:[_("div",{className:"msg-avatar",children:o?_("img",{src:o,alt:""}):_("span",{dangerouslySetInnerHTML:{__html:Ie}})}),_("div",{className:"typing","aria-label":X(v.typingAria,{assistantName:G}),children:[_("span",{}),_("span",{}),_("span",{})]})]})]}),_("div",{className:"input-row",children:[_("textarea",{className:"input-field",placeholder:v.messagePlaceholder,value:Y,onInput:f=>q(f.target.value),onKeyDown:It,rows:1,disabled:H}),_("button",{className:"send-btn",type:"button","aria-label":v.sendAria,onClick:Ue,disabled:H||Y.trim().length===0,dangerouslySetInnerHTML:{__html:rn}})]})]})]})]})}function vt(){let e=window.CsConfig||window.AriaConfig;if(!e||!e.orgId){console.error("[Aria Widget] window.CsConfig.orgId is required. Widget aborted.");return}if(typeof document=="undefined"||!document.body){console.error("[Aria Widget] document.body unavailable. Widget aborted.");return}if(document.getElementById("cs-widget-host"))return;let t=document.createElement("div");t.id="cs-widget-host",t.style.all="initial",document.body.appendChild(t);let n=t.attachShadow({mode:"open"}),r=document.createElement("div");n.appendChild(r),at(_(cn,{config:e}),r),window.CsWidget={open:a=>{window.dispatchEvent(new CustomEvent("cs-widget:open",{detail:a||{}}))}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",vt):vt();})();
