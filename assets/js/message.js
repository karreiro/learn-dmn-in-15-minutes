(function () {
  window.LEARN_DMN = window.LEARN_DMN || {};

  var LEARN_DMN = window.LEARN_DMN;
  var ALLOWED_EFFECTS = ["vertical-float", "horizontal-float"];

  LEARN_DMN.Message = LEARN_DMN.Message || {};

  LEARN_DMN.Message.isOpened = false;

  function getMessage() {
    if (LEARN_DMN.Message.instance === undefined) {
      LEARN_DMN.Message.instance = document.querySelector("#message");
    }
    return LEARN_DMN.Message.instance;
  }

  function setTitle(title) {
    getMessage().querySelector(".title").textContent = title;
  }

  function setContent(content) {
    getMessage().querySelector(".content").innerHTML = content;
  }

  function setActionName(actionName) {
    var hasActionName = !!actionName;
    var button = getMessage().querySelector(".actions button");

    if (hasActionName) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }

    button.textContent = actionName;
  }

  function enableAction(action) {
    var button = getMessage().querySelector(".actions button");
    var onClick = action || hideMessage;
    button.addEventListener("click", onClick);
  }

  function enableEffect(effect) {
    disableEffects();
    if (ALLOWED_EFFECTS.indexOf(effect) !== -1) {
      getMessage().classList.add(effect);
    }
  }

  function getCloseButton() {
    return getMessage().querySelector(".close");
  }

  function enableCloseButton(isCloseButtonEnabled) {
    if (isCloseButtonEnabled) {
      getCloseButton().classList.remove("disabled");
    } else {
      getCloseButton().classList.add("disabled");
    }
  }

  function setAllowedElementSelector(selector) {
    getMessage().setAttribute("data-allowed-element-selector", selector);
  }

  function getAllowedElementSelector() {
    return getMessage().getAttribute("data-allowed-element-selector") || "";
  }

  function disableEffects() {
    ALLOWED_EFFECTS.forEach(function (effect) {
      getMessage().classList.remove(effect);
    });
  }

  function showMessage(options) {
    var opts = options || {};
    var width = parseInt(options.width || 550);
    var height = parseInt(options.height || 400);
    var top = options.top
      ? options.top + "px"
      : "calc(50% - " + height / 2 + "px)";
    var left = options.left
      ? options.left + "px"
      : "calc(50% - " + (width / 2 + 150) + "px)";
    var message = getMessage();

    message.style.width = !width ? opts.width : width + "px";
    message.style.height = !height ? opts.height : height + "px";
    message.style.top = top;
    message.style.left = left;

    setTitle(options.title);
    setContent(options.content);
    setActionName(options.actionName);
    enableAction(options.action);
    enableEffect(options.effect);
    enableCloseButton(options.isCloseButtonEnabled);
    setAllowedElementSelector(options.allowedElementSelector);

    message.classList.remove("hidden");

    LEARN_DMN.Message.isOpened = true;
  }

  function hideMessage() {
    var message = getMessage();

    message.classList.add("hidden");
    setAllowedElementSelector("");

    LEARN_DMN.Lights.turnLightsOn();
    LEARN_DMN.Message.isOpened = false;
  }

  function setupMessage() {
    function setupCloseButton() {
      var closeButton = getMessage().querySelector(".close");
      closeButton.addEventListener("click", hideMessage);
    }

    function setupEscKeyButton() {
      window.onkeydown = function (event) {
        if (event.keyCode === 27) {
          if (getCloseButton().classList.contains("disabled")) {
            shakeMessageBox();
          } else {
            hideMessage();
          }
        }
      };
    }

    function isSectionLink(event) {
      var href = event.target.href || "";
      return href.match("/learn/");
    }

    function isHomeLink(event) {
      return event.target.matches(".learn-home-nav a");
    }

    function isAllowedElement(event) {
      return event.target.matches(getAllowedElementSelector());
    }

    function hasAllowedElement() {
      return getAllowedElementSelector().length > 0;
    }

    function setupFocusHandler() {
      document.addEventListener(
        "click",
        function (event) {
          if (
            hasAllowedElement() &&
            !isSectionLink(event) &&
            !isAllowedElement(event) &&
            !isHomeLink(event)
          ) {
            shakeMessageBox();
            event.preventDefault();
            event.stopPropagation();
          }
        },
        false
      );
    }

    setupCloseButton();
    setupEscKeyButton();
    setupFocusHandler();
  }

  function shakeMessageBox() {
    var shakeClass = "box shake-box";
    var cssClass = getMessage().getAttribute("class");
    var messageClasses = getMessage().classList;

    if (
      messageClasses.contains("shake-box") ||
      messageClasses.contains("hidden")
    ) {
      return;
    }

    getMessage().setAttribute("class", shakeClass);

    setTimeout(function () {
      getMessage().setAttribute("class", cssClass);
    }, 500);
  }

  // === Export ===

  LEARN_DMN.Message.showMessage = showMessage;
  LEARN_DMN.Message.hideMessage = hideMessage;
  LEARN_DMN.Message.setupMessage = setupMessage;
})();
