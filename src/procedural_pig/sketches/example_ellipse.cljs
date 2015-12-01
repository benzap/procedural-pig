(ns procedural-pig.sketches.example-ellipse
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  {:color 0
   :angle 0})

(defn update-state [state]
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.05)})

(defn draw-state [state]
  (q/background 13)
  (q/fill (:color state) 255 255)
  (let [angle (:angle state)
        x (* 75 (q/cos angle))
        y (* 75 (q/sin angle))]
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (q/ellipse x y 100 100))))


(q/defsketch sketch-example-ellipse
  :host "procedural-pig"
  :size [(.-innerWidth js/window)
         (.-innerHeight js/window)]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode]
  :features [:no-start]
  )
