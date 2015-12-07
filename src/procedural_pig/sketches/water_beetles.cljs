(ns procedural-pig.sketches.water-beetles
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [procedural-pig.random :as random]
            [procedural-pig.utils :as utils :refer [log]]))

(defn create-beetle []
  {:rotation 0
   :location (random/location)
   })

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :rgb 255)
  (q/background 7)
  {:color (q/color 0 0 10)
   :angle 0
   :beetles 
   [(create-beetle)
    (create-beetle)
    (create-beetle)
    (create-beetle)
    (create-beetle)
    ]})

(defn update-state [state]
  {
   
   })

(defn draw-state [state]
  (q/fill (:color state))
  (q/background 7)
  (doseq [beetle (:beetles state)]
    (let [[x y] (-> beetle :location)]
      (log "Beetle" beetle x y)
      (q/fill (:color state))
      (q/ellipse x y 5 10))
    )
  (q/ellipse 10 10 5 10)
  )


(q/defsketch sketch-water-beetles
  :host "procedural-pig"
  :size [(.-innerWidth js/window)
         (.-innerHeight js/window)]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode]
  :features [:no-start]
  )
