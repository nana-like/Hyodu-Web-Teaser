(function () {
  var hyoduSVG = new Vivus("hyoduSVG", {
    type: "scenario-sync",
    duration: 19,
    start: "manual",
    forceRender: false,
    dashGap: 20
  });

  var lineSVG01 = new Vivus("lines", {
    type: "async",
    duration: 50,
    start: "autostart",
    forceRender: false
  });

  var lineSVG02 = new Vivus("lines2", {
    type: "async",
    duration: 80,
    start: "autostart",
    forceRender: false,
    dashGap: 50
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
    .from(hyoduShadowEl, 0.9, {
      alpha: 0.2
    })
    // 효두 로고 그리기
    .add(drawHyodu, 0.15)
    .addLabel("logo")
    // 텍스트 등장
    .to(
      textEl.children[0],
      0.75, {
        y: -15,
        alpha: 1,
        ease: Power1.easeOut
      },
      "logo+=0.85"
    )
    .to(
      textEl.children[1],
      0.75, {
        y: -15,
        alpha: 1,
        ease: Power1.easeOut
      },
      "logo+=1.05"
    )
    .addLabel("text")
    //푸터 등장
    .to(
      footerEl,
      0.65, {
        alpha: 1
      },
      "text+=0.2"
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