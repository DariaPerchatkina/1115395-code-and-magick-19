'use strict';

// находим и показываем окно настроек пользователя

var userDialog = document.querySelector('.setup'); // находит по классу разметке div с модальным окном
userDialog.classList.remove('hidden'); // удаляет класс hidden

document.querySelector('.setup-similar').classList.remove('hidden'); // отображает поле в модалке, где находятся 4 мага

var similarListElement = document.querySelector('.setup-similar-list'); // находит список пока что одинаковых магов
var similarWizardTemplate = document.querySelector('#similar-wizard-template') // находим темплейт в разметке
.content // берем все содержимое дива
.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210 ,55)', 'rgb(0, 0 ,0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;

// необходимо написать функцию, которая позволит создавать рандомную связку имя-фамилия для магов из представленных массивом имен и фамилий
// каждая составляющая рандомного имени массива будет находится при помощи поиска рандомного значения,а итоговое имя мага будет получаться при попмощт конкатенации
var getRandomValueArr = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var wizardsFullName = function (name, lastName) {
  var wizardsName = getRandomValueArr(name);
  var wizardsLastName = getRandomValueArr(lastName);
  return wizardsName + ' ' + wizardsLastName;
};
// выводит рандомно имя и фамилию
wizardsFullName(WIZARD_NAMES, WIZARD_LASTNAME);


// // создание мага из рандомных данных и добавление в пустой массив wizardsRandom
var wizardsRandom = []; // делаем пустой массив данных
var wizardsRandomCreate = function (count, arr) { // создаем функцию, которая будет генерировать случайных волшебников
  for (i = 0; i < count; i++) { // условия работы цикла
    var nameWizard = wizardsFullName(WIZARD_NAMES, WIZARD_LASTNAME); // обьявим переменную для генерации имен волшебников
    var wizardCoatColor = getRandomValueArr(COAT_COLORS); // добавим  переменную для генерации рандомных цветов плащей
    var eyesColor = getRandomValueArr(EYES_COLORS); // добавим переменную для генерации рандомных цветов глаз
    arr.push({name: nameWizard, // создадим обьект и при помощи push добавим его в массив arr(в нашем случае это пустой массив wizardsRandom)
      coatColor: wizardCoatColor,
      eyasColor: eyesColor});
  }
};
wizardsRandomCreate(WIZARD_COUNT, wizardsRandom); // вызовем функцию создания рандомных волшебников с аргументами(WIZARD_COUNT(отвечает за кол-во генерируемых волш.))


var renderWizard = function (wizard) { // создаем функцию, не придумала пока как обьяснить для чего она
  var wizardElement = similarWizardTemplate.cloneNode(true); // делаем дубликат узла template

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // находим в ДОМ div c классом .setup-similar-label и задаем ему текстовое содержимое
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor; // по аналогии с цветами
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement; // возвращаем полученный склонированный элемент с новым содержимым
};

var fragment = document.createDocumentFragment(); // создаем пустой объект DocumentFragment
for (var i = 0; i < wizardsRandom.length; i++) { // условия работы цикла, идет переборка массива случайно созданных волшебников
  fragment.appendChild(renderWizard(wizardsRandom[i])); // добавляет созданного волшебника во фрагмент
}
similarListElement.appendChild(fragment); // добавляет фрагмент в разметку

userDialog.querySelector('.setup-similar').classList.remove('hidden'); // отключает класс hidden у окна,отображающего сгененрированнвх волшебников в модалке
