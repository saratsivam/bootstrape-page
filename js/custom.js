$(document).ready(function(){
	
	
	prettyPrint();
	
	
	canvas = $('#canvas');
	  g = GUtil.createGraphis({
    		target: '#canvas'	
  	         });
	
	
	
	
	
});


$('.custom-nav-tabs a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
	
	if($(this).text()=='Result'){
		showResult($(this));
	}	
});


function showResult(x){
  codeDiv = $(x.parent().prev().children().attr('href'));
  resultDiv = $(x.attr('href'));	
	resultDiv.html(canvas);
	g.clearLoops();g.clear();
	eval(codeDiv.text().replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g, ''));

}



