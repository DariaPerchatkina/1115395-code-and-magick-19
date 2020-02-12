'use strict';

// находим и показываем окно настроек пользователя

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210 ,55)', 'rgb(0, 0 ,0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
// var wizards

var wizardsRandom = [];

// необходимо написать функцию, которая позволит создавать рандомную связку имя-фамилия для магов из представленных массивом имен и фамилий
// каждая составляющая рандомного имени массива будет находится при помощи поиска рандомного значения,а итоговое имя мага будет получаться при попмощт конкатенации
var getRandomValueArr = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var wizardsFullName = function (name, lastName) {
  var name = getRandomValueArr(name);
  var lastName = getRandomValueArr(lastName);
  return name + ' ' + lastName;
};
// выводит рандомно имя и фамилию
var fullName = wizardFullName(WIZARD_NAMES, WIZARD_LASTNAME);
console.log(fullName);
// создание мага из рандомных данных и добавление в пустой массив wizardsRandom
var wizardsRandomCreate = function (count, arr) {
  for (i = 0; i < count; i++) {
  arr.push(
  {name: wizardsFullName(WIZARD_FAMILYS, WIZARD_FAMILYS),
  coatColor: getRandomValueArr(COAT_COLORS),
  eyasColor: getRandomValueArr(EYES_COLORS)}
  );
  wizardsRandomCreate(counter, wizards);
};


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
