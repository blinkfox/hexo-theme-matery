$(function () {
    /**
     * 添加文章卡片hover效果.
     */
    let articleCardHover = function () {
        let animateClass = 'animated pulse';
        $('#articles .article, #tags .article').hover(function () {
            $(this).addClass(animateClass);
        }, function () {
            $(this).removeClass(animateClass);
        });
    };
    articleCardHover();

    /*菜单切换*/
    $('.button-collapse').sideNav();

    /*设置所有文章div的宽度*/
    let setArtWidth = function () {
        let w = $('#navContainer').width();
        if (w >= 450) {
            w = w + 21;
        } else if (w >= 350 && w < 450) {
            w = w + 18;
        } else if (w >= 300 && w < 350) {
            w = w + 16;
        } else {
            w = w + 14;
        }
        $('#articles').width(w);
    };

    /**
     * 修复footer部分的位置，使得在内容比较少时，footer也会在底部.
     */
    let fixFooterPosition = function () {
        $('.content').css('min-height', window.innerHeight - 165);
    };

    setArtWidth();
    fixFooterPosition();

    /*调整屏幕宽度时重新设置文章列的宽度，修复小间距问题*/
    $(window).resize(function () {
        setArtWidth();
        fixFooterPosition();
    });

    /*初始化瀑布流布局*/
    $('#articles').masonry({
        itemSelector: '.article'
    });

    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 700,
        delay: 100
    });

    /*文章内容详情的一些初始化特性*/
    let articleInit = function () {
        $('#articleContent a').attr('target', '_blank');

        $('#articleContent img').each(function () {
            let imgPath = $(this).attr('src');
            $(this).wrap('<div class="img-item" data-src="' + imgPath + '"></div>');
        });
        $('#articleContent, #cd-timeline').lightGallery({
            selector: '.img-item'
        });

        // progress bar init
        const progressElement = window.document.querySelector('.progress-bar');
        new ScrollProgress((x, y) => {
            progressElement.style.width = y * 100 + '%';
        });
    };
    articleInit();

    $('#toggleSearch').click(function () {
        $('#searchModal').openModal();
    });

    /*回到顶部*/
    $('#backTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });

    /*监听滚动条位置*/
    $(window).scroll(function () {
        /*回到顶部按钮根据滚动条的位置的显示和隐藏*/
        if ($(window).scrollTop() < 100) {
            $('#headNav').addClass('nav-transparent');
            $('.top-scroll').slideUp(300);
        } else {
            $('#headNav').removeClass('nav-transparent');
            $('.top-scroll').slideDown(300);
        }
    });
});
