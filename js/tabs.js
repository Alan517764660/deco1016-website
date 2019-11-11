
	tabs = {
  init : function(){
   $('.tabs').each(function(){

    var th=$(this),
     tContent=$('.tab-content',th),
     navA=$('ul.nav a',th)

    tContent.not(tContent.eq(0)).hide()

    navA.click(function(){
     var th=$(this),
      tmp=th.attr('href')
     tContent.not($(tmp.slice(tmp.indexOf('#'))).fadeIn(600)).hide()
	 $(th).parent().addClass('selected').siblings().removeClass('selected');
     return false;
    });
   });

  }
 }
 tabs2 = {
  init : function(){
   $('.tabs2').each(function(){

    var th=$(this),
     tContent=$('.tab-content',th),
     navA=$('ul.nav a',th)

    tContent.not(tContent.eq(0)).hide()

    navA.click(function(){
     var th=$(this),
      tmp=th.attr('href')
     tContent.not($(tmp.slice(tmp.indexOf('#'))).fadeIn(600)).hide()
	 $(th).parent().addClass('selected').siblings().removeClass('selected');
     return false;
    });
   });

  }
 }
 $(document).ready(function() {
		tabs.init();
	});
	jQuery(document).ready(function($) {
		$('#form_1, #form_2, #form_3').jqTransform({imgPath:'jqtransformplugin/img/'});	
	});
	$(window).load(function() {
	$('#slider').nivoSlider({
		effect:'fade', 
		slices:15,
		animSpeed:500,
		pauseTime:6000,
		startSlide:0, //Set starting Slide (0 index)
		directionNav:false, //Next & Prev
		directionNavHide:false, //Only show on hover
		controlNav:false, //1,2,3...
		controlNavThumbs:false, //Use thumbnails for Control Nav
		controlNavThumbsFromRel:false, //Use image rel for thumbs
		controlNavThumbsSearch: '.jpg', //Replace this with...
		controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
		keyboardNav:true, //Use left & right arrows
		pauseOnHover:true, //Stop animation while hovering
		manualAdvance:false, //Force manual transitions
		captionOpacity:1, //Universal caption opacity
		beforeChange: function(){},
		afterChange: function(){},
		slideshowEnd: function(){} //Triggers after all slides have been shown
	});
	});