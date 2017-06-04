var React = require('react');
var Clock = require('Clock');
var Countdown = (props) => {
  return(
    <div>
      <Clock totalSeconds={143}/>
    </div>

  )
}

module.exports = Countdown;
