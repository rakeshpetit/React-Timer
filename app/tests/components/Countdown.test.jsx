var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown',() => {
  it('should exist',()=> {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown',() => {
    it('should set state to started and countdown',(done)=> {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      },1001)
      });

      it('should not set state to -ve number',(done)=> {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(1);
        setTimeout(()=>{
          expect(countdown.state.count).toBe(0);
          done();
        },3001)
        });

      it('should pause countdown when paused',(done)=> {
          var countdown = TestUtils.renderIntoDocument(<Countdown/>);
          countdown.handleSetCountdown(5);
          countdown.handleStatusChange('paused');
          setTimeout(()=>{
            expect(countdown.state.count).toBe(5);
            expect(countdown.state.countdownStatus).toBe('paused');
            done();
          },1001)
          });
      it('should stop countdown when stopped',()=> {
          var countdown = TestUtils.renderIntoDocument(<Countdown/>);
          countdown.handleSetCountdown(5);
          countdown.handleStatusChange('stopped');
          expect(countdown.state.count).toBe(0);
          expect(countdown.state.countdownStatus).toBe('stopped');
          });


    });


  });
