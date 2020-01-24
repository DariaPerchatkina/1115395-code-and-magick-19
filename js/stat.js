'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 40;
var TEXT_WIDTH = 120;
var TEXT_GAP_TOP = 25;
var TEXT_GAP_BOTTOM = 260;
var BAR_HEIGHT = 100;
var barWidth = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudBorder = function (ctx, x, y, color) {
  ctx.strokeStyle = color;
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP,  CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderCloudBorder(ctx, CLOUD_X, CLOUD_Y, 'black');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', CLOUD_X + FONT_GAP, TEXT_GAP_BOTTOM);
  ctx.fillRect(CLOUD_X + FONT_GAP, CLOUD_Y + GAP + TEXT_WIDTH, 40, BAR_HEIGHT);

  // ctx.fillStyle = 'black';
  // ctx.fillText('2725', CLOUD_X + FONT_GAP, TEXT_GAP_TOP + CLOUD_X);
  // ctx.fillText('Вы', 110, 260);

  ctx.fillText('Кекс', 230, TEXT_GAP_BOTTOM);
  ctx.fillRect(230, 90, 40, 150);

  ctx.fillText('Катя', 320, TEXT_GAP_BOTTOM);
  ctx.fillRect(320, 200, 40, 40);

  ctx.fillText('Игорь', 410, TEXT_GAP_BOTTOM);
  ctx.fillRect(410, 190, 40, 50);

  // ctx.fillStyle = 'blue';
  // ctx.fillRect(230, 90, 40, 150);
  // ctx.fillStyle = 'black';
  // ctx.fillText('Кекс', 230, 260);
  // ctx.fillText('4025', 230, 80);


  // ctx.fillStyle = 'yellow';
  // ctx.fillRect(320, 200, 40, 40);
  // ctx.fillStyle = 'black';
  // ctx.fillText('Катя', 320, 260);
  // ctx.fillText('1244', 320, 190);

  // ctx.fillStyle = 'black';
  // ctx.fillRect(410, 190, 40, 50);
  // ctx.fillStyle = 'black';
  // ctx.fillText('Игорь', 410, 260);
  // ctx.fillText('1339', 410, 180);

  // ctx.font = '16px PT Mono';
  // ctx.fillText('Ура вы победили!', 130, 40);
  // ctx.fillText('Список результатов: ', 130, 60);
};

