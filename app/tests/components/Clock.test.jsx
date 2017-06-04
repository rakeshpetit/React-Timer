var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock',() => {
  it('should exist',()=> {
    expect(Clock).toExist();
  });
});

describe('render',() => {
  it('should render clock',()=> {
    var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={65}/>);
    var $el = $(ReactDOM.findDOMNode(clock));
    var actualText = $el.find('.clock-text').text();
    expect(actualText).toBe('01:05');
  });
});

describe('formatSeconds',() => {
  it('should format seconds',()=> {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 645;
    var expected = "10:45";
    var actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
  });

  it('should format single digit Seconds',()=> {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 68;
    var expected = "01:08";
    var actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
  });
});
