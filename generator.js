
this.uiSelect = function(){
	var length = $("#ui .choiceNames li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	$('#ui li').css('display','none');
	$("#ui li:nth-child(" + ran + ")").css('display','inline');
};

this.clientSelect = function(){
	var length = $("#client .choiceNames li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	$('#client li').css('display','none');
	$("#client li:nth-child(" + ran + ")").css('display','inline');
};

this.demandsSelect = function(){
	var length = $("#demands .choiceNames li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	// while (length >= 1) {
	$('#demands li').css('display','none');
	// length--;
	// alert('hello');
	// };
	$("#demands li:nth-child(" + ran + ")").css('display','inline');
};

$(document).ready(function(){	
		uiSelect();
		clientSelect();
		demandsSelect();
	$('#pushTheButton').click(function(){
		uiSelect();
		clientSelect();
		demandsSelect();
		return false;
	});	
});
