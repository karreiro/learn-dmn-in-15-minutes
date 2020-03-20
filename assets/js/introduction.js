(function () {

  // Introduction
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  var title = 'Let\'s get started!';
  var content = '<p>Welcome to the <b>Learn DMN in 15 minutes</b> course!</p>' +
    '<img src="/assets/logo.png" />' +
    '<p>If you notice any unclear example or section that deserves some polishment, please ' +
    'report an issue <a href=\'https://github.com/karreiro/learn-dmn-in-15-minutes/issues\'>here</a>' +
    ', and we will fix it as soon as possible!</p>' +
    '<p>Contributions to the source code are quite welcomed as well.</p>' +
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
