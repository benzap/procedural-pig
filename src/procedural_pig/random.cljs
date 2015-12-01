(ns procedural-pig.random
  (:require [procedural-pig.utils :refer [log]]))

(def dist-resolution 10000000)

(defn get-distribution [norm-factor tupl]
  (loop [cstart 0
         tupl tupl
         distrib []]
    (if-let [tup (first tupl)]
      (let [[percent value] tup
            cend (+ cstart (* percent norm-factor))]
        (recur cend
               (rest tupl)
               (conj distrib [[cstart cend] value])))
      distrib)))

(defn pick-rand-by-dist- [ds]
  (let [r (rand dist-resolution)]
    (->> ds
         (filter (fn [[[start end] value]]
                   (and (<= start r)
                        (> end r))))
         first
         second)))

(defn pick-rand-by-dist 
  [tupl]
  (let [total-percent (->> tupl
                           (map first)
                           (reduce +))
        norm-factor (/ dist-resolution total-percent)
        distrib (get-distribution norm-factor tupl)]
    (pick-rand-by-dist- distrib)))

(defn pick-value-in-range [start end]
  (let [t (- end start)]
    (+ (rand t) start)))

(defn percent-chance
  "based on a provided percent chance between 0.0-100.0, returns true
  if it succeeds"
  [percent]
  (let [distrib 
        [[percent true]
         [(- 100 percent) false]]]
    (pick-rand-by-dist distrib)))
