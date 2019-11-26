(function () {
  var hyoduSVG = new Vivus("hyoduSVG", {
    type: "scenario-sync",
    duration: 22,
    start: "manual",
    forceRender: false,
    dashGap: 20
  });

  var lineSVG01 = new Vivus("lines", {
    type: "async",
    duration: 130,
    start: "autostart",
    forceRender: false
  });

  var lineSVG02 = new Vivus("lines2", {
    type: "async",
    duration: 170,
    start: "autostart",
    forceRender: false,
    dashGap: 75
  });

  var drawHyodu = function () {
    hyoduSVG.reset().play();
  };

  var wrapEl = document.querySelector(".wrap");
  var textEl = document.querySelector(".aniText");
  var footerEl = document.querySelector(".footer");
  var hyoduShadowEl = document.querySelector("#hyoduSVG-shadow");
  console.dir(wrapEl);

  var showLines = new TimelineMax()
    .from(hyoduShadowEl, 0.8, {
      alpha: 0.2
    }, 0.2)
    // 효두 로고 그리기
    .add(drawHyodu, 0.6)
    .addLabel("logo")
    // 텍스트 등장
    .to(
      textEl.children[0],
      0.9, {
        y: -15,
        alpha: 1,
        ease: Power1.easeOut
      },
      "logo+=1.8"
    )
    .to(
      textEl.children[1],
      0.9, {
        y: -15,
        alpha: 1,
        ease: Power1.easeOut
      },
      "logo+=2.1"
    )
    .addLabel("text")
    //푸터 등장
    .to(
      footerEl,
      0, {
        alpha: 1
      },
      "text+=0.15"
    );


  var changeHeight = function () {
    var winH = window.innerHeight;
    wrapEl.style.height = winH + "px";
  }

  window.addEventListener("load", function () {
    changeHeight();
  });

  window.addEventListener("resize", function () {
    changeHeight();
  });
})();