(function() {

  // Structure data types
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  var page;
  var step = 0;

  function showFieldsMessage() {
    LEARN_DMN.Lights.turnLightsOn();
    LEARN_DMN.Message.showMessage({
      title: '↑ Look!',
      content: '<p>Insert a name and select a Structure as type. (TODO)</p>',
      width: 400,
      height: 140,
      top: 240,
      left: 20,
      effect: 'vertical-float'
    });
  }

  // === Utility ===

  function getPage() {
    if (page === undefined) {
      page = document.querySelector('#section-structure-data-types');
    }
    return page;
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

    dropdownButton.addEventListener('click', function() {
      LEARN_DMN.Message.hideMessage();
      getDropDownList().classList.toggle('hidden');
    });

    dropdownItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var editModeRow = getPage().querySelector('.data-types-row');
        
        dropdownButton.querySelector('span').textContent = item.textContent;
        getDropDownList().classList.add('hidden');
      });
    });
  }

  function setupSaveButton() {
    var saveButton = getPage().querySelector('.data-types-row .fa-check');
    var nameInput = getPage().querySelector('.data-types-row [type="text"]');

    function handleFirstStep() {

      var dropdownButton = getPage().querySelector('.dropdown-button');
      var nameInput = getPage().querySelector('.data-types-row [type="text"]');
      var type = dropdownButton.textContent.trim();
      var name = nameInput.value;

      if (name.length > 0 && type === 'Structure') {

        var firtDataTypeRow = getPage().querySelector('.first-data-type');
        var typeField = firtDataTypeRow.querySelector('.type');
        var nameField = firtDataTypeRow.querySelector('.name');

        firtDataTypeRow.classList.remove('hidden');
        typeField.textContent = '(Structure)';
        nameField.textContent = name;

        LEARN_DMN.Message.showMessage({
          title: '↑ Look!',
          content: '<p>Insert a name and select a as type. (TODO) not strucutre</p>',
          width: 400,
          height: 140,
          top: 300,
          left: 20,
          effect: 'vertical-float'
        });

        step = step + 1;

        dropdownButton.querySelector('span').textContent = '- Select a data type -';
        nameInput.value = '';

      } else {
        LEARN_DMN.Lights.turnLightsOff();
        LEARN_DMN.Message.showMessage({
          title: 'Oops!',
          content: 'Try to <b>insert a name</b> and <b>select a type</b> (TODO) is not strucutre!',
          width: 400,
          height: 140,
          isCloseButtonEnabled: true,
          action: function() {
            LEARN_DMN.Lights.turnLightsOn();
          }
        });
      }
    }

    function handleSecondStep() {
      
    }

    function handleThirdStep() {
      
    }

    saveButton.addEventListener('click', function() {
      var name = nameInput.value;
      var type = getPage().querySelector('.dropdown-button').textContent.trim();

      switch(step) {
        case 0:
          handleFirstStep();
          break;
        case 1:
          handleSecondStep();
          break;
        case 2:
          handleThirdStep();
          break;
      }
    });
  }

  LEARN_DMN.Lights.turnLightsOff();

  LEARN_DMN.Message.showMessage({
    title: 'Hey!',
    content: 'Lets create a strucutre (TODO)',
    width: 400,
    height: 200,
    actionName: 'Start now',
    action: showFieldsMessage
  });

  setupNameInput();
  setupDropdown();
  setupSaveButton();

}());
