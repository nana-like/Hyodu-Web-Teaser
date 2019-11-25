var hyoduSVG = new Vivus("hyoduSVG", {
  type: 'scenario-sync',
  duration: 20,
  start: 'manual',
  forceRender: false,
  dashGap: 20
});

var hyoduSVG = new Vivus("lines", {
  type: 'async',
  duration: 50,
  start: 'autostart',
  forceRender: false,
});


var hyoduSVG = new Vivus("lines2", {
  type: 'async',
  duration: 80,
  start: 'autostart',
  forceRender: false,
  dashGap: 50
});