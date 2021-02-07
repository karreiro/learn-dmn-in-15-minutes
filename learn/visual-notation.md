---
layout: learn
title: Visual Notation
---

<div id="section-visual-notation" class="learn-section">
  <div class="learn-home-content editor">
    <div class="tabs">
      <i class="fa fa-search"></i>
      <ul>
        <li class="active">Editor</li>
        <li>Documentation</li>
        <li>Data Types</li>
      </ul>
    </div>
    <div class="properties-panel">
      <i class="fa fa-map"></i>
      <i class="fa fa-edit"></i>
      <i class="fa fa-eye"></i>
    </div>
    {% include shape-palette.html %}
    <div class="svgs">
      <div id="svg-decision" class="svg-canvas-element hidden">
        {% include decision.svg %}
      </div>
      <div id="svg-business-knowledge-model" class="svg-canvas-element hidden">
        {% include business-knowledge-model.svg %}
      </div>
      <div id="svg-input-data" class="svg-canvas-element hidden">
        {% include input-data.svg %}
      </div>
      <div id="svg-knowledge-source" class="svg-canvas-element hidden">
        {% include knowledge-source.svg %}
      </div>
      <div id="svg-text-annotation" class="svg-canvas-element hidden">
        {% include text-annotation.svg %}
      </div>
      <div id="svg-decision-service" class="svg-canvas-element hidden">
        {% include decision-service.svg %}
      </div>
    </div>
  </div>
</div>
<script src="/assets/js/visual-notation.js"></script>
