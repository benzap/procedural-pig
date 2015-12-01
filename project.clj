(defproject procedural-pig "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [quil "2.2.6"]
                 [org.clojure/clojurescript "0.0-2740"]]

  :plugins [[lein-cljsbuild "1.0.4"]]
  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds [{:source-paths ["src"]
             :compiler
             {:output-to "js/main.js"
              :output-dir "out"
              :asset-path "../out"
              :main "procedural_pig.core"
              :optimizations :none
              :pretty-print true}}]})
