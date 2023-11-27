"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBarGraph = void 0;
var d3 = require("d3");
function createBarGraph() {
    var height = 500;
    var width = 500;
    var margin = 30;
    console.log("hello");
    var svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);
}
exports.createBarGraph = createBarGraph;
