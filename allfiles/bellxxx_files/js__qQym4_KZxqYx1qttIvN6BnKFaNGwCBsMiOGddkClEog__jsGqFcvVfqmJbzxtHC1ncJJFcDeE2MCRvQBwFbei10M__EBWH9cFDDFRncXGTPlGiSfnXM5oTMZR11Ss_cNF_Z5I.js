jQuery(document).ready(function($){
	$('.bod-modal-link').click(function(e){
		if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		var nid = $(this).attr('href').split('/')[2];
		loadSbModal(nid);
	});
	function loadSbModal(nid) {
		if (!$('.bio-modal').length) {
			createModalMarkup();
		}

		$('#bio-modal').find('.modal-body').text(Drupal.t('Loading...'));

		$.ajax({
            url: "/node/"+nid+"/sb",
            cache: false,
            success: function(data){
            	$('#bio-modal').find('.modal-body').html(data);
            }
        });

       	$('#bio-modal').modal();
	}
	function closeViewport() {
		$('#sb-container').removeClass('executive-modal');
	}
	function resizeViewport() {
		var windowH = $(window).height() - 100;
		var viewH = $('#sb-body-inner').css('height');
		$('#sb-body').css({ 'maxHeight' : windowH });
		$('#sb-wrapper-inner').animate({ 
			'height' : viewH
		}, 300).css({ 'maxHeight' : windowH });
	}

	function createModalMarkup() {
		$('.region-page-bottom').append('<div id="bio-modal" class="modal fade">\
		  <div class="modal-dialog">\
		    <div class="modal-content">\
		      <div class="modal-header">\
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
		      </div>\
		      <div class="modal-body">\
		      </div>\
		    </div>\
		  </div>\
		</div>');
	}
});;/**/
