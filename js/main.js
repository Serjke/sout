/**
 * Created by Serjos on 23.03.15.
 */
$(document).ready(function () {
    $('.show').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.next('div.hidden').slideToggle();
    });
   
    $('.show-list').click(function(e) {
		e.preventDefault();
		var $this = $(this);
        var hBlock = $(this).prev('ul.hidden');
         $(this).text(hBlock.is(':visible') ? 'Показать больше' : 'Скрыть');
		hBlock.slideToggle();
	});
	if($.isFunction($.fn.bxSlider)){
    $('.slider3').bxSlider({
        adaptiveHeight: true,
        touchEnabled: true,
        pager: true,
        controls: true,
        auto: false,
        slideMargin: 1
    });
    }
});