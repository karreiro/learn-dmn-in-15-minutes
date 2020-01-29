(function () {

  window.LEARN_DMN = window.LEARN_DMN || {};
  var LEARN_DMN = window.LEARN_DMN;

  LEARN_DMN.Lights = LEARN_DMN.Lights || {};

  var LEARN_DMN = window.LEARN_DMN;

  function turnLightsOn() {
    document.body.classList.remove('lights-off');
  }

  function turnLightsOff() {
    document.body.classList.add('lights-off');
  }

  // === Export ===

  LEARN_DMN.Lights.turnLightsOn = turnLightsOn;
  LEARN_DMN.Lights.turnLightsOff = turnLightsOff;
}());
