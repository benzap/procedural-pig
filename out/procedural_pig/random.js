// Compiled by ClojureScript 0.0-2740 {}
goog.provide('procedural_pig.random');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('procedural_pig.utils');
procedural_pig.random.dist_resolution = (10000000);
procedural_pig.random.get_distribution = (function get_distribution(norm_factor,tupl){
var cstart = (0);
var tupl__$1 = tupl;
var distrib = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,tupl__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var tup = temp__4124__auto__;
var vec__6083 = tup;
var percent = cljs.core.nth.call(null,vec__6083,(0),null);
var value = cljs.core.nth.call(null,vec__6083,(1),null);
var cend = (cstart + (percent * norm_factor));
var G__6084 = cend;
var G__6085 = cljs.core.rest.call(null,tupl__$1);
var G__6086 = cljs.core.conj.call(null,distrib,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cstart,cend], null),value], null));
cstart = G__6084;
tupl__$1 = G__6085;
distrib = G__6086;
continue;
} else {
return distrib;
}
break;
}
});
procedural_pig.random.pick_rand_by_dist_ = (function pick_rand_by_dist_(ds){
var r = cljs.core.rand.call(null,procedural_pig.random.dist_resolution);
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (r){
return (function (p__6090){
var vec__6091 = p__6090;
var vec__6092 = cljs.core.nth.call(null,vec__6091,(0),null);
var start = cljs.core.nth.call(null,vec__6092,(0),null);
var end = cljs.core.nth.call(null,vec__6092,(1),null);
var value = cljs.core.nth.call(null,vec__6091,(1),null);
return ((start <= r)) && ((end > r));
});})(r))
,ds)));
});
procedural_pig.random.pick_rand_by_dist = (function pick_rand_by_dist(tupl){
var total_percent = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.first,tupl));
var norm_factor = (procedural_pig.random.dist_resolution / total_percent);
var distrib = procedural_pig.random.get_distribution.call(null,norm_factor,tupl);
return procedural_pig.random.pick_rand_by_dist_.call(null,distrib);
});
procedural_pig.random.pick_value_in_range = (function pick_value_in_range(start,end){
var t = (end - start);
return (cljs.core.rand.call(null,t) + start);
});
/**
* based on a provided percent chance between 0.0-100.0, returns true
* if it succeeds
*/
procedural_pig.random.percent_chance = (function percent_chance(percent){
var distrib = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [percent,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) - percent),false], null)], null);
return procedural_pig.random.pick_rand_by_dist.call(null,distrib);
});
/**
* @param {...*} var_args
*/
procedural_pig.random.location = (function() { 
var location__$1__delegate = function (p__6093){
var map__6096 = p__6093;
var map__6096__$1 = ((cljs.core.seq_QMARK_.call(null,map__6096))?cljs.core.apply.call(null,cljs.core.hash_map,map__6096):map__6096);
var left_bound = cljs.core.get.call(null,map__6096__$1,new cljs.core.Keyword(null,"left-bound","left-bound",1622584353),(0));
var bottom_bound = cljs.core.get.call(null,map__6096__$1,new cljs.core.Keyword(null,"bottom-bound","bottom-bound",-1482910708),(0));
var right_bound = cljs.core.get.call(null,map__6096__$1,new cljs.core.Keyword(null,"right-bound","right-bound",-456434888),(0));
var top_bound = cljs.core.get.call(null,map__6096__$1,new cljs.core.Keyword(null,"top-bound","top-bound",212339435),(0));
var vec__6097 = procedural_pig.utils.get_dimensions.call(null);
var width = cljs.core.nth.call(null,vec__6097,(0),null);
var height = cljs.core.nth.call(null,vec__6097,(1),null);
var x = quil.core.random.call(null,left_bound,(width - right_bound));
var y = quil.core.random.call(null,top_bound,(height - bottom_bound));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
};
var location__$1 = function (var_args){
var p__6093 = null;
if (arguments.length > 0) {
var G__6098__i = 0, G__6098__a = new Array(arguments.length -  0);
while (G__6098__i < G__6098__a.length) {G__6098__a[G__6098__i] = arguments[G__6098__i + 0]; ++G__6098__i;}
  p__6093 = new cljs.core.IndexedSeq(G__6098__a,0);
} 
return location__$1__delegate.call(this,p__6093);};
location__$1.cljs$lang$maxFixedArity = 0;
location__$1.cljs$lang$applyTo = (function (arglist__6099){
var p__6093 = cljs.core.seq(arglist__6099);
return location__$1__delegate(p__6093);
});
location__$1.cljs$core$IFn$_invoke$arity$variadic = location__$1__delegate;
return location__$1;
})()
;
