(function() {

  // Visual notation
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  var nodeMessages = {
    'svg-text-annotation' : {
      title: 'Text Annotation',
      content: 'A Text Annotation consists of a square bracket followed by modeler-entered explanatory text or comment.'
    },
    'svg-business-knowledge-model' : {
      title: 'Business knowledge model',
      content: 'A business knowledge model denotes a function encapsulating business knowledge, e.g., as business rules, a decision table, or an analytic model.'
    },
    'svg-input-data' : {
      title: 'Input data',
      content: 'An input data element denotes information used as an input by one or more decisions. When enclosed within a knowledge model, it denotes the parameters to the knowledge model.'
    },
    'svg-decision-service' : {
      title: 'Decision Service',
      content: 'A decision service may enclose a set of reusable decisions (not shown in the element to the right) that can be invoked internally by another decision or externally, e.g., by a BPMN process.'
    },
    'svg-knowledge-source' : {
      title: 'Knowledge source',
      content: 'A knowledge source denotes an authority for a business knowledge model or decision.'
    },
    'svg-decision' : {
      title: 'Decision',
      content: 'A decision denotes the act of determining an output from a number of inputs, using decision logic which may reference one or more business knowledge models'
    }
  };

  var palleteItems = document.querySelectorAll('#section-visual-notation .shape-palette li img');
  var editorCanvas = document.querySelector('#section-visual-notation .editor');

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.getAttribute('data-svg-name'));
  }

  function drop(ev) {
    ev.preventDefault();

    var dataSVGName = ev.dataTransfer.getData('text');
    var element = document.querySelector('#section-visual-notation #' + dataSVGName);
    var button = document.querySelector('#section-visual-notation [data-svg-name="' + dataSVGName + '"]');
    var numberOfPalleteItems = 6;
    var numberOfDraggedElements = document.querySelectorAll('#section-visual-notation .shape-palette .done').length + 1;
    var isFinished = numberOfPalleteItems === numberOfDraggedElements;

    function getSuffix() {
      if (isFinished) {
        return '<b><p>Congratulations! You\'ve learned about all components!</p></b>';
      } else {
        return '<b><p>You\'ve dragged ' + numberOfDraggedElements + ' of ' + numberOfPalleteItems + '!</p><p>Keep dragging! :-)</p></b>';
      }
    }

    function nextSection() {
      window.location.href = '/learn/decision-logic';
    }

    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.style.top = ev.y + 'px';
      element.style.left = ev.x + 'px';

      var nodeSize = dataSVGName === 'svg-decision-service' ? 200 : 100;

      LEARN_DMN.Message.showMessage({
        title: nodeMessages[dataSVGName].title,
        content: '<p>' + nodeMessages[dataSVGName].content + '</p>' + getSuffix(),
        width: 400,
        height: 'auto',
        top: ev.y,
        left: ev.x + nodeSize + 20,
        actionName: isFinished ? 'Next section' : null,
        action: isFinished ? nextSection : null
      });

      button.parentNode.classList.add('done');
    }
  }

  var numberOfDraggedElements = document.querySelectorAll('#section-visual-notation .shape-palette .done').length;

  function showTryItNowMessage () {

    var title = 'Let\'s get it started!';
    var content = '<p>Let\'s understand the main components of our model.</p>' +
                  '<p>Try to drag each element in the canvas, to understand each of them.</p>';

    LEARN_DMN.Message.showMessage({
      title: title,
      content: content,
      width: 400,
      height: 300,
      actionName: 'Try it now!',
      action: function() {
        LEARN_DMN.Lights.turnLightsOn();
        showPalleteMessage();
      }
    });
  }

  function showPalleteMessage() {

    var title = '← Here\'s the component pallete';
    var content = '<p>Start dragging elements into the canvas!</p>';

    LEARN_DMN.Message.showMessage({
      title: title,
      content: content,
      width: 400,
      height: 160,
      top: 120,
      effect: 'horizontal-float',
      left: 60
    });
  }

  if (numberOfDraggedElements === 0) {
    LEARN_DMN.Lights.turnLightsOff();
    showTryItNowMessage();
  }

  editorCanvas.ondragover = allowDrop;
  editorCanvas.ondrop = drop;

  palleteItems.forEach(function(item) {
    item.ondragstart = drag;
  });

}());
