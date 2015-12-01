// Compiled by ClojureScript 0.0-2740 {}
goog.provide('procedural_pig.sketches.sandbox_01');
goog.require('cljs.core');
goog.require('quil.middleware');
goog.require('quil.core');
procedural_pig.sketches.sandbox_01.setup = (function setup(){
quil.core.frame_rate.call(null,(100));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(13));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null);
});
procedural_pig.sketches.sandbox_01.update_state = (function update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.03),new cljs.core.Keyword(null,"tick","tick",-835886976),(new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(state) + 0.01)], null);
});
procedural_pig.sketches.sandbox_01.draw_state = (function draw_state(state){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((220) * quil.core.sin.call(null,angle));
var y = (((220) * quil.core.sin.call(null,angle)) * quil.core.cos.call(null,angle));
var tr__5782__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__5782__auto__);

var tr__5788__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.01 * new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state))], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__5788__auto__);

return quil.core.ellipse.call(null,x,y,(75),(125));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
procedural_pig.sketches.sandbox_01.sketch_sandbox_01 = (function sketch_sandbox_01(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.sandbox_01.draw_state))?(function() { 
var G__5885__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.sandbox_01.draw_state,args);
};
var G__5885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5886__i = 0, G__5886__a = new Array(arguments.length -  0);
while (G__5886__i < G__5886__a.length) {G__5886__a[G__5886__i] = arguments[G__5886__i + 0]; ++G__5886__i;}
  args = new cljs.core.IndexedSeq(G__5886__a,0);
} 
return G__5885__delegate.call(this,args);};
G__5885.cljs$lang$maxFixedArity = 0;
G__5885.cljs$lang$applyTo = (function (arglist__5887){
var args = cljs.core.seq(arglist__5887);
return G__5885__delegate(args);
});
G__5885.cljs$core$IFn$_invoke$arity$variadic = G__5885__delegate;
return G__5885;
})()
:procedural_pig.sketches.sandbox_01.draw_state),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.sandbox_01.setup))?(function() { 
var G__5888__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.sandbox_01.setup,args);
};
var G__5888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5889__i = 0, G__5889__a = new Array(arguments.length -  0);
while (G__5889__i < G__5889__a.length) {G__5889__a[G__5889__i] = arguments[G__5889__i + 0]; ++G__5889__i;}
  args = new cljs.core.IndexedSeq(G__5889__a,0);
} 
return G__5888__delegate.call(this,args);};
G__5888.cljs$lang$maxFixedArity = 0;
G__5888.cljs$lang$applyTo = (function (arglist__5890){
var args = cljs.core.seq(arglist__5890);
return G__5888__delegate(args);
});
G__5888.cljs$core$IFn$_invoke$arity$variadic = G__5888__delegate;
return G__5888;
})()
:procedural_pig.sketches.sandbox_01.setup),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,procedural_pig.sketches.sandbox_01.update_state))?(function() { 
var G__5891__delegate = function (args){
return cljs.core.apply.call(null,procedural_pig.sketches.sandbox_01.update_state,args);
};
var G__5891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5892__i = 0, G__5892__a = new Array(arguments.length -  0);
while (G__5892__i < G__5892__a.length) {G__5892__a[G__5892__i] = arguments[G__5892__i + 0]; ++G__5892__i;}
  args = new cljs.core.IndexedSeq(G__5892__a,0);
} 
return G__5891__delegate.call(this,args);};
G__5891.cljs$lang$maxFixedArity = 0;
G__5891.cljs$lang$applyTo = (function (arglist__5893){
var args = cljs.core.seq(arglist__5893);
return G__5891__delegate(args);
});
G__5891.cljs$core$IFn$_invoke$arity$variadic = G__5891__delegate;
return G__5891;
})()
:procedural_pig.sketches.sandbox_01.update_state),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-start","no-start",1381488856)], null),new cljs.core.Keyword(null,"host","host",-1558485167),"procedural-pig");
});
goog.exportSymbol('procedural_pig.sketches.sandbox_01.sketch_sandbox_01', procedural_pig.sketches.sandbox_01.sketch_sandbox_01);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5323__5324__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5323__5324__auto__);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-start","no-start",1381488856)], null)))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),procedural_pig.sketches.sandbox_01.sketch_sandbox_01,new cljs.core.Keyword(null,"host-id","host-id",742376279),"procedural-pig"], null));
}
