/**
 * @license
 * Lo-Dash 1.1.1 (Custom Build) lodash.com/license
 * Build: `lodash modern -o ./dist/lodash.js`
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */
;(function(n){function t(r){function a(n){return n&&typeof n=="object"&&!ae(n)&&Ut.call(n,"__wrapped__")?n:new z(n)}function $(n,t,e){var r=n.length,u=r-t>=e;if(u){var a={};for(e=t-1;++e<r;){var o=$t(n[e]);(Ut.call(a,o)?a[o]:a[o]=[]).push(n[e])}}return function(e){if(u){var r=$t(e);return Ut.call(a,r)&&-1<gt(a[r],e)}return-1<gt(n,e,t)}}function q(n){return n.charCodeAt(0)}function B(n,t){var e=n.b,r=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1
}return e<r?-1:1}function F(n,t,e,r){function u(){var r=arguments,c=o?this:t;return a||(n=t[i]),e.length&&(r=r.length?(r=M(r),f?r.concat(e):e.concat(r)):e),this instanceof u?(P.prototype=n.prototype,c=new P,P.prototype=null,r=n.apply(c,r),W(r)?r:c):n.apply(c,r)}var a=Q(n),o=!e,i=t;if(o){var f=r;e=t}else if(!a){if(!r)throw new qt;t=n}return u}function R(){for(var n,t={b:"k(m)",c:"",e:"m",f:"",h:"",i:!0,j:!!oe},e=0;n=arguments[e];e++)for(var r in n)t[r]=n[r];return n=t.a,t.d=/^[^,]+/.exec(n)[0],e=Nt,r="var i,m="+t.d+",u="+t.e+";if(!m)return u;"+t.h+";",t.b&&(r+="var n=m.length;i=-1;if("+t.b+"){while(++i<n){"+t.f+"}}else{"),t.i&&t.j?r+="var s=-1,t=r[typeof m]?o(m):[],n=t.length;while(++s<n){i=t[s];"+t.f+"}":(r+="for(i in m){",t.i&&(r+="if(",t.i&&(r+="h.call(m,i)"),r+="){"),r+=t.f+";",t.i&&(r+="}"),r+="}"),t.b&&(r+="}"),r+=t.c+";return u",e("h,j,k,l,o,p,r","return function("+n+"){"+r+"}")(Ut,V,ae,Y,oe,a,I)
}function T(n){return"\\"+S[n]}function D(n){return ie[n]}function z(n){this.__wrapped__=n}function P(){}function K(n){var t=!1;if(!n||Jt.call(n)!=x)return t;var e=n.constructor;return(Q(e)?e instanceof e:ue.nodeClass||!isNode(n))?(pe(n,function(n,e){t=e}),!1===t||Ut.call(n,t)):t}function M(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Ct(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function U(n){return fe[n]}function V(n){return Jt.call(n)==_}function G(n,t,r,u,o,i){var f=n;
if(typeof t=="function"&&(u=r,r=t,t=!1),typeof r=="function"){if(r=typeof u=="undefined"?r:a.createCallback(r,u,1),f=r(f),typeof f!="undefined")return f;f=n}if(u=W(f)){var c=Jt.call(f);if(!E[c])return f;var l=ae(f)}if(!u||!t)return u?l?M(f):ce({},f):f;switch(u=re[c],c){case w:case j:return new u(+f);case C:case N:return new u(f);case O:return u(f.source,v.exec(f))}for(o||(o=[]),i||(i=[]),c=o.length;c--;)if(o[c]==n)return i[c];return f=l?u(f.length):{},l&&(Ut.call(n,"index")&&(f.index=n.index),Ut.call(n,"input")&&(f.input=n.input)),o.push(n),i.push(f),(l?at:se)(n,function(n,u){f[u]=G(n,t,r,e,o,i)
}),f}function H(n){var t=[];return pe(n,function(n,e){Q(n)&&t.push(e)}),t.sort()}function J(n){for(var t=-1,e=oe(n),r=e.length,u={};++t<r;){var a=e[t];u[n[a]]=a}return u}function L(n,t,e,r,u,o){var f=e===i;if(e&&!f){e=typeof r=="undefined"?e:a.createCallback(e,r,2);var c=e(n,t);if(typeof c!="undefined")return!!c}if(n===t)return 0!==n||1/n==1/t;var l=typeof n,p=typeof t;if(n===n&&(!n||"function"!=l&&"object"!=l)&&(!t||"function"!=p&&"object"!=p))return!1;if(null==n||null==t)return n===t;if(p=Jt.call(n),l=Jt.call(t),p==_&&(p=x),l==_&&(l=x),p!=l)return!1;
switch(p){case w:case j:return+n==+t;case C:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case O:case N:return n==$t(t)}if(l=p==k,!l){if(Ut.call(n,"__wrapped__")||Ut.call(t,"__wrapped__"))return L(n.__wrapped__||n,t.__wrapped__||t,e,r,u,o);if(p!=x)return!1;var p=n.constructor,s=t.constructor;if(p!=s&&(!Q(p)||!(p instanceof p&&Q(s)&&s instanceof s)))return!1}for(u||(u=[]),o||(o=[]),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,c=!0;if(u.push(n),o.push(t),l){if(p=n.length,v=t.length,c=v==n.length,!c&&!f)return c;
for(;v--;)if(l=p,s=t[v],f)for(;l--&&!(c=L(n[l],s,e,r,u,o)););else if(!(c=L(n[v],s,e,r,u,o)))break;return c}return pe(t,function(t,a,i){return Ut.call(i,a)?(v++,c=Ut.call(n,a)&&L(n[a],t,e,r,u,o)):void 0}),c&&!f&&pe(n,function(n,t,e){return Ut.call(e,t)?c=-1<--v:void 0}),c}function Q(n){return typeof n=="function"}function W(n){return n?I[typeof n]:!1}function X(n){return typeof n=="number"||Jt.call(n)==C}function Y(n){return typeof n=="string"||Jt.call(n)==N}function Z(n,t,e){var r=arguments,u=0,o=2;
if(!W(n))return n;if(e===i)var f=r[3],c=r[4],l=r[5];else c=[],l=[],typeof e!="number"&&(o=r.length),3<o&&"function"==typeof r[o-2]?f=a.createCallback(r[--o-1],r[o--],2):2<o&&"function"==typeof r[o-1]&&(f=r[--o]);for(;++u<o;)(ae(r[u])?at:se)(r[u],function(t,e){var r,u,a=t,o=n[e];if(t&&((u=ae(t))||ve(t))){for(a=c.length;a--;)if(r=c[a]==t){o=l[a];break}r||(o=u?ae(o)?o:[]:ve(o)?o:{},f&&(a=f(o,t),typeof a!="undefined"&&(o=a)),c.push(t),l.push(o),f||(o=Z(o,t,i,f,c,l)))}else f&&(a=f(o,t),typeof a=="undefined"&&(a=t)),typeof a!="undefined"&&(o=a);
n[e]=o});return n}function nt(n){for(var t=-1,e=oe(n),r=e.length,u=Ct(r);++t<r;)u[t]=n[e[t]];return u}function tt(n,t,e){var r=-1,u=n?n.length:0,a=!1;return e=(0>e?Zt(0,u+e):e)||0,typeof u=="number"?a=-1<(Y(n)?n.indexOf(t,e):gt(n,t,e)):se(n,function(n){return++r<e?void 0:!(a=n===t)}),a}function et(n,t,e){var r=!0;t=a.createCallback(t,e),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else se(n,function(n,e,u){return r=!!t(n,e,u)});return r}function rt(n,t,e){var r=[];
t=a.createCallback(t,e),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else se(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function ut(n,t,e){t=a.createCallback(t,e),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return se(n,function(n,e,r){return t(n,e,r)?(u=n,!1):void 0}),u}for(;++e<r;){var o=n[e];if(t(o,e,n))return o}}function at(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:a.createCallback(t,e),typeof u=="number")for(;++r<u&&!1!==t(n[r],r,n););else se(n,t);
return n}function ot(n,t,e){var r=-1,u=n?n.length:0;if(t=a.createCallback(t,e),typeof u=="number")for(var o=Ct(u);++r<u;)o[r]=t(n[r],r,n);else o=[],se(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function it(n,t,e){var r=-1/0,u=r;if(!t&&ae(n)){e=-1;for(var o=n.length;++e<o;){var i=n[e];i>u&&(u=i)}}else t=!t&&Y(n)?q:a.createCallback(t,e),at(n,function(n,e,a){e=t(n,e,a),e>r&&(r=e,u=n)});return u}function ft(n,t){var e=-1,r=n?n.length:0;if(typeof r=="number")for(var u=Ct(r);++e<r;)u[e]=n[e][t];return u||ot(n,t)
}function ct(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=a.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else se(n,function(n,r,a){e=u?(u=!1,n):t(e,n,r,a)});return e}function lt(n,t,e,r){var u=n?n.length:0,o=3>arguments.length;if(typeof u!="number")var i=oe(n),u=i.length;return t=a.createCallback(t,r,4),at(n,function(r,a,f){a=i?i[--u]:--u,e=o?(o=!1,n[a]):t(e,n[a],a,f)}),e}function pt(n,t,e){var r;t=a.createCallback(t,e),e=-1;var u=n?n.length:0;
if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else se(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function st(n,t,e){if(n){var r=0,u=n.length;if(typeof t!="number"&&null!=t){var o=-1;for(t=a.createCallback(t,e);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n[0];return M(n,0,ne(Zt(0,r),u))}}function vt(n,t,e,r){var u=-1,o=n?n.length:0,i=[];for(typeof t!="boolean"&&null!=t&&(r=e,e=t,t=!1),null!=e&&(e=a.createCallback(e,r));++u<o;)r=n[u],e&&(r=e(r,u,n)),ae(r)?Vt.apply(i,t?r:vt(r)):i.push(r);
return i}function gt(n,t,e){var r=-1,u=n?n.length:0;if(typeof e=="number")r=(0>e?Zt(0,u+e):e||0)-1;else if(e)return r=yt(n,t),n[r]===t?r:-1;for(;++r<u;)if(n[r]===t)return r;return-1}function ht(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=a.createCallback(t,e);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Zt(0,t);return M(n,r)}function yt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?a.createCallback(e,r,1):kt,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;return u}function mt(n,t,e,r){var u=-1,o=n?n.length:0,i=[],f=i;
typeof t!="boolean"&&null!=t&&(r=e,e=t,t=!1);var c=!t&&75<=o;if(c)var l={};for(null!=e&&(f=[],e=a.createCallback(e,r));++u<o;){r=n[u];var p=e?e(r,u,n):r;if(c)var s=$t(p),s=Ut.call(l,s)?!(f=l[s]):f=l[s]=[];(t?!u||f[f.length-1]!==p:s||0>gt(f,p))&&((e||c)&&f.push(p),i.push(r))}return i}function bt(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var a=n[e];t?u[a]=t[e]:u[a[0]]=a[1]}return u}function dt(n,t){return ue.fastBind||Lt&&2<arguments.length?Lt.call.apply(Lt,arguments):F(n,t,M(arguments,2))}function _t(n){var t=M(arguments,1);
return Ht(function(){n.apply(e,t)},1)}function kt(n){return n}function wt(n){at(H(n),function(t){var e=a[t]=n[t];a.prototype[t]=function(){var n=this.__wrapped__,t=[n];return Vt.apply(t,arguments),t=e.apply(a,t),n&&typeof n=="object"&&n==t?this:new z(t)}})}function jt(){return this.__wrapped__}r=r?A.defaults(n.Object(),r,A.pick(n,d)):n;var Ct=r.Array,xt=r.Boolean,Ot=r.Date,Nt=r.Function,Et=r.Math,It=r.Number,St=r.Object,At=r.RegExp,$t=r.String,qt=r.TypeError,Bt=Ct(),Ft=St(),Rt=r._,Tt=At("^"+$t(Ft.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Dt=Et.ceil,zt=r.clearTimeout,Pt=Bt.concat,Kt=Et.floor,Mt=Tt.test(Mt=St.getPrototypeOf)&&Mt,Ut=Ft.hasOwnProperty,Vt=Bt.push,Gt=r.setImmediate,Ht=r.setTimeout,Jt=Ft.toString,Lt=Tt.test(Lt=M.bind)&&Lt,Qt=Tt.test(Qt=Ct.isArray)&&Qt,Wt=r.isFinite,Xt=r.isNaN,Yt=Tt.test(Yt=St.keys)&&Yt,Zt=Et.max,ne=Et.min,te=r.parseInt,ee=Et.random,Et=Tt.test(r.attachEvent),Et=Lt&&!/\n|true/.test(Lt+Et),re={};
re[k]=Ct,re[w]=xt,re[j]=Ot,re[x]=St,re[C]=It,re[O]=At,re[N]=$t;var ue=a.support={};ue.fastBind=Lt&&!Et,a.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:g,variable:"",imports:{_:a}},xt={a:"q,w,g",h:"var a=arguments,b=0,c=typeof g=='number'?2:a.length;while(++b<c){m=a[b];if(m&&r[typeof m]){",f:"if(typeof u[i]=='undefined')u[i]=m[i]",c:"}}"},It={a:"e,d,x",h:"d=d&&typeof x=='undefined'?d:p.createCallback(d,x)",b:!1,f:"if(d(m[i],i,e)===false)return u"},St={h:"if(!r[typeof m])return u;"+It.h,b:!1},z.prototype=a.prototype;
var ae=Qt||function(n){return n instanceof Ct||Jt.call(n)==k},Qt=R({a:"q",e:"[]",h:"if(!(r[typeof q]))return u",f:"u.push(i)",b:!1}),oe=Yt?function(n){return W(n)?Yt(n):[]}:Qt,ie={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fe=J(ie),ce=R(xt,{h:xt.h.replace(";",";if(c>3&&typeof a[c-2]=='function'){var d=p.createCallback(a[--c-1],a[c--],2);}else if(c>2&&typeof a[c-1]=='function'){d=a[--c];}"),f:"u[i]=d?d(u[i],m[i]):m[i]"}),le=R(xt),pe=R(It,St,{i:!1}),se=R(It,St),ve=function(n){if(!n||Jt.call(n)!=x)return!1;
var t=n.valueOf,e=typeof t=="function"&&(e=Mt(t))&&Mt(e);return e?n==e||Mt(n)==e:K(n)};return Et&&u&&typeof Gt=="function"&&(_t=dt(Gt,r)),Gt=8==te("08")?te:function(n,t){return te(Y(n)?n.replace(h,""):n,t||0)},a.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},a.assign=ce,a.at=function(n){for(var t=-1,e=Pt.apply(Bt,M(arguments,1)),r=e.length,u=Ct(r);++t<r;)u[t]=n[e[t]];return u},a.bind=dt,a.bindAll=function(n){for(var t=Pt.apply(Bt,arguments),e=1<t.length?0:(t=H(n),-1),r=t.length;++e<r;){var u=t[e];
n[u]=dt(n[u],n)}return n},a.bindKey=function(n,t){return F(n,t,M(arguments,2),i)},a.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},a.compose=function(){var n=arguments;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},a.countBy=function(n,t,e){var r={};return t=a.createCallback(t,e),at(n,function(n,e,u){e=$t(t(n,e,u)),Ut.call(r,e)?r[e]++:r[e]=1}),r},a.createCallback=function(n,t,e){if(null==n)return kt;var r=typeof n;
if("function"!=r){if("object"!=r)return function(t){return t[n]};var u=oe(n);return function(t){for(var e=u.length,r=!1;e--&&(r=L(t[u[e]],n[u[e]],i)););return r}}return typeof t!="undefined"?1===e?function(e){return n.call(t,e)}:2===e?function(e,r){return n.call(t,e,r)}:4===e?function(e,r,u,a){return n.call(t,e,r,u,a)}:function(e,r,u){return n.call(t,e,r,u)}:n},a.debounce=function(n,t,e){function r(){i=null,e||(a=n.apply(o,u))}var u,a,o,i;return function(){var f=e&&!i;return u=arguments,o=this,zt(i),i=Ht(r,t),f&&(a=n.apply(o,u)),a
}},a.defaults=le,a.defer=_t,a.delay=function(n,t){var r=M(arguments,2);return Ht(function(){n.apply(e,r)},t)},a.difference=function(n){for(var t=-1,e=n?n.length:0,r=Pt.apply(Bt,arguments),r=$(r,e,100),u=[];++t<e;){var a=n[t];r(a)||u.push(a)}return u},a.filter=rt,a.flatten=vt,a.forEach=at,a.forIn=pe,a.forOwn=se,a.functions=H,a.groupBy=function(n,t,e){var r={};return t=a.createCallback(t,e),at(n,function(n,e,u){e=$t(t(n,e,u)),(Ut.call(r,e)?r[e]:r[e]=[]).push(n)}),r},a.initial=function(n,t,e){if(!n)return[];
var r=0,u=n.length;if(typeof t!="number"&&null!=t){var o=u;for(t=a.createCallback(t,e);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return M(n,0,ne(Zt(0,u-r),u))},a.intersection=function(n){var t=arguments,e=t.length,r={0:{}},u=-1,a=n?n.length:0,o=100<=a,i=[],f=i;n:for(;++u<a;){var c=n[u];if(o)var l=$t(c),l=Ut.call(r[0],l)?!(f=r[0][l]):f=r[0][l]=[];if(l||0>gt(f,c)){o&&f.push(c);for(var p=e;--p;)if(!(r[p]||(r[p]=$(t[p],0,100)))(c))continue n;i.push(c)}}return i},a.invert=J,a.invoke=function(n,t){var e=M(arguments,2),r=-1,u=typeof t=="function",a=n?n.length:0,o=Ct(typeof a=="number"?a:0);
return at(n,function(n){o[++r]=(u?t:n[t]).apply(n,e)}),o},a.keys=oe,a.map=ot,a.max=it,a.memoize=function(n,t){var e={};return function(){var r=$t(t?t.apply(this,arguments):arguments[0]);return Ut.call(e,r)?e[r]:e[r]=n.apply(this,arguments)}},a.merge=Z,a.min=function(n,t,e){var r=1/0,u=r;if(!t&&ae(n)){e=-1;for(var o=n.length;++e<o;){var i=n[e];i<u&&(u=i)}}else t=!t&&Y(n)?q:a.createCallback(t,e),at(n,function(n,e,a){e=t(n,e,a),e<r&&(r=e,u=n)});return u},a.omit=function(n,t,e){var r=typeof t=="function",u={};
if(r)t=a.createCallback(t,e);else var o=Pt.apply(Bt,arguments);return pe(n,function(n,e,a){(r?!t(n,e,a):0>gt(o,e,1))&&(u[e]=n)}),u},a.once=function(n){var t,e;return function(){return t?e:(t=!0,e=n.apply(this,arguments),n=null,e)}},a.pairs=function(n){for(var t=-1,e=oe(n),r=e.length,u=Ct(r);++t<r;){var a=e[t];u[t]=[a,n[a]]}return u},a.partial=function(n){return F(n,M(arguments,1))},a.partialRight=function(n){return F(n,M(arguments,1),null,i)},a.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=0,o=Pt.apply(Bt,arguments),i=W(n)?o.length:0;++u<i;){var f=o[u];
f in n&&(r[f]=n[f])}else t=a.createCallback(t,e),pe(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},a.pluck=ft,a.range=function(n,t,e){n=+n||0,e=+e||1,null==t&&(t=n,n=0);var r=-1;t=Zt(0,Dt((t-n)/e));for(var u=Ct(t);++r<t;)u[r]=n,n+=e;return u},a.reject=function(n,t,e){return t=a.createCallback(t,e),rt(n,function(n,e,r){return!t(n,e,r)})},a.rest=ht,a.shuffle=function(n){var t=-1,e=n?n.length:0,r=Ct(typeof e=="number"?e:0);return at(n,function(n){var e=Kt(ee()*(++t+1));r[t]=r[e],r[e]=n}),r},a.sortBy=function(n,t,e){var r=-1,u=n?n.length:0,o=Ct(typeof u=="number"?u:0);
for(t=a.createCallback(t,e),at(n,function(n,e,u){o[++r]={a:t(n,e,u),b:r,c:n}}),u=o.length,o.sort(B);u--;)o[u]=o[u].c;return o},a.tap=function(n,t){return t(n),n},a.throttle=function(n,t){function e(){i=new Ot,o=null,u=n.apply(a,r)}var r,u,a,o,i=0;return function(){var f=new Ot,c=t-(f-i);return r=arguments,a=this,0<c?o||(o=Ht(e,c)):(zt(o),o=null,i=f,u=n.apply(a,r)),u}},a.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Ct(n);for(t=a.createCallback(t,e,1);++r<n;)u[r]=t(r);return u},a.toArray=function(n){return n&&typeof n.length=="number"?M(n):nt(n)
},a.union=function(){return mt(Pt.apply(Bt,arguments))},a.uniq=mt,a.values=nt,a.where=rt,a.without=function(n){for(var t=-1,e=n?n.length:0,r=$(arguments,1,30),u=[];++t<e;){var a=n[t];r(a)||u.push(a)}return u},a.wrap=function(n,t){return function(){var e=[n];return Vt.apply(e,arguments),t.apply(this,e)}},a.zip=function(n){for(var t=-1,e=n?it(ft(arguments,"length")):0,r=Ct(e);++t<e;)r[t]=ft(arguments,t);return r},a.zipObject=bt,a.collect=ot,a.drop=ht,a.each=at,a.extend=ce,a.methods=H,a.object=bt,a.select=rt,a.tail=ht,a.unique=mt,wt(a),a.clone=G,a.cloneDeep=function(n,t,e){return G(n,!0,t,e)
},a.contains=tt,a.escape=function(n){return null==n?"":$t(n).replace(m,D)},a.every=et,a.find=ut,a.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=a.createCallback(t,e);++r<u;)if(t(n[r],r,n))return r;return-1},a.findKey=function(n,t,e){var r;return t=a.createCallback(t,e),se(n,function(n,e,u){return t(n,e,u)?(r=e,!1):void 0}),r},a.has=function(n,t){return n?Ut.call(n,t):!1},a.identity=kt,a.indexOf=gt,a.isArguments=V,a.isArray=ae,a.isBoolean=function(n){return!0===n||!1===n||Jt.call(n)==w},a.isDate=function(n){return n instanceof Ot||Jt.call(n)==j
},a.isElement=function(n){return n?1===n.nodeType:!1},a.isEmpty=function(n){var t=!0;if(!n)return t;var e=Jt.call(n),r=n.length;return e==k||e==N||e==_||e==x&&typeof r=="number"&&Q(n.splice)?!r:(se(n,function(){return t=!1}),t)},a.isEqual=L,a.isFinite=function(n){return Wt(n)&&!Xt(parseFloat(n))},a.isFunction=Q,a.isNaN=function(n){return X(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=X,a.isObject=W,a.isPlainObject=ve,a.isRegExp=function(n){return n instanceof At||Jt.call(n)==O},a.isString=Y,a.isUndefined=function(n){return typeof n=="undefined"
},a.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Zt(0,r+e):ne(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},a.mixin=wt,a.noConflict=function(){return r._=Rt,this},a.parseInt=Gt,a.random=function(n,t){return null==n&&null==t&&(t=1),n=+n||0,null==t&&(t=n,n=0),n+Kt(ee()*((+t||0)-n+1))},a.reduce=ct,a.reduceRight=lt,a.result=function(n,t){var r=n?n[t]:e;return Q(r)?n[t]():r},a.runInContext=t,a.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:oe(n).length
},a.some=pt,a.sortedIndex=yt,a.template=function(n,t,r){var u=a.templateSettings;n||(n=""),r=le({},r,u);var o,i=le({},r.imports,u.imports),u=oe(i),i=nt(i),p=0,v=r.interpolate||y,h="__p+='",v=At((r.escape||y).source+"|"+v.source+"|"+(v===g?s:y).source+"|"+(r.evaluate||y).source+"|$","g");n.replace(v,function(t,e,r,u,a,i){return r||(r=u),h+=n.slice(p,i).replace(b,T),e&&(h+="'+__e("+e+")+'"),a&&(o=!0,h+="';"+a+";__p+='"),r&&(h+="'+((__t=("+r+"))==null?'':__t)+'"),p=i+t.length,t}),h+="';\n",v=r=r.variable,v||(r="obj",h="with("+r+"){"+h+"}"),h=(o?h.replace(f,""):h).replace(c,"$1").replace(l,"$1;"),h="function("+r+"){"+(v?"":r+"||("+r+"={});")+"var __t,__p='',__e=_.escape"+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+h+"return __p}";
try{var m=Nt(u,"return "+h).apply(e,i)}catch(d){throw d.source=h,d}return t?m(t):(m.source=h,m)},a.unescape=function(n){return null==n?"":$t(n).replace(p,U)},a.uniqueId=function(n){var t=++o;return $t(null==n?"":n)+t},a.all=et,a.any=pt,a.detect=ut,a.foldl=ct,a.foldr=lt,a.include=tt,a.inject=ct,se(a,function(n,t){a.prototype[t]||(a.prototype[t]=function(){var t=[this.__wrapped__];return Vt.apply(t,arguments),n.apply(a,t)})}),a.first=st,a.last=function(n,t,e){if(n){var r=0,u=n.length;if(typeof t!="number"&&null!=t){var o=u;
for(t=a.createCallback(t,e);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n[u-1];return M(n,Zt(0,u-r))}},a.take=st,a.head=st,se(a,function(n,t){a.prototype[t]||(a.prototype[t]=function(t,e){var r=n(this.__wrapped__,t,e);return null==t||e&&typeof t!="function"?r:new z(r)})}),a.VERSION="1.1.1",a.prototype.toString=function(){return $t(this.__wrapped__)},a.prototype.value=jt,a.prototype.valueOf=jt,at(["join","pop","shift"],function(n){var t=Bt[n];a.prototype[n]=function(){return t.apply(this.__wrapped__,arguments)
}}),at(["push","reverse","sort","unshift"],function(n){var t=Bt[n];a.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),at(["concat","slice","splice"],function(n){var t=Bt[n];a.prototype[n]=function(){return new z(t.apply(this.__wrapped__,arguments))}}),a}var e,r=typeof exports=="object"&&exports,u=typeof module=="object"&&module&&module.exports==r&&module,a=typeof global=="object"&&global;a.global===a&&(n=a);var o=0,i={},f=/\b__p\+='';/g,c=/\b(__p\+=)''\+/g,l=/(__e\(.*?\)|\b__t\))\+'';/g,p=/&(?:amp|lt|gt|quot|#39);/g,s=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,v=/\w*$/,g=/<%=([\s\S]+?)%>/g,h=/^0+(?=.$)/,y=/($^)/,m=/[&<>"']/g,b=/['\n\r\t\u2028\u2029\\]/g,d="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),_="[object Arguments]",k="[object Array]",w="[object Boolean]",j="[object Date]",C="[object Number]",x="[object Object]",O="[object RegExp]",N="[object String]",E={"[object Function]":!1};
E[_]=E[k]=E[w]=E[j]=E[C]=E[x]=E[O]=E[N]=!0;var I={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},S={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},A=t();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(n._=A,define(function(){return A})):r&&!r.nodeType?u?(u.exports=A)._=A:r._=A:n._=A})(this);
var Comparer = function() {
  this.scrape();
};

Comparer.prototype.initData = function() {
  var allSkills = [];
  var allPeople = [];
  var skillVectors = {};

  $.each(this.data, function (i, person) {
    allPeople.push(person.name);

    if (person.skills.length > 0) {
      $.each(person.skills, function (i, skill) {
        if (allSkills.indexOf(skill.toLowerCase()) === -1 && skill !== '') { allSkills.push(skill.toLowerCase()); }
      });
    }
  });

  this.allSkills = allSkills;
  this.allPeople = allPeople;
};

Comparer.prototype.matchesFor = function (targetName) {
  var target = _.find(this.data, { name: targetName });
  var results = [];
  _.forEach(this.data, function(person, key) {
    results.push({
      name: person.name,
      score: this.jaccardIndex(target.skills, person.skills),
      sharedSkills: _.intersection(target.skills, person.skills)
    });
  }, this);
  results = _.sortBy(results, 'score');
  var indexes = _.range(results.length - 6, results.length - 1).reverse();
  return _.at(results, indexes);
};

Comparer.prototype.jaccardIndex = function(a, b) {
  // http://en.wikipedia.org/wiki/Jaccard_index
  return _.intersection(a, b).length / _.union(a, b).length;
};

Comparer.prototype.scrape = function() {
  var people = [];
  $.each($('.person'), function() {
    var skills = $('.skills', this).text().split(/\n|,\s|\//);
    $.map(skills, function (val, i) {
      return $.trim(val).toLowerCase().replace(/[-\/]/g, '');
    });
    var name = $('.name', this).text();
    people.push({
      name: name,
      skills: skills
    });
  });
  this.data = people;
};
// don't reinitialize the bookmarklet if it has already been run

  var HSMatch = function() {
    this.init();
  };

  HSMatch.prototype.init = function() {
    this.modal = new Modal(this);
    this.comparer = new Comparer();
    this.createLinks();

    $('body').on('click', '.close', this.modal.closeHandler());
    $('body').on('click', '.find_matches', this.showModalHandler());
  };

  HSMatch.prototype.createLinks = function() {
    $('.person').css('height', '280px');
    $('.name').filter(function() {
      return $(this).siblings('.skills').text() !== '';
    }).after('<a href="#" class="find_matches">Find matches</a>');
  };

  HSMatch.prototype.showModalHandler = function() {
    var modal = this.modal;
    return function(e) {
      e.preventDefault();
      var name = $(e.target).prev('.name').text();
      modal.show(name);
    };
  };

  HSMatch.prototype.showMatches = function(name, matches) {
    var modal = $('#'+this.modal.id);
    var peopleSelector = $.map(matches, function(match, i) { return '.person:contains("'+match.name+'")'; }).join(', ');
    var people = $(peopleSelector).clone().css({ width: '150px', display: 'inline-block', verticalAlign: 'top', margin: '15px' });
    $('.find_matches, .skills, .irc', people).remove();

    $('.matches', modal).empty().append('<h2>Hacker Schoolers with the skillset most like '+name+':</h2>').after(people);

    $.each(matches, function(i, match) {
      var name = match.name;
      $('.name:contains('+name+')', modal).append('<br><strong>Shared skills:</strong> '+match.sharedSkills.join(', '));
    });
  };

  HSMatch.prototype.getMatches = function (name) {
    var matches = this.comparer.matchesFor(name);
    this.showMatches(name, matches);
  };

  var Modal = function(page) {
    this.id = 'hsmatch-modal';
    this.page = page;

    this.styles = {
      background: '#fff',
      border: '5px solid #000',
      width: '920px',
      height: '550px',
      position: 'fixed',
      top: '50%',
      marginTop: '-275px',
      left: '50%',
      marginLeft: '-460px',
      padding: '0 20px',
      boxShadow: '0 0 15px rgba(0, 0, 0, .5)'
    };
  };

  Modal.prototype.show = function(name) {
    var html = '<div id="'+this.id+'"><h1>Hacker School Match</h1><br><ul class="matches" style="text-align:center"><p class="loading">Loading matches for '+name+' ...</p></ul><p><a href="#" class="close" style="position:absolute;top:10px;right:20px;">Close</a></div>';
    $(html).css(this.styles).appendTo('body');
    this.page.getMatches(name);
  };

  Modal.prototype.closeHandler = function() {
    var id = this.id;
    return function(e) {
      $('#hsmatch-modal').remove();
      e.preventDefault();
    };
  };

  window.hsmatch = new HSMatch();

  $(function() {
    if (typeof hsmatch === 'undefined') { hsmatch.init(); }
  });
