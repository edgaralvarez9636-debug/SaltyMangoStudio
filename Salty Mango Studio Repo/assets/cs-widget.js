"use strict";(()=>{var _e,b,Ke,St,j,qe,Ye,Ze,ve,oe,X,Je,ke,ye,xe,It,se={},le=[],Tt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ue=Array.isArray;function W(e,t){for(var n in t)e[n]=t[n];return e}function Ce(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Pt(e,t,n){var i,a,r,s={};for(r in t)r=="key"?i=t[r]:r=="ref"?a=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?_e.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return ie(e,s,i,a,null)}function ie(e,t,n,i,a){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a==null?++Ke:a,__i:-1,__u:0};return a==null&&b.vnode!=null&&b.vnode(r),r}function U(e){return e.children}function ae(e,t){this.props=e,this.context=t}function V(e,t){if(t==null)return e.__?V(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?V(e):null}function Dt(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,i=[],a=[],r=W({},t);r.__v=t.__v+1,b.vnode&&b.vnode(r),Ne(e.__P,r,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,i,n==null?V(t):n,!!(32&t.__u),a),r.__v=t.__v,r.__.__k[r.__i]=r,tt(i,r,a),t.__e=t.__=null,r.__e!=n&&Xe(r)}}function Xe(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Xe(e)}function ze(e){(!e.__d&&(e.__d=!0)&&j.push(e)&&!ce.__r++||qe!=b.debounceRendering)&&((qe=b.debounceRendering)||Ye)(ce)}function ce(){try{for(var e,t=1;j.length;)j.length>t&&j.sort(Ze),e=j.shift(),t=j.length,Dt(e)}finally{j.length=ce.__r=0}}function Qe(e,t,n,i,a,r,s,c,p,l,g){var o,f,u,N,A,x,v,y=i&&i.__k||le,T=t.length;for(p=Mt(n,t,y,p,T),o=0;o<T;o++)(u=n.__k[o])!=null&&(f=u.__i!=-1&&y[u.__i]||se,u.__i=o,x=Ne(e,u,f,a,r,s,c,p,l,g),N=u.__e,u.ref&&f.ref!=u.ref&&(f.ref&&Le(f.ref,null,u),g.push(u.ref,u.__c||N,u)),A==null&&N!=null&&(A=N),(v=!!(4&u.__u))||f.__k===u.__k?(p=et(u,p,e,v),v&&f.__e&&(f.__e=null)):typeof u.type=="function"&&x!==void 0?p=x:N&&(p=N.nextSibling),u.__u&=-7);return n.__e=A,p}function Mt(e,t,n,i,a){var r,s,c,p,l,g=n.length,o=g,f=0;for(e.__k=new Array(a),r=0;r<a;r++)(s=t[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[r]=ie(null,s,null,null,null):ue(s)?s=e.__k[r]=ie(U,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[r]=ie(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[r]=s,p=r+f,s.__=e,s.__b=e.__b+1,c=null,(l=s.__i=Rt(s,n,p,o))!=-1&&(o--,(c=n[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(a>g?f--:a<g&&f++),typeof s.type!="function"&&(s.__u|=4)):l!=p&&(l==p-1?f--:l==p+1?f++:(l>p?f--:f++,s.__u|=4))):e.__k[r]=null;if(o)for(r=0;r<g;r++)(c=n[r])!=null&&(2&c.__u)==0&&(c.__e==i&&(i=V(c)),rt(c,c));return i}function et(e,t,n,i){var a,r;if(typeof e.type=="function"){for(a=e.__k,r=0;a&&r<a.length;r++)a[r]&&(a[r].__=e,t=et(a[r],t,n,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=V(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Rt(e,t,n,i){var a,r,s,c=e.key,p=e.type,l=t[n],g=l!=null&&(2&l.__u)==0;if(l===null&&c==null||g&&c==l.key&&p==l.type)return n;if(i>(g?1:0)){for(a=n-1,r=n+1;a>=0||r<t.length;)if((l=t[s=a>=0?a--:r++])!=null&&(2&l.__u)==0&&c==l.key&&p==l.type)return s}return-1}function Ge(e,t,n){t[0]=="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||Tt.test(t)?n:n+"px"}function re(e,t,n,i,a){var r,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Ge(e.style,t,"");if(n)for(t in n)i&&n[t]==i[t]||Ge(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")r=t!=(t=t.replace(Je,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i?n[X]=i[X]:(n[X]=ke,e.addEventListener(t,r?xe:ye,r)):e.removeEventListener(t,r?xe:ye,r);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n==null?"":n;break e}catch(c){}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ve(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[oe]==null)t[oe]=ke++;else if(t[oe]<n[X])return;return n(b.event?b.event(t):t)}}}function Ne(e,t,n,i,a,r,s,c,p,l){var g,o,f,u,N,A,x,v,y,T,S,D,Z,P,q,I=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(p=!!(32&n.__u),r=[c=t.__e=n.__e]),(g=b.__b)&&g(t);e:if(typeof I=="function")try{if(v=t.props,y=I.prototype&&I.prototype.render,T=(g=I.contextType)&&i[g.__c],S=g?T?T.props.value:g.__:i,n.__c?x=(o=t.__c=n.__c).__=o.__E:(y?t.__c=o=new I(v,S):(t.__c=o=new ae(v,S),o.constructor=I,o.render=Wt),T&&T.sub(o),o.state||(o.state={}),o.__n=i,f=o.__d=!0,o.__h=[],o._sb=[]),y&&o.__s==null&&(o.__s=o.state),y&&I.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=W({},o.__s)),W(o.__s,I.getDerivedStateFromProps(v,o.__s))),u=o.props,N=o.state,o.__v=t,f)y&&I.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),y&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(y&&I.getDerivedStateFromProps==null&&v!==u&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,S),t.__v==n.__v||!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,S)===!1){t.__v!=n.__v&&(o.props=v,o.state=o.__s,o.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(M){M&&(M.__=t)}),le.push.apply(o.__h,o._sb),o._sb=[],o.__h.length&&s.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,S),y&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(u,N,A)})}if(o.context=S,o.props=v,o.__P=e,o.__e=!1,D=b.__r,Z=0,y)o.state=o.__s,o.__d=!1,D&&D(t),g=o.render(o.props,o.state,o.context),le.push.apply(o.__h,o._sb),o._sb=[];else do o.__d=!1,D&&D(t),g=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++Z<25);o.state=o.__s,o.getChildContext!=null&&(i=W(W({},i),o.getChildContext())),y&&!f&&o.getSnapshotBeforeUpdate!=null&&(A=o.getSnapshotBeforeUpdate(u,N)),P=g!=null&&g.type===U&&g.key==null?nt(g.props.children):g,c=Qe(e,ue(P)?P:[P],t,n,i,a,r,s,c,p,l),o.base=t.__e,t.__u&=-161,o.__h.length&&s.push(o),x&&(o.__E=o.__=null)}catch(M){if(t.__v=null,p||r!=null)if(M.then){for(t.__u|=p?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;r[r.indexOf(c)]=null,t.__e=c}else{for(q=r.length;q--;)Ce(r[q]);we(t)}else t.__e=n.__e,t.__k=n.__k,M.then||we(t);b.__e(M,t,n)}else r==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=Ht(n.__e,t,n,i,a,r,s,p,l);return(g=b.diffed)&&g(t),128&t.__u?void 0:c}function we(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(we))}function tt(e,t,n){for(var i=0;i<n.length;i++)Le(n[i],n[++i],n[++i]);b.__c&&b.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(r){r.call(a)})}catch(r){b.__e(r,a.__v)}})}function nt(e){return typeof e!="object"||e==null||e.__b>0?e:ue(e)?e.map(nt):W({},e)}function Ht(e,t,n,i,a,r,s,c,p){var l,g,o,f,u,N,A,x=n.props||se,v=t.props,y=t.type;if(y=="svg"?a="http://www.w3.org/2000/svg":y=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((u=r[l])&&"setAttribute"in u==!!y&&(y?u.localName==y:u.nodeType==3)){e=u,r[l]=null;break}}if(e==null){if(y==null)return document.createTextNode(v);e=document.createElementNS(a,y,v.is&&v),c&&(b.__m&&b.__m(t,r),c=!1),r=null}if(y==null)x===v||c&&e.data==v||(e.data=v);else{if(r=r&&_e.call(e.childNodes),!c&&r!=null)for(x={},l=0;l<e.attributes.length;l++)x[(u=e.attributes[l]).name]=u.value;for(l in x)u=x[l],l=="dangerouslySetInnerHTML"?o=u:l=="children"||l in v||l=="value"&&"defaultValue"in v||l=="checked"&&"defaultChecked"in v||re(e,l,null,u,a);for(l in v)u=v[l],l=="children"?f=u:l=="dangerouslySetInnerHTML"?g=u:l=="value"?N=u:l=="checked"?A=u:c&&typeof u!="function"||x[l]===u||re(e,l,u,x[l],a);if(g)c||o&&(g.__html==o.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(o&&(e.innerHTML=""),Qe(t.type=="template"?e.content:e,ue(f)?f:[f],t,n,i,y=="foreignObject"?"http://www.w3.org/1999/xhtml":a,r,s,r?r[0]:n.__k&&V(n,0),c,p),r!=null)for(l=r.length;l--;)Ce(r[l]);c||(l="value",y=="progress"&&N==null?e.removeAttribute("value"):N!=null&&(N!==e[l]||y=="progress"&&!N||y=="option"&&N!=x[l])&&re(e,l,N,x[l],a),l="checked",A!=null&&A!=e[l]&&re(e,l,A,x[l],a))}return e}function Le(e,t,n){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(a){b.__e(a,n)}}function rt(e,t,n){var i,a;if(b.unmount&&b.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||Le(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){b.__e(r,t)}i.base=i.__P=null}if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&rt(i[a],t,n||typeof e.type!="function");n||Ce(e.__e),e.__c=e.__=e.__e=void 0}function Wt(e,t,n){return this.constructor(e,n)}function ot(e,t,n){var i,a,r,s;t==document&&(t=document.documentElement),b.__&&b.__(e,t),a=(i=typeof n=="function")?null:n&&n.__k||t.__k,r=[],s=[],Ne(t,e=(!i&&n||t).__k=Pt(U,null,[e]),a||se,se,t.namespaceURI,!i&&n?[n]:a?null:t.firstChild?_e.call(t.childNodes):null,r,!i&&n?n:a?a.__e:t.firstChild,i,s),tt(r,e,s)}_e=le.slice,b={__e:function(e,t,n,i){for(var a,r,s;t=t.__;)if((a=t.__c)&&!a.__)try{if((r=a.constructor)&&r.getDerivedStateFromError!=null&&(a.setState(r.getDerivedStateFromError(e)),s=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,i||{}),s=a.__d),s)return a.__E=a}catch(c){e=c}throw e}},Ke=0,St=function(e){return e!=null&&e.constructor===void 0},ae.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=W({},this.state),typeof e=="function"&&(e=e(W({},n),this.props)),e&&W(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ze(this))},ae.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ze(this))},ae.prototype.render=U,j=[],Ye=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ze=function(e,t){return e.__v.__b-t.__v.__b},ce.__r=0,ve=Math.random().toString(8),oe="__d"+ve,X="__a"+ve,Je=/(PointerCapture)$|Capture$/i,ke=0,ye=Ve(!1),xe=Ve(!0),It=0;var Q,C,Ae,it,pe=0,pt=[],L=b,at=L.__b,st=L.__r,lt=L.diffed,ct=L.__c,_t=L.unmount,ut=L.__;function Se(e,t){L.__h&&L.__h(C,e,pe||t),pe=0;var n=C.__H||(C.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function E(e){return pe=1,Ot(ft,e)}function Ot(e,t,n){var i=Se(Q++,2);if(i.t=e,!i.__c&&(i.__=[n?n(t):ft(void 0,t),function(c){var p=i.__N?i.__N[0]:i.__[0],l=i.t(p,c);p!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=C,!C.__f)){var a=function(c,p,l){if(!i.__c.__H)return!0;var g=i.__c.__H.__.filter(function(f){return f.__c});if(g.every(function(f){return!f.__N}))return!r||r.call(this,c,p,l);var o=i.__c.props!==c;return g.some(function(f){if(f.__N){var u=f.__[0];f.__=f.__N,f.__N=void 0,u!==f.__[0]&&(o=!0)}}),r&&r.call(this,c,p,l)||o};C.__f=!0;var r=C.shouldComponentUpdate,s=C.componentWillUpdate;C.componentWillUpdate=function(c,p,l){if(this.__e){var g=r;r=void 0,a(c,p,l),r=g}s&&s.call(this,c,p,l)},C.shouldComponentUpdate=a}return i.__N||i.__}function K(e,t){var n=Se(Q++,3);!L.__s&&gt(n.__H,t)&&(n.__=e,n.u=t,C.__H.__h.push(n))}function ge(e){return pe=5,$t(function(){return{current:e}},[])}function $t(e,t){var n=Se(Q++,7);return gt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function jt(){for(var e;e=pt.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(de),t.__h.some(Ee),t.__h=[]}catch(n){t.__h=[],L.__e(n,e.__v)}}}L.__b=function(e){C=null,at&&at(e)},L.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ut&&ut(e,t)},L.__r=function(e){st&&st(e),Q=0;var t=(C=e.__c).__H;t&&(Ae===C?(t.__h=[],C.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(de),t.__h.some(Ee),t.__h=[],Q=0)),Ae=C},L.diffed=function(e){lt&&lt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(pt.push(t)!==1&&it===L.requestAnimationFrame||((it=L.requestAnimationFrame)||Ut)(jt)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Ae=C=null},L.__c=function(e,t){t.some(function(n){try{n.__h.some(de),n.__h=n.__h.filter(function(i){return!i.__||Ee(i)})}catch(i){t.some(function(a){a.__h&&(a.__h=[])}),t=[],L.__e(i,n.__v)}}),ct&&ct(e,t)},L.unmount=function(e){_t&&_t(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(i){try{de(i)}catch(a){t=a}}),n.__H=void 0,t&&L.__e(t,n.__v))};var dt=typeof requestAnimationFrame=="function";function Ut(e){var t,n=function(){clearTimeout(i),dt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,35);dt&&(t=requestAnimationFrame(n))}function de(e){var t=C,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),C=t}function Ee(e){var t=C;e.__c=e.__(),C=t}function gt(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}function ft(e,t){return typeof t=="function"?t(e):t}var Bt=0;function d(e,t,n,i,a,r){t||(t={});var s,c,p=t;if("ref"in p)for(c in p={},t)c=="ref"?s=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Bt,__i:-1,__u:0,__source:a,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)p[c]===void 0&&(p[c]=s[c]);return b.vnode&&b.vnode(l),l}var Ft={es:{onboardingTitle:"Antes de comenzar",onboardingSubtitle:"Cu\xE9ntanos qui\xE9n eres para que {assistantName} pueda atenderte personalmente",nameLabel:"\xBFC\xF3mo te llamas?",namePlaceholder:"Tu nombre",whatsappLabel:"\xBFTu WhatsApp?",whatsappPlaceholder:"787-555-1234",emailLabel:"\xBFTu email?",emailPlaceholder:"tu@email.com",submitButton:"Hablar con {assistantName}",submitButtonLoading:"Conectando...",disclaimer:"Tus datos solo se usan para tu atenci\xF3n personalizada.",messagePlaceholder:"Escribe tu mensaje...",welcomeBack:"\xA1Bienvenido(a) de vuelta! \xBFEn qu\xE9 te ayudo hoy?",closeAria:"Cerrar",openChatAria:"Abrir chat con {assistantName}",onboardingDialogAria:"Registro inicial con {assistantName}",chatDialogAria:"Chat con {assistantName}",typingAria:"{assistantName} est\xE1 escribiendo",sendAria:"Enviar",errorNameRequired:"Pon tu nombre completo.",errorEmailInvalid:"Revisa tu email.",errorEmailOptional:"Si pones email, debe ser v\xE1lido.",errorWhatsappLength:"WhatsApp debe tener al menos 10 d\xEDgitos.",errorAlreadyRegistered:"Ya tienes una cuenta con nosotros. Para retomar tu conversaci\xF3n, comun\xEDcate por WhatsApp.",errorRateLimit:"Demasiados intentos. Intenta de nuevo en una hora.",errorGeneric:"Hubo un problema. Intenta de nuevo en un momento.",errorChatGeneric:"Hubo un problema. Intenta de nuevo.",errorNetwork:"No pudimos conectar. Revisa tu internet e intenta de nuevo.",defaultOrgName:"tu negocio",defaultAssistantName:"Asistente"},en:{onboardingTitle:"Before we start",onboardingSubtitle:"Tell us a bit about yourself so {assistantName} can assist you personally",nameLabel:"What's your name?",namePlaceholder:"Your name",whatsappLabel:"WhatsApp number?",whatsappPlaceholder:"+1 555 123 4567",emailLabel:"Your email?",emailPlaceholder:"you@email.com",submitButton:"Talk to {assistantName}",submitButtonLoading:"Connecting...",disclaimer:"Your data is only used to provide you personalized service.",messagePlaceholder:"Write your message...",welcomeBack:"Welcome back! How can I help you today?",closeAria:"Close",openChatAria:"Open chat with {assistantName}",onboardingDialogAria:"Initial registration with {assistantName}",chatDialogAria:"Chat with {assistantName}",typingAria:"{assistantName} is typing",sendAria:"Send",errorNameRequired:"Please enter your full name.",errorEmailInvalid:"Please check your email.",errorEmailOptional:"If you provide an email, it must be valid.",errorWhatsappLength:"WhatsApp must be at least 10 digits.",errorAlreadyRegistered:"Looks like you already have an account. Please reach out via WhatsApp to continue your conversation.",errorRateLimit:"Too many attempts. Please try again in an hour.",errorGeneric:"Something went wrong. Please try again in a moment.",errorChatGeneric:"Something went wrong. Please try again.",errorNetwork:"Couldn't connect. Please check your internet and try again.",defaultOrgName:"your business",defaultAssistantName:"Assistant"}};function qt(e,t=null){let n=(typeof navigator!="undefined"&&navigator.language||"").toLowerCase();if(n.startsWith("es"))return"es";if(n.startsWith("en"))return"en";if(e.defaultLocale==="es"||e.defaultLocale==="en")return e.defaultLocale;if(t){let i=t.toLowerCase();if(i.startsWith("en"))return"en";if(i.startsWith("es"))return"es"}return"es"}function Y(e,t){return Object.entries(t).reduce((n,[i,a])=>n.split(`{${i}}`).join(a),e)}var zt=typeof window!="undefined"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname==="0.0.0.0"),bt=zt?"http://localhost:4001":"https://api.vectorai.digital",Gt=`${bt}/api/public/cs/web-chat`,Vt=`${bt}/api/public/cs/onboarding`,Kt="#ff8da1",mt={bgPanel:"#1a1418",bgHeader:"#221920",bgInput:"#15101a",bgAgent:"#2a2128",bgAria:"#2a2128",border:"rgba(255, 141, 161, 0.15)",borderStrong:"rgba(255, 141, 161, 0.25)",borderInput:"rgba(255, 141, 161, 0.18)",textLight:"#f5f0eb",textMuted:"#d4c8d0",textSoft:"#b8a9b3",textDark:"#1a0d10",error:"#ff7a8c"},Ie='<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2 L13.5 9 L21 10.5 L13.5 12 L12 19 L10.5 12 L3 10.5 L10.5 9 Z M19 4 L19.7 6.3 L22 7 L19.7 7.7 L19 10 L18.3 7.7 L16 7 L18.3 6.3 Z"/></svg>',Yt='<svg viewBox="0 0 24 24" width="28" height="28" fill="#1a0d10" aria-hidden="true"><path d="M12 2 L13.5 9 L21 10.5 L13.5 12 L12 19 L10.5 12 L3 10.5 L10.5 9 Z M19 4 L19.7 6.3 L22 7 L19.7 7.7 L19 10 L18.3 7.7 L16 7 L18.3 6.3 Z"/></svg>',Zt='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',Jt='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';function Xt(){let[e,t]=E(typeof window!="undefined"&&window.innerWidth<480);return K(()=>{let n=()=>t(window.innerWidth<480);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function Qt(e,t){if(e!=null&&e.message&&typeof e.message=="string")return e.message;switch(e==null?void 0:e.error){case"invalid_name":return t.errorNameRequired;case"invalid_email":return t.errorEmailInvalid;case"invalid_whatsapp":return t.errorWhatsappLength;case"email_exists":return t.errorAlreadyRegistered;case"rate_limit_hourly_exceeded":return t.errorRateLimit;default:return t.errorGeneric}}function en({config:e}){var je,Ue,Be,Fe;let t=e.accent||Kt,n=e.endpoint||Gt,i=e.onboardingEndpoint||Vt,a=e.onboardingConfigEndpoint||i.replace("/onboarding","/onboarding-config"),r=e.iconUrl,s={...mt,...e.theme||{}},c=(Fe=(Be=(je=e.theme)==null?void 0:je.bgAgent)!=null?Be:(Ue=e.theme)==null?void 0:Ue.bgAria)!=null?Fe:mt.bgAgent,p=Xt(),l=`cs_conversation_id_${e.orgId}`,g=`cs_contact_id_${e.orgId}`,[o,f]=E(()=>{try{return localStorage.getItem(l)||""}catch(m){return""}}),[u,N]=E(()=>{try{return localStorage.getItem(g)||""}catch(m){return""}}),[A,x]=E("closed"),[v,y]=E(""),[T,S]=E([]),[D,Z]=E(""),[P,q]=E(!1),[I,M]=E(""),[fe,Te]=E(""),[me,Pe]=E(""),[De,O]=E(null),[B,ee]=E(!1),[R,vt]=E(["name","whatsapp","email"]),[tn,yt]=E(!1),[he,xt]=E({assistant_name:null,business_name_public:null,assistant_language:null}),wt=qt(e,he.assistant_language),h=Ft[wt],kt=e.orgName||he.business_name_public||h.defaultOrgName,F=e.assistantName||he.assistant_name||h.defaultAssistantName,Ct=e.welcomeBackMessage||h.welcomeBack,te=ge(null);K(()=>{let m=new AbortController,w=setTimeout(()=>m.abort(),2e3);return fetch(a,{method:"GET",credentials:"omit",signal:m.signal}).then(_=>{if(clearTimeout(w),!_.ok)throw new Error(`config_fetch_${_.status}`);return _.json()}).then(_=>{Array.isArray(_==null?void 0:_.onboarding_required_fields)&&vt(_.onboarding_required_fields),xt({assistant_name:typeof(_==null?void 0:_.assistant_name)=="string"?_.assistant_name:null,business_name_public:typeof(_==null?void 0:_.business_name_public)=="string"?_.business_name_public:null,assistant_language:typeof(_==null?void 0:_.assistant_language)=="string"?_.assistant_language:null})}).catch(_=>{console.warn("[AriaWidget] config fetch failed, using fallback:",(_==null?void 0:_.message)||_)}).finally(()=>{yt(!0)}),()=>{clearTimeout(w),m.abort()}},[a]),K(()=>{te.current&&(te.current.scrollTop=te.current.scrollHeight)},[T,P,A]);let z=ge(null),J=ge(new Set),Me=n.replace("/web-chat","/web-chat/history");K(()=>{if(A!=="chatting"||!o){z.current=null,J.current=new Set;return}z.current||(z.current=new Date().toISOString());let m=setInterval(async()=>{try{let w=z.current,_=w?`&since=${encodeURIComponent(w)}`:"",H=`${Me}?conversation_id=${encodeURIComponent(o)}${_}`,$=await fetch(H,{method:"GET",credentials:"omit"});if(!$.ok)return;let k=await $.json();if(!(k!=null&&k.success))return;let ne=(k.messages||[]).filter(G=>G.role==="assistant"&&!J.current.has(G.id));ne.length>0&&(ne.forEach(G=>J.current.add(G.id)),S(G=>[...G,...ne.map(Et=>({role:"agent",text:Et.content}))])),k.server_time&&(z.current=k.server_time)}catch(w){console.warn("[CsWidget] polling history failed:",(w==null?void 0:w.message)||w)}},25e3);return()=>clearInterval(m)},[A,o,Me]);function Re(){o&&u?(T.length===0&&S([{role:"agent",text:Ct}]),x("chatting")):x("onboarding")}function Nt(){x("closed")}K(()=>{function m(w){let _=w.detail||{};typeof _.service=="string"&&_.service.trim()&&y(_.service.trim()),Re()}return window.addEventListener("cs-widget:open",m),()=>window.removeEventListener("cs-widget:open",m)},[o,u]);async function He(){if(B)return;O(null);let m=I.trim();if(R.includes("name")&&m.length<2){O(h.errorNameRequired);return}let w=me.trim().toLowerCase(),_=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(R.includes("email")){if(!_.test(w)){O(h.errorEmailInvalid);return}}else if(w&&!_.test(w)){O(h.errorEmailOptional);return}let H=fe.replace(/\D/g,"");if(R.includes("whatsapp")&&H.length<10){O(h.errorWhatsappLength);return}ee(!0);try{let k=await(await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:m,whatsapp:H,email:w,locale:typeof navigator!="undefined"?navigator.language:void 0,requested_service:v||void 0})})).json();if(k!=null&&k.success&&k.conversation_id&&k.contact_id&&k.greeting){try{localStorage.setItem(l,k.conversation_id),localStorage.setItem(g,k.contact_id)}catch(ne){}f(k.conversation_id),N(k.contact_id),k.greeting_message_id&&J.current.add(k.greeting_message_id),S([{role:"agent",text:k.greeting}]),x("chatting"),M(""),Te(""),Pe(""),O(null),ee(!1);return}O(Qt(k,h)),ee(!1)}catch($){O(h.errorNetwork),ee(!1)}}function We(){return!(R.includes("name")&&!I.trim()||R.includes("whatsapp")&&!fe.trim()||R.includes("email")&&!me.trim())}function be(m){m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),!B&&We()&&He())}async function Oe(){let m=D.trim();if(!(!m||P)){if(!o){x("onboarding");return}S(w=>[...w,{role:"user",text:m}]),Z(""),q(!0);try{let _=await(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({conversation_id:o,organization_id:e.orgId,message:m,locale:typeof navigator!="undefined"?navigator.language:void 0})})).json();if(_!=null&&_.conversation_id&&_.conversation_id!==o){f(_.conversation_id);try{localStorage.setItem(l,_.conversation_id)}catch(H){}}if(_!=null&&_.success&&(_==null?void 0:_.manual_control_active)===!0){let H=_.info||"Tu mensaje fue recibido. Te responderemos en un momento.";S($=>[...$,{role:"agent",text:H}])}else{let H=_&&_.response||h.errorChatGeneric,$=_&&_.success?"agent":"system";_!=null&&_.success&&_.response_message_id&&J.current.add(_.response_message_id),S(k=>[...k,{role:$,text:H}])}z.current=new Date().toISOString()}catch(w){S(_=>[..._,{role:"system",text:h.errorChatGeneric}])}finally{q(!1)}}}function Lt(m){m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Oe())}let At=`
    :host { all: initial; }
    * { box-sizing: border-box; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
    .root {
      --accent: ${t};
      --bg-panel: ${s.bgPanel};
      --bg-header: ${s.bgHeader};
      --bg-input: ${s.bgInput};
      --bg-agent: ${c};
      --text-light: ${s.textLight};
      --text-dark: ${s.textDark};
      --text-muted: ${s.textMuted};
      --text-soft: ${s.textSoft};
      --text-faint: #8a7a85;
      --error: ${s.error};
      --border: ${s.border};
      --border-strong: ${s.borderStrong};
      --border-input: ${s.borderInput};
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
      background: var(--accent);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2);
      transition: transform 160ms ease, box-shadow 160ms ease;
      padding: 0;
      overflow: hidden;
    }
    .fab:hover { transform: scale(1.06); box-shadow: 0 12px 28px rgba(0, 0, 0, 0.42), 0 4px 12px rgba(0, 0, 0, 0.25); }
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
    }

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
  `,$e=()=>d("div",{className:"hdr",children:[d("div",{className:"hdr-avatar",dangerouslySetInnerHTML:{__html:Ie}}),d("div",{className:"hdr-meta",children:[d("div",{className:"hdr-name",children:F}),d("div",{className:"hdr-status",children:kt})]}),d("button",{className:"hdr-close",type:"button","aria-label":h.closeAria,onClick:Nt,dangerouslySetInnerHTML:{__html:Zt}})]});return d(U,{children:[d("style",{dangerouslySetInnerHTML:{__html:At}}),d("div",{className:"root",children:[A==="closed"&&d("button",{className:"fab",type:"button","aria-label":Y(h.openChatAria,{assistantName:F}),onClick:Re,children:r?d("img",{src:r,alt:""}):d("span",{dangerouslySetInnerHTML:{__html:Yt}})}),A==="onboarding"&&d("div",{className:`panel${p?" mobile":""}`,role:"dialog","aria-label":Y(h.onboardingDialogAria,{assistantName:F}),children:[$e(),d("div",{className:"onb",children:[d("h2",{className:"onb-title",children:h.onboardingTitle}),d("p",{className:"onb-subtitle",children:Y(h.onboardingSubtitle,{assistantName:F})}),d("div",{className:"onb-fields",children:[R.includes("name")&&d("div",{children:[d("label",{className:"onb-label",htmlFor:"cs-onb-name",children:h.nameLabel}),d("input",{id:"cs-onb-name",className:"onb-input",type:"text",placeholder:h.namePlaceholder,value:I,onInput:m=>M(m.currentTarget.value),onKeyDown:be,disabled:B,autoComplete:"name"})]}),R.includes("whatsapp")&&d("div",{children:[d("label",{className:"onb-label",htmlFor:"cs-onb-whatsapp",children:h.whatsappLabel}),d("input",{id:"cs-onb-whatsapp",className:"onb-input",type:"tel",placeholder:h.whatsappPlaceholder,value:fe,onInput:m=>Te(m.currentTarget.value),onKeyDown:be,disabled:B,autoComplete:"tel"})]}),R.includes("email")&&d("div",{children:[d("label",{className:"onb-label",htmlFor:"cs-onb-email",children:h.emailLabel}),d("input",{id:"cs-onb-email",className:"onb-input",type:"email",placeholder:h.emailPlaceholder,value:me,onInput:m=>Pe(m.currentTarget.value),onKeyDown:be,disabled:B,autoComplete:"email"})]})]}),De&&d("div",{className:"onb-error",children:De}),d("button",{className:"onb-submit",type:"button",onClick:He,disabled:B||!We(),children:B?h.submitButtonLoading:Y(h.submitButton,{assistantName:F})}),d("p",{className:"onb-disclaimer",children:h.disclaimer})]})]}),A==="chatting"&&d("div",{className:`panel${p?" mobile":""}`,role:"dialog","aria-label":Y(h.chatDialogAria,{assistantName:F}),children:[$e(),d("div",{className:"msgs",ref:te,children:[T.map((m,w)=>d("div",{className:`msg-row ${m.role}`,children:[m.role==="agent"&&d("div",{className:"msg-avatar",dangerouslySetInnerHTML:{__html:Ie}}),d("div",{className:`bubble ${m.role}`,children:m.text})]},w)),P&&d("div",{className:"msg-row agent",children:[d("div",{className:"msg-avatar",dangerouslySetInnerHTML:{__html:Ie}}),d("div",{className:"typing","aria-label":Y(h.typingAria,{assistantName:F}),children:[d("span",{}),d("span",{}),d("span",{})]})]})]}),d("div",{className:"input-row",children:[d("textarea",{className:"input-field",placeholder:h.messagePlaceholder,value:D,onInput:m=>Z(m.target.value),onKeyDown:Lt,rows:1,disabled:P}),d("button",{className:"send-btn",type:"button","aria-label":h.sendAria,onClick:Oe,disabled:P||D.trim().length===0,dangerouslySetInnerHTML:{__html:Jt}})]})]})]})]})}function ht(){let e=window.CsConfig||window.AriaConfig;if(!e||!e.orgId){console.error("[Aria Widget] window.CsConfig.orgId is required. Widget aborted.");return}if(typeof document=="undefined"||!document.body){console.error("[Aria Widget] document.body unavailable. Widget aborted.");return}if(document.getElementById("cs-widget-host"))return;let t=document.createElement("div");t.id="cs-widget-host",t.style.all="initial",document.body.appendChild(t);let n=t.attachShadow({mode:"open"}),i=document.createElement("div");n.appendChild(i),ot(d(en,{config:e}),i),window.CsWidget={open:a=>{window.dispatchEvent(new CustomEvent("cs-widget:open",{detail:a||{}}))}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ht):ht();})();
