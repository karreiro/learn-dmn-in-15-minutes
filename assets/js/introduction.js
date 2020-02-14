(function() {

  // Introduction
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  var title = 'Welcome!';
  var content = '<p>Welcome to the <b>"Learn DMN in 15 minutes"</b> course!</p>' +
                '<img src="/assets/logo.png" />' +
                '<p>If you notice any unclear example, or some section that deserves to be improved, please raise and issue here, and we will fix it as soon as possible! Contributions to our source code are welcomed as well.</p>' +
                '<p>This whole course is based on the <a href="https://kiegroup.github.io/kogito-online/#/editor/dmn">Kogito Online editor</a>.</p>' +
                '<p>We hope you enjoy it! :)</p>';

  LEARN_DMN.Lights.turnLightsOff();

  LEARN_DMN.Message.showMessage({
    title: title,
    content: content,
    width: 600,
    height: 600,
    top: 90,
    actionName: 'Start now →'
  });

}());
