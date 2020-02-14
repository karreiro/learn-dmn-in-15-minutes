(function() {

  // Summary
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  function setupCurrentSection() {

    var anchors = document.querySelectorAll('.learn-home-sidebar .summary li a');
    var currentPath = window.location.pathname;

    anchors.forEach(function(anchor) {
      if (anchor.getAttribute('href') === currentPath) {
        anchor.parentNode.classList.add('current');
      }
    });
  }

  setupCurrentSection();

}());
