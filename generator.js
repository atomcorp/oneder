
this.uiSelect = function(){
	var length = $("#brief .uiNames li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	$('.ui li').css('display','none');
	$(".ui li:nth-child(" + ran + ")").css('display','inline');
};

this.clientSelect = function(){
	var length = $("#brief .clientNames li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	$('.client li').css('display','none');
	$(".client li:nth-child(" + ran + ")").css('display','inline');
};

this.demandsSelect = function(){
	var length = $("#brief .demandsNames li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	// while (length >= 1) {
	$('.demands li').css('display','none');
	// length--;
	// alert('hello');
	// };
	$(".demands li:nth-child(" + ran + ")").css('display','inline');
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
	$('#pause').click(function() { // START pause function
		$('#burst-12').toggleClass('paused');	
	}); 
	$('#pause').toggle( // START pause function
			function() {
			$(this).html('<h6>Unpause</h6>');},
			function() {
			$(this).html('<h6>Pause</h6>');}
		);
});
