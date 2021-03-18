$(function(){

  // 메인 슬라이더 
    $('.visual').slick({
        vertical:true,
        arrows:true,
        dots: true,
        touchMove:true,
        swipeToSlide:true,
        infinite : true, 
      });
    
    var sw_day =true;
    $('.btn_switch').click(function(){
        if(sw_day == true){
            $(this).addClass('on');
            $('body').addClass('on');
            $('.star').hide()
            console.log(this)
          sw_day = !sw_day
        }else{
          $(this).removeClass('on');
          $('body').removeClass('on');
          $('.star').show()
          sw_day = !sw_day
        }
    });

    var wW = window.innerWidth;
    var wH = window.innerHeight;
    var test = document.body;

  // 빛나는 별
  (function(n) {
    for (var i = 0; i < n; i++) {
      var div = document.createElement('div');
        // div 생성
      div.className = i % 300 == 0 ? 'star star_big' : i % 9 == 0 ? 'star star_medium' : 'star';
        //클래스명 부여

      // random everywhere!
      div.setAttribute('style', 'top:' + Math.round(Math.random() * wH) + 'px;left:' + Math.round(Math.random() * wW)  
      // div의 요소 속성값 지정 ( 'style', 'top:' + 가장 가까운 정수로 반환(랜덤함수 * 모니터 높이) + 'px; left:' + 가장 가까운 정수로 반환(랜덤함수 * 모니터 넓이) 
        + 'px;animation-duration:' + (Math.round(Math.random() * 3000) + 3000) + 'ms;animation-delay:' + Math.round(Math.random() * 3000) + 'ms;');
        // + 'px;animation-duration:' + (가장 가까운 정수로 반환(랜덤함수*3000) + 3000) +  'ms;animation-delay:' + 가장 가까운 정수로 반환(랜덤함수 *3000)+ 'ms;');

        test.appendChild(div);
      // 몸체 안에 div 함수 붙임

    }
  })(150);




      // 사이트 리스트 모음 키

    $('.sitelist .left .category li:nth-child(1)').click(function(){
      $('.right ul').removeClass('on');
    });
    $('.sitelist .left .category li:nth-child(2)').click(function(){
      $('.right .pc_imges').removeClass('on').siblings().addClass('on');
    });

    $('.sitelist .left .category li:nth-child(3)').click(function(){
        $('.right .responsive').removeClass('on').siblings().addClass('on');
    });

    $('.sitelist .left .category li:nth-child(4)').click(function(){
    $('.right .mobile').removeClass('on').siblings().addClass('on');
    });


    // 사이트 리스트 모달 팝업

    $('.visual .sitelist .right ul li a').click(function(){
      $('.modal_sitelist').addClass('on');
    });

    $('.modal_cover').click(function(){
      $('.modal_sitelist').removeClass('on');
    });


    var sw = true;
    $('.btn_side').click(function(){
      if(sw == true){
        $('.btn_side span').addClass('on')
        sw=!sw
      }else{
        $('.btn_side span').removeClass('on')
        sw=!sw
      }

    });



    //  var sw = true;
    //  $('.btn_family').click(function(){
    //   if(sw == true){
    //       $(this).addClass('on')
    //     $('.family_list').stop().slideDown();
    //     sw = !sw;
    //   }else{
    //       $(this).removeClass('on')
          
    //     $('.family_list').stop().slideUp();
    //     sw = !sw;
    //   }
    // });
    
});