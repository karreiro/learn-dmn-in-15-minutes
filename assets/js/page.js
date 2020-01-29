(function () {

  window.LEARN_DMN = window.LEARN_DMN || {};
  var LEARN_DMN = window.LEARN_DMN;

  LEARN_DMN.Page = LEARN_DMN.Page || {};

  function refreshPageState(step, title, url) {
    history.pushState({step: step},  title, url);
    document.title = title;
  }

  // === Export ===

  LEARN_DMN.Page.refreshPageState = refreshPageState;
}());
