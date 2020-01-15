(function () {

  // ======== Constants ========

  window.LEARN_DMN = window.LEARN_DMN || {};
  var LEARN_DMN = window.LEARN_DMN;
  
  LEARN_DMN.SECTIONS = ['section-introduction',
                        'section-visual-notation',
                        'section-decision-logic',
                        'section-the-feel-language',
                        'section-data-types',
                        'section-reusability',
                        'section-integrate'];

  LEARN_DMN.ON_LOAD_SECTION = LEARN_DMN.ON_LOAD_SECTION || {};

  LEARN_DMN.currentSection = 1;

  LEARN_DMN.completedSection = 0;
  // TODO: use cookies

  // ======== Controls ========

  LEARN_DMN.Controls = LEARN_DMN.Controls || {};

  function numberOfSections() {
    return LEARN_DMN.SECTIONS.length;
  }

  function updateSection() {
    updateSummaryComponent();
    updateSectionComponent();
  }

  function updateSummaryComponent() {

    var summaryItems = document.querySelectorAll('.learn-home-sidebar ul.summary li');
    var currentSummaryItemId = '[data-section="' + LEARN_DMN.SECTIONS[LEARN_DMN.currentSection - 1] + '"]';
    var currentSummaryItem = document.querySelector(currentSummaryItemId);

    summaryItems.forEach(function(item) {

      var itemSection = item.getAttribute('data-section');
      var itemSectionIndex = LEARN_DMN.SECTIONS.indexOf(itemSection);

      if (itemSectionIndex < LEARN_DMN.completedSection) {
        item.classList.add('done');
      } else {
        item.classList.remove('done');
      }

      if (itemSectionIndex === LEARN_DMN.completedSection) {
        item.classList.add('work-in-progress');
      } else {
        item.classList.remove('work-in-progress');
      }

      item.classList.remove('current');
    });

    currentSummaryItem.classList.add('current');
  }

  function updateSectionComponent() {

    var section = LEARN_DMN.SECTIONS[LEARN_DMN.currentSection - 1];
    var sectionId = '#' + section;
    var currentSection = document.querySelector(sectionId);
    var sections = document.querySelectorAll('.learn-section');
    var onLoadCallback = LEARN_DMN.ON_LOAD_SECTION[section];

    sections.forEach(function(element) {
      element.classList.add('hidden');
    });

    if (onLoadCallback && LEARN_DMN.currentSection > LEARN_DMN.completedSection) {
      onLoadCallback();
    }

    if (LEARN_DMN.currentSection <= 1) {
      disablePrev();
    } else {
      enablePrev();
    }

    if (LEARN_DMN.currentSection >= numberOfSections() || LEARN_DMN.completedSection < LEARN_DMN.currentSection ) {
      disableNext();
    } else {
      enableNext();
    }

    currentSection.classList.remove('hidden');
  }

  function prevSection(event) {

    if (LEARN_DMN.currentSection > 1) {
      LEARN_DMN.currentSection -= 1;
    }

    updateSection();

    event.preventDefault();
    event.stopPropagation();
  }

  function nextSection(event) {

    if (LEARN_DMN.currentSection < numberOfSections()) {
      LEARN_DMN.currentSection += 1;
    }

    updateSection();

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  function getNextButton() {
    return document.querySelector('.learn-controls .next');
  }

  function getPrevButton() {
    return document.querySelector('.learn-controls .prev');
  }

  function hidePrev() {
    getPrevButton().classList.add('hidden');
  }

  function hideNext() {
    getNextButton().classList.add('hidden');
  }

  function showPrev() {
    getPrevButton().classList.remove('hidden');
  }

  function showNext() {
    getNextButton().classList.remove('hidden');
  }

  function disablePrev() {
    getPrevButton().disabled = true;
  }

  function disableNext() {
    getNextButton().disabled = true;
  }

  function enablePrev() {
    getPrevButton().disabled = false;
  }

  function enableNext() {
    getNextButton().disabled = false;
  }

  function setupSummaryItems() {

    var summaryItems = document.querySelectorAll('.learn-home-sidebar ul.summary li');
    
    function goToItemSection(item) {
      var section = item.getAttribute('data-section');
      var sectionIndex = LEARN_DMN.SECTIONS.indexOf(section) + 1;

      if (sectionIndex <= LEARN_DMN.completedSection + 1) {
        LEARN_DMN.currentSection = sectionIndex;
      }
      updateSection();
    };

    summaryItems.forEach(function(item) {
      item.addEventListener('click', function() {
        goToItemSection(item);
      });
    });
  }

  function markAsCompleted(section) {
      var sectionIndex = LEARN_DMN.SECTIONS.indexOf(section) + 1;
      if (LEARN_DMN.completedSection < sectionIndex) {
        LEARN_DMN.completedSection = sectionIndex;
      }
      nextSection();
  }

  function setupControls() {
    getPrevButton().addEventListener('click', prevSection);
    getNextButton().addEventListener('click', nextSection);
    updateSection();
  }

  LEARN_DMN.Controls.hidePrev = hidePrev;
  LEARN_DMN.Controls.hideNext = hideNext;
  LEARN_DMN.Controls.showPrev = showPrev;
  LEARN_DMN.Controls.showNext = showNext;
  LEARN_DMN.Controls.disablePrev = disablePrev;
  LEARN_DMN.Controls.disableNext = disableNext;
  LEARN_DMN.Controls.enablePrev = enablePrev;
  LEARN_DMN.Controls.enableNext = enableNext;
  LEARN_DMN.updateSection = updateSection;
  LEARN_DMN.markAsCompleted = markAsCompleted;

  setupControls();
  setupSummaryItems();
}());
