'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 40;
var TEXT_HEIGHT = 16;
var TEXT_GAP_TOP = 90;
var TEXT_GAP_BOTTOM = 260;
var TEXT_GAP_LEFT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_INDENT = BAR_WIDTH + BAR_GAP;
var MAIN_COLOR = 'rgba(255, 0, 0, 1)';


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudBorder = function (ctx, x, y, color) {
  ctx.strokeStyle = color;
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return Math.floor(maxElement);
};

var getRandomValue = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderCloudBorder(ctx, CLOUD_X, CLOUD_Y, 'black');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    if (players [i] === 'Вы') {
      ctx.fillStyle = MAIN_COLOR;
    } else {
      ctx.fillStyle = 'hsl(240,' + getRandomValue(0, 100) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + FONT_GAP + (BAR_INDENT * i), CLOUD_Y + CLOUD_HEIGHT - GAP * 4, BAR_WIDTH, ((CLOUD_Y - BAR_HEIGHT) * times[i] / maxTime));
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + FONT_GAP + (BAR_INDENT * i), ((CLOUD_Y - BAR_HEIGHT) * times[i] / maxTime) + TEXT_GAP_TOP + BAR_HEIGHT - GAP);
    ctx.fillText(players[i], CLOUD_X + FONT_GAP + (BAR_INDENT * i), TEXT_GAP_BOTTOM);
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP_LEFT, CLOUD_Y + TEXT_HEIGHT + (GAP * 1));
    ctx.fillText('Список результатов: ', CLOUD_X + TEXT_GAP_LEFT, CLOUD_Y + TEXT_HEIGHT + (GAP * 3));
  }
};
