// JS Code for ic-08 
// Brady Duncan
// Last Modified: 10/7/2022

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const FRAME1 = d3.select("#vis1")
            .append("svg")
                .attr("height", FRAME_HEIGHT)
                .attr("width", FRAME_WIDTH)
                .attr("class", "frame"); 

d3.csv("data/data.csv").then((data) => {
    console.log(data);

})