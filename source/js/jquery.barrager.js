/**
 *@name     jquery.barrager.js
 *@version  1.1
 *@author   yaseng@uauc.net
 *@url      https://github.com/yaseng/jquery.barrager.js
 */
(function($) {
	$.fn.barrager = function(barrage) {
		barrage = $.extend({
			close: true,
			max: 10,
			speed: 16,
			color: '#ffffff',
		}, barrage || {});

		const time = new Date().getTime();
		const barrager_id = 'barrage_' + time;
		const id = '#' + barrager_id;
		const div_barrager = $("<div class='barrage' id='" + barrager_id + "'></div>").appendTo($(this));
		const this_height = $(window).height() * 0.35;
		const this_width = $(window).width() + 100;
		const array = [
			(this_height / 5) + $(window).height() * 0.5,
			2*(this_height / 5) + $(window).height() * 0.5,
			3*(this_height / 5) + $(window).height() * 0.5,
			4*(this_height / 5) + $(window).height() * 0.5,
			5*(this_height / 5)   + $(window).height() * 0.5
		]
		const bottom =array[Math.floor(Math.random()*5)];

		div_barrager.css("bottom", bottom + "px");
		div_barrager_box = $("<div class='barrage_box cl'></div>").appendTo(div_barrager);
		if(barrage.img){
			div_barrager_box.append("<a class='portrait z' href='javascript:;'></a>");
			const img = $("<img src='' >").appendTo(id + " .barrage_box .portrait");
			img.attr('src', barrage.img);
		}
		div_barrager_box.append(" <div class='z p'></div>");
		if(barrage.close){
			div_barrager_box.append(" <div class='close z'></div>");
		}

		const content = $("<a title='' href='' target='_blank'></a>").appendTo(id + " .barrage_box .p");
		content.attr({
			'href': barrage.href,
			'id': barrage.id
		}).empty().append(barrage.info);
		content.css('color', barrage.color);

		const i = 0;
		div_barrager.css('margin-right', 0);
		
 		$(id).animate({right:this_width},barrage.speed*1000,function()
		{
			$(id).remove();
		});

		div_barrager_box.mouseover(function()
		{
		     $(id).stop(true);
		});

		div_barrager_box.mouseout(function()
		{
			$(id).animate({right:this_width},barrage.speed*1000,function()
			{
				$(id).remove();
			});
 		});

		$(id+'.barrage .barrage_box .close').click(function()
		{
			$(id).remove();
		})
	}


	$.fn.barrager.removeAll=function()
	{
		 $('.barrage').remove();
	}

})(jQuery);
