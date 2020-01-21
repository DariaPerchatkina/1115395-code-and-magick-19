'use strict';

var CLOUD_WIDTH = 270;
var CLOUD_HEIGHT = 420;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 270, 420);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 270, 420);

};
