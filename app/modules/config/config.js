var configure,
	configPanel,
	configLabel;

config = false;

if(configure === true){
	$(".hydra").addClass("relative");
	configLabel = "Done";
} else if(configure === false){
	$(".hydra").removeClass("relative");
	configLabel = "Edit";
} else {
	$("#configbutton").attr("disabled");	
	configLabel = "Error";
}

configPanel = function(){
	console.log('Configure Init = ' + configure);
	configure = !configure;
	if(configure === true){
		$(".hydra").addClass("relative");
		$scope.configLabel = "Done";
	} else if(configure === false){
		$(".hydra").removeClass("relative");
		$scope.configLabel = "Edit";
	} else {
		$scope.configLabel = "Error";			
	}
	console.log('Configure Update = ' + configure);
};