// Compiled by ClojureScript 0.0-2740 {}
goog.provide('procedural_pig.util');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
procedural_pig.util.log = (function() { 
var log__delegate = function (msgs){
console.log.apply(console,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,msgs)));

return cljs.core.last.call(null,msgs);
};
var log = function (var_args){
var msgs = null;
if (arguments.length > 0) {
var G__6144__i = 0, G__6144__a = new Array(arguments.length -  0);
while (G__6144__i < G__6144__a.length) {G__6144__a[G__6144__i] = arguments[G__6144__i + 0]; ++G__6144__i;}
  msgs = new cljs.core.IndexedSeq(G__6144__a,0);
} 
return log__delegate.call(this,msgs);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6145){
var msgs = cljs.core.seq(arglist__6145);
return log__delegate(msgs);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
procedural_pig.util.clamp_lower = (function clamp_lower(val,min){
if((val < min)){
return min;
} else {
return val;
}
});
procedural_pig.util.clamp_upper = (function clamp_upper(val,max){
if((val > max)){
return max;
} else {
return val;
}
});
procedural_pig.util.clamp = (function clamp(val,min,max){
return procedural_pig.util.clamp_upper.call(null,procedural_pig.util.clamp_lower.call(null,val,min),max);
});
