function p(){}function U(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function H(){return Object.create(null)}function g(t){t.forEach(q)}function k(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function ht(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function V(t){return Object.keys(t).length===0}function O(t,...n){if(t==null)return p;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t){let n;return O(t,e=>n=e)(),n}function pt(t,n,e){t.$$.on_destroy.push(O(n,e))}function yt(t,n,e,i){if(t){const r=G(t,n,e,i);return t[0](r)}}function G(t,n,e,i){return t[1]&&i?U(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function xt(t,n,e,i,r,o){if(r){const s=G(n,e,i,o);t.p(s,r)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function $t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function vt(t){const n={};for(const e in t)n[e]=!0;return n}function wt(t){return t??""}function Et(t){return t&&k(t.destroy)?t.destroy:p}let E=!1;function X(){E=!0}function Y(){E=!1}function Z(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:Z(1,r,x=>n[e[x]].claim_order,l))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const o=[],s=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);u>=c;u--)s.push(n[u]);u--}for(;u>=0;u--)s.push(n[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function nt(t,n){if(E){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){t.insertBefore(n,e||null)}function it(t,n,e){E&&!e?nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Nt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function z(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function Tt(){return C(" ")}function At(){return C("")}function St(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function kt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function rt(t){return Array.from(t.childNodes)}function I(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,n,e,i,r=!1){I(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function W(t,n,e,i){return R(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];e[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Ct(t,n,e){return W(t,n,e,z)}function Mt(t,n,e){return W(t,n,e,F)}function st(t,n){return R(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function jt(t){return st(t," ")}function L(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Ht(t,n){const e=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",e);if(e===i)return new B(void 0,n);I(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new B(o,n)}function Lt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Bt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Dt(t,n,e){t.classList[e?"add":"remove"](n)}function ct(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=F(e.nodeName):this.e=z(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class B extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}}function Pt(t,n){return new t(n)}let y;function m(t){y=t}function N(){if(!y)throw new Error("Function called outside component initialization");return y}function qt(t){N().$$.on_mount.push(t)}function Ot(t){N().$$.after_update.push(t)}function Gt(t){N().$$.on_destroy.push(t)}function zt(){const t=N();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=ct(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function Ft(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],D=[],$=[],P=[],J=Promise.resolve();let A=!1;function K(){A||(A=!0,J.then(Q))}function It(){return K(),J}function S(t){$.push(t)}const T=new Set;let d=0;function Q(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,m(n),ot(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;D.length;)D.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];T.has(e)||(T.add(e),e())}$.length=0}while(h.length);for(;P.length;)P.pop()();A=!1,T.clear(),m(t)}function ot(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const v=new Set;let _;function Rt(){_={r:0,c:[],p:_}}function Wt(){_.r||g(_.c),_=_.p}function ut(t,n){t&&t.i&&(v.delete(t),t.i(n))}function Jt(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Kt(t){t&&t.c()}function Qt(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const s=t.$$.on_mount.map(q).filter(k);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),o.forEach(S)}function ft(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(h.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ut(t,n,e,i,r,o,s,u=[-1]){const c=y;m(t);const l=t.$$={fragment:null,ctx:[],props:o,update:p,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,x,...M)=>{const j=M.length?M[0]:x;return l.ctx&&r(l.ctx[a],l.ctx[a]=j)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](j),f&&_t(t,a)),x}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){X();const a=rt(n.target);l.fragment&&l.fragment.l(a),a.forEach(w)}else l.fragment&&l.fragment.c();n.intro&&ut(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),Y(),Q()}m(c)}class Vt{$destroy(){ft(this,1),this.$destroy=p}$on(n,e){if(!k(e))return p;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!V(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{$t as $,ft as A,It as B,p as C,yt as D,xt as E,bt as F,gt as G,nt as H,pt as I,ht as J,B as K,Ht as L,zt as M,F as N,Mt as O,Dt as P,St as Q,Nt as R,Vt as S,Gt as T,Et as U,k as V,g as W,wt as X,mt as Y,vt as Z,U as _,Tt as a,Ft as a0,it as b,jt as c,Wt as d,At as e,ut as f,Rt as g,w as h,Ut as i,Ot as j,z as k,Ct as l,rt as m,kt as n,qt as o,Bt as p,C as q,st as r,dt as s,Jt as t,Lt as u,D as v,Pt as w,Kt as x,Qt as y,at as z};
