(function () {
  // Visual notation
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  var nodeMessages = {
    "svg-text-annotation": {
      title: "Text annotation",
      content:
        "Text annotations consist of a square bracket followed by an explanatory text or a comment.",
    },
    "svg-business-knowledge-model": {
      title: "Business Knowledge Model (BKM)",
      content:
        "<p>BKMs encapsulate business knowledge as reusable functions.</p><p>The decision logic can hold a FEEL function, a Java method invocation, or a PMML invocation.</p>",
    },
    "svg-input-data": {
      title: "Input data",
      content:
        "<p>Input data elements denote information used as input for one or more decisions.</p><p>When enclosed within a Business Knowledge Model (BKM), they indicate parameters for the BKM node.</p>",
    },
    "svg-decision-service": {
      title: "Decision Service",
      content:
        "<p>Decision services may enclose a set of reusable decisions (not shown in the element to the right).</p><p>They can be invoked internally by another decision, or externally by a BPMN process or another DMN model.</p>",
    },
    "svg-knowledge-source": {
      title: "Knowledge source",
      content:
        "A knowledge source denotes an authority for a BKM or a decision node.",
    },
    "svg-decision": {
      title: "Decision",
      content:
        "<p>Decisions determine an output value depending on:</p><ul><li>their <b>input data</b> (input nodes or the output value from other decisions)</li><li>their <b>decision logic</b> - boxed expressions that may reference functions from BKM nodes</li></ul>",
    },
  };

  var palleteItems = document.querySelectorAll(
    "#section-visual-notation .shape-palette li img"
  );
  var editorCanvas = document.querySelector("#section-visual-notation .editor");

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.getAttribute("data-svg-name"));
  }

  function drop(ev) {
    ev.preventDefault();

    var dataSVGName = ev.dataTransfer.getData("text");
    var element = document.querySelector(
      "#section-visual-notation #" + dataSVGName
    );
    var button = document.querySelector(
      '#section-visual-notation [data-svg-name="' + dataSVGName + '"]'
    );
    var numberOfPalleteItems = 6;
    var numberOfDraggedElements =
      document.querySelectorAll("#section-visual-notation .shape-palette .done")
        .length + 1;
    var isFinished = numberOfPalleteItems === numberOfDraggedElements;

    function getSuffix() {
      if (isFinished) {
        return "<b><p>Congratulations! You've learned about all DRD components!</p></b>";
      } else {
        return (
          "<b><p>You've dragged " +
          numberOfDraggedElements +
          " of " +
          numberOfPalleteItems +
          "!</p></b><p>Keep dragging :-)</p>"
        );
      }
    }

    function nextSection() {
      window.location.href = "/learn/decision-logic";
    }

    function getNodeSize(dataSVGName) {
      switch (dataSVGName) {
        case "svg-decision-service":
          return 190;
        case "svg-text-annotation":
          return 130;
        default:
          return 100;
      }
    }

    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.style.top = ev.y + "px";
      element.style.left = ev.x + "px";

      var nodeSize = getNodeSize(dataSVGName);

      LEARN_DMN.Message.showMessage({
        title: nodeMessages[dataSVGName].title,
        content:
          "<p>" + nodeMessages[dataSVGName].content + "</p>" + getSuffix(),
        width: 400,
        height: "auto",
        top: ev.y,
        left: ev.x + nodeSize + 20,
        actionName: isFinished ? "Next section" : null,
        action: isFinished ? nextSection : null,
      });

      button.parentNode.classList.add("done");
    }
  }

  var numberOfDraggedElements = document.querySelectorAll(
    "#section-visual-notation .shape-palette .done"
  ).length;

  function showTryItNowMessage() {
    var title = "Let's understand the DMN visual notation";
    var content =
      "<p>The main <b>DRD (Decision Requirements Diagrams) components</b> live in the editor palette.</p>" +
      "<p>Try to drag each component in the canvas, to understand each one of them.</p>";

    LEARN_DMN.Message.showMessage({
      title: title,
      content: content,
      width: 400,
      height: 330,
      actionName: "Try it now!",
      action: function () {
        LEARN_DMN.Lights.turnLightsOn();
        showPalleteMessage();
      },
    });
  }

  function showPalleteMessage() {
    var title = "← Here's the editor palette";
    var content =
      '<p>Start dragging elements into the canvas!</p><img src="/assets/visual-notation.gif" />';

    LEARN_DMN.Message.showMessage({
      title: title,
      content: content,
      width: 450,
      height: 400,
      top: 120,
      effect: "horizontal-float",
      left: 60,
    });
  }

  if (numberOfDraggedElements === 0) {
    LEARN_DMN.Lights.turnLightsOff();
    showTryItNowMessage();
  }

  editorCanvas.ondragover = allowDrop;
  editorCanvas.ondrop = drop;

  palleteItems.forEach(function (item) {
    item.ondragstart = drag;
  });
})();
