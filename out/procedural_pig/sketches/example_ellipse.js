// Compiled by ClojureScript 0.0-2740 {}
goog.provide('procedural_pig.sketches.example_ellipse');
goog.require('cljs.core');
goog.require('quil.middleware');
goog.require('quil.core');
procedural_pig.sketches.example_ellipse.setup = (function setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
procedural_pig.sketches.example_ellipse.update_state = (function update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.05)], null);
});
procedural_pig.sketches.example_ellipse.draw_state = (function draw_state(state){
quil.core.background.call(null,(13));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((75) * quil.core.cos.call(null,angle));
var y = ((75) * quil.core.sin.call(null,angle));
var tr__5782__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__5782__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
procedural_pig.sketches.example_ellipse.sketch_example_ellipse = (function sketch_example_ellipse(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.example_ellipse.draw_state))?(function() { 
var G__6127__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.example_ellipse.draw_state,args);
};
var G__6127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6128__i = 0, G__6128__a = new Array(arguments.length -  0);
while (G__6128__i < G__6128__a.length) {G__6128__a[G__6128__i] = arguments[G__6128__i + 0]; ++G__6128__i;}
  args = new cljs.core.IndexedSeq(G__6128__a,0);
} 
return G__6127__delegate.call(this,args);};
G__6127.cljs$lang$maxFixedArity = 0;
G__6127.cljs$lang$applyTo = (function (arglist__6129){
var args = cljs.core.seq(arglist__6129);
return G__6127__delegate(args);
});
G__6127.cljs$core$IFn$_invoke$arity$variadic = G__6127__delegate;
return G__6127;
})()
:procedural_pig.sketches.example_ellipse.draw_state),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.example_ellipse.setup))?(function() { 
var G__6130__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.example_ellipse.setup,args);
};
var G__6130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6131__i = 0, G__6131__a = new Array(arguments.length -  0);
while (G__6131__i < G__6131__a.length) {G__6131__a[G__6131__i] = arguments[G__6131__i + 0]; ++G__6131__i;}
  args = new cljs.core.IndexedSeq(G__6131__a,0);
} 
return G__6130__delegate.call(this,args);};
G__6130.cljs$lang$maxFixedArity = 0;
G__6130.cljs$lang$applyTo = (function (arglist__6132){
var args = cljs.core.seq(arglist__6132);
return G__6130__delegate(args);
});
G__6130.cljs$core$IFn$_invoke$arity$variadic = G__6130__delegate;
return G__6130;
})()
:procedural_pig.sketches.example_ellipse.setup),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.example_ellipse.update_state))?(function() { 
var G__6133__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.example_ellipse.update_state,args);
};
var G__6133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6134__i = 0, G__6134__a = new Array(arguments.length -  0);
while (G__6134__i < G__6134__a.length) {G__6134__a[G__6134__i] = arguments[G__6134__i + 0]; ++G__6134__i;}
  args = new cljs.core.IndexedSeq(G__6134__a,0);
} 
return G__6133__delegate.call(this,args);};
G__6133.cljs$lang$maxFixedArity = 0;
G__6133.cljs$lang$applyTo = (function (arglist__6135){
var args = cljs.core.seq(arglist__6135);
return G__6133__delegate(args);
});
G__6133.cljs$core$IFn$_invoke$arity$variadic = G__6133__delegate;
return G__6133;
})()
:procedural_pig.sketches.example_ellipse.update_state),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-start","no-start",1381488856)], null),new cljs.core.Keyword(null,"host","host",-1558485167),"procedural-pig");
});
goog.exportSymbol('procedural_pig.sketches.example_ellipse.sketch_example_ellipse', procedural_pig.sketches.example_ellipse.sketch_example_ellipse);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5323__5324__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5323__5324__auto__);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-start","no-start",1381488856)], null)))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),procedural_pig.sketches.example_ellipse.sketch_example_ellipse,new cljs.core.Keyword(null,"host-id","host-id",742376279),"procedural-pig"], null));
}
