// Compiled by ClojureScript 0.0-2740 {}
goog.provide('procedural_pig.utils');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
procedural_pig.utils.log = (function() { 
var log__delegate = function (msgs){
console.log.apply(console,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,msgs)));

return cljs.core.last.call(null,msgs);
};
var log = function (var_args){
var msgs = null;
if (arguments.length > 0) {
var G__5867__i = 0, G__5867__a = new Array(arguments.length -  0);
while (G__5867__i < G__5867__a.length) {G__5867__a[G__5867__i] = arguments[G__5867__i + 0]; ++G__5867__i;}
  msgs = new cljs.core.IndexedSeq(G__5867__a,0);
} 
return log__delegate.call(this,msgs);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__5868){
var msgs = cljs.core.seq(arglist__5868);
return log__delegate(msgs);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
procedural_pig.utils.clamp_lower = (function clamp_lower(val,min){
if((val < min)){
return min;
} else {
return val;
}
});
procedural_pig.utils.clamp_upper = (function clamp_upper(val,max){
if((val > max)){
return max;
} else {
return val;
}
});
procedural_pig.utils.clamp = (function clamp(val,min,max){
return procedural_pig.utils.clamp_upper.call(null,procedural_pig.utils.clamp_lower.call(null,val,min),max);
});
