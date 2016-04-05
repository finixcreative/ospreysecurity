var data, margin, width, height, parseDate, x, y, xAxis, yAxis, area, svg, newDate, point1, point2, formData, addPoints;
newDate = document.getElementById("date").options[document.getElementById("date").selectedIndex].value;
point1 = document.getElementById("point1").value;
point2 = document.getElementById("point2").value;
formData = [newDate, point1, point2];
addPoints = function(source){
	console.log(source);
	data.push(source);
};
data = [
	{"date": "sunday-1", "point1": "33", "point2": "47"},
	{"date": "monday-2", "point1": "60", "point2": "10"},
	{"date": "tuesday-3", "point1": "42", "point2": "52"},
	{"date": "wednesday-4", "point1": "75", "point2": "30"},
	{"date": "thursday-5", "point1": "32", "point2": "63"},
	{"date": "friday-6", "point1": "50", "point2": "21"},
	{"date": "saturday-7", "point1": "58", "point2": "11"},
	{"date": "sunday-8", "point1": "33", "point2": "47"},
	{"date": "monday-9", "point1": "60", "point2": "10"},
	{"date": "tuesday-10", "point1": "42", "point2": "52"},
	{"date": "wednesday-11", "point1": "75", "point2": "30"},
	{"date": "thursday-12", "point1": "32", "point2": "63"},
	{"date": "friday-13", "point1": "50", "point2": "21"},
	{"date": "saturday-14", "point1": "58", "point2": "11"}
];
margin = {top: 20, right: 20, bottom: 30, left: 50};
width = 960 - margin.left - margin.right;
height = 500 - margin.top - margin.bottom;
parseDate = d3.time.format("%A-%d").parse;
x = d3.time.scale()
	.range([0, width]);
y = d3.scale.linear()
	.range([height, 0]);
xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");
yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");
area1 = d3.svg.area()
	.x(function(d){return x(d.date);})
	.y0(height)
	.y1(function(d){return y(d.point1);})
	.interpolate("basis");
area2 = d3.svg.area()
	.x(function(d){return x(d.date);})
	.y0(height)
	.y1(function(d){return y(d.point2);})
	.interpolate("basis");
svg = d3.select("body").append("svg")
	.attr("width", "100%")
	.attr("height", height + margin.top + margin.bottom + 40)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
data.forEach(function(d) {
	d.date = parseDate(d.date);
	d.point1 = +d.point1;
	d.point2 = +d.point2;
}); 
x.domain(d3.extent(data, function(d){return d.date;}));
y.domain([0, d3.max(data, function(d){return d.point1;})]);
svg.append("path")
	.datum(data)
	.attr("class", "area1")
	.attr("d", area1);
svg.append("path")
	.datum(data)
	.attr("class", "area2")
	.attr("d", area2);
svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);
svg.append("g")
	.attr("class", "y axis")
	.call(yAxis)
	.append("text")
	.attr("transform", "rotate(-90)")
	.attr("y", 6)
	.attr("dy", "1em")
	.style("text-anchor", "end")
	.text("Total");