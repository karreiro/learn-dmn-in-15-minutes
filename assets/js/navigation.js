(function () {

  window.LEARN_DMN = window.LEARN_DMN || {};

  var LEARN_DMN = window.LEARN_DMN;
  
  LEARN_DMN.Navigation = LEARN_DMN.Navigation || {};

  LEARN_DMN.Navigation.SECTIONS = ['section-introduction',
                                   'section-visual-notation',
                                   'section-decision-logic',
                                   'section-the-feel-language',
                                   'section-data-types',
                                   'section-simple-data-types',
                                   'section-structure-data-types',
                                   'section-reusability',
                                   'section-integrate'];

  LEARN_DMN.Navigation.SECTIONS_TITLES = ['Learn DMN in 15 minutes - Introduction',
                                          'Learn DMN in 15 minutes - Visual Notation',
                                          'Learn DMN in 15 minutes - Decision Logic',
                                          'Learn DMN in 15 minutes - The FEEL language',
                                          'Learn DMN in 15 minutes - Data Types',
                                          'Learn DMN in 15 minutes - Reusability',
                                          'Learn DMN in 15 minutes - Integrate'];

  LEARN_DMN.Navigation.ON_LOAD_SECTION = LEARN_DMN.Navigation.ON_LOAD_SECTION || {};

  LEARN_DMN.Navigation.currentSection = LEARN_DMN.Navigation.currentSection || 1;

  LEARN_DMN.Navigation.completedSection = LEARN_DMN.Navigation.completedSection || 0;

  LEARN_DMN.Navigation = LEARN_DMN.Navigation || {};

  function numberOfSections() {
    return LEARN_DMN.Navigation.SECTIONS.length;
  }

  function updateSection() {
    disableMessages();
    updateSummaryComponent();
    updateSectionComponent();
    udpatePageInformation();
  }

  function disableMessages() {
    LEARN_DMN.Message.hideMessage();
  }

  function udpatePageInformation() {
    
    var step = LEARN_DMN.Navigation.currentSection;
    var sectionIndex = LEARN_DMN.Navigation.currentSection - 1;
    var section = LEARN_DMN.Navigation.SECTIONS[sectionIndex].substring(8);
    var title = LEARN_DMN.Navigation.SECTIONS_TITLES[sectionIndex];

    LEARN_DMN.Page.refreshPageState(step, title, '/learn/' + section);
  }

  function updateSummaryComponent() {

    var summaryItems = document.querySelectorAll('.learn-home-sidebar ul.summary li');
    var currentSummaryItemId = '[data-section="' + LEARN_DMN.Navigation.SECTIONS[LEARN_DMN.Navigation.currentSection - 1] + '"]';
    var currentSummaryItem = document.querySelector(currentSummaryItemId);
    var cssClass = {
      workInProgress: 'work-in-progress',
      current: 'current',
      done: 'done'
    };

    summaryItems.forEach(function(item) {

      var itemSection = item.getAttribute('data-section');
      var itemSectionIndex = LEARN_DMN.Navigation.SECTIONS.indexOf(itemSection);

      if (itemSectionIndex < LEARN_DMN.Navigation.completedSection) {
        item.classList.add(cssClass.done);
      } else {
        item.classList.remove(cssClass.done);
      }

      if (itemSectionIndex === LEARN_DMN.Navigation.completedSection) {
        item.classList.add(cssClass.workInProgress);
      } else {
        item.classList.remove(cssClass.workInProgress);
      }

      item.classList.remove(cssClass.current);
    });

    currentSummaryItem.classList.add(cssClass.current);
  }

  function updateSectionComponent() {

    var section = LEARN_DMN.Navigation.SECTIONS[LEARN_DMN.Navigation.currentSection - 1];
    var sectionId = '#' + section;
    var currentSection = document.querySelector(sectionId);
    var sections = document.querySelectorAll('.learn-section');
    var onLoadCallback = LEARN_DMN.Navigation.ON_LOAD_SECTION[section];

    sections.forEach(function(element) {
      element.classList.add('hidden');
    });

    if (onLoadCallback && LEARN_DMN.Navigation.currentSection > LEARN_DMN.Navigation.completedSection) {
      onLoadCallback();
    }

    if (LEARN_DMN.Navigation.currentSection <= 1) {
      disablePrev();
    } else {
      enablePrev();
    }

    if (LEARN_DMN.Navigation.currentSection >= numberOfSections()) {
      disableNext();
    } else {
      enableNext();
    }

    currentSection.classList.remove('hidden');
  }

  function prevSection(event) {

    if (LEARN_DMN.Navigation.currentSection > 1) {
      LEARN_DMN.Navigation.currentSection -= 1;
    }

    updateSection();

    event.preventDefault();
    event.stopPropagation();
  }

  function nextSection(event) {

    if (LEARN_DMN.Navigation.currentSection < numberOfSections()) {
      LEARN_DMN.Navigation.currentSection += 1;
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

  function goToSection(sectionIndex) {
    LEARN_DMN.Navigation.currentSection = sectionIndex;
    updateSection();
  };

  function setupSummaryItems() {

    var summaryItems = document.querySelectorAll('.learn-home-sidebar ul.summary li');

    summaryItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var section = item.getAttribute('data-section');
        var sectionIndex = getSectionIndex(section);
        goToSection(sectionIndex);
      });
    });
  }

  function setupNavigation() {
    getPrevButton().addEventListener('click', prevSection);
    getNextButton().addEventListener('click', nextSection);
    updateSection();
  }

  function getSectionIndex(section) {
    return LEARN_DMN.Navigation.SECTIONS.indexOf(section) + 1;
  }

  function markAsCompletedSection(section) {
    var sectionIndex = getSectionIndex(section);

    LEARN_DMN.Navigation.completedSection = sectionIndex;
    LEARN_DMN.Navigation.currentSection = sectionIndex;
  };

  function markAsCurrentSection(section) {
    var sectionIndex = getSectionIndex(section);

    LEARN_DMN.Navigation.completedSection = sectionIndex - 1;
    LEARN_DMN.Navigation.currentSection = sectionIndex;
  };

  // === Export ===

  LEARN_DMN.Navigation.setupNavigation = setupNavigation;
  LEARN_DMN.Navigation.setupSummaryItems = setupSummaryItems;
  LEARN_DMN.Navigation.markAsCompletedSection = markAsCompletedSection;
  LEARN_DMN.Navigation.markAsCurrentSection = markAsCurrentSection;
  LEARN_DMN.Navigation.updateSection = updateSection;
  LEARN_DMN.Navigation.nextSection = nextSection;
}());
