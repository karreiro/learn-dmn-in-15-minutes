---
layout: learn
---

<div id="section-simple-data-types" class="learn-section">
  <div class="learn-home-content editor">

    <div class="tabs">
      <i class="fa fa-search"></i>
      <ul>
        <li class="active">Editor</li>
        <li>Documentation</li>
        <li class="data-types-tab-item">Data Types</li>
      </ul>
    </div>

    <div class="data-types-placeholder-screen data-types-editor-content hidden">
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

    <div class="data-types-list-screen data-types-editor-content hidden">
      <h3>Custom Data Types</h3>
      <div class="data-types-list">

        <div class="edit-mode-row data-types-row">

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

        <div class="closed-mode-row data-types-closed-row hidden">
          <div class="name"></div>
          <div class="type"></div>
          <i class="fa fa-pencil"></i>
          <i class="fa fa-plus-circle"></i>
          <i class="fa fa-trash"></i>
        </div>
      </div>
    </div>

    <div class="properties-panel">
      <i class="fa fa-map"></i>
      <i class="fa fa-edit"></i>
      <i class="fa fa-eye"></i>
    </div>

    <ul class="shape-palette">
      <li>
        <img draggable="true" data-svg-name="svg-text-annotation" class="icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MjAgNDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjAgNDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRENTI1ODt9Cjwvc3R5bGU+CjxwYXRoIGlkPSJJY29uIiBjbGFzcz0ic3QwIiBkPSJNNDAsMTIwaDgwVjgwSDQwQzE3LjksODAsMCw5Ny45LDAsMTIwdjE4MGMwLDIyLjEsMTcuOSw0MCw0MCw0MGg4MHYtNDBINDBWMTIweiBNNDIwLDIyMGgtMjB2LTYwCgloLTQwdjQwaC0yMHYyMGgtMjB2LTYwaC00MHY2MGgtMjB2LTQwaC0zOS43djIwSDIwMHYtMjBoLTQwdjIwaC0yMHYyMGgtMjB2LTYwSDgwdjgwaDYwdjIwaDQwdi0yMGgyNDBWMjIweiIvPgo8L3N2Zz4K" />
      </li>
      <li>
        <img draggable="true" data-svg-name="svg-business-knowledge-model" class="icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MjAgNDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjAgNDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRENTI1ODt9Cjwvc3R5bGU+CjxwYXRoIGlkPSJJY29uXzFfIiBjbGFzcz0ic3QwIiBkPSJNMzgwLDEyMHYxNDMuNEwzNDMuNCwzMDBINDBWMTU2LjZMNzYuNiwxMjBIMzgwIE00MDAsODBINjguM2MtNS4zLDAtMTAuNCwyLjEtMTQuMSw1LjlMNS45LDEzNC4xCglDMi4xLDEzNy45LDAsMTQzLDAsMTQ4LjNWMzIwYzAsMTEsOSwyMCwyMCwyMGgzMzEuN2M1LjMsMCwxMC40LTIuMSwxNC4xLTUuOWw0OC4zLTQ4LjNjMy44LTMuOCw1LjktOC44LDUuOS0xNC4xVjEwMAoJQzQyMCw4OSw0MTEsODAsNDAwLDgwTDQwMCw4MHoiLz4KPC9zdmc+Cg==" />
      </li>
      <li>
        <img draggable="true" data-svg-name="svg-input-data" class="icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MjAgNDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjAgNDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRENTI1ODt9Cjwvc3R5bGU+CjxwYXRoIGlkPSJJY29uIiBjbGFzcz0ic3QwIiBkPSJNMjkyLDEyMGM0OC41LDAsODgsMzkuNSw4OCw4OHY0YzAsNDguNS0zOS41LDg4LTg4LDg4SDEyOGMtNDguNSwwLTg4LTM5LjUtODgtODh2LTQKCWMwLTQ4LjUsMzkuNS04OCw4OC04OEgyOTIgTTI5Miw4MEgxMjhDNTcuMyw4MCwwLDEzNy4zLDAsMjA4djRjMCw3MC43LDU3LjMsMTI4LDEyOCwxMjhoMTY0YzcwLjcsMCwxMjgtNTcuMywxMjgtMTI4di00CglDNDIwLDEzNy4zLDM2Mi43LDgwLDI5Miw4MEwyOTIsODB6Ii8+Cjwvc3ZnPgo=" />
      </li>
      <li>
        <img draggable="true" data-svg-name="svg-decision-service" class="icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MjAgNDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjAgNDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRENTI1ODt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNTAsODBINzBjLTM4LjcsMC03MCwzMS4zLTcwLDcwdjEyMGMwLDM4LjcsMzEuMyw3MCw3MCw3MGgyODBjMzguNywwLDcwLTMxLjMsNzAtNzBWMTUwCglDNDIwLDExMS4zLDM4OC43LDgwLDM1MCw4MHogTTc4LDExOS45aDI2NGMyMSwwLDM4LDE3LDM4LDM4VjIwMEg0MHYtNDIuMUM0MCwxMzYuOSw1NywxMTkuOSw3OCwxMTkuOXogTTM0MiwyOTkuOUg3OAoJYy0yMSwwLTM4LTE3LTM4LTM4VjIyMGgzNDB2NDEuOUMzODAsMjgyLjksMzYzLDI5OS45LDM0MiwyOTkuOXoiLz4KPC9zdmc+Cg==" />
      </li>
      <li>
        <img draggable="true" data-svg-name="svg-knowledge-source" class="icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MjAgNDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjAgNDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRENTI1ODt9Cjwvc3R5bGU+CjxwYXRoIGlkPSJJY29uIiBjbGFzcz0ic3QwIiBkPSJNMzgwLjMsMTIwLjF2MTA5LjRjLTI0LjYtOS41LTQ5LjEtMTQuMy03My0xNC4zYy0yMiwwLTQzLjIsNC4xLTYzLjMsMTIuMmMtMjIuNCw5LjEtNDMuMiwyMy4yLTYyLDQyCgljLTIwLjgsMjAuOC00My4yLDMwLjgtNjguNywzMC44Yy0yOS42LDAtNTcuMS0xMy43LTczLTIzLjRWMTIwLjFIMzgwLjMgTTQwMC4zLDgwLjFoLTM4MGMtMTEsMC0yMCw5LTIwLDIwdjE5NS4yCgljMCwxLjUsMC43LDMsMS45LDMuOWM5LjgsNy42LDU2LDQxLDExMS4xLDQxYzMxLjEsMCw2NS4xLTEwLjYsOTctNDIuNmMzMS45LTMxLjksNjUuOS00Mi42LDk3LTQyLjZjNDcuNiwwLDg4LjYsMjQuOSwxMDUuMSwzNi42CgljMC45LDAuNiwxLjksMC45LDIuOSwwLjljMi42LDAsNS0yLjEsNS01VjEwMC4xQzQyMC4zLDg5LDQxMS4zLDgwLjEsNDAwLjMsODAuMUw0MDAuMyw4MC4xeiIvPgo8L3N2Zz4K" />
      </li>
      <li>
        <img draggable="true" data-svg-name="svg-decision" class="icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MjAgNDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjAgNDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRENTI1ODt9Cjwvc3R5bGU+CjxwYXRoIGlkPSJJY29uIiBjbGFzcz0ic3QwIiBkPSJNMzk1LDgwSDI1QzExLjIsODAsMCw5MS4yLDAsMTA1djIxMGMwLDEzLjgsMTEuMiwyNSwyNSwyNWgzNzBjMTMuOCwwLDI1LTExLjIsMjUtMjVWMTA1CglDNDIwLDkxLjIsNDA4LjgsODAsMzk1LDgweiBNNDAsMzAwVjEyMGgzNDB2MTgwSDQweiIvPgo8L3N2Zz4K" />
      </li>
    </ul>
  </div>
</div>

<script src="/assets/js/simple-data-types.js"></script>
