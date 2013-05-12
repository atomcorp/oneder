
this.uiSelect = function(){
	var length = $("#ui .choiceNames li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	while (length >= 1) {
		$('#ui li').hide();
		length--;
		// alert('hello');
	  };
	$("#ui li:nth-child(" + ran + ")").show();
};

this.clientSelect = function(){
	var length = $("#client .choiceNames li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	while (length >= 1) {
		$('#client li').hide();
		length--;
		// alert('hello');
	  };
	$("#client li:nth-child(" + ran + ")").show();
};

this.demandsSelect = function(){
	var length = $("#demands .choiceNames li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	while (length >= 1) {
		$('#demands li').hide();
		length--;
		// alert('hello');
	  };
	$("#demands li:nth-child(" + ran + ")").show();
};

$(document).ready(function(){	
	$('#mangle').click(function(){
		uiSelect();
		clientSelect();
		demandsSelect();
		return false;
	});	
});
