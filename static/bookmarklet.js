(function(n){function t(r){function o(n){return n&&"object"==typeof n&&!oe(n)&&Pt.call(n,"__wrapped__")?n:new D(n)}function H(n,t,e){var r=n.length,a=r-t>=e;if(a){var o={};for(e=t-1;r>++e;){var u=Ht(n[e]);(Pt.call(o,u)?o[u]:o[u]=[]).push(n[e])}}return function(e){if(a){var r=Ht(e);return Pt.call(o,r)&&vt(o[r],e)>-1}return vt(n,e,t)>-1}}function N(n){return n.charCodeAt(0)}function A(n,t){var e=n.b,r=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||n===void 0)return 1;if(t>n||t===void 0)return-1}return r>e?-1:1}function F(n,t,e,r){function a(){var r=arguments,l=u?this:t;return o||(n=t[i]),e.length&&(r=r.length?(r=z(r),c?r.concat(e):e.concat(r)):e),this instanceof a?(L.prototype=n.prototype,l=new L,L.prototype=null,r=n.apply(l,r),W(r)?r:l):n.apply(l,r)}var o=Q(n),u=!e,i=t;if(u){var c=r;e=t}else if(!o){if(!r)throw new Nt;t=n}return a}function B(){for(var n,t={b:"k(m)",c:"",e:"m",f:"",h:"",i:!0,j:!!ue},e=0;n=arguments[e];e++)for(var r in n)t[r]=n[r];return n=t.a,t.d=/^[^,]+/.exec(n)[0],e=St,r="var i,m="+t.d+",u="+t.e+";if(!m)return u;"+t.h+";",t.b&&(r+="var n=m.length;i=-1;if("+t.b+"){while(++i<n){"+t.f+"}}else{"),t.i&&t.j?r+="var s=-1,t=r[typeof m]?o(m):[],n=t.length;while(++s<n){i=t[s];"+t.f+"}":(r+="for(i in m){",t.i&&(r+="if(",t.i&&(r+="h.call(m,i)"),r+="){"),r+=t.f+";",t.i&&(r+="}"),r+="}"),t.b&&(r+="}"),r+=t.c+";return u",e("h,j,k,l,o,p,r","return function("+n+"){"+r+"}")(Pt,K,oe,Y,ue,o,O)}function q(n){return"\\"+I[n]}function T(n){return ie[n]}function D(n){this.__wrapped__=n}function L(){}function R(n){var t=!1;if(!n||Gt.call(n)!=j)return t;var e=n.constructor;return(Q(e)?e instanceof e:ae.nodeClass||!isNode(n))?(se(n,function(n,e){t=e}),!1===t||Pt.call(n,t)):t}function z(n,t,e){t||(t=0),e===void 0&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var a=Ct(0>e?0:e);e>++r;)a[r]=n[t+r];return a}function P(n){return ce[n]}function K(n){return Gt.call(n)==_}function U(n,t,r,a,u,i){var c=n;if("function"==typeof t&&(a=r,r=t,t=!1),"function"==typeof r){if(r=a===void 0?r:o.createCallback(r,a,1),c=r(c),c!==void 0)return c;c=n}if(a=W(c)){var l=Gt.call(c);if(!M[l])return c;var f=oe(c)}if(!a||!t)return a?f?z(c):le({},c):c;switch(a=re[l],l){case w:case x:return new a(+c);case C:case S:return new a(c);case $:return a(c.source,h.exec(c))}for(u||(u=[]),i||(i=[]),l=u.length;l--;)if(u[l]==n)return i[l];return c=f?a(c.length):{},f&&(Pt.call(n,"index")&&(c.index=n.index),Pt.call(n,"input")&&(c.input=n.input)),u.push(n),i.push(c),(f?ot:pe)(n,function(n,a){c[a]=U(n,t,r,e,u,i)}),c}function V(n){var t=[];return se(n,function(n,e){Q(n)&&t.push(e)}),t.sort()}function G(n){for(var t=-1,e=ue(n),r=e.length,a={};r>++t;){var o=e[t];a[n[o]]=o}return a}function J(n,t,e,r,a,u){var c=e===i;if(e&&!c){e=r===void 0?e:o.createCallback(e,r,2);var l=e(n,t);if(l!==void 0)return!!l}if(n===t)return 0!==n||1/n==1/t;var f=typeof n,s=typeof t;if(n===n&&(!n||"function"!=f&&"object"!=f)&&(!t||"function"!=s&&"object"!=s))return!1;if(null==n||null==t)return n===t;if(s=Gt.call(n),f=Gt.call(t),s==_&&(s=j),f==_&&(f=j),s!=f)return!1;switch(s){case w:case x:return+n==+t;case C:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case $:case S:return n==Ht(t)}if(f=s==k,!f){if(Pt.call(n,"__wrapped__")||Pt.call(t,"__wrapped__"))return J(n.__wrapped__||n,t.__wrapped__||t,e,r,a,u);if(s!=j)return!1;var s=n.constructor,p=t.constructor;if(!(s==p||Q(s)&&s instanceof s&&Q(p)&&p instanceof p))return!1}for(a||(a=[]),u||(u=[]),s=a.length;s--;)if(a[s]==n)return u[s]==t;var h=0,l=!0;if(a.push(n),u.push(t),f){if(s=n.length,h=t.length,l=h==n.length,!l&&!c)return l;for(;h--;)if(f=s,p=t[h],c)for(;f--&&!(l=J(n[f],p,e,r,a,u)););else if(!(l=J(n[h],p,e,r,a,u)))break;return l}return se(t,function(t,o,i){return Pt.call(i,o)?(h++,l=Pt.call(n,o)&&J(n[o],t,e,r,a,u)):void 0}),l&&!c&&se(n,function(n,t,e){return Pt.call(e,t)?l=--h>-1:void 0}),l}function Q(n){return"function"==typeof n}function W(n){return n?O[typeof n]:!1}function X(n){return"number"==typeof n||Gt.call(n)==C}function Y(n){return"string"==typeof n||Gt.call(n)==S}function Z(n,t,e){var r=arguments,a=0,u=2;if(!W(n))return n;if(e===i)var c=r[3],l=r[4],f=r[5];else l=[],f=[],"number"!=typeof e&&(u=r.length),u>3&&"function"==typeof r[u-2]?c=o.createCallback(r[--u-1],r[u--],2):u>2&&"function"==typeof r[u-1]&&(c=r[--u]);for(;u>++a;)(oe(r[a])?ot:pe)(r[a],function(t,e){var r,a,o=t,u=n[e];if(t&&((a=oe(t))||he(t))){for(o=l.length;o--;)if(r=l[o]==t){u=f[o];break}r||(u=a?oe(u)?u:[]:he(u)?u:{},c&&(o=c(u,t),o!==void 0&&(u=o)),l.push(t),f.push(u),c||(u=Z(u,t,i,c,l,f)))}else c&&(o=c(u,t),o===void 0&&(o=t)),o!==void 0&&(u=o);n[e]=u});return n}function nt(n){for(var t=-1,e=ue(n),r=e.length,a=Ct(r);r>++t;)a[t]=n[e[t]];return a}function tt(n,t,e){var r=-1,a=n?n.length:0,o=!1;return e=(0>e?Zt(0,a+e):e)||0,"number"==typeof a?o=(Y(n)?n.indexOf(t,e):vt(n,t,e))>-1:pe(n,function(n){return e>++r?void 0:!(o=n===t)}),o}function et(n,t,e){var r=!0;t=o.createCallback(t,e),e=-1;var a=n?n.length:0;if("number"==typeof a)for(;a>++e&&(r=!!t(n[e],e,n)););else pe(n,function(n,e,a){return r=!!t(n,e,a)});return r}function rt(n,t,e){var r=[];t=o.createCallback(t,e),e=-1;var a=n?n.length:0;if("number"==typeof a)for(;a>++e;){var u=n[e];t(u,e,n)&&r.push(u)}else pe(n,function(n,e,a){t(n,e,a)&&r.push(n)});return r}function at(n,t,e){t=o.createCallback(t,e),e=-1;var r=n?n.length:0;if("number"!=typeof r){var a;return pe(n,function(n,e,r){return t(n,e,r)?(a=n,!1):void 0}),a}for(;r>++e;){var u=n[e];if(t(u,e,n))return u}}function ot(n,t,e){var r=-1,a=n?n.length:0;if(t=t&&e===void 0?t:o.createCallback(t,e),"number"==typeof a)for(;a>++r&&!1!==t(n[r],r,n););else pe(n,t);return n}function ut(n,t,e){var r=-1,a=n?n.length:0;if(t=o.createCallback(t,e),"number"==typeof a)for(var u=Ct(a);a>++r;)u[r]=t(n[r],r,n);else u=[],pe(n,function(n,e,a){u[++r]=t(n,e,a)});return u}function it(n,t,e){var r=-1/0,a=r;if(!t&&oe(n)){e=-1;for(var u=n.length;u>++e;){var i=n[e];i>a&&(a=i)}}else t=!t&&Y(n)?N:o.createCallback(t,e),ot(n,function(n,e,o){e=t(n,e,o),e>r&&(r=e,a=n)});return a}function ct(n,t){var e=-1,r=n?n.length:0;if("number"==typeof r)for(var a=Ct(r);r>++e;)a[e]=n[e][t];return a||ut(n,t)}function lt(n,t,e,r){if(!n)return e;var a=3>arguments.length;t=o.createCallback(t,r,4);var u=-1,i=n.length;if("number"==typeof i)for(a&&(e=n[++u]);i>++u;)e=t(e,n[u],u,n);else pe(n,function(n,r,o){e=a?(a=!1,n):t(e,n,r,o)});return e}function ft(n,t,e,r){var a=n?n.length:0,u=3>arguments.length;if("number"!=typeof a)var i=ue(n),a=i.length;return t=o.createCallback(t,r,4),ot(n,function(r,o,c){o=i?i[--a]:--a,e=u?(u=!1,n[o]):t(e,n[o],o,c)}),e}function st(n,t,e){var r;t=o.createCallback(t,e),e=-1;var a=n?n.length:0;if("number"==typeof a)for(;a>++e&&!(r=t(n[e],e,n)););else pe(n,function(n,e,a){return!(r=t(n,e,a))});return!!r}function pt(n,t,e){if(n){var r=0,a=n.length;if("number"!=typeof t&&null!=t){var u=-1;for(t=o.createCallback(t,e);a>++u&&t(n[u],u,n);)r++}else if(r=t,null==r||e)return n[0];return z(n,0,ne(Zt(0,r),a))}}function ht(n,t,e,r){var a=-1,u=n?n.length:0,i=[];for("boolean"!=typeof t&&null!=t&&(r=e,e=t,t=!1),null!=e&&(e=o.createCallback(e,r));u>++a;)r=n[a],e&&(r=e(r,a,n)),oe(r)?Kt.apply(i,t?r:ht(r)):i.push(r);return i}function vt(n,t,e){var r=-1,a=n?n.length:0;if("number"==typeof e)r=(0>e?Zt(0,a+e):e||0)-1;else if(e)return r=gt(n,t),n[r]===t?r:-1;for(;a>++r;)if(n[r]===t)return r;return-1}function mt(n,t,e){if("number"!=typeof t&&null!=t){var r=0,a=-1,u=n?n.length:0;for(t=o.createCallback(t,e);u>++a&&t(n[a],a,n);)r++}else r=null==t||e?1:Zt(0,t);return z(n,r)}function gt(n,t,e,r){var a=0,u=n?n.length:a;for(e=e?o.createCallback(e,r,1):kt,t=e(t);u>a;)r=a+u>>>1,t>e(n[r])?a=r+1:u=r;return a}function dt(n,t,e,r){var a=-1,u=n?n.length:0,i=[],c=i;"boolean"!=typeof t&&null!=t&&(r=e,e=t,t=!1);var l=!t&&u>=75;if(l)var f={};for(null!=e&&(c=[],e=o.createCallback(e,r));u>++a;){r=n[a];var s=e?e(r,a,n):r;if(l)var p=Ht(s),p=Pt.call(f,p)?!(c=f[p]):c=f[p]=[];(t?!a||c[c.length-1]!==s:p||0>vt(c,s))&&((e||l)&&c.push(s),i.push(r))}return i}function yt(n,t){for(var e=-1,r=n?n.length:0,a={};r>++e;){var o=n[e];t?a[o]=t[e]:a[o[0]]=o[1]}return a}function bt(n,t){return ae.fastBind||Jt&&arguments.length>2?Jt.call.apply(Jt,arguments):F(n,t,z(arguments,2))}function _t(n){var t=z(arguments,1);return Vt(function(){n.apply(e,t)},1)}function kt(n){return n}function wt(n){ot(V(n),function(t){var e=o[t]=n[t];o.prototype[t]=function(){var n=this.__wrapped__,t=[n];return Kt.apply(t,arguments),t=e.apply(o,t),n&&"object"==typeof n&&n==t?this:new D(t)}})}function xt(){return this.__wrapped__}r=r?E.defaults(n.Object(),r,E.pick(n,b)):n;var Ct=r.Array,jt=r.Boolean,$t=r.Date,St=r.Function,Mt=r.Math,Ot=r.Number,It=r.Object,Et=r.RegExp,Ht=r.String,Nt=r.TypeError,At=Ct(),Ft=It(),Bt=r._,qt=Et("^"+Ht(Ft.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Tt=Mt.ceil,Dt=r.clearTimeout,Lt=At.concat,Rt=Mt.floor,zt=qt.test(zt=It.getPrototypeOf)&&zt,Pt=Ft.hasOwnProperty,Kt=At.push,Ut=r.setImmediate,Vt=r.setTimeout,Gt=Ft.toString,Jt=qt.test(Jt=z.bind)&&Jt,Qt=qt.test(Qt=Ct.isArray)&&Qt,Wt=r.isFinite,Xt=r.isNaN,Yt=qt.test(Yt=It.keys)&&Yt,Zt=Mt.max,ne=Mt.min,te=r.parseInt,ee=Mt.random,Mt=qt.test(r.attachEvent),Mt=Jt&&!/\n|true/.test(Jt+Mt),re={};re[k]=Ct,re[w]=jt,re[x]=$t,re[j]=It,re[C]=Ot,re[$]=Et,re[S]=Ht;var ae=o.support={};ae.fastBind=Jt&&!Mt,o.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:v,variable:"",imports:{_:o}},jt={a:"q,w,g",h:"var a=arguments,b=0,c=typeof g=='number'?2:a.length;while(++b<c){m=a[b];if(m&&r[typeof m]){",f:"if(typeof u[i]=='undefined')u[i]=m[i]",c:"}}"},Ot={a:"e,d,x",h:"d=d&&typeof x=='undefined'?d:p.createCallback(d,x)",b:!1,f:"if(d(m[i],i,e)===false)return u"},It={h:"if(!r[typeof m])return u;"+Ot.h,b:!1},D.prototype=o.prototype;var oe=Qt||function(n){return n instanceof Ct||Gt.call(n)==k},Qt=B({a:"q",e:"[]",h:"if(!(r[typeof q]))return u",f:"u.push(i)",b:!1}),ue=Yt?function(n){return W(n)?Yt(n):[]}:Qt,ie={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ce=G(ie),le=B(jt,{h:jt.h.replace(";",";if(c>3&&typeof a[c-2]=='function'){var d=p.createCallback(a[--c-1],a[c--],2);}else if(c>2&&typeof a[c-1]=='function'){d=a[--c];}"),f:"u[i]=d?d(u[i],m[i]):m[i]"}),fe=B(jt),se=B(Ot,It,{i:!1}),pe=B(Ot,It),he=function(n){if(!n||Gt.call(n)!=j)return!1;var t=n.valueOf,e="function"==typeof t&&(e=zt(t))&&zt(e);return e?n==e||zt(n)==e:R(n)};return Mt&&a&&"function"==typeof Ut&&(_t=bt(Ut,r)),Ut=8==te("08")?te:function(n,t){return te(Y(n)?n.replace(m,""):n,t||0)},o.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},o.assign=le,o.at=function(n){for(var t=-1,e=Lt.apply(At,z(arguments,1)),r=e.length,a=Ct(r);r>++t;)a[t]=n[e[t]];return a},o.bind=bt,o.bindAll=function(n){for(var t=Lt.apply(At,arguments),e=t.length>1?0:(t=V(n),-1),r=t.length;r>++e;){var a=t[e];n[a]=bt(n[a],n)}return n},o.bindKey=function(n,t){return F(n,t,z(arguments,2),i)},o.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];e>++t;){var a=n[t];a&&r.push(a)}return r},o.compose=function(){var n=arguments;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},o.countBy=function(n,t,e){var r={};return t=o.createCallback(t,e),ot(n,function(n,e,a){e=Ht(t(n,e,a)),Pt.call(r,e)?r[e]++:r[e]=1}),r},o.createCallback=function(n,t,e){if(null==n)return kt;var r=typeof n;if("function"!=r){if("object"!=r)return function(t){return t[n]};var a=ue(n);return function(t){for(var e=a.length,r=!1;e--&&(r=J(t[a[e]],n[a[e]],i)););return r}}return t!==void 0?1===e?function(e){return n.call(t,e)}:2===e?function(e,r){return n.call(t,e,r)}:4===e?function(e,r,a,o){return n.call(t,e,r,a,o)}:function(e,r,a){return n.call(t,e,r,a)}:n},o.debounce=function(n,t,e){function r(){i=null,e||(o=n.apply(u,a))}var a,o,u,i;return function(){var c=e&&!i;return a=arguments,u=this,Dt(i),i=Vt(r,t),c&&(o=n.apply(u,a)),o}},o.defaults=fe,o.defer=_t,o.delay=function(n,t){var r=z(arguments,2);return Vt(function(){n.apply(e,r)},t)},o.difference=function(n){for(var t=-1,e=n?n.length:0,r=Lt.apply(At,arguments),r=H(r,e,100),a=[];e>++t;){var o=n[t];r(o)||a.push(o)}return a},o.filter=rt,o.flatten=ht,o.forEach=ot,o.forIn=se,o.forOwn=pe,o.functions=V,o.groupBy=function(n,t,e){var r={};return t=o.createCallback(t,e),ot(n,function(n,e,a){e=Ht(t(n,e,a)),(Pt.call(r,e)?r[e]:r[e]=[]).push(n)}),r},o.initial=function(n,t,e){if(!n)return[];var r=0,a=n.length;if("number"!=typeof t&&null!=t){var u=a;for(t=o.createCallback(t,e);u--&&t(n[u],u,n);)r++}else r=null==t||e?1:t||r;return z(n,0,ne(Zt(0,a-r),a))},o.intersection=function(n){var t=arguments,e=t.length,r={0:{}},a=-1,o=n?n.length:0,u=o>=100,i=[],c=i;n:for(;o>++a;){var l=n[a];if(u)var f=Ht(l),f=Pt.call(r[0],f)?!(c=r[0][f]):c=r[0][f]=[];if(f||0>vt(c,l)){u&&c.push(l);for(var s=e;--s;)if(!(r[s]||(r[s]=H(t[s],0,100)))(l))continue n;i.push(l)}}return i},o.invert=G,o.invoke=function(n,t){var e=z(arguments,2),r=-1,a="function"==typeof t,o=n?n.length:0,u=Ct("number"==typeof o?o:0);return ot(n,function(n){u[++r]=(a?t:n[t]).apply(n,e)}),u},o.keys=ue,o.map=ut,o.max=it,o.memoize=function(n,t){var e={};return function(){var r=Ht(t?t.apply(this,arguments):arguments[0]);return Pt.call(e,r)?e[r]:e[r]=n.apply(this,arguments)}},o.merge=Z,o.min=function(n,t,e){var r=1/0,a=r;if(!t&&oe(n)){e=-1;for(var u=n.length;u>++e;){var i=n[e];a>i&&(a=i)}}else t=!t&&Y(n)?N:o.createCallback(t,e),ot(n,function(n,e,o){e=t(n,e,o),r>e&&(r=e,a=n)});return a},o.omit=function(n,t,e){var r="function"==typeof t,a={};if(r)t=o.createCallback(t,e);else var u=Lt.apply(At,arguments);return se(n,function(n,e,o){(r?!t(n,e,o):0>vt(u,e,1))&&(a[e]=n)}),a},o.once=function(n){var t,e;return function(){return t?e:(t=!0,e=n.apply(this,arguments),n=null,e)}},o.pairs=function(n){for(var t=-1,e=ue(n),r=e.length,a=Ct(r);r>++t;){var o=e[t];a[t]=[o,n[o]]}return a},o.partial=function(n){return F(n,z(arguments,1))},o.partialRight=function(n){return F(n,z(arguments,1),null,i)},o.pick=function(n,t,e){var r={};if("function"!=typeof t)for(var a=0,u=Lt.apply(At,arguments),i=W(n)?u.length:0;i>++a;){var c=u[a];c in n&&(r[c]=n[c])}else t=o.createCallback(t,e),se(n,function(n,e,a){t(n,e,a)&&(r[e]=n)});return r},o.pluck=ct,o.range=function(n,t,e){n=+n||0,e=+e||1,null==t&&(t=n,n=0);var r=-1;t=Zt(0,Tt((t-n)/e));for(var a=Ct(t);t>++r;)a[r]=n,n+=e;return a},o.reject=function(n,t,e){return t=o.createCallback(t,e),rt(n,function(n,e,r){return!t(n,e,r)})},o.rest=mt,o.shuffle=function(n){var t=-1,e=n?n.length:0,r=Ct("number"==typeof e?e:0);return ot(n,function(n){var e=Rt(ee()*(++t+1));r[t]=r[e],r[e]=n}),r},o.sortBy=function(n,t,e){var r=-1,a=n?n.length:0,u=Ct("number"==typeof a?a:0);for(t=o.createCallback(t,e),ot(n,function(n,e,a){u[++r]={a:t(n,e,a),b:r,c:n}}),a=u.length,u.sort(A);a--;)u[a]=u[a].c;return u},o.tap=function(n,t){return t(n),n},o.throttle=function(n,t){function e(){i=new $t,u=null,a=n.apply(o,r)}var r,a,o,u,i=0;return function(){var c=new $t,l=t-(c-i);return r=arguments,o=this,l>0?u||(u=Vt(e,l)):(Dt(u),u=null,i=c,a=n.apply(o,r)),a}},o.times=function(n,t,e){n=(n=+n)>-1?n:0;var r=-1,a=Ct(n);for(t=o.createCallback(t,e,1);n>++r;)a[r]=t(r);return a},o.toArray=function(n){return n&&"number"==typeof n.length?z(n):nt(n)},o.union=function(){return dt(Lt.apply(At,arguments))},o.uniq=dt,o.values=nt,o.where=rt,o.without=function(n){for(var t=-1,e=n?n.length:0,r=H(arguments,1,30),a=[];e>++t;){var o=n[t];r(o)||a.push(o)}return a},o.wrap=function(n,t){return function(){var e=[n];return Kt.apply(e,arguments),t.apply(this,e)}},o.zip=function(n){for(var t=-1,e=n?it(ct(arguments,"length")):0,r=Ct(e);e>++t;)r[t]=ct(arguments,t);return r},o.zipObject=yt,o.collect=ut,o.drop=mt,o.each=ot,o.extend=le,o.methods=V,o.object=yt,o.select=rt,o.tail=mt,o.unique=dt,wt(o),o.clone=U,o.cloneDeep=function(n,t,e){return U(n,!0,t,e)},o.contains=tt,o.escape=function(n){return null==n?"":Ht(n).replace(d,T)},o.every=et,o.find=at,o.findIndex=function(n,t,e){var r=-1,a=n?n.length:0;for(t=o.createCallback(t,e);a>++r;)if(t(n[r],r,n))return r;return-1},o.findKey=function(n,t,e){var r;return t=o.createCallback(t,e),pe(n,function(n,e,a){return t(n,e,a)?(r=e,!1):void 0}),r},o.has=function(n,t){return n?Pt.call(n,t):!1},o.identity=kt,o.indexOf=vt,o.isArguments=K,o.isArray=oe,o.isBoolean=function(n){return!0===n||!1===n||Gt.call(n)==w},o.isDate=function(n){return n instanceof $t||Gt.call(n)==x},o.isElement=function(n){return n?1===n.nodeType:!1},o.isEmpty=function(n){var t=!0;if(!n)return t;var e=Gt.call(n),r=n.length;return e==k||e==S||e==_||e==j&&"number"==typeof r&&Q(n.splice)?!r:(pe(n,function(){return t=!1}),t)},o.isEqual=J,o.isFinite=function(n){return Wt(n)&&!Xt(parseFloat(n))},o.isFunction=Q,o.isNaN=function(n){return X(n)&&n!=+n},o.isNull=function(n){return null===n},o.isNumber=X,o.isObject=W,o.isPlainObject=he,o.isRegExp=function(n){return n instanceof Et||Gt.call(n)==$},o.isString=Y,o.isUndefined=function(n){return n===void 0},o.lastIndexOf=function(n,t,e){var r=n?n.length:0;for("number"==typeof e&&(r=(0>e?Zt(0,r+e):ne(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},o.mixin=wt,o.noConflict=function(){return r._=Bt,this},o.parseInt=Ut,o.random=function(n,t){return null==n&&null==t&&(t=1),n=+n||0,null==t&&(t=n,n=0),n+Rt(ee()*((+t||0)-n+1))},o.reduce=lt,o.reduceRight=ft,o.result=function(n,t){var r=n?n[t]:e;return Q(r)?n[t]():r},o.runInContext=t,o.size=function(n){var t=n?n.length:0;return"number"==typeof t?t:ue(n).length},o.some=st,o.sortedIndex=gt,o.template=function(n,t,r){var a=o.templateSettings;n||(n=""),r=fe({},r,a);var u,i=fe({},r.imports,a.imports),a=ue(i),i=nt(i),s=0,h=r.interpolate||g,m="__p+='",h=Et((r.escape||g).source+"|"+h.source+"|"+(h===v?p:g).source+"|"+(r.evaluate||g).source+"|$","g");n.replace(h,function(t,e,r,a,o,i){return r||(r=a),m+=n.slice(s,i).replace(y,q),e&&(m+="'+__e("+e+")+'"),o&&(u=!0,m+="';"+o+";__p+='"),r&&(m+="'+((__t=("+r+"))==null?'':__t)+'"),s=i+t.length,t}),m+="';\n",h=r=r.variable,h||(r="obj",m="with("+r+"){"+m+"}"),m=(u?m.replace(c,""):m).replace(l,"$1").replace(f,"$1;"),m="function("+r+"){"+(h?"":r+"||("+r+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+m+"return __p}";try{var d=St(a,"return "+m).apply(e,i)}catch(b){throw b.source=m,b}return t?d(t):(d.source=m,d)},o.unescape=function(n){return null==n?"":Ht(n).replace(s,P)},o.uniqueId=function(n){var t=++u;return Ht(null==n?"":n)+t},o.all=et,o.any=st,o.detect=at,o.foldl=lt,o.foldr=ft,o.include=tt,o.inject=lt,pe(o,function(n,t){o.prototype[t]||(o.prototype[t]=function(){var t=[this.__wrapped__];return Kt.apply(t,arguments),n.apply(o,t)})}),o.first=pt,o.last=function(n,t,e){if(n){var r=0,a=n.length;if("number"!=typeof t&&null!=t){var u=a;for(t=o.createCallback(t,e);u--&&t(n[u],u,n);)r++}else if(r=t,null==r||e)return n[a-1];return z(n,Zt(0,a-r))}},o.take=pt,o.head=pt,pe(o,function(n,t){o.prototype[t]||(o.prototype[t]=function(t,e){var r=n(this.__wrapped__,t,e);return null==t||e&&"function"!=typeof t?r:new D(r)})}),o.VERSION="1.1.1",o.prototype.toString=function(){return Ht(this.__wrapped__)},o.prototype.value=xt,o.prototype.valueOf=xt,ot(["join","pop","shift"],function(n){var t=At[n];o.prototype[n]=function(){return t.apply(this.__wrapped__,arguments)}}),ot(["push","reverse","sort","unshift"],function(n){var t=At[n];o.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),ot(["concat","slice","splice"],function(n){var t=At[n];o.prototype[n]=function(){return new D(t.apply(this.__wrapped__,arguments))}}),o}var e,r="object"==typeof exports&&exports,a="object"==typeof module&&module&&module.exports==r&&module,o="object"==typeof global&&global;o.global===o&&(n=o);var u=0,i={},c=/\b__p\+='';/g,l=/\b(__p\+=)''\+/g,f=/(__e\(.*?\)|\b__t\))\+'';/g,s=/&(?:amp|lt|gt|quot|#39);/g,p=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,h=/\w*$/,v=/<%=([\s\S]+?)%>/g,m=/^0+(?=.$)/,g=/($^)/,d=/[&<>"']/g,y=/['\n\r\t\u2028\u2029\\]/g,b="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),_="[object Arguments]",k="[object Array]",w="[object Boolean]",x="[object Date]",C="[object Number]",j="[object Object]",$="[object RegExp]",S="[object String]",M={"[object Function]":!1};M[_]=M[k]=M[w]=M[x]=M[C]=M[j]=M[$]=M[S]=!0;var O={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},I={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},E=t();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(n._=E,define(function(){return E})):r&&!r.nodeType?a?(a.exports=E)._=E:r._=E:n._=E})(this);var Comparer=function(){this.scrape()};Comparer.prototype.initData=function(){var n=[],t=[];$.each(this.data,function(e,r){t.push(r.name),r.skills.length>0&&$.each(r.skills,function(t,e){-1===n.indexOf(e.toLowerCase())&&""!==e&&n.push(e.toLowerCase())})}),this.allSkills=n,this.allPeople=t},Comparer.prototype.matchesFor=function(n){var t=_.find(this.data,{name:n}),e=[];_.forEach(this.data,function(n){e.push({name:n.name,score:this.jaccardIndex(t.skills,n.skills),sharedSkills:_.intersection(t.skills,n.skills)})},this),e=_.sortBy(e,"score");var r=_.range(e.length-6,e.length-1).reverse();return _.at(e,r)},Comparer.prototype.jaccardIndex=function(n,t){return _.intersection(n,t).length/_.union(n,t).length},Comparer.prototype.scrape=function(){var n=[];$.each($(".person"),function(){var t=$(".skills",this).text().split(/\n|,\s|\//);$.map(t,function(n){return $.trim(n).toLowerCase().replace(/[-\/]/g,"")});var e=$(".name",this).text();n.push({name:e,skills:t})}),this.data=n};var HSMatch=function(){this.init()};HSMatch.prototype.init=function(){this.modal=new Modal(this),this.comparer=new Comparer,this.createLinks(),$("body").on("click",".close",this.modal.closeHandler()),$("body").on("click",".find_matches",this.showModalHandler())},HSMatch.prototype.createLinks=function(){$(".person").css("height","280px"),$(".name").filter(function(){return""!==$(this).siblings(".skills").text()}).after('<a href="#" class="find_matches">Find matches</a>')},HSMatch.prototype.showModalHandler=function(){var n=this.modal;return function(t){t.preventDefault();var e=$(t.target).prev(".name").text();n.show(e)}},HSMatch.prototype.showMatches=function(n,t){var e=$("#"+this.modal.id),r=$.map(t,function(n){return'.person:contains("'+n.name+'")'}).join(", "),a=$(r).clone().css({width:"150px",display:"inline-block",verticalAlign:"top",margin:"15px"});$(".find_matches, .skills, .irc",a).remove(),$(".matches",e).empty().append("<h2>Hacker Schoolers with the skillset most like "+n+":</h2>").after(a),$.each(t,function(n,t){var r=t.name;$(".name:contains("+r+")",e).append("<br><strong>Shared skills:</strong> "+t.sharedSkills.join(", "))})},HSMatch.prototype.getMatches=function(n){var t=this.comparer.matchesFor(n);this.showMatches(n,t)};var Modal=function(n){this.id="hsmatch-modal",this.page=n,this.styles={background:"#fff",border:"5px solid #000",width:"920px",height:"550px",position:"fixed",top:"50%",marginTop:"-275px",left:"50%",marginLeft:"-460px",padding:"0 20px",boxShadow:"0 0 15px rgba(0, 0, 0, .5)"}};Modal.prototype.show=function(n){var t='<div id="'+this.id+'"><h1>Hacker School Match</h1><br><ul class="matches" style="text-align:center"><p class="loading">Loading matches for '+n+' ...</p></ul><p><a href="#" class="close" style="position:absolute;top:10px;right:20px;">Close</a></div>';$(t).css(this.styles).appendTo("body"),this.page.getMatches(n)},Modal.prototype.closeHandler=function(){return this.id,function(n){$("#hsmatch-modal").remove(),n.preventDefault()}},window.hsmatch=new HSMatch,$(function(){"undefined"==typeof hsmatch&&hsmatch.init()});