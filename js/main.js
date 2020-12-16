$(document).ready(function(){

  $('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
      


  getyear();
  var visible;
  if($('.main-container-wrapper').hasClass('umain')){
      $('.try-pagesense').removeClass('dis-inbl').addClass('hide');
      $('.access-pagesense').removeClass('hide').addClass('dis-inbl');
    }  
  $(window).scroll(function(){
       if($(window).scrollTop() > $('section.first').offset().top + 400){
      $('header').addClass('active');
    }
    else{
      $('header').removeClass('active');
    }
      navscrollactive();
  });
  
      var elementTop = $('section.first').offset().top;
      var elementBottom = $(window).scrollTop() + $(window).height();
      var bottom = elementTop + $('section.first').height();
      var sections =$('.navMenu'),
      nav = $('.menuTop'),
      nav_height =$('header').outerHeight();
      var navscrollactive = function(){
        var cur_pos = $(this).scrollTop() + 400;
        sections.each(function(index) {
          var top = $(this).offset().top - nav_height,
              bottom = top + $(this).outerHeight();
          if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('li').removeClass('active');
            $(this).addClass('active');
            $('.menuTop li').eq(index).addClass('active');
          }
        });
      }
  $(document).on('click','.menuTop li',function(){
        var vIndex = $(this).index();
        $('.menuTop li').removeClass('active');
        var getdata = $(this).data('scroll');
        $('.menuTop li').eq(vIndex).addClass('active');
        $('.'+ getdata).addClass('active');
        var scrollsection = $('.'+ getdata).offset().top - 40;
        $('html, body').animate({ scrollTop: scrollsection }, 400);
      });
var isTouchDevice = 'ontouchstart' in document.documentElement;
var startEventType = 'mousedown',
    endEventType = 'mouseup',
    moveEventType = 'mousemove';

if(isTouchDevice){
    startEventType = 'touchstart',
    endEventType = 'touchend',
    moveEventType = 'touchmove';
}    
  $('.handle-bar').on(startEventType,function(event){
            var $this = $(this),
            $ele = $(this).parent().find('.img-overlay'),
            containerWidth = $this.parent().outerWidth(),
            containerOffset = $this.parent().offset().left,
            msize = ($(window).width() > 700) ? "80" : "40",
            msize = parseInt(msize),
            minLeft = $this.outerWidth() + msize,
            maxLeft = containerWidth - $this.outerWidth() - msize;
            initSize();
            $(this).addClass('hold');
            function initSize(event){
                $this.parent().on(moveEventType,function(event){     
                var wt = (event.originalEvent.touches ? event.originalEvent.touches[0].pageX : event.pageX) - ($ele.offset().left);  
                if(wt < minLeft){
                  return false;
                } 
                else if(wt > maxLeft) {
                  return false;
                }
                $ele.css({'width':wt,'max-width' : maxLeft,'min-width':minLeft});
                $this.css('left',wt);        
                }).on(endEventType,function(event){
                    $this.removeClass('hold');
                    $this.parent().off(moveEventType);
                });
            } 
            return false;
        });
// $('.handle-bar').on('mouseleave',function(event){
//   $(this).removeClass('hold');
//   $(this).parent().off(moveEventType);
// });

// setTimeout(function(){
     
    // },500);


  $(document).on('click','.slid',function(){
    var currentInd = $('.testimonial-wrapper ul li.active');
    var className = $(this).data('cls');
    
    if (className == 'prev'){
    var prev = (currentInd.prev().length > 0) ? (currentInd.prev()) : $('.testimonial-wrapper ul li:last-child');
    setTimeout(function(){
      $('.testimonial-wrapper ul li').removeClass('active');
    },100);
    setTimeout(function(){
      prev.addClass('active');
    },300);
    }
    else{
     var next = (currentInd.next().length > 0) ? (currentInd.next()) : $('.testimonial-wrapper ul li:first-child');
    setTimeout(function(){
      $('.testimonial-wrapper ul li').removeClass('active');
    },100);
    setTimeout(function(){
      next.addClass('active');
    },300);
    }
    // if($('.testimonial-wrapper ul li.active').index() == ind){
    //   return false;
  
  });
});
function isInViewport(node){
    var rect = node.getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
  }
function getyear(){
  var y = document.getElementsByClassName("getyear")
  var d = new Date();
  var t = d.getFullYear();
  y[0].innerHTML = t;
}
