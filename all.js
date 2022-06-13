// 回到頂部Top
 $(function() {
    var $win = $(window);
    var $backToTop = $('.top');
    // 当用户滚动到离顶部100像素时，展示回到顶部按钮
    $win.scroll(function() {
    if ($win.scrollTop() > 100) {
        $backToTop.show();
    } else {
        $backToTop.hide();
    }
    });
    // 当用户点击按钮时，通过动画效果返回头部
    $backToTop.click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    });
});




// 常見問題 
$(document).ready(function(){
	$('.qa-title').click(function(e){
	    e.preventDefault();
	    $('.qa-title').find('p').removeClass('qa-active');
        $(this).find('p').addClass('qa-active');

        $('.qa-title').siblings('p').slideUp();
        $(this).siblings('p').slideDown();

        $('.qa-title').find('.icon_minus').addClass('d-none');
        $('.qa-title').find('.icon_plus').removeClass('d-none');
        $(this).find('.icon_plus').addClass('d-none');
        $(this).find('.icon_minus').removeClass('d-none');
	})
})




// 價格方案
$(document).ready(function(){
	$('.charge-plan li').click(function(e){
	    e.preventDefault();
	    $('.charge-plan li').find('button').removeClass('btn-primary');
        $(this).find('button').toggleClass('btn-primary');

        // 改變方案文字
        let numSub = $(this).find('button span').text();
        // console.log(numSub);
        $('.num-sub').text(numSub);

        if (numSub == '10000') {
            $('#basic-price').text('600');
            $('#standard-price').text('1600');
        } else if (numSub == '15000') {
            $('#basic-price').text('700');
            $('#standard-price').text('1700');
        } else if (numSub == '20000') {
            $('#basic-price').text('800');
            $('#standard-price').text('1800');
        } else if (numSub == '25000') {
            $('#basic-price').text('900');
            $('#standard-price').text('1900');
        } else if (numSub == '>25000') {
            $('#basic-price').text('1000');
            $('#standard-price').text('2000');
        }
	})
})






// 輪播

function initSwiper() {
  /* 
  id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
  要抓取 id "#comment-swiper"
  */
  const swiper = new Swiper("#comment-swiper", {
    /*  預設要顯示幾個卡片 */
    slidesPerView: 1,
    /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3
      },
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      768: {
        slidesPerView: 2
      },
      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1
      }
    },
    /* 卡片元素的間隔 */
    spaceBetween: 16,
    pagination: {
      /* 我想將分頁圓點綁在哪個 class */
      el: ".swiper-pagination",
      /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
      clickable: true
    }
  });
}

/* 觸發自己定義的函式 */
initSwiper();