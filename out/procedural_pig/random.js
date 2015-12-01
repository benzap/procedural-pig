// Compiled by ClojureScript 0.0-2740 {}
goog.provide('procedural_pig.random');
goog.require('cljs.core');
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
var vec__5862 = tup;
var percent = cljs.core.nth.call(null,vec__5862,(0),null);
var value = cljs.core.nth.call(null,vec__5862,(1),null);
var cend = (cstart + (percent * norm_factor));
var G__5863 = cend;
var G__5864 = cljs.core.rest.call(null,tupl__$1);
var G__5865 = cljs.core.conj.call(null,distrib,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cstart,cend], null),value], null));
cstart = G__5863;
tupl__$1 = G__5864;
distrib = G__5865;
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
return (function (p__5869){
var vec__5870 = p__5869;
var vec__5871 = cljs.core.nth.call(null,vec__5870,(0),null);
var start = cljs.core.nth.call(null,vec__5871,(0),null);
var end = cljs.core.nth.call(null,vec__5871,(1),null);
var value = cljs.core.nth.call(null,vec__5870,(1),null);
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
