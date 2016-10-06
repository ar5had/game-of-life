// Component model
//
// Board
//  Controls
//   StartStop
//   Clear
//  Cells
//   Cell

var Board = React.createClass({
  render: function() {
    return (
      <div className="board" id="board">
        <Cells />
      </div>
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
