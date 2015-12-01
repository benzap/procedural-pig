// Compiled by ClojureScript 0.0-2740 {}
goog.provide('procedural_pig.core');
goog.require('cljs.core');
goog.require('quil.middleware');
goog.require('quil.core');
procedural_pig.core.setup = (function setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
procedural_pig.core.update_state = (function update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.05)], null);
});
procedural_pig.core.draw_state = (function draw_state(state){
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
procedural_pig.core.start_ellipse_example = (function start_ellipse_example(){
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"procedural-pig",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),procedural_pig.core.setup,new cljs.core.Keyword(null,"update","update",1045576396),procedural_pig.core.update_state,new cljs.core.Keyword(null,"draw","draw",1358331674),procedural_pig.core.draw_state,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null));
});
