angular.module("graphMod", [])
	.controller('GraphController', ["$scope", function($scope){
		$scope.options = {
			chart: {
				type: 'stackedAreaChart',
				height: 500,
				margin : {top: 30, right: 100, bottom: 100, left: 70},
				x: function(d){return d[0];},
				y: function(d){return d[1];},
				useVoronoi: false,
				clipEdge: true,
				duration: 100,
				useInteractiveGuideline: false,
				xAxis: {
					showMaxMin: false,
					tickFormat: function(d) {return d3.time.format('%a')(new Date(d))}
				},
				yAxis: {
					tickFormat: function(d){return d3.format('')(d);}
				},
				zoom: {
					enabled: true,
					scaleExtent: [1, 10],
					useFixedDomain: false,
					useNiceScale: false,
					horizontalOff: true,
					verticalOff: true,
					unzoomEventType: 'dblclick.zoom'
				}
			}
		};
		/*
		var newDate, point1, point2, formData, addPoints;
		newDate = []
		point1 = document.getElementById("point1").value;
		point2 = document.getElementById("point2").value;
		formData = [newDate, point1, point2];
		*/
	    $scope.data = [
			{
			    "key": "Point 1",
			    "values": [
					[0, 16],
					[86400000, 23],
					[172800000, 19],
					[259200000, 21],
					[345600000, 22],
					[432000000, 25],
					[518400000, 26],
					[604800000, 19],
					[691200000, 24],
					[777600000, 19]
			    ]
			},
			{
			    "key": "Point 2",
			    "values": [
					[0, 12],
					[86400000, 7],
					[172800000, 7],
					[259200000, 7],
					[345600000, 8],
					[432000000, 9],
					[518400000, 9],
					[604800000, 10],
					[691200000, 10],
					[777600000, 10]
			    ]
			}
		];
		$scope.formData = [
			[undefined, undefined],
			[undefined, undefined]
		];
		$scope.addPoints = function(){
			var newDay = $scope.data[0].values[9][0] + 86400000;
			console.log(newDay, $scope.formData[0], $scope.formData[1]);
			$scope.data[0].values.push([newDay, $scope.formData[0]]);
			$scope.data[1].values.push([newDay, $scope.formData[1]]);
			if ($scope.data[0].values.length > 10){
				$scope.data[0].values.shift();
			}
			if ($scope.data[1].values.length > 10){
				$scope.data[1].values.shift();
			}
			$scope.$apply();
		};
	}])
;


/*
app.controller('MainCtrl', function($scope) {
  $scope.todos = []
  $scope.todoList = "";
  $scope.addTodo = function(){
    $scope.todos.push($scope.todoList)
  }
  $scope.clearAll = function(){
    $scope.todos = []
  }
});
*/