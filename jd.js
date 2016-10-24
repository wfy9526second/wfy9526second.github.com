$(document).ready(function() {

	$('.middle-4-middle').mouseover(function() {
		clearInterval(timer)
		$('.sleft').add($('.sright')).show()
	});
	$('.middle-4-middle').mouseout(function() {
		ab();
		$('.sleft').add($('.sright')).hide()
	});
	$('.sleft').add($('.sright')).mouseover(function() {
		$('.sleft').add($('.sright')).show()
	})
	$('.sleft').add($('.sright')).mouseout(function() {
		$('.sleft').add($('.sright')).hide()
	});
	var $tp = $('.tp').get(0);
	var a = 1;
	$('.sleft').click(function() {
		if (a == 1) {
			a = 6;
		} else {
			a = a - 1;
		}
		$('.sz span').removeClass('bgred')
		$('.sz span').eq(a - 1).addClass('bgred')

		$tp.style.left = -730*(a-1) + 'px';
		

	});
	function next() {
		if (a == 6) {
			a = 1
		} else {
			a = a + 1
		}
		$('.sz span').removeClass('bgred')
		$('.sz span').eq(a - 1).addClass('bgred')

		$tp.style.left = -730*(a-1) + 'px';
		
	}
	$('.sright').click(next)
	var timer;
	function ab(){
		timer=setInterval(next,3000)
	}
	ab();
	var b;
	$('.sz span').mouseover(function(){
		a=$('.sz span').index(this);
		next();
	})
	$('#f1 .dtop ul li').mouseover(function(){
		$('#f1 .dtop ul li a').removeClass('red');
		$('#f1 .dtop ul li span').removeClass('dis');
		$(this).find('a').addClass('red')
		$(this).find('span').addClass('dis');
		var $a=$('#f1 .dtop ul li').index($(this));
		$('#f1 .d19>div').removeClass('dis')
		$('#f1 .d19>div').eq($a).addClass('dis')
	})
	$('#f2 .dtop ul li').mouseover(function(){
		$('#f2 .dtop ul li a').removeClass('red');
		$('#f2 .dtop ul li span').removeClass('dis');
		$(this).find('a').addClass('red')
		$(this).find('span').addClass('dis');
		var $b=$('#f2 .dtop ul li').index($(this));
		$('#f2 .d19>div').removeClass('dis')
		$('#f2 .d19>div').eq($b).addClass('dis')
	})
	$('#f3 .dtop ul li').mouseover(function(){
		$('#f3 .dtop ul li a').removeClass('red');
		$('#f3 .dtop ul li span').removeClass('dis');
		$(this).find('a').addClass('red')
		$(this).find('span').addClass('dis');
		var $c=$('#f3 .dtop ul li').index($(this));
		$('#f3 .d19>div').removeClass('dis')
		$('#f3 .d19>div').eq($c).addClass('dis')
	})
	$('#f4 .dtop ul li').mouseover(function(){
		$('#f4 .dtop ul li a').removeClass('red');
		$('#f4 .dtop ul li span').removeClass('dis');
		$(this).find('a').addClass('red')
		$(this).find('span').addClass('dis');
		var $a4=$('#f4 .dtop ul li').index($(this));
		$('#f4 .d19>div').removeClass('dis')
		$('#f4 .d19>div').eq($a4).addClass('dis')
	})
	$('#f5 .dtop ul li').mouseover(function(){
		$('#f5 .dtop ul li a').removeClass('red');
		$('#f5 .dtop ul li span').removeClass('dis');
		$(this).find('a').addClass('red')
		$(this).find('span').addClass('dis');
		var $a5=$('#f4 .dtop ul li').index($(this));
		$('#f5 .d19>div').removeClass('dis')
		$('#f5 .d19>div').eq($a5).addClass('dis')
	})
	$('#f6 .dtop ul li').mouseover(function(){
		$('#f6 .dtop ul li a').removeClass('red');
		$('#f6 .dtop ul li span').removeClass('dis');
		$(this).find('a').addClass('red')
		$(this).find('span').addClass('dis');
		var $a6=$('#f4 .dtop ul li').index($(this));
		$('#f6 .d19>div').removeClass('dis')
		$('#f6 .d19>div').eq($a6).addClass('dis')
	})
	$('#f7 .dtop ul li').mouseover(function(){
		$('#f7 .dtop ul li a').removeClass('red');
		$('#f7 .dtop ul li span').removeClass('dis');
		$(this).find('a').addClass('red')
		$(this).find('span').addClass('dis');
		var $a7=$('#f4 .dtop ul li').index($(this));
		$('#f7 .d19>div').removeClass('dis')
		$('#f7 .d19>div').eq($a7).addClass('dis')
	})
    $('#f8 .dtop ul li').mouseover(function(){
		$('#f8 .dtop ul li a').removeClass('red');
		$('#f8 .dtop ul li span').removeClass('dis');
		$(this).find('a').addClass('red')
		$(this).find('span').addClass('dis');
		var $a8=$('#f4 .dtop ul li').index($(this));
		$('#f8 .d19>div').removeClass('dis')
		$('#f8 .d19>div').eq($a8).addClass('dis')
	})
	
$(document).scroll(function(){
	var scrolltop=document.body.scrollTop ||document.documentElement.scrollTop ;
	var k;
	if(scrolltop>900){
		$('.menu').css('display','block');
         
	}
	else{
		$('.menu').css('display','none');
	}
	$('.mid8>div').each(function(){
		var m=$(this).offset().top;
		if(scrolltop+200>m){
          k='#'+$(this).attr('id')
		}else{
			return false
		}
	})
	$('.menu a').each(function(){
		var b=$(this).attr('href')
		if(k && k==b){
          $(this).addClass('ys')
		}else{
			$(this).removeClass('ys')
		}

	})
	})


})
