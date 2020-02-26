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

var wizardFullName = function (name, lastName) {
  var wizardsName = getRandomValueArr(name);
  var wizardsLastName = getRandomValueArr(lastName);
  return wizardsName + ' ' + wizardsLastName;
};

// // создание мага из рандомных данных и добавление в пустой массив wizardsRandom
var wizardsRandomCreate = function (count) { // создаем функцию, которая будет генерировать случайных волшебников
  var wizardArr = []; // делаем пустой массив данных

  for (var i = 0; i < count; i++) { // условия работы цикла
    var name = wizardFullName(WIZARD_NAMES, WIZARD_LASTNAME); // обьявим переменную для генерации имен волшебников
    var coatColor = getRandomValueArr(COAT_COLORS); // добавим  переменную для генерации рандомных цветов плащей
    var eyesColor = getRandomValueArr(EYES_COLORS); // добавим переменную для генерации рандомных цветов глаз

    wizardArr.push({name: name, // создадим обьект и при помощи push добавим его в массив arr(в нашем случае это пустой массив wizardsRandom)
      coatColor: coatColor,
      eyasColor: eyesColor
    });
  }
  return wizardArr;
};

var wizards = wizardsRandomCreate(WIZARD_COUNT);

var renderWizard = function (wizard) { // создаем функцию, не придумала пока как обьяснить для чего она
  var wizardElement = similarWizardTemplate.cloneNode(true); // делаем дубликат узла template

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name; // находим в ДОМ div c классом .setup-similar-label и задаем ему текстовое содержимое
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor; // по аналогии с цветами
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement; // возвращаем полученный склонированный элемент с новым содержимым
};

var renderWizards = function (wizardsElem) {
  var fragment = document.createDocumentFragment(); // создаем пустой объект DocumentFragment
  for (var i = 0; i < wizardsElem.length; i++) { // условия работы цикла, идет переборка массива случайно созданных волшебников
    fragment.appendChild(renderWizard(wizardsElem[i])); // добавляет созданного волшебника во фрагмент
  }
  similarListElement.appendChild(fragment); // добавляет фрагмент в разметку
};
renderWizards(wizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden'); // отключает класс hidden у окна,отображающего сгененрированнвх волшебников в модалке

var setup = document.querySelector('.setup'); // находит блок setup в разметке
var setupOpen = document.querySelector('.setup-open'); // находит элемент с классом setup-open
var setupClose = setup.querySelector('.setup-close'); // нахoдит элемент с классом setup-close
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var MIN_NAME_LENGTH = 2;

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});


setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
  } else {
    target.setCustomValidity('');
  }
});
