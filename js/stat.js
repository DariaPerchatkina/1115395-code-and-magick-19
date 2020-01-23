'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 40;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;

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
  // ctx.font = '16px PT Mono';
  // ctx.fillText('Ура вы победили!', 130, 40);
  // ctx.fillText('Список результатов: ', 130, 60);


  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Вы', CLOUD_X + FONT_GAP, 260);
  ctx.fillText('2725', CLOUD_X + FONT_GAP, 125);
  ctx.fillRect(CLOUD_X + FONT_GAP, 140, 40, 100, 'rgba(255, 0, 0, 1)');

  ctx.fillStyle = 'blue';
  ctx.fillRect(230, 90, 40, 150);
  ctx.fillStyle = 'black';
  ctx.fillText('Кекс', 230, 260);
  ctx.fillText('4025', 230, 80);
  // ctx.fillRect(230, 90, 40, 150);

  ctx.fillStyle = 'yellow';
  ctx.fillText('Катя', 320, 260);
  ctx.fillText('1244', 320, 190);
  ctx.fillRect(320, 200, 40, 40);

  ctx.fillStyle = 'black';
  ctx.fillText('Игорь', 410, 260);
  ctx.fillText('1339', 410, 180);
  ctx.fillRect(410, 190, 40, 50);

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов: ', 130, 60);
};


// // window.renderStatistics = function(ctx) {
//   renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
//   renderCloud(ctx, 100, 50, '#fff');
  
//   ctx.fillStyle = '#000';
//   ctx.fillText('Вы', 110, 75);
//   ctx.fillRect(160, 60, 430, 20);

//   ctx.fillText('Иван', 110, 105);
//   ctx.fillRect(160, 90, 430, 20);

//   ctx.fillText('Юлия', 110, 135);
//   ctx.fillRect(160, 120, 430, 20);
// // };