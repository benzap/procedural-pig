// Compiled by ClojureScript 0.0-2740 {}
goog.provide('quil.middleware');
goog.require('cljs.core');
goog.require('quil.middlewares.navigation_3d');
goog.require('quil.middlewares.fun_mode');
/**
* Introduces function mode. Adds 'update' function which takes current
* state and returns new state. Makes all other functions (setup, draw,
* mouse-click, etc) state-aware. See wiki for more details.
*/
quil.middleware.fun_mode = (function fun_mode(options){
return quil.middlewares.fun_mode.fun_mode.call(null,options);
});
/**
* Enables navigation in 3D space. Similar to how it is done in
* shooters: WASD navigation, space is go up, drag mouse to look around.
* This middleware requires fun-mode.
* 
* 
* Navigation
* 
* * Drag mouse to look around. You can change settings to bind
* mouse-moved instead of mouse-dragged to look around. See
* customization info below.
* 
* * Keyboard:
* * w - go forward
* * s - go backward
* * a - strafe left
* * d - strafe right
* * space - go up
* * z - go down, can't bind to ctrl, limitation of Processing
* 
* 
* Customization
* 
* You can customize this middleware by providing map as
* :navigation-3d option in defsketch/sketch. Map can have following
* optional keys:
* 
* :position - vector of 3 numbers, initial camera position. Default
* is the same as in 'camera' function.
* 
* :straight - vector of 3 numbers, direction you'll be looking at.
* Default is [0 0 -1] (looking down).
* 
* :up - vector of 3 numbers, 'up' direction. Default is [0 1 0].
* 
* :pixels-in-360 - number, mouse sensitivity. Defines how many pixels
* you need to move/drag you mouse to rotate 360 degrees.
* The less the number the more sensitive is mouse.
* Default is 1000.
* 
* :step-size - number, number of pixels you move on each key event (wasd).
* Default is 20.
* 
* :rotate-on - keyword, either :mouse-dragged or :mouse-moved. Specifies
* on which mouse event camera should rotate. Default is
* :mouse-dragged.
* 
* 
* Accessing position information from sketch
* 
* navigation-3d uses fun-mode underneath so all position-related information
* is stored in the state map. It means that you can access in draw/update/any
* handler and modify it if you need to. Position information is a map which
* is stored under :navigation-3d key in the state map. Position consists of
* 3 values: :position, :straight and :up. See "Customization" section above
* for more details.
* 
* See wiki article for more(?) details:
* https://github.com/quil/quil/wiki/Navigation-3D
*/
quil.middleware.navigation_3d = (function navigation_3d(options){
return quil.middlewares.navigation_3d.navigation_3d.call(null,options);
});
