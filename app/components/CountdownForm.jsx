var React = require('react');
var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var strSec = this.refs.seconds.value;
    if(strSec.match(/^[0-9]*$/)){
      this.refs.seconds.value='';
      this.props.onSetCountdown(parseInt(strSec,10));
    }
  },
  render: function(){
    return(
      <div>
      <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
        <input type="text" ref="seconds" placeholder="Time in Seconds"/>
        <button className="button expanded">Start</button>
      </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
