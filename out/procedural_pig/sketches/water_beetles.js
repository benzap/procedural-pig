// Compiled by ClojureScript 0.0-2740 {}
goog.provide('procedural_pig.sketches.water_beetles');
goog.require('cljs.core');
goog.require('procedural_pig.utils');
goog.require('procedural_pig.random');
goog.require('quil.middleware');
goog.require('quil.core');
procedural_pig.sketches.water_beetles.create_beetle = (function create_beetle(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0),new cljs.core.Keyword(null,"location","location",1815599388),procedural_pig.random.location.call(null)], null);
});
procedural_pig.sketches.water_beetles.setup = (function setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467),(255));

quil.core.background.call(null,(7));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(0),(0),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"beetles","beetles",-1502867491),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [procedural_pig.sketches.water_beetles.create_beetle.call(null),procedural_pig.sketches.water_beetles.create_beetle.call(null),procedural_pig.sketches.water_beetles.create_beetle.call(null),procedural_pig.sketches.water_beetles.create_beetle.call(null),procedural_pig.sketches.water_beetles.create_beetle.call(null)], null)], null);
});
procedural_pig.sketches.water_beetles.update_state = (function update_state(state){
return state;
});
procedural_pig.sketches.water_beetles.draw_state = (function draw_state(state){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state));

quil.core.background.call(null,(7));

var seq__5940_5946 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"beetles","beetles",-1502867491).cljs$core$IFn$_invoke$arity$1(state));
var chunk__5941_5947 = null;
var count__5942_5948 = (0);
var i__5943_5949 = (0);
while(true){
if((i__5943_5949 < count__5942_5948)){
var beetle_5950 = cljs.core._nth.call(null,chunk__5941_5947,i__5943_5949);
var vec__5944_5951 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(beetle_5950);
var x_5952 = cljs.core.nth.call(null,vec__5944_5951,(0),null);
var y_5953 = cljs.core.nth.call(null,vec__5944_5951,(1),null);
procedural_pig.utils.log.call(null,"Drawing Beetle",x_5952,y_5953);

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state));

quil.core.ellipse.call(null,x_5952,y_5953,(10),(10));

var G__5954 = seq__5940_5946;
var G__5955 = chunk__5941_5947;
var G__5956 = count__5942_5948;
var G__5957 = (i__5943_5949 + (1));
seq__5940_5946 = G__5954;
chunk__5941_5947 = G__5955;
count__5942_5948 = G__5956;
i__5943_5949 = G__5957;
continue;
} else {
var temp__4126__auto___5958 = cljs.core.seq.call(null,seq__5940_5946);
if(temp__4126__auto___5958){
var seq__5940_5959__$1 = temp__4126__auto___5958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5940_5959__$1)){
var c__4546__auto___5960 = cljs.core.chunk_first.call(null,seq__5940_5959__$1);
var G__5961 = cljs.core.chunk_rest.call(null,seq__5940_5959__$1);
var G__5962 = c__4546__auto___5960;
var G__5963 = cljs.core.count.call(null,c__4546__auto___5960);
var G__5964 = (0);
seq__5940_5946 = G__5961;
chunk__5941_5947 = G__5962;
count__5942_5948 = G__5963;
i__5943_5949 = G__5964;
continue;
} else {
var beetle_5965 = cljs.core.first.call(null,seq__5940_5959__$1);
var vec__5945_5966 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(beetle_5965);
var x_5967 = cljs.core.nth.call(null,vec__5945_5966,(0),null);
var y_5968 = cljs.core.nth.call(null,vec__5945_5966,(1),null);
procedural_pig.utils.log.call(null,"Drawing Beetle",x_5967,y_5968);

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state));

quil.core.ellipse.call(null,x_5967,y_5968,(10),(10));

var G__5969 = cljs.core.next.call(null,seq__5940_5959__$1);
var G__5970 = null;
var G__5971 = (0);
var G__5972 = (0);
seq__5940_5946 = G__5969;
chunk__5941_5947 = G__5970;
count__5942_5948 = G__5971;
i__5943_5949 = G__5972;
continue;
}
} else {
}
}
break;
}

return quil.core.ellipse.call(null,(10),(10),(5),(10));
});
procedural_pig.sketches.water_beetles.sketch_water_beetles = (function sketch_water_beetles(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.water_beetles.draw_state))?(function() { 
var G__5973__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.water_beetles.draw_state,args);
};
var G__5973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5974__i = 0, G__5974__a = new Array(arguments.length -  0);
while (G__5974__i < G__5974__a.length) {G__5974__a[G__5974__i] = arguments[G__5974__i + 0]; ++G__5974__i;}
  args = new cljs.core.IndexedSeq(G__5974__a,0);
} 
return G__5973__delegate.call(this,args);};
G__5973.cljs$lang$maxFixedArity = 0;
G__5973.cljs$lang$applyTo = (function (arglist__5975){
var args = cljs.core.seq(arglist__5975);
return G__5973__delegate(args);
});
G__5973.cljs$core$IFn$_invoke$arity$variadic = G__5973__delegate;
return G__5973;
})()
:procedural_pig.sketches.water_beetles.draw_state),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.water_beetles.setup))?(function() { 
var G__5976__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.water_beetles.setup,args);
};
var G__5976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5977__i = 0, G__5977__a = new Array(arguments.length -  0);
while (G__5977__i < G__5977__a.length) {G__5977__a[G__5977__i] = arguments[G__5977__i + 0]; ++G__5977__i;}
  args = new cljs.core.IndexedSeq(G__5977__a,0);
} 
return G__5976__delegate.call(this,args);};
G__5976.cljs$lang$maxFixedArity = 0;
G__5976.cljs$lang$applyTo = (function (arglist__5978){
var args = cljs.core.seq(arglist__5978);
return G__5976__delegate(args);
});
G__5976.cljs$core$IFn$_invoke$arity$variadic = G__5976__delegate;
return G__5976;
})()
:procedural_pig.sketches.water_beetles.setup),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.water_beetles.update_state))?(function() { 
var G__5979__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.water_beetles.update_state,args);
};
var G__5979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5980__i = 0, G__5980__a = new Array(arguments.length -  0);
while (G__5980__i < G__5980__a.length) {G__5980__a[G__5980__i] = arguments[G__5980__i + 0]; ++G__5980__i;}
  args = new cljs.core.IndexedSeq(G__5980__a,0);
} 
return G__5979__delegate.call(this,args);};
G__5979.cljs$lang$maxFixedArity = 0;
G__5979.cljs$lang$applyTo = (function (arglist__5981){
var args = cljs.core.seq(arglist__5981);
return G__5979__delegate(args);
});
G__5979.cljs$core$IFn$_invoke$arity$variadic = G__5979__delegate;
return G__5979;
})()
:procedural_pig.sketches.water_beetles.update_state),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-start","no-start",1381488856)], null),new cljs.core.Keyword(null,"host","host",-1558485167),"procedural-pig");
});
goog.exportSymbol('procedural_pig.sketches.water_beetles.sketch_water_beetles', procedural_pig.sketches.water_beetles.sketch_water_beetles);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5323__5324__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5323__5324__auto__);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-start","no-start",1381488856)], null)))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),procedural_pig.sketches.water_beetles.sketch_water_beetles,new cljs.core.Keyword(null,"host-id","host-id",742376279),"procedural-pig"], null));
}
