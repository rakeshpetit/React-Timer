var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

  describe('Timer',() => {
    it('should exist',()=> {
      expect(Timer).toExist();
    });

    it('should start timer when started',(done)=> {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountdown(0);
      timer.handleStatusChange('started');
      setTimeout(()=>{
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.count).toBe(1);
        done();
      },1001)
      });

    it('should pause timer when paused',(done)=> {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountdown(10);
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');
      setTimeout(()=>{
        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(10);
        done();
      },1001)
      });

    it('should stop and clear count when stopped',(done)=> {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountdown(10);
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');
      setTimeout(()=>{
        expect(timer.state.timerStatus).toBe('stopped');
        expect(timer.state.count).toBe(0);
        done();
      },1001)
      });
  });
