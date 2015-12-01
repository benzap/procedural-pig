(ns procedural-pig.sketches.sandbox-01
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 100)
  (q/color-mode :hsb)
  (q/background 13)
  {:color 0
   :angle 0
   :tick 0})

(defn update-state [state]
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.03)
   :tick (+ (:tick state) 0.01)})

(defn draw-state [state]
  (q/fill (:color state) 255 255)
  (let [angle (:angle state)
        x (* 220 (q/sin angle))
        y (* 220 (q/sin angle) (q/cos angle))]
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (q/with-rotation [(* 0.01 (:angle state))]
        (q/ellipse x y 75 125)))))


(q/defsketch sketch-sandbox-01
  :host "procedural-pig"
  :size [(.-innerWidth js/window)
         (.-innerHeight js/window)]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode]
  :features [:no-start]
  )
