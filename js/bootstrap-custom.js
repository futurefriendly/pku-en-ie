// File: Custom Javascript
// Domain: http://english.pku.edu.cn
// Author: bienfantaisie#gmail.com

// image text slider
function fn_infoimg() {

	var doc_w = document.body.clientWidth,
		speed = 400;

	var $infoimg_wrap = $('.f_infoimg_wrap');

	if (doc_w >= 768) {
		$infoimg_wrap.each(function() {

			var $infoimg = $(this).find('.f_infoimg'),
				infoimg_h = $infoimg.height(),
				infoimg_mg = $infoimg.css('marginTop').slice(1, -2),
				infoimg_ex = infoimg_h - infoimg_mg;

				$('.f_infoimg', this).css({
					'bottom': '-' + infoimg_ex + 'px'
				});

			$(this).hover(function() {

				$('.f_infoimg', this).stop().animate({
					'bottom': 0 + 'px'
				}, speed);

			}, function() {

				// var infoimg_h = $('.f_infoimg', this).height(),
				// infoimg_ex = infoimg_h - infoimg_mg;

				$('.f_infoimg', this).stop().animate({
					'bottom': '-' + infoimg_ex + 'px'
				}, speed);

			});
		});
	} else {
		$(this).unbind("mouseenter").unbind("mouseleave");
		$infoimg_wrap.find('.f_infoimg').css('bottom', 'auto');
	}

	/*	$infoimg = $infoimg_wrap.find('.f_infoimg'),
		speed = 400,

		infoimg_h = $infoimg.height(),
		infoimg_mg = $infoimg.css('marginTop').slice(1, -2),
		infoimg_ex = infoimg_h - infoimg_mg;

	if (doc_w >= 768) {
		if (!$infoimg.is(':animated')) {

			$infoimg.css({
				'position': 'absolute',
				'bottom': -infoimg_ex + 'px',
				'visibility': 'visible'
			});
			$infoimg_wrap.hover(function() {
				$infoimg.stop().animate({
					'bottom': 0
				}, speed);
			}, function() {
				$infoimg.stop().animate({
					'bottom': -infoimg_ex + 'px'
				}, speed);
			});
		}
	} else {
		$infoimg.css({
			'position': 'absolute',
			'bottom': 0,
			'visibility': 'visible'
		});

		$(this).unbind("mouseenter").unbind("mouseleave");
	}*/

	/* var $infoimg = $('.f_infoimg');

	$infoimg.each(function() {

		var infoimg_h = $(this)[0].clientHeight,
			infoimg_mg = $(this).css('marginTop').slice(1, -2),
			infoimg_ex = infoimg_h - infoimg_mg;

		$(this).css('visibility', 'visible');

		if (doc_w >= 768) {

			if(!+[1,]){
				$(this).height($(this).height());
				var infoimg_h = $(this).height();
			}

			$(this).stop().animate({
				'position': 'absolute',
				'bottom': -infoimg_ex + 'px'
			},0);

			$(this).parent('.f_infoimg_wrap').bind({
				mouseenter: function() {
					if(!+[1,]){
						$(this).height($(this).height());
						var infoimg_h = $(this).height();
					}

					$('.f_infoimg', this).stop().animate({
						'bottom': '0px'
					}, speed);
				},
				mouseleave: function() {

					$('.f_infoimg', this).stop().animate({
						'bottom': -infoimg_ex + 'px'
					}, speed);
				}
			});

		} else {

			$(this).unbind("mouseenter").unbind("mouseleave").animate({
				'position': 'relative',
				'bottom': -infoimg_ex + 'px'
			}, speed);

		}

	});*/

}

// responsive image
function fn_fitimg() {

	var $fitimg_wrap = $('.f_fitimg_wrap');

	$fitimg_wrap.each(function() {

		var $fitimg = $('.f_fitimg', this),
			imgwrap_w = $(this).width(),
			imgwrap_h = $(this).height(),
			img_w = $fitimg.width(),
			img_h = $fitimg.height();

		$fitimg.css({
			'margin': 'auto',
			'width': 'auto',
			'height': 'auto',
			'visibility': 'hidden'
		});

		if (img_w / img_h > imgwrap_w / imgwrap_h) {
			$fitimg.css({
				'height': imgwrap_h + 'px'
			});
			var img_w = $fitimg.width();
			var imgwrap_w = $(this).width();
			$fitimg.css({
				'marginLeft': imgwrap_w / 2 - img_w / 2 + 'px'
			});
		} else {
			$fitimg.css({
				'width': imgwrap_w + 'px'
			});
			var img_h = $fitimg.height();
			var imgwrap_h = $(this).height();
			$fitimg.css({
				'marginTop': imgwrap_h / 2 - img_h / 2 + 'px'
			});

		}

		$fitimg.css({
			'visibility': 'visible'
		});

	});

}

// dockMsg
function fn_dockMsg() {
	// dock-msg's height
	var doc_w = document.body.clientWidth,
		$_reco = $('.m_recommend .item');

	$_reco.each(function() {

		if (doc_w >= 768) {
			$('.zoom-pic,.dock-msg').show();
			var reco_h = $(this).height(),
				pic_h = $('.zoom-pic', this).height(),
				offset_btm = $('.dock-msg', this).css('bottom').slice(0, -2),
				speed = 350;

			$(this).hover(function() {

			var reco_h = $(this).height(),
				pic_h = $('.zoom-pic', this).height(),
				offset_btm = $('.dock-msg', this).css('bottom').slice(0, -2);

				$('.zoom-pic', this).stop().animate({
					'opacity': 1
				}, speed);
				$('.dock-msg', this).stop().animate({
					'height': reco_h - pic_h - offset_btm + 'px'
				}, speed);
			}, function() {
				$('.zoom-pic', this).stop().animate({
					'opacity': 0
				}, speed);
				$('.dock-msg', this).stop().animate({
					'height': -offset_btm + 'px'
				}, speed);
			});
		} else {
			$('.zoom-pic,.dock-msg').hide();
		}

	});
}

// main & side compare height
function comHeight() {
	$('.f_main,.f_side').height('auto');

	var main_h = $('.f_main').height(),
		side_h = $('.f_side').height();

	$('.f_main,.f_side').css({
		'minHeight': Math.max(main_h, side_h)
	});
}

function instantLoad() {
	// responsive image
	// fn_fitimg();

	// dock-msg's height
	fn_dockMsg();

	// image text slider
	fn_infoimg();

	var doc_w = document.body.clientWidth;

	if (doc_w >= 992) {

		// main & side compare height
		if ($('.f_main').length > 0) {
			comHeight();
		}

	} else {

		// main & side compare height
		if ($('.f_main').length > 0) {
			$('.f_main,.f_side').css({
				'minHeight': 0
			});
		}

	}

	return doc_w;
}

window.onload = function() {
	instantLoad();
}

window.onresize = function() {
	instantLoad();
}
window.onscroll = function(){
	instantLoad();
}

// document.ready function
$(function() {

	// imgLiquid plugin
	$(".imgLiquidFill").imgLiquid();

	// $('.bttrlazyloading').bttrlazyloading();

	// lazyload
	//$('img.lazy').lazyload({
	//	effect : 'fadeIn'
	//});

	// information
	var $_info = $('.m_information .item');

	if (instantLoad() < 768) {

		// show information
		$_info.find('.ico_information').hide();
		$_info.find('.desc').show().css('opacity',1);

	} else {
		$_info.find('.ico_information').show();
		$_info.find('.desc').hide();

		// animation rhythm
		var speed = 450;

		// toggle
		$('.m_information .item').hover(function() {
			$('.ico_information', this).stop().animate({
				'opacity': 0
			}, speed).css({
				'display': 'none'
			});
			$('.desc', this).stop().css({
				'display': 'block'
			}).animate({
				'opacity': 1
			}, speed);
		}, function() {
			$('.ico_information', this).stop().css({
				'display': 'block'
			}).animate({
				'opacity': 1
			}, speed);
			$('.desc', this).stop().animate({
				'opacity': 0
			}, speed).css({
				'display': 'none'
			});
		});
	}

});