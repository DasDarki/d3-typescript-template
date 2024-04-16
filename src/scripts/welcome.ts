import data from "@/data/test.json";

import * as d3 from "d3";

export function getMessage(): string {
    return data.message;
}

export function drawSmiley() {
    const svg = d3.select("#smiley");

    svg.append("circle")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r", 40)
        .attr("fill", "yellow");

    svg.append("circle")
        .attr("cx", 30)
        .attr("cy", 30)
        .attr("r", 5)
        .attr("fill", "black");

    svg.append("circle")
        .attr("cx", 70)
        .attr("cy", 30)
        .attr("r", 5)
        .attr("fill", "black");

    svg.append("path")
        .attr("d", "M 30 60 Q 50 80 70 60")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("fill", "none");
}