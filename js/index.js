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
=======
  render: function() {
    return (
      <div className="board" id="board">
        <Cells />
      </div>
>>>>>>> 2b6a889c44137dd27988bd506b4634dc7288f1b7
    );
  }
});

var Controls = React.createClass({
  render: function() {
    return (
      <div className="controls" id="controls">
        <GenerationDisplay />
        <StartStop/>
        <Clear onClick={this.props.onClear}/>
      </div>
    );
  }
});

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
var GenerationDisplay = React.createClass ({
  render: function() {
    return (
      <div className="gDisplay col-xs-8">
        <h4 className="generationText">Generation :
          <span id="count">
            12345
          </span>
        </h4>
      </div>
    );
  }
});

var StartStop = React.createClass({
  onClick : function(e) {

      if($(".startstop").html() ==="start")
        $(".startstop").html("stop");
      else
          $(".startstop").html("start");


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
  },
  render: function() {
    return (
      <div className="btnContainer col-xs-2">
        <button className="startstop" onClick={this.onClick}>
          start
        </button>
       </div>
    );
  }
});

var Clear = React.createClass({
  onClick : function(e) {

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
    this.props.onClick();
  },
  render: function() {
    return (
      <div className="btnContainer col-xs-2">
        <button className="clear transitionFlickrText transitionFlickrBlock" onClick={this.onClick}>
          Clear
        </button>
       </div>
    );
  }
});

var Cells = React.createClass({
  render: function() {

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

    var cells = [];
    var width = document.querySelector("body").offsetWidth;
    var height = document.querySelector("body").offsetHeight;
    var count = Math.floor(width / 10) * Math.floor(height / 10);

    if(document.querySelector(".cells")) {
      document.querySelector(".cells").style.width = width;
      document.querySelector(".cells").style.height = height;
    }

    for(var i = 1; i <= count; i++)
      cells.push(<Cell />);
    return (
      <div className="cells transitionFlickrBlock" id="cells">
        {cells}
      </div>
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
  getClasses: function(str) {
    if(Math.random() > .5)
      return str;
    else
      return str + " dead";
  },
  onClick: function(e){
    $(e.currentTarget).toggleClass("dead");
  },
  render: function() {
    return (
      <div className={this.getClasses("cell")} onClick={this.onClick}></div>
    );
  }
});

ReactDOM.render(<Board />, document.getElementById("app"));
