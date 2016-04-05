/* Chart 1 -------------------

var data, canvas, circle, circles;

data = [10, 20, 30, 40, 50]

canvas = d3
	.select("body")
	.append("svg")
	.attr("width", 500)
	.attr("height", 500);

circle = canvas
	.append("circle")
	.attr("cx", 50)
	.attr("cy", 50)
	.attr("r", 25);

circles = canvas
	.selectAll("circle")
	.data(data)
	.attr("fill", "blue")
	.enter()
		.append("circle")
		.attr("cx", 150)
		.attr("cy", 50)
		.attr("r", 25)
		.attr("fill", "red");
*/

/* Chart 2 -------------------*/

var data, margin, width, height, x, y, xAxis, yAxis, area, svg;
data = [
	{x: 0, y: 10},
	{x: 1, y: 15},
	{x: 2, y: 35},
	{x: 3, y: 20},
];
margin = {
	top: 20,
	right: 20,
	bottom: 40,
	left: 50
};
width = 575 - margin.left - margin.right;
height = 350 - margin.top - margin.bottom;
x = d3.scale.linear()
	.domain([0, d3.max(data, function(d){return d.x;})])
	.range([0, width]);
y = d3.scale.linear()
	.domain([0, d3.max(data, function(d){return d.y;})])
	.range([height, 0]);
xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");
yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");
area = d3.svg.area()
	.x(function(d){return x(d.x);})
	.y0(height)
	.y1(function(d){return y(d.y);});
svg = d3.select("svg#area")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.append("path")
	.datum(data)
	.attr("class", "area")
	.attr("d", area);
svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);
svg.append("g")
	.attr("class", "y axis")
	.call(yAxis);