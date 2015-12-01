(ns procedural-pig.utils)

(defn log [& msgs]
  (.apply (.-log js/console) js/console (clj->js (map clj->js msgs)))
  (last msgs))

(defn clamp-lower [val min]
  (if (< val min)
    min
    val))

(defn clamp-upper [val max]
  (if (> val max)
    max
    val))

(defn clamp [val min max]
  (-> val 
      (clamp-lower min)
      (clamp-upper max)))
