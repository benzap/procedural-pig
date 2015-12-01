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
var G__5874__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.example_ellipse.draw_state,args);
};
var G__5874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5875__i = 0, G__5875__a = new Array(arguments.length -  0);
while (G__5875__i < G__5875__a.length) {G__5875__a[G__5875__i] = arguments[G__5875__i + 0]; ++G__5875__i;}
  args = new cljs.core.IndexedSeq(G__5875__a,0);
} 
return G__5874__delegate.call(this,args);};
G__5874.cljs$lang$maxFixedArity = 0;
G__5874.cljs$lang$applyTo = (function (arglist__5876){
var args = cljs.core.seq(arglist__5876);
return G__5874__delegate(args);
});
G__5874.cljs$core$IFn$_invoke$arity$variadic = G__5874__delegate;
return G__5874;
})()
:procedural_pig.sketches.example_ellipse.draw_state),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.example_ellipse.setup))?(function() { 
var G__5877__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.example_ellipse.setup,args);
};
var G__5877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5878__i = 0, G__5878__a = new Array(arguments.length -  0);
while (G__5878__i < G__5878__a.length) {G__5878__a[G__5878__i] = arguments[G__5878__i + 0]; ++G__5878__i;}
  args = new cljs.core.IndexedSeq(G__5878__a,0);
} 
return G__5877__delegate.call(this,args);};
G__5877.cljs$lang$maxFixedArity = 0;
G__5877.cljs$lang$applyTo = (function (arglist__5879){
var args = cljs.core.seq(arglist__5879);
return G__5877__delegate(args);
});
G__5877.cljs$core$IFn$_invoke$arity$variadic = G__5877__delegate;
return G__5877;
})()
:procedural_pig.sketches.example_ellipse.setup),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.example_ellipse.update_state))?(function() { 
var G__5880__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.example_ellipse.update_state,args);
};
var G__5880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5881__i = 0, G__5881__a = new Array(arguments.length -  0);
while (G__5881__i < G__5881__a.length) {G__5881__a[G__5881__i] = arguments[G__5881__i + 0]; ++G__5881__i;}
  args = new cljs.core.IndexedSeq(G__5881__a,0);
} 
return G__5880__delegate.call(this,args);};
G__5880.cljs$lang$maxFixedArity = 0;
G__5880.cljs$lang$applyTo = (function (arglist__5882){
var args = cljs.core.seq(arglist__5882);
return G__5880__delegate(args);
});
G__5880.cljs$core$IFn$_invoke$arity$variadic = G__5880__delegate;
return G__5880;
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
