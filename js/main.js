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
		//$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
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
$('.question5-1').val(q51);
$('.question5-2').val(q52);


var first_answer= localStorage.getItem('first_answer');
var last_answer= localStorage.getItem('last_answer');
    
if(first_answer=='1'){
    //色ボタン表示
    $('.no_show_pop').addClass('hide');
    $('.show_pop').removeClass('hide');
    
}


if(last_answer=='1'){


}
    

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
    
    var first_answer= localStorage.getItem('first_answer');
    var last_answer= localStorage.getItem('last_answer');
    
  
    
    


    
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
    	alert("正解！色が選べるように！");
    	localStorage.setItem('first_answer', 1);
    	var url ='images/answerd.jpg';
    	$('#qimage').attr('src', url);
    	$('.modal_pop_image').fadeIn();
   	    //色ボタン表示
	    $('.no_show_pop').addClass('hide');
    	$('.show_pop').removeClass('hide');

    }else if(answersuccess2&&first_answer!='1'){
   		 alert("むむむ、正しい順番で答えよ");
    }else if(answersuccess2){
   		 alert("素晴らしい！！");
   		 localStorage.setItem('last_answer', 1);
   		 var url ='images/answerf.jpg';
   		 $('#qimage').attr('src', url);
   		 $('.modal_pop_image').fadeIn(); 
   		 //時計を動くようにする
   		 $('.icon-clock').addClass('move-clock');       
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
 /*		function touchStartEvent(event) {
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

        function touchEndEvent1(event) {
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
            if(newParentElem.id == "move-clock2"){
               alert("お見事！！");
            }

        }
        
        function touchEndEvent2(event) {
            event.preventDefault();

            // ドラッグ中の操作のために変更していたスタイルを元に戻す
            var droppedElem = event.target;
            //droppedElem.style.position = "";
            //event.target.style.top = "";
            //event.target.style.left = "";

            // ドロップした位置にあるドロップ可能なエレメントに親子付けする
            var touch = event.changedTouches[0];
            // スクロール分を加味した座標に存在するエレメントを新しい親とする
            var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);
            if(newParentElem.id == "move-clock1"){
               alert("お見事！！");
            }

        }

        
            // ドラッグ可能アイテムへのタッチイベントの設定
                var clock1 =  document.getElementById("move-clock1");
                clock1.addEventListener('touchstart', touchStartEvent, false);
                clock1.addEventListener('touchmove', touchMoveEvent, false);
                clock1.addEventListener('touchend', touchEndEvent1, false);
        
                var clock2 =  document.getElementById("move-clock2");
                clock2.addEventListener('touchstart', touchStartEvent, false);
                clock2.addEventListener('touchmove', touchMoveEvent, false);
                clock2.addEventListener('touchend', touchEndEvent2, false);
        

*/

function noscroll(e){
    e.preventDefault();
}

(function(){

    //要素の取得
    var elements = document.getElementsByClassName("move-clock");

    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }

    //マウスが押された際の関数
    function mdown(e) {

        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {

        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();
        
        document.addEventListener('touchmove', noscroll, {passive: false});
	    document.addEventListener('wheel', noscroll, {passive: false});

        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    //マウスボタンが上がったら発火
    function mup(e) {
    
         // ドロップした位置にあるドロップ可能なエレメントに親子付けする
        var touch = e.changedTouches[0];
        // スクロール分を加味した座標に存在するエレメントを新しい親とする
        var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);
		console.log(newParentElem.id);
		
		
        var drag = document.getElementsByClassName("drag")[0];
        
        document.removeEventListener('touchmove', noscroll);
	    document.removeEventListener('wheel', noscroll);

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");
        
        var clientRect1 = document.getElementById('move-clock1').getBoundingClientRect() ;
        var x1 = clientRect1.left + window.pageXOffset;
        var y1 = clientRect1.top+window.pageYOffset; ;
        
        var clientRect2 = document.getElementById('move-clock2').getBoundingClientRect() ;
        var x2 = clientRect2.left + window.pageXOffset;
        var y2 = clientRect2.top+window.pageYOffset; ;
        
        console.log('1：'+x1+'  '+y1);
        console.log('2：'+x2+'  '+y2);
        
        var x12 = Math.abs(x1-x2);        
        var y12 = Math.abs(y1-y2);
        
        console.log('x：'+x12+',y：'+y12);
        
        if(x12<30&&y12<30){
           alert("お見事！！輝くボタンを押そう！");
           //赤ボタンの点滅
   		 $('.red').addClass('custom-blink');  
        }
        
        
      
    }

})()


