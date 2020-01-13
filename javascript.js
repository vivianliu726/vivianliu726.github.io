$(document).ready(function() {
	//document = your web browser!!//
	//let's put all the code from before into this document tag// 


	$('.switch').on('mouseover',function() {
        // $(this).find('.name').hide();
        $(this).find('.links').show();
    })

	
	$('.switch').on('mouseout',function() {
	    $(this).find('.links').hide();
	    // $(this).find('.name').show();
	})


});