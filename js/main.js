;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
	});


}());


//謎回答欄初期値

var q1 = localStorage.getItem('q1');
var q2 = localStorage.getItem('q2');
var q3 = localStorage.getItem('q3');
var q4 = localStorage.getItem('q4');
var q51 = localStorage.getItem('q51');
var q52 = localStorage.getItem('q52');

$('.question1').val(q1);
$('.question2').val(q2);
$('.question3').val(q3);
$('.question4').val(q4);
$('.question51').val(q51);
$('.question52').val(q52);


//謎回答

 $('.btn-answer').on('click',function(){
    var answerfailed=false;
    var answernone=false;
    var answersuccess1=true;
    var answersuccess2=true;
    
    var q1 = $('.question1').val();
    var q2 = $('.question2').val();
    var q3 = $('.question3').val();
    var q4 = $('.question4').val();
    var q51 = $('.question5-1').val();
    var q52 = $('.question5-2').val();
    
    localStorage.setItem('q1', q1);
    localStorage.setItem('q2', q2);
    localStorage.setItem('q3', q3);
    localStorage.setItem('q4', q4);
    localStorage.setItem('q51', q51);
    localStorage.setItem('q52', q52);


    
    //1問目
    if(q1=='カンダ'){
      
    }else if(q1==''){
      answernone=true;
      answersuccess1=false;
      answersuccess2=false;
    }else{
      answerfailed=true;
      answersuccess1=false;
      answersuccess2=false;    
    }

    //2問目
    if(q2=='コンヤク'){
      
    }else if(q2==''){
      answernone=true;
      answersuccess1=false;
      answersuccess2=false;
    }else{
      answerfailed=true;
      answersuccess1=false;
      answersuccess2=false;    
    }

    //3問目
	if(q3=='プリンス'){
      
    }else if(q3==''){
      answernone=true;
      answersuccess1=false;
      answersuccess2=false;
    }else{
      answerfailed=true;
      answersuccess1=false;
      answersuccess2=false;    
    }

    //4問目
    if(q4=='ヘイカ'||q4=='カヘイ'){
      answersuccess2=false;
    }else if(q4=='ローズ'){
       answersuccess1=false;           
    }else if(q4==''){
      answernone=true;
      answersuccess1=false;
      answersuccess2=false;
    }else{
      answerfailed=true;
      answersuccess1=false;
      answersuccess2=false;    
    }


    //5問目
    if((q51=='スバコ'&&q52=='タカラバコ')||(q51=='タカラバコ'&&q52=='スバコ')){

    }else if(q51==''||q52==''){
      answernone=true;
      answersuccess1=false;
      answersuccess2=false;
    }else{
      answerfailed=true;
      answersuccess1=false;
      answersuccess2=false;    
    }
    
    
    if(answersuccess1){
    alert("正解です！");
    localStorage.setItem('first_answer', 1);
    var url ='images/answerd.jpg';
    $('#qimage').attr('src', url);
    $('.modal_pop_image').fadeIn();
    }else if(answersuccess2){
    alert("素晴らしい！！");
    localStorage.setItem('last_answer', 2);
    var url ='images/answerf.jpg';
    $('#qimage').attr('src', url);
    $('.modal_pop_image').fadeIn();        
    }else if(answernone){
    alert("全ての答えを入力してください");        
    }else if(answerfailed){
    alert("間違っている解答があります");        
    }
     
 })


function getgoogle(type){
    //GASのAPIのURL（各自変更してください。）
    const endpoint ="https://script.google.com/macros/s/AKfycbzD7HUiRp-ULYGhMVE6Z5RLXiYqVoEGfsDvTz7naDC0pb3BDwStmz5CVVHtYTiVqqnUpQ/exec";
        "★WebAPIのURL★";
        fetch(endpoint)
		.then(function (fetch_data) {
  		return fetch_data.json();
		})
		.then(function (json) {
  		for (var i in json) {
    		console.log(json[i].timeup);
    		console.log(json[i].answer);
  		}
		});
		
		return json[0].timeup;
		
}
        

//時計移動
 function touchStartEvent(event) {
            // タッチによる画面スクロールを止める
            event.preventDefault();
        }

        function touchMoveEvent(event) {
            event.preventDefault();

            // ドラッグ中のアイテムをカーソルの位置に追従
            var draggedElem = event.target;
            var touch = event.changedTouches[0];
            event.target.style.position = "fixed";
            event.target.style.top = (touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2) + "px";
            event.target.style.left = (touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2) + "px";
        }

        function touchEndEvent(event) {
            event.preventDefault();

            // ドラッグ中の操作のために変更していたスタイルを元に戻す
            var droppedElem = event.target;
            droppedElem.style.position = "";
            event.target.style.top = "";
            event.target.style.left = "";

            // ドロップした位置にあるドロップ可能なエレメントに親子付けする
            var touch = event.changedTouches[0];
            // スクロール分を加味した座標に存在するエレメントを新しい親とする
            var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);
            if(newParentElem.id == "tota"){
               alert("こいつは狼だ！");
               localStorage.setItem('finish', "OK");
                window.location.href = './next/'; 
               
            }else if(newParentElem.id == "tanu"){
               alert("食べちゃダメ！");
               
               
            }else if(newParentElem.id == "shizu"){
               alert("食べちゃダメ！");
            }

        }

        
            // ドラッグ可能アイテムへのタッチイベントの設定
                var clock1 =  document.getElementById("move-clock1")
                clock1.addEventListener('touchstart', touchStartEvent, false);
                clock1.addEventListener('touchmove', touchMoveEvent, false);
                clock1.addEventListener('touchend', touchEndEvent, false);
        


