---
layout: learn
---

<div id="section-structure-data-types" class="learn-section">
  <div class="learn-home-content editor data-types-editor">

    <div class="tabs">
      <i class="fa fa-search"></i>
      <ul>
        <li>Editor</li>
        <li>Documentation</li>
        <li class="active">Data Types</li>
      </ul>
    </div>

    <div class="data-types-editor-content hidden">
      <h3>Custom Data Types</h3>
      <div class="placeholder">
        <div>
          <i class="fa fa-object-group"></i>
          <h4>No custom data types have been defined.</h4>
          <p>
            Data types are referenced in the input and output values for decision
            tables. Custom data types allow you to reference more complex data types,
            beyond the simple "default" types.
          </p>
          <p>
            Currently, there are no custom data types available for you to view or
            edit. To get started, add a custom data type.
          </p>
          <button class="add-custom-data-type btn btn-primary">
            <i class="fa fa-plus-circle"></i>
            <span>Add a custom Data Type</span>
          </button>
        </div>
      </div>
    </div>

    <div class="data-types-editor-content">
      <h3>Custom Data Types</h3>
      <div class="data-types-list">

        <div class="data-type-1 data-types-closed-row structure hidden">
          <div class="name"></div>
          <div class="type"></div>
          <i class="fa fa-pencil"></i>
          <i class="fa fa-plus-circle"></i>
          <i class="fa fa-trash"></i>
        </div>

        <div class="data-type-2 data-types-closed-row nested hidden">
          <div class="name"></div>
          <div class="type"></div>
          <i class="fa fa-pencil"></i>
          <i class="fa fa-plus-circle"></i>
          <i class="fa fa-trash"></i>
        </div>

        <div class="data-type-3 data-types-closed-row nested hidden">
          <div class="name"></div>
          <div class="type"></div>
          <i class="fa fa-pencil"></i>
          <i class="fa fa-plus-circle"></i>
          <i class="fa fa-trash"></i>
        </div>

        <div class="data-types-row">

          <div class="data-type-field">
            <label>Name</label>
            <input type="text">
          </div>

          <div class="data-type-field">
            <label>Type</label>
            <div class="dropdown-component">
              <div class="dropdown-button">
                <span>- Select a data type -</span>
                <i class="fa fa-angle-down"></i>
              </div>
              <ul class="dropdown-list hidden">
                <li class="dropdown-header">Default</li>
                <li>Any</li>
                <li>boolean</li>
                <li>context</li>
                <li>date</li>
                <li>date and time</li>
                <li>days and time duration</li>
                <li>number</li>
                <li>string</li>
                <li>time</li>
                <li>years and months duration</li>
                <li class="structure"><i class="fa fa-object-group"></i> Structure</li>
              </ul>
            </div>
          </div>

          <div class="data-type-field list-data-type">
            <i class="fa fa-th-list"></i>
            List
            <div class="slider"></div>
          </div>

          <div class="data-type-field constraints">
            <a href="#" class="">
              <i class="fa fa-compress"></i>
              <span>Add Constraints</span>
            </a>
          </div>

          <i class="fa fa-check"></i>
          <i class="fa fa-times"></i>
        </div>
      </div>
    </div>

    <div class="properties-panel">
      <i class="fa fa-map"></i>
      <i class="fa fa-edit"></i>
      <i class="fa fa-eye"></i>
    </div>

  </div>
</div>

<script src="/assets/js/structure-data-types.js"></script>
