(function() {

  // Simple data types
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  var page;

  // === Utility ===

  function getPage() {
    if (page === undefined) {
      page = document.querySelector('#section-simple-data-types');
    }
    return page;
  }

  // -- Data Types list screen

  function showDataTypesListScreen() {
    var screen = getPage().querySelector('.data-types-list-screen');
    screen.classList.remove('hidden');
  }

  function hideDataTypesListScreen() {
    var screen = getPage().querySelector('.data-types-list-screen');
    screen.classList.add('hidden');
  }

  // -- Data Types placeholder screen

  function showDataTypesPlaceholderScreen() {
    var screen = getPage().querySelector('.data-types-placeholder-screen');
    var addCustomDataType = getPage().querySelector('.add-custom-data-type');

    screen.classList.remove('hidden');

    LEARN_DMN.Message.showMessage({
      title: '← Look!',
      content: '<p>Click here to create your first data type!</p>',
      width: 400,
      height: 140,
      top: addCustomDataType.getBoundingClientRect().y,
      left: addCustomDataType.getBoundingClientRect().x + addCustomDataType.getBoundingClientRect().width,
      effect: 'horizontal-float'
    });
  }

  function hideDataTypesPlaceholderScreen() {
    var screen = getPage().querySelector('.data-types-placeholder-screen');
    screen.classList.add('hidden');
  }

  // -- Data Types tab

  function showDataTypesTab() {

    function hideShapePalette() {
      var shapePalette = getPage().querySelector('.shape-palette');
      shapePalette.classList.add('hidden');
    }

    function applyDataTypesStyle() {
      var editor = getPage().querySelector('.editor');
      editor.classList.add('data-types-editor');
    }

    function activateDataTypesTab() {
      var tabItems = getPage().querySelectorAll('.tabs ul li');

      tabItems.forEach(function(item) {
        if (item.textContent === 'Data Types') {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    LEARN_DMN.Message.hideMessage();

    activateDataTypesTab();
    hideShapePalette();
    applyDataTypesStyle();
    showDataTypesPlaceholderScreen();
  }

  // === Setup ===

  function setupTabItems() {
    var tabItem = getPage().querySelector('.data-types-tab-item');
    tabItem.addEventListener('click', showDataTypesTab);
  }

  function setupAddCustomDataType() {
    var addCustomDataType = getPage().querySelector('.add-custom-data-type');
    var nameInput = getPage().querySelector('.edit-mode-row [type="text"]');
    addCustomDataType.addEventListener('click', function() {
      showDataTypesListScreen();
      hideDataTypesPlaceholderScreen();
      nameInput.focus();

      LEARN_DMN.Message.showMessage({
        title: '↑ Look!',
        content: '<p>Insert a name and select a type.</p>',
        width: 400,
        height: 140,
        top: 240,
        left: 20,
        effect: 'vertical-float'
      });
    });
  }

  function setupDropdown() {
    
    var dropdownButton = getPage().querySelector('.dropdown-button');
    var dropdownItems = getPage().querySelectorAll('ul.dropdown-list li');

    function getDropDownList() {
      return getPage().querySelector('.dropdown-list');
    }

    dropdownButton.addEventListener('click', function() {
      getDropDownList().classList.toggle('hidden');
    });

    dropdownItems.forEach(function(item) {
      item.addEventListener('click', function() {

        var editModeRow = getPage().querySelector('.edit-mode-row');
        var clientRect = editModeRow.getBoundingClientRect();
        
        dropdownButton.querySelector('span').textContent = item.textContent;
        
        getDropDownList().classList.add('hidden');

        LEARN_DMN.Message.showMessage({
          title: '↑ Look!',
          content: '<p>Seve your new data type!</p>',
          width: 400,
          height: 140,
          top: 240,
          left: clientRect.x + clientRect.width - 400,
          effect: 'vertical-float'
        });
      });
    });
  }

  function setupSaveButton() {
    var saveButton = getPage().querySelector('.edit-mode-row .fa-check');
    var nameInput = getPage().querySelector('.edit-mode-row [type="text"]');

    saveButton.addEventListener('click', function() {
      var name = nameInput.value;
      var type = getPage().querySelector('.dropdown-button').textContent.trim();

      if (name.length > 0 && type !== '- Select a data type -') {

        var editModeRow = getPage().querySelector('.edit-mode-row')
        var closedModeRow = getPage().querySelector('.closed-mode-row');

        editModeRow.classList.add('hidden');
        closedModeRow.classList.remove('hidden');

        closedModeRow.querySelector('.name').textContent = name;
        closedModeRow.querySelector('.type').textContent = '(' + type + ')';

        LEARN_DMN.Message.showMessage({
          title: 'Congratulations!',
          content: '<p>You successfuly created your first data type!</p>',
          width: 400,
          height: 200,
          top: 240,
          actionName: 'Next section →',
          action: function() {
            window.location.href = '/learn/structure-data-types';
          }
        });

      } else {
        LEARN_DMN.Lights.turnLightsOff();
        LEARN_DMN.Message.showMessage({
          title: 'Oops!',
          content: 'Try to <b>insert a name</b> and <b>select a type</b>!',
          width: 400,
          height: 140,
          action: function() {
            LEARN_DMN.Lights.turnLightsOn();
          }
        });
      }
    });
  }

  function setupNameInput() {
    var nameInput = getPage().querySelector('.edit-mode-row [type="text"]');
    nameInput.addEventListener('keydown', LEARN_DMN.Message.hideMessage);
  }

  function showLetsGetItStartedMessage () {

    var title = 'Let\'s get it started!';
    var content = '<p>Let\'s open the data types editor, and create a simple data type.</p>';

    LEARN_DMN.Message.showMessage({
      title: title,
      content: content,
      width: 400,
      height: 230,
      actionName: 'Try it now!',
      action: function() {
        LEARN_DMN.Lights.turnLightsOn();
        showDataTypesTabButtonMessage();
      }
    });
  }

  function showDataTypesTabButtonMessage() {

    var title = '↑ Here\'s the data types tab';
    var content = '<p>Try to open it! :-)</p>';

    LEARN_DMN.Message.showMessage({
      title: title,
      content: content,
      width: 400,
      height: 140,
      top: 100,
      left: 200,
      allowedElementSelector: '#section-simple-data-types .data-types-tab-item',
      effect: 'vertical-float'
    });
  }

  LEARN_DMN.Lights.turnLightsOff();

  showLetsGetItStartedMessage();
  setupTabItems();
  setupAddCustomDataType();
  setupDropdown();
  setupSaveButton();
  setupNameInput();

}());
