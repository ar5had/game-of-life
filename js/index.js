"use strict";

// Component model
//
// Board
//  Logo
//  Controls
//   StartStop
//   Clear
//  Cells
//   Cell

var Board = React.createClass({
  displayName: "Board",

  getInitialState: function getInitialState() {
    return {};
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "board", id: "board" },
      React.createElement(
        "div",
        { id: "panel" },
        React.createElement(Logo, null),
        React.createElement(Controls, null)
      ),
      React.createElement(Cells, { clear: this.state.clear })
    );
  }
});

var Logo = React.createClass({
  displayName: "Logo",

  render: function render() {
    return React.createElement(
      "div",
      { id: "logoContainer" },
      React.createElement(
        "h3",
        { id: "logo" },
        "Game of ",
        React.createElement(
          "span",
          null,
          "Life"
        )
      )
    );
  }
});

var Controls = React.createClass({
  displayName: "Controls",

  render: function render() {
    return React.createElement(
      "div",
      { className: "controls", id: "controls" },
      React.createElement(
        "div",
        { className: "controlsContainer" },
        React.createElement(GenerationDisplay, null),
        React.createElement(StartStop, null),
        React.createElement(Clear, { onClick: this.props.clear })
      )
    );
  }
});

var GenerationDisplay = React.createClass({
  displayName: "GenerationDisplay",

  render: function render() {
    return React.createElement(
      "div",
      { className: "gDisplay col-xs-8" },
      React.createElement(
        "h4",
        { className: "generationText" },
        "Generation :",
        React.createElement(
          "span",
          { id: "count" },
          "000000"
        )
      )
    );
  }
});

var StartStop = React.createClass({
  displayName: "StartStop",

  onClick: function onClick(e) {
    $(".startstop").toggleClass("on");
    $(".startstop > span").toggleClass("glyphicon-pause");
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "btnContainer col-xs-2" },
      React.createElement(
        "button",
        { className: "startstop transition", onClick: this.onClick },
        React.createElement("span", { className: "glyphicon glyphicon-play" })
      )
    );
  }
});

var Clear = React.createClass({
  displayName: "Clear",

  onClick: function onClick(e) {
    $(".startstop").removeClass("on");
    $(".startstop>span").removeClass("glyphicon-pause");
    this.props.onClick();
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "btnContainer col-xs-2" },
      React.createElement(
        "button",
        { className: "clear transition on", onClick: this.onClick },
        React.createElement("span", { className: "glyphicon glyphicon-stop" })
      )
    );
  }
});

var Cells = React.createClass({
  displayName: "Cells",

  componentDidMount: function componentDidMount() {
    var genrationIntvl = setInterval(function () {
      var count = $("#count").html();
      count = +count;
      count++;
      var zeros = 6 - String(count).length;
      var prefix = "";
      while (prefix.length < zeros) {
        prefix += "0";
      }$("#count").html(prefix + count);
    }, 200);
  },
  render: function render() {
    var cells = [];
    var width = document.querySelector("body").offsetWidth;
    var height = document.querySelector("body").offsetHeight - 125;
    var count = Math.floor(width / 10) * Math.floor(height / 10);
    if (document.querySelector(".cells")) {
      document.querySelector(".cells").style.width = width;
      document.querySelector(".cells").style.height = height;
    }
    for (var i = 1; i <= count; i++) {
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
    if (Math.random() > .5) return str;else return str + " dead";
  },
  onClick: function onClick(e) {
    $(e.currentTarget).toggleClass("dead");
  },
  render: function render() {
    return React.createElement("div", { className: this.getClasses("cell"), onClick: this.onClick });
  }
});

ReactDOM.render(React.createElement(Board, null), document.getElementById("app"));