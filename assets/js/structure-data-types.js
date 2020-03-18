(function () {

  // Structure data types
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  var page;
  var saveButtonStep = 0;
  var saveButtonHandlers = {};

  // === Selectors ===

  function getPage() {
    if (page === undefined) {
      page = document.querySelector('#section-structure-data-types');
    }
    return page;
  }

  function getNameInput() {
    return getPage().querySelector('.data-types-row [type="text"]');
  }

  function getDropdownButton() {
    return getPage().querySelector('.dropdown-button');
  }

  // === Utility ===

  function getCurrentType() {
    return getDropdownButton().textContent.trim();
  }

  function getCurrentName() {
    return getNameInput().value;
  }

  function resetEditableRow() {
    getDropdownButton().querySelector('span').textContent = '- Select a data type -';
    getNameInput().value = '';
  }

  function showLookAtThisMessage(message, top) {
    LEARN_DMN.Message.showMessage({
      title: '↑ Look!',
      content: message,
      width: 400,
      height: 200,
      top: top,
      effect: 'vertical-float'
    });
  }

  function showErrorMessage(message) {
    LEARN_DMN.Lights.turnLightsOff();
    LEARN_DMN.Message.showMessage({
      title: 'Oops!',
      content: message,
      width: 400,
      height: 180,
      isCloseButtonEnabled: true,
      action: function () {
        LEARN_DMN.Lights.turnLightsOn();
      }
    });
  }

  function showDataTypeRow(rowId) {

    var type = getCurrentType();
    var name = getCurrentName();
    var dataTypeRow = getPage().querySelector('.data-type-' + rowId);
    var typeField = dataTypeRow.querySelector('.type');
    var nameField = dataTypeRow.querySelector('.name');

    dataTypeRow.classList.remove('hidden');
    typeField.textContent = '(' + type + ')';
    nameField.textContent = name;
  }

  function setupNextStep() {
    saveButtonStep = saveButtonStep + 1;
    resetEditableRow();
  }

  // === Setup ===

  function setupNameInput() {
    var nameInput = getPage().querySelector('.data-types-row [type="text"]');
    nameInput.addEventListener('keydown', LEARN_DMN.Message.hideMessage);
  }

  function setupDropdown() {

    var dropdownButton = getPage().querySelector('.dropdown-button');
    var dropdownItems = getPage().querySelectorAll('ul.dropdown-list li');

    function getDropDownList() {
      return getPage().querySelector('.dropdown-list');
    }

    dropdownButton.addEventListener('click', function () {
      LEARN_DMN.Message.hideMessage();
      getDropDownList().classList.toggle('hidden');
    });

    dropdownItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var editModeRow = getPage().querySelector('.data-types-row');

        dropdownButton.querySelector('span').textContent = item.textContent;
        getDropDownList().classList.add('hidden');
      });
    });
  }

  function setupSaveButton() {
    var saveButton = getPage().querySelector('.data-types-row .fa-check');

    saveButton.addEventListener('click', function () {

      var name = getCurrentName();
      var type = getPage().querySelector('.dropdown-button').textContent.trim();

      saveButtonHandlers[ saveButtonStep ]();
    });
  }

  saveButtonHandlers[ 0 ] = function () {

    var isNameNotBlank = getCurrentName().length > 0;
    var isTypeStructure = getCurrentType() === 'Structure';
    var isDataTypeValid = isNameNotBlank && isTypeStructure;

    function setupFieldEditableRow() {
      var dataTypesRow = getPage().querySelector('.data-types-row');
      dataTypesRow.style.paddingLeft = '70px';
    }

    if (isDataTypeValid) {

      showDataTypeRow(1);
      showLookAtThisMessage('<b>Great!</b> You\'ve created a structure data type, now let\'s insert information for your first field :-)', 300);
      setupNextStep();
      setupFieldEditableRow();

      return;
    }

    showErrorMessage('Try to <b>insert a name</b> and set the type of your data type as <b>strucutre</b>.');
  }

  saveButtonHandlers[ 1 ] = function () {

    var isNameNotBlank = getCurrentName().length > 0;
    var isTypeNotBlank = getCurrentType() !== '- Select a data type -';
    var isDataTypeValid = isNameNotBlank && isTypeNotBlank;

    if (isDataTypeValid) {

      showDataTypeRow(2);
      showLookAtThisMessage('<b>Great!</b> You\'ve created a field into your structure data type, now let\'s insert another field :-)', 370);
      setupNextStep();

      return;
    }

    showErrorMessage('Try to <b>insert a name</b> and <b>set a type</b> for your data type.');
  }

  saveButtonHandlers[ 2 ] = function () {

    var isNameNotBlank = getCurrentName().length > 0;
    var isTypeNotBlank = getCurrentType() !== '- Select a data type -';
    var isDataTypeValid = isNameNotBlank && isTypeNotBlank;

    function hideEditableRow() {
      var dataTypesRow = getPage().querySelector('.data-types-row');
      dataTypesRow.classList.add('hidden');
    }

    function showCongratulationsMessage() {
      LEARN_DMN.Lights.turnLightsOff();
      LEARN_DMN.Message.showMessage({
        title: 'Congratulations!',
        content: '<p>You successfuly created your first structure data type!</p>',
        width: 400,
        height: 225,
        top: 240,
        actionName: 'Next section →',
        action: function () {
          window.location.href = '/learn/the-feel-language';
        }
      });
    }

    if (isDataTypeValid) {

      showDataTypeRow(3);
      showCongratulationsMessage();
      setupNextStep();
      hideEditableRow();

      return;
    }

    showErrorMessage('Try to <b>insert a name</b> and <a>set a type</a> for your data type.');
  }

  LEARN_DMN.Lights.turnLightsOff();

  LEARN_DMN.Message.showMessage({
    title: 'Hey!',
    content: 'Let\'s create a strucutre data type! :-)',
    width: 400,
    height: 200,
    actionName: 'Start now',
    action: function () {
      LEARN_DMN.Lights.turnLightsOn();
      LEARN_DMN.Message.showMessage({
        title: '↑ Look!',
        content: '<p><b>Insert a name</b> and set the type of your data type as <b>strucutre</b> :-)</p>',
        width: 400,
        height: 180,
        top: 240,
        left: 20,
        effect: 'vertical-float'
      });
    }
  });

  setupNameInput();
  setupDropdown();
  setupSaveButton();

}());
