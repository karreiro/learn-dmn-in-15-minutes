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
        dropdownButton.querySelector('span').textContent = item.textContent;
        getDropDownList().classList.add('hidden');
      });
    });
  }

  function setupSaveButton() {
    var saveButton = getPage().querySelector('.data-types-row .fa-check');

    saveButton.addEventListener('click', function () {
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

      LEARN_DMN.Message.showMessage({
        title: '↑ Great! You\'ve created a structure data type',
        content: '<p>Let\'s insert information for your first field. You know how to do that ;-)</p>',
        width: 420,
        height: 180,
        top: 300,
        effect: 'vertical-float'
      });

      setupNextStep();
      setupFieldEditableRow();

      return;
    }

    showErrorMessage('<p><b>Choose a name</b> for you data type and select <b>Strucutre</b> as the type.</p>');
  }

  saveButtonHandlers[ 1 ] = function () {

    var isNameNotBlank = getCurrentName().length > 0;
    var isTypeNotBlank = getCurrentType() !== '- Select a data type -';
    var isDataTypeValid = isNameNotBlank && isTypeNotBlank;

    if (isDataTypeValid) {

      showDataTypeRow(2);

      LEARN_DMN.Message.showMessage({
        title: '↑ Great! You\'ve created the first field',
        content: '<p>Now your structure data type has one field! Let\'s create another one :-)',
        width: 400,
        height: 200,
        top: 370,
        effect: 'vertical-float'
      });

      setupNextStep();

      return;
    }

    showErrorMessage('Choose <b>any name</b> and <b>any type</b> for you data type.');
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
        content: '<p>You have successfully created your first structure data type!</p>',
        width: 400,
        height: 225,
        top: 240,
        allowedElementSelector: '',
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

    showErrorMessage('Choose <b>any name</b> and <b>any type</b> for you data type.');
  }

  LEARN_DMN.Lights.turnLightsOff();

  LEARN_DMN.Message.showMessage({
    title: 'Let\'s create a structure data type now!',
    content: 'Different from regular data types, structure ones have fields ;-)',
    width: 400,
    height: 220,
    allowedElementSelector: '',
    actionName: 'Start now',
    action: function () {
      LEARN_DMN.Lights.turnLightsOn();
      LEARN_DMN.Message.showMessage({
        title: '↑ Type a name and select "Structure" as the type',
        content: '<p>Just like you do for a regular data type, but select "Structure" in the type selector.</p>',
        width: 440,
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
