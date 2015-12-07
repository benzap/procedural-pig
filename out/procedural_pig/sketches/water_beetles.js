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

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(0),(0),(10)),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"beetles","beetles",-1502867491),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [procedural_pig.sketches.water_beetles.create_beetle.call(null),procedural_pig.sketches.water_beetles.create_beetle.call(null),procedural_pig.sketches.water_beetles.create_beetle.call(null),procedural_pig.sketches.water_beetles.create_beetle.call(null),procedural_pig.sketches.water_beetles.create_beetle.call(null)], null)], null);
});
procedural_pig.sketches.water_beetles.update_state = (function update_state(state){
return cljs.core.PersistentArrayMap.EMPTY;
});
procedural_pig.sketches.water_beetles.draw_state = (function draw_state(state){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state));

quil.core.background.call(null,(7));

var seq__6562_6568 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"beetles","beetles",-1502867491).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6563_6569 = null;
var count__6564_6570 = (0);
var i__6565_6571 = (0);
while(true){
if((i__6565_6571 < count__6564_6570)){
var beetle_6572 = cljs.core._nth.call(null,chunk__6563_6569,i__6565_6571);
var vec__6566_6573 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(beetle_6572);
var x_6574 = cljs.core.nth.call(null,vec__6566_6573,(0),null);
var y_6575 = cljs.core.nth.call(null,vec__6566_6573,(1),null);
procedural_pig.utils.log.call(null,"Beetle",beetle_6572,x_6574,y_6575);

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state));

quil.core.ellipse.call(null,x_6574,y_6575,(5),(10));

var G__6576 = seq__6562_6568;
var G__6577 = chunk__6563_6569;
var G__6578 = count__6564_6570;
var G__6579 = (i__6565_6571 + (1));
seq__6562_6568 = G__6576;
chunk__6563_6569 = G__6577;
count__6564_6570 = G__6578;
i__6565_6571 = G__6579;
continue;
} else {
var temp__4126__auto___6580 = cljs.core.seq.call(null,seq__6562_6568);
if(temp__4126__auto___6580){
var seq__6562_6581__$1 = temp__4126__auto___6580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6562_6581__$1)){
var c__4546__auto___6582 = cljs.core.chunk_first.call(null,seq__6562_6581__$1);
var G__6583 = cljs.core.chunk_rest.call(null,seq__6562_6581__$1);
var G__6584 = c__4546__auto___6582;
var G__6585 = cljs.core.count.call(null,c__4546__auto___6582);
var G__6586 = (0);
seq__6562_6568 = G__6583;
chunk__6563_6569 = G__6584;
count__6564_6570 = G__6585;
i__6565_6571 = G__6586;
continue;
} else {
var beetle_6587 = cljs.core.first.call(null,seq__6562_6581__$1);
var vec__6567_6588 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(beetle_6587);
var x_6589 = cljs.core.nth.call(null,vec__6567_6588,(0),null);
var y_6590 = cljs.core.nth.call(null,vec__6567_6588,(1),null);
procedural_pig.utils.log.call(null,"Beetle",beetle_6587,x_6589,y_6590);

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state));

quil.core.ellipse.call(null,x_6589,y_6590,(5),(10));

var G__6591 = cljs.core.next.call(null,seq__6562_6581__$1);
var G__6592 = null;
var G__6593 = (0);
var G__6594 = (0);
seq__6562_6568 = G__6591;
chunk__6563_6569 = G__6592;
count__6564_6570 = G__6593;
i__6565_6571 = G__6594;
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
var G__6595__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.water_beetles.draw_state,args);
};
var G__6595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6596__i = 0, G__6596__a = new Array(arguments.length -  0);
while (G__6596__i < G__6596__a.length) {G__6596__a[G__6596__i] = arguments[G__6596__i + 0]; ++G__6596__i;}
  args = new cljs.core.IndexedSeq(G__6596__a,0);
} 
return G__6595__delegate.call(this,args);};
G__6595.cljs$lang$maxFixedArity = 0;
G__6595.cljs$lang$applyTo = (function (arglist__6597){
var args = cljs.core.seq(arglist__6597);
return G__6595__delegate(args);
});
G__6595.cljs$core$IFn$_invoke$arity$variadic = G__6595__delegate;
return G__6595;
})()
:procedural_pig.sketches.water_beetles.draw_state),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.water_beetles.setup))?(function() { 
var G__6598__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.water_beetles.setup,args);
};
var G__6598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6599__i = 0, G__6599__a = new Array(arguments.length -  0);
while (G__6599__i < G__6599__a.length) {G__6599__a[G__6599__i] = arguments[G__6599__i + 0]; ++G__6599__i;}
  args = new cljs.core.IndexedSeq(G__6599__a,0);
} 
return G__6598__delegate.call(this,args);};
G__6598.cljs$lang$maxFixedArity = 0;
G__6598.cljs$lang$applyTo = (function (arglist__6600){
var args = cljs.core.seq(arglist__6600);
return G__6598__delegate(args);
});
G__6598.cljs$core$IFn$_invoke$arity$variadic = G__6598__delegate;
return G__6598;
})()
:procedural_pig.sketches.water_beetles.setup),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.water_beetles.update_state))?(function() { 
var G__6601__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.water_beetles.update_state,args);
};
var G__6601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6602__i = 0, G__6602__a = new Array(arguments.length -  0);
while (G__6602__i < G__6602__a.length) {G__6602__a[G__6602__i] = arguments[G__6602__i + 0]; ++G__6602__i;}
  args = new cljs.core.IndexedSeq(G__6602__a,0);
} 
return G__6601__delegate.call(this,args);};
G__6601.cljs$lang$maxFixedArity = 0;
G__6601.cljs$lang$applyTo = (function (arglist__6603){
var args = cljs.core.seq(arglist__6603);
return G__6601__delegate(args);
});
G__6601.cljs$core$IFn$_invoke$arity$variadic = G__6601__delegate;
return G__6601;
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
