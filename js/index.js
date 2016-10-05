"use strict";

// Component model
//
// Board
//  Controls
//   StartStop
//   Clear
//  Cells
//   Cell

var Board = React.createClass({
  displayName: "Board",

  render: function render() {
    return React.createElement(
      "div",
      { className: "board", id: "board" },
      React.createElement(Controls, null),
      React.createElement(Cells, null)
    );
  }
});

var Controls = React.createClass({
  displayName: "Controls",

  render: function render() {
    return React.createElement(
      "div",
      { className: "controls", id: "controls" },
      React.createElement(StartStop, null),
      React.createElement(Clear, null)
    );
  }
});

var StartStop = React.createClass({
  displayName: "StartStop",

  render: function render() {
    return React.createElement(
      "div",
      { className: "btnContainer col-xs-6" },
      React.createElement(
        "button",
        { className: "startstop" },
        "Start"
      )
    );
  }
});

var Clear = React.createClass({
  displayName: "Clear",

  render: function render() {
    return React.createElement(
      "div",
      { className: "btnContainer col-xs-6" },
      React.createElement(
        "button",
        { className: "clear" },
        "Clear"
      )
    );
  }
});

var Cells = React.createClass({
  displayName: "Cells",

  render: function render() {
    var cells = [];
    for (var i = 0; i < 50; i++) {
      cells.push(React.createElement(Cell, null));
    }return React.createElement(
      "div",
      { className: "cells", id: "cells" },
      cells
    );
  }
});

var Cell = React.createClass({
  displayName: "Cell",

  getClasses: function getClasses(str) {
    if (Math.random > .5) return str + " live";else return str + " dead";
  },
  render: function render() {
    return React.createElement("div", { className: this.getClasses("cell") });
  }
});

ReactDOM.render(React.createElement(Board, null), document.getElementById("app"));