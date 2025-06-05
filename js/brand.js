$(function () {
  //////////////////////////

  // mbbox
  $("#header .menubar").click(function () {
    $(".mbbox").addClass("on");
    $(".mbbox .title").addClass("on");
  });
  $(".mbbox .menubar").click(function () {
    $(".mbbox").removeClass("on");
    $(".mbbox .title").removeClass("on");
    setTimeout(function () {
      $(".mbbox").children(".box").css({
        width: "100%",
      });
    }, 1000);
  });

  // 클릭시 해당창 확대
  mbScale();
  function mbScale() {
    let mbClass = 0;
    $(".mbbox")
      .children(".box")
      .click(function () {
        if (mbClass == 0) {
          clearInterval(mbIntervalId);
          $(this).siblings(".box").css({
            width: "0%",
          });
          $(this).css({
            width: "400%",
          });
          mbStart();
          mbClass = 1;
        } else {
          clearInterval(mbIntervalId);
          $(this).css({
            width: "100%",
          });
          $(this).siblings(".box").css({
            width: "100%",
          });
          mbStart();
          mbClass = 0;
        }
      });
  }

  // image slide
  let mbIndex = 0;
  let totalMb = $(".mbbox .box2 p ").length;
  let mbIntervalId;

  mbStart();
  function mbStart() {
    mbIntervalId = setInterval(mbSlide, 3000);
  }

  function mbSlide() {
    $(".mbbox .box2 p").eq(mbIndex).removeClass("on");
    $(".mbbox .box4 p").eq(mbIndex).removeClass("on");
    // console.log(mbIndex);
    mbIndex = (mbIndex + 1) % totalMb;
    $(".mbbox .box2 p").eq(mbIndex).addClass("on");
    $(".mbbox .box4 p").eq(mbIndex).addClass("on");
    // console.log(mbIndex);
  }

  // visual
  // let innerH2 = $("#visual .inner h2");
  let i = -1;
  function up() {
    if (i < 100) {
      //무한으로 반복되는거 방지하는 조건문
      $("#visual .inner h2").find("span").eq(i).css({
        transform: "translateY(0%)",
        transition: "0.5s",
        opacity: "100%",
      });
      i++;
    }
  }

  up();
  setTimeout(function () {
    title = setInterval(up, 100);
  }, 300);

  setTimeout(function () {
    $("#visual .blur").addClass("on");
  }, 1500);

  //스크롤 이벤트
  baseLine = 200;
  var pos1 = $("#visual").offset().top + baseLine;
  var pos2 = $("#con1").offset().top + baseLine;
  var pos3 = $("#con2").offset().top + baseLine;
  var pos4 = $("#con3").offset().top + baseLine;
  var pos5 = $("#con4").offset().top + baseLine;
  // console.log(pos1);
  // console.log(pos2);
  // console.log(pos3);
  // console.log(pos4);
  // console.log(pos5);
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    // if (scroll < pos1) {

    // }
    if (scroll >= pos1 && scroll < pos2) {
      $("#con1 .left").addClass("on");
      $("#con1 .right").addClass("on");

      let j = -1;
      function con1up() {
        if (j < 100) {
          //무한으로 반복되는거 방지하는 조건문
          $("#con1  .colorbox").find("li").eq(j).css({
            transform: "translateY(0%)",
            transition: "0.5s",
            opacity: "100%",
          });
          j++;
        }
      }
      con1up();
      setTimeout(function () {
        conbox = setInterval(con1up, 100);
      }, 500);
    } else if (scroll >= pos2 && scroll < pos3) {
      $("#con2 .right").addClass("on");
      $("#con2 .left").addClass("on");

      let j = -1;
      function con2up() {
        if (j < 100) {
          //무한으로 반복되는거 방지하는 조건문
          $("#con2  .colorbox").find("li").eq(j).css({
            transform: "translateY(0%)",
            transition: "0.5s",
            opacity: "100%",
          });
          j++;
        }
      }
      con2up();
      setTimeout(function () {
        conbox = setInterval(con2up, 100);
      }, 500);
    } else if (scroll >= pos3 && scroll < pos4) {
      $("#con3 .right").addClass("on");
      $("#con3 .left").addClass("on");

      let j = -1;
      function con3up() {
        if (j < 100) {
          //무한으로 반복되는거 방지하는 조건문
          $("#con3  .colorbox").find("li").eq(j).css({
            transform: "translateY(0%)",
            transition: "0.5s",
            opacity: "100%",
          });
          j++;
        }
      }
      con3up();
      setTimeout(function () {
        conbox = setInterval(con3up, 100);
      }, 500);
    } else if (scroll >= pos4 && scroll < pos5) {
      $("#con4 .right").addClass("on");
      $("#con4 .left").addClass("on");

      let j = -1;
      function con4up() {
        if (j < 100) {
          //무한으로 반복되는거 방지하는 조건문
          $("#con4  .colorbox").find("li").eq(j).css({
            transform: "translateY(0%)",
            transition: "0.5s",
            opacity: "100%",
          });
          j++;
        }
      }
      con4up();
      setTimeout(function () {
        conbox = setInterval(con4up, 100);
      }, 500);
    }
  });

  
  //////////////////////////
});
