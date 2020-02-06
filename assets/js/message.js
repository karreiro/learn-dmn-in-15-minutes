(function () {

  window.LEARN_DMN = window.LEARN_DMN || {};
  
  var LEARN_DMN = window.LEARN_DMN;
  var ALLOWED_EFFECTS = ['vertical-float', 'horizontal-float'];

  LEARN_DMN.Message = LEARN_DMN.Message || {};

  LEARN_DMN.Message.isOpened = false;

  function getMessage() {
    if (LEARN_DMN.Message.instance === undefined) {
      LEARN_DMN.Message.instance = document.querySelector('#message');
    }
    return LEARN_DMN.Message.instance;
  }

  function setTitle(title) {
    getMessage().querySelector('.title').textContent = title;
  }

  function setContent(content) {
    getMessage().querySelector('.content').innerHTML = content;
  }

  function setActionName(actionName) {

    var hasActionName = !!actionName;
    var button = getMessage().querySelector('.actions button');

    if (hasActionName) {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }

    button.textContent = actionName;
  }

  function enableAction(action) {
    var button = getMessage().querySelector('.actions button');
    var onClick = action || hideMessage;
    button.addEventListener('click', onClick);
  }

  function enableEffect(effect) {
    disableEffects();
    if (ALLOWED_EFFECTS.indexOf(effect) !== -1) {
      getMessage().classList.add(effect);
    }
  }

  function disableEffects() {
    ALLOWED_EFFECTS.forEach(function(effect) {
      getMessage().classList.remove(effect);
    });
  }

  function showMessage(options) {

    var opts = options || {};
    var width = parseInt(options.width || 550);
    var height = parseInt(options.height || 400);
    var top = options.top ? options.top + 'px' : 'calc(50% - ' + (height/2) + 'px)';
    var left = options.left ? options.left+ 'px' : 'calc(50% - ' + ((width/2) + 150) + 'px)';
    var message = getMessage();

    message.style.width = !width ? opts.width : width + 'px';
    message.style.height = !height ? opts.height : height + 'px'
    message.style.top = top;
    message.style.left = left;

    setTitle(options.title);
    setContent(options.content);
    setActionName(options.actionName);
    enableAction(options.action);
    enableEffect(options.effect);

    message.classList.remove('hidden');

    LEARN_DMN.Message.isOpened = true;
  }

  function hideMessage() {

    var message = getMessage();

    message.classList.add('hidden');

    LEARN_DMN.Lights.turnLightsOn();
    LEARN_DMN.Message.isOpened = false;
  }

  function setupMessage() {
    var closeButton = getMessage().querySelector('.close');
    closeButton.addEventListener('click', hideMessage);
  }

  // === Export ===

  LEARN_DMN.Message.showMessage = showMessage;
  LEARN_DMN.Message.hideMessage = hideMessage;
  LEARN_DMN.Message.setupMessage = setupMessage;
}());
