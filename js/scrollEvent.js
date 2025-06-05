// 화면이동
  var elm = ".move";
  $(elm).each(function (index) {
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preDefault();
      var delta = 0;
      if (!e) e = window.e;
      if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (e.detail) delta = -e.detail / 3;
      var moveTop = $(window).scrollTop();
      var elmSelecter = $(elm).eq(index);
      elmSelecter.offset().top;
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        if ($(elmSelecter).next() != undefined) {
          try {
            moveTop = $(elmSelecter).next().offset().top;
          } catch (e) {}
        }
        // 마우스휠을 아래에서 위로
      } else {
        if ($(elmSelecter).prev() != undefined) {
          try {
            moveTop = $(elmSelecter).prev().offset().top;
          } catch (e) {}
        }
      }

      // 화면 이동 0.8초(800)
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: moveTop + "px",
          },
          {
            duration: 800,
            complete: function () {},
          }
        );
    });
  });