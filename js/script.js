$(document).ready(function () {
  // $("#header .barinner").click(function () {
  //   $("#header .barinner").toggleClass("on");
  // });

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

  function mbStart() {
    mbIntervalId = setInterval(mbSlide, 3000);
  }

  function mbSlide() {
    $(".mbbox .box2 p").eq(mbIndex).removeClass("on");
    $(".mbbox .box4 p").eq(mbIndex).removeClass("on");
    mbIndex = (mbIndex + 1) % totalMb;
    $(".mbbox .box2 p").eq(mbIndex).addClass("on");
    $(".mbbox .box4 p").eq(mbIndex).addClass("on");
  }

  // con2
  let count = 0;
  $("#con2 .up").on("click", function () {
    $(".color_board").addClass("on");
    setTimeout(remove, 700);
    if (count == 0) {
      count++;
      setTimeout(case1, 600);
    } else if (count == 1) {
      count++;
      setTimeout(case2, 600);
    } else if (count == 2) {
      count++;
      setTimeout(case3, 600);
    } else if (count == 3) {
      count = 0;
      setTimeout(case0, 600);
    }
  });

  $("#con2 .down").on("click", function () {
    $(".color_board").addClass("onR");
    setTimeout(remove, 700);
    if (count == 0) {
      count = 3;
      setTimeout(case3, 600);
    } else if (count == 3) {
      count--;
      setTimeout(case2, 600);
    } else if (count == 2) {
      count--;
      setTimeout(case1, 600);
    } else if (count == 1) {
      count--;
      setTimeout(case0, 600);
    }
  });

  function remove() {
    $(".color_board").removeClass("on");
    $(".color_board").removeClass("onR");
  }
  function case0() {
    $(".color_board:nth-of-type(1)").css({ backgroundColor: "#F9A826" });
    $(".color_board:nth-of-type(1)").find("p").text("#F9A826");
    $(".color_board:nth-of-type(1)").find("h3").text("Saffron Orange");
    $(".color_board:nth-of-type(2)").css({ backgroundColor: "#FFCF7F" });
    $(".color_board:nth-of-type(2)").find("p").text("#FFCF7F");
    $(".color_board:nth-of-type(2)").find("h3").text("French Fry");
    $(".color_board:nth-of-type(3)").css({ backgroundColor: "#D9604B" });
    $(".color_board:nth-of-type(3)").find("p").text("#D9604B");
    $(".color_board:nth-of-type(3)").find("h3").text("Pale Coral");
  }

  function case1() {
    $(".color_board:nth-of-type(1)").css({ backgroundColor: "#3B5998" });
    $(".color_board:nth-of-type(1)").find("p").text("#3B5998");
    $(".color_board:nth-of-type(1)").find("h3").text("Royal Blue");
    $(".color_board:nth-of-type(2)").css({ backgroundColor: "#F1C40F" });
    $(".color_board:nth-of-type(2)").find("p").text("#F1C40F");
    $(".color_board:nth-of-type(2)").find("h3").text("Sunny Yellow");
    $(".color_board:nth-of-type(3)").css({ backgroundColor: "#2ECC71" });
    $(".color_board:nth-of-type(3)").find("p").text("#2ECC71");
    $(".color_board:nth-of-type(3)").find("h3").text("Mint Green");
  }
  function case2() {
    $(".color_board:nth-of-type(1)").css({ backgroundColor: "#F2D7D5" });
    $(".color_board:nth-of-type(1)").find("p").text("#F2D7D5");
    $(".color_board:nth-of-type(1)").find("h3").text("Mystic Rose");
    $(".color_board:nth-of-type(2)").css({ backgroundColor: "#E6B0AA" });
    $(".color_board:nth-of-type(2)").find("p").text("#E6B0AA");
    $(".color_board:nth-of-type(2)").find("h3").text("Flamingo Pink");
    $(".color_board:nth-of-type(3)").css({ backgroundColor: "#E9C46A" });
    $(".color_board:nth-of-type(3)").find("p").text("#E9C46A");
    $(".color_board:nth-of-type(3)").find("h3").text("Amber Glow");
  }
  function case3() {
    $(".color_board:nth-of-type(1)").css({ backgroundColor: "#F73859" });
    $(".color_board:nth-of-type(1)").find("p").text("#F73859");
    $(".color_board:nth-of-type(1)").find("h3").text("Rose Red");
    $(".color_board:nth-of-type(2)").css({ backgroundColor: "#3FBCE9" });
    $(".color_board:nth-of-type(2)").find("p").text("#3FBCE9");
    $(".color_board:nth-of-type(2)").find("h3").text("Clear Blue");
    $(".color_board:nth-of-type(3)").css({ backgroundColor: "#FFCF3F" });
    $(".color_board:nth-of-type(3)").find("p").text("#FFCF3F");
    $(".color_board:nth-of-type(3)").find("h3").text("Gold Diesel");
  }

  $(".pop_btn").on("click", function () {
    if (count == 0) {
      $(this).addClass("on");
      $(".pop").addClass("on");
      $("#con2 .wrap").addClass("on");
      // $(".content").addClass("on");
      // $(".c2_title").addClass("on");
      //   $(".box_shadow").addClass("on");
      count++;
    } else {
      $(this).removeClass("on");
      $(".pop").removeClass("on");
      $("#con2 .wrap").removeClass("on");
      // $(".content").removeClass("on");
      // $(".c2_title").removeClass("on");
      //   $(".box_shadow").removeClass("on");
      count = 0;
    }
  });
  for (let i = 0; i < 10; i++) {
    $(`.rec${i}`)
      .find("div")
      .on("mouseover", function () {
        $(`.rec${i} div`).removeClass("on").addClass("off");
        $(this).removeClass("off").addClass("on");
      });
    $(`.rec${i}`).on("mouseleave", function () {
      $(`.rec${i} div`).removeClass("on").removeClass("off");
    });
  }

  let link = document.querySelectorAll("#con1 .inner a");

  for (let j = 0; j <= 3; j++) {
    $(link[j]).on("click", function () {
      $(link).removeClass("on");
      $(this).addClass("on");

      $("#con1 .inner a").css({
        transform: `translateY(-${54 * j + "px"})
      `,
        transition: "0.5s",
      });

      $(".flex_palette").css({
        transform: `translateX(-${1020 * j + "px"})`,
        transition: "0.5s",
      });
      if (j == 0) {
        $(".right h2").text("2024 COLOR TRENDS PALETTE");
        $(".right p").text("2024 COLOR TRENDS PALETTE 2024 COLOR TRENDS PALETTE 2024 COLOR TRENDS PALETTE");
      } else if (j == 1) {
        $(".right h2").text("2023 COLOR TRENDS PALETTE");
        $(".right p").text("2023 COLOR TRENDS PALETTE 2023 COLOR TRENDS PALETTE 2023 COLOR TRENDS PALETTE");
      } else if (j == 2) {
        $(".right h2").text("2022 COLOR TRENDS PALETTE");
        $(".right p").text("2022 COLOR TRENDS PALETTE 2022 COLOR TRENDS PALETTE 2022 COLOR TRENDS PALETTE");
      } else if (j == 3) {
        $(".right h2").text("2021 COLOR TRENDS PALETTE");
        $(".right p").text("2021 COLOR TRENDS PALETTE 2021 COLOR TRENDS PALETTE 2021 COLOR TRENDS PALETTE");
      }
    });
  }
  let checkY = -1;
  let transYpx = 650;

  function scroll2() {
    checkY++;
    $(".post > div").css({
      transform: `translateY(-${transYpx * checkY + "px"})`,
      transition: "1s",
    });
    if (checkY === 4) {
      removeAll();
      $("#backgroundImage").addClass("background-change");
      $(".text1").css({ left: "-100%", transition: "0.5s" });
      $(".text1").eq(0).css({ left: "0px", transition: "0.5s" });

      setTimeout(function () {
        $(".post > div").css({
          transform: "translateY(0px)",
          transition: "0s",
        });
      }, 1000);

      checkY = -1;
    } else if (checkY == 0) {
      removeAll();
      $("#backgroundImage").addClass("background-change");
      $(".text1").css({ left: "-100%", transition: "0.5s" });
      $(".text1").eq(0).css({ left: "0px", transition: "0.5s" });
    } else if (checkY == 1) {
      removeAll();
      $("#backgroundImage").addClass("background-change2");
      $(".text1").css({ left: "-100%", transition: "0.5s" });
      $(".text1").eq(1).css({ left: "0px", transition: "0.5s" });
    } else if (checkY == 2) {
      removeAll();
      $("#backgroundImage").addClass("background-change3");
      $(".text1").css({ left: "-100%", transition: "0.5s" });
      $(".text1").eq(2).css({ left: "0px", transition: "0.5s" });
    } else if (checkY == 3) {
      removeAll();
      $("#backgroundImage").addClass("background-change4");
      $(".text1").css({ left: "-100%", transition: "0.5s" });
      $(".text1").eq(3).css({ left: "0px", transition: "0.5s" });
    }
  }
  setInterval(function () {
    scroll2();
  }, 3000);

  function removeAll() {
    $("#backgroundImage").removeClass("background-change1");
    $("#backgroundImage").removeClass("background-change2");
    $("#backgroundImage").removeClass("background-change3");
    $("#backgroundImage").removeClass("background-change4");
  }

  // con3
  $(document).ready(function () {
    $("#con3 .moveBox").draggable({
      //  axis: "x", //x축으로만 드래그 가능하도록 설정
      containment: "#con3 .inner",
      snap: "#con3 .inner",
    });
  });

  // 블러 해제
  $("#con3 .bgBlur").click(function () {
    $(this).addClass("on");
    $("#con3 .txt").addClass("on");
  });

  // 클릭시 색상 표시
  $("#con3 .moveBox > div > div")
    .children(".image")
    .click(function () {
      $("#con3 .moveBox > div").children("div").removeClass("on");
      $(this).parent().addClass("on");

      $("#con3 .moveBox div").children(".image").removeClass("on");
      $(this).addClass("on");
    });

  //
  //visual svg

  setTimeout(function () {
    $("#visual .wrap").css({ display: "flex" });
  }, 1000);

  setTimeout(function () {
    $(".wrap .c2").addClass("on");
  }, 3300);

  let innerH2 = $(".visual_text h2");
  let i = -1;
  function up() {
    if (i < 10) {
      //무한으로 반복되는거 방지하는 조건문
      $(innerH2).find("span").eq(i).css({
        transform: "translateY(0%)",
        transition: "0.4s",
        opacity: "100%",
      });
      i++;
    }
  }
  setTimeout(function () {
    $("#visual .wrap").css({ transform: "translateX(-72%)", transition: "1.5s" });
    title = setInterval(up, 200);
  }, 4200);

  // var elm = ".move";
  // $(elm).each(function (index) {
  //   // 개별적으로 Wheel 이벤트 적용
  //   $(this).on("mousewheel DOMMouseScroll", function (e) {
  //     e.preventDefault();
  //     var delta = 0;
  //     if (index % 2 === 1) {
  //       setTimeout(function () {
  //         $("header a").css({ color: "white", transition: "0.5s" });
  //         $("#header h1 img").css({ filter: "invert(1)", transition: "0.5s" });
  //         $("#header ul li a span").css({
  //           background: "#fff",
  //           transition: "0.5s",
  //         });
  //         $("#header .menubar .barinner p").css({
  //           background: "#fff",
  //           transition: "0.5s",
  //         });
  //       }, 500);
  //     } else {
  //       setTimeout(function () {
  //         $("header a").css({ color: "black", transition: "0.5s" });
  //         $("#header h1 img").css({ filter: "invert(0)", transition: "0.5s" });
  //         $("#header ul li a span").css({
  //           background: "#000",
  //           transition: "0.5s",
  //         });
  //         $("#header .menubar .barinner p").css({
  //           background: "#000",
  //           transition: "0.5s",
  //         });
  //       }, 500);
  //     }

  //     if (!event) event = window.event;
  //     if (event.wheelDelta) {
  //       delta = event.wheelDelta / 120;
  //       if (window.opera) delta = -delta;
  //     } else if (event.detail) delta = -event.detail / 3;
  //     var moveTop = $(window).scrollTop();
  //     var elmSelecter = $(elm).eq(index);
  //     // 마우스휠을 위에서 아래로
  //     if (delta < 0) {
  //       if ($(elmSelecter).next() != undefined) {
  //         try {
  //           moveTop = $(elmSelecter).next().offset().top;
  //         } catch (e) {}
  //       }
  //       // 마우스휠을 아래에서 위로
  //     } else {
  //       if ($(elmSelecter).prev() != undefined) {
  //         try {
  //           moveTop = $(elmSelecter).prev().offset().top;
  //         } catch (e) {}
  //       }
  //     }

  //     // 화면 이동 0.8초(800)
  //     $("html,body")
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: moveTop + "px",
  //         },
  //         {
  //           duration: 800,
  //           complete: function () {},
  //         }
  //       );
  //   });
  // });
  
  let randomColor = [
    "#f3958e",
    "#ffebe4",
    "#ba7765",
    "#7b6060",
    "#bba04f",
    "#d7ced1",
    "#334075",
    "#246d74",
    "#e4e0d5",
    "#f0f1eb",
    "#d3d4cc",
    "#353334",
    "#f57a6e",
    "#f88d97",
    "#d2393e",
    "#753d3c",
    "#c9e881",
    "#96b3de",
    "#ffc428",
    "#ac9041",
    "#814a7e",
    "#00b5d7",
    "#c4b396",
    "#4c4f47",
    "#dad9db",
    "#e3dac2",
    "#64676a",
    "#da997d",
    "#dacab1",
    "#f5e0b1",
    "#e7e3d8",
    "#a7b2b6",
    "#5b3532",
    "#44474c",
    "#a58f7a",
    "#99b6b2",
  ];
  let changeI = 0;
  $("#con1 .col_pop").on("mouseenter", function () {
    changeI++;
    $(this).css({ border: "1px solid white", transition: "0.5s" });
    $("#con1 .col_pop .fill").css({ background: randomColor[changeI] });
    if (changeI == 30) {
      changeI = 0;
    }
  });
  $("#con1 .col_pop").on("mouseleave", function () {
    $(this).css({ border: "1px solid black", transition: "0.5s" });
  });
});
