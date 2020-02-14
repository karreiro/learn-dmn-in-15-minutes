(function() {

  // Controls
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  var learnControls = document.querySelector('.learn-controls');
  var prev = learnControls.querySelector('.prev');
  var next = learnControls.querySelector('.next');
  var currentPath;
  var sections;

  function getSections() {
    var anchors = document.querySelectorAll('.learn-home-sidebar .summary li a');
    
    return Array.prototype.map.call(anchors, function(anchor){
      return anchor.getAttribute('href');
    });
  }

  function getCurrentPath() {
    return window.location.pathname;
  }

  function getCurrentIndex() {
    return sections.indexOf(currentPath);
  }

  function navigateToSection(sectionIndex) {
    window.location.href = sections[sectionIndex];
  }

  function onPrev() {
    var index = getCurrentIndex();
    if (index > 0) {
      navigateToSection(index - 1);
    }
  }

  function onNext() {
    var index = getCurrentIndex();
    if (index < sections.length - 1) {
      navigateToSection(index + 1);
    }
  }

  function setupButtons() {
    var index = getCurrentIndex();

    if (index === 0) {
      prev.disabled = true;
    }

    if (index === sections.length - 1) {
      next.disabled = true;
    }
  }

  currentPath = getCurrentPath();
  sections = getSections();

  setupButtons();

  prev.addEventListener('click', onPrev);
  next.addEventListener('click', onNext);
}());
