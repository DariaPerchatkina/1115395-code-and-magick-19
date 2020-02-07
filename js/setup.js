'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210 ,55)', 'rgb(0, 0 ,0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
// var MAX_WIZARDS = 4;

// var GamePlayers = function wizardPlayers(WIZARD_FAMILY, COAT_COLORS, EYES_COLOR) {

// var wizardsPlayers = [];
// for (i = 0; i <= wizardsPlayers.arr[i]; i++) {
//   wizardsName = Math.random(WIZARD_NAMES.length) + Math.random(WIZARD_FAMILY.length);
//   coatColors = Math.random(COAT_COLORS.length);
//   eyesColors = Math.random(EYES_COLOR.length);
// };

var wizards = [
  {
    name: WIZARD_NAMES[i] + WIZARD_FAMILY[i],
    family: WIZARD_FAMILY[i],
    coatColor: COAT_COLORS[i],
    eyesColor: EYES_COLOR[i],
  },
  {
    name: WIZARD_NAMES[1],
    family: WIZARD_FAMILY[1],
    coatColor: COAT_COLORS[i]
  },
  {
    name: WIZARD_NAMES[2],
    family: WIZARD_FAMILY[2],
    coatColor: COAT_COLORS[i]
  },
  {
    name: WIZARD_NAMES[3],
    family: WIZARD_FAMILY[3],
    coatColor: COAT_COLORS[i]
  },
  {
    name: WIZARD_NAMES[4],
    family: WIZARD_FAMILY[4],
    coatColor: COAT_COLORS[i]
  },
  {
    name: WIZARD_NAMES[5],
    family: WIZARD_FAMILY[5],
    coatColor: 'rgb(215, 210, 55)'
  },
  {
    name: WIZARD_NAMES[6],
    family: WIZARD_FAMILY[6],
    coatColor: 'rgb(101, 137, 164)'
  },
  {
    name: WIZARD_NAMES[7],
    family: WIZARD_FAMILY[7],
    coatColor: 'rgb(127, 127, 127)'
  }
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//   wizardElement.querySelector('.setup-similar-label').textContent = wizard.family;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
// 'use strict';

// var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// var WIZARD_FAMILY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210 ,55)', 'rgb(0, 0 ,0)'];
// var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
// var MAX_WIZARDS = 4;
// };

// var makeWizards = function () {
//   var wizards = [];
//   for (i=0; i<MAX_WIZARDS; i++) {

//   }
//   wizard = Math.random(WIZARD_NAMES[i] + WIZARD_FAMILY[i]);
//   coatColor = Math.random(COAT_COLORS);
//   eyes = Math.random(EYES_COLOR);
// };

// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

// var similarListElement = userDialog.querySelector('.setup-similar-list');

// var similarWizardTemplate = document.querySelector('#similar-wizard-template')
//     .content
//     .querySelector('.setup-similar-item');


// var wizards = function (wizard, coatColor, eyes) {
//   var wizard = Math.random(WIZARD_NAMES[i] + WIZARD_FAMILY[i]);
//   var coatColor = Math.random(COAT_COLORS);
//   var eyes = Math.random(EYES_COLOR);
// };

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment()
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
};
//   {
//     name: WIZARD_NAMES[1],
//     coatColor: 'rgb(215, 210, 55)'
//   },
//   {
//     name: WIZARD_NAMES[2],
//     coatColor: 'rgb(101, 137, 164)'
//   },
//   {
//     name: WIZARD_NAMES[3],
//     coatColor: 'rgb(127, 127, 127)'
//   }
// ];


// 'use strict';

// var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// var WIZARD_FAMILY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210 ,55)', 'rgb(0, 0 ,0)'];
// var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// var wizardsPlayers = function (name, coatColor, eyesColors) {
//   wizardsPlayers(Math.random(WIZARD_NAME + WIZARD_FAMILY, COAT_COLORS, EAYS_COLOR));
// };

// var GamePlayers = function wizardPlayers(WIZARD_NAMES, WIZARD_FAMILY, COAT_COLORS, EYES_COLOR) {
// var wizardsPlayers = [];
// for (i = 0; i <= wizardsPlayers.arr[i]; i++) {
//   var wizardsName = Math.random(WIZARD_NAMES.length) + Math.random(WIZARD_FAMILY.length);
//   var coatColors = Math.random(COAT_COLORS.length);
//   var eyesColors = Math.random(EYES_COLOR.length);
// };

// // var userDialog = document.querySelector('.setup');
// // userDialog.classList.remove('hidden');

// // var similarListElement = userDialog.querySelector('.setup-similar-list');

// // var similarWizardTemplate = document.querySelector('#similar-wizard-template')
// //     .content
// //     .querySelector('.setup-similar-item');


// // // var wizards = [
// // //   {
// // //     name: WIZARD_NAMES[0],
// // //     family: WIZARD_FAMILY[0],
// // //     coatColor: 'rgb(241, 43, 107)'
// // //   },
// // //   {
// // //     name: WIZARD_NAMES[1],
// // //     family: WIZARD_FAMILY[1],
// // //     coatColor: 'rgb(215, 210, 55)'
// // //   },
// // //   {
// // //     name: WIZARD_NAMES[2],
// // //     family: WIZARD_FAMILY[2],
// // //     coatColor: 'rgb(101, 137, 164)'
// // //   },
// // //   {
// // //     name: WIZARD_NAMES[3],
// // //     family: WIZARD_FAMILY[3],
// // //     coatColor: 'rgb(127, 127, 127)'
// // //   },
// // //   {
// // //     name: WIZARD_NAMES[4],
// // //     family: WIZARD_FAMILY[4],
// // //     coatColor: 'rgb(241, 43, 107)'
// // //   },
// // //   {
// // //     name: WIZARD_NAMES[5],
// // //     family: WIZARD_FAMILY[5],
// // //     coatColor: 'rgb(215, 210, 55)'
// // //   },
// // //   {
// // //     name: WIZARD_NAMES[6],
// // //     family: WIZARD_FAMILY[6],
// // //     coatColor: 'rgb(101, 137, 164)'
// // //   },
// // //   {
// // //     name: WIZARD_NAMES[7],
// // //     family: WIZARD_FAMILY[7],
// // //     coatColor: 'rgb(127, 127, 127)'
// // //   }
// // // ];


// // var renderWizard = function (wizard) {
// //   var wizardElement = similarWizardTemplate.cloneNode(true);

// //   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
// // //   wizardElement.querySelector('.setup-similar-label').textContent = wizard.family;
// //   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

// //   return wizardElement;
// // };

// // var fragment = document.createDocumentFragment();
// // for (var i = 0; i < wizards.length; i++) {
// //   fragment.appendChild(renderWizard(wizards[i]));
// // }
// // similarListElement.appendChild(fragment);

// // userDialog.querySelector('.setup-similar').classList.remove('hidden');


// // var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];

// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

// var similarListElement = userDialog.querySelector('.setup-similar-list');

// var similarWizardTemplate = document.querySelector('#similar-wizard-template')
//     .content
//     .querySelector('.setup-similar-item');

// // var wizards = function (name, coat, eyes) {
// //   wizards(WIZARD_NAMES + WIZARD_FAMILY, COAT_COLORS, EYES_COLOR);
// // };

// // var GamePlayers = function wizardPlayers(WIZARD_NAMES, WIZARD_FAMILY, COAT_COLORS, EYES_COLOR) {
// //   var wizardsPlayers = [];
// //   for (i = 0; i <= wizardsPlayers.arr[i]; i++) {
// //     var wizardsName = Math.floor(Math.random() * WIZARD_NAMES.length) + Math.floor(Math.random() * WIZARD_FAMILY.length);
// //     var coatColors = Math.floor(Math.random() * COAT_COLORS.length);
// //     var eyesColors = Math.floor(Math.random() * EYES_COLOR.length);
// // };


// var renderWizard = function (wizard) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);

//   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

//   return wizardElement;
// }

// var fragment = document.createDocumentFragment();
// for (var i = 0; i < wizards.length; i++) {
//   fragment.appendChild(renderWizard(wizards[i]));
// }
// similarListElement.appendChild(fragment);

// userDialog.querySelector('.setup-similar').classList.remove('hidden');
