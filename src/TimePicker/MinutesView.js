var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';
import { MINUTES } from '../constants/clock-types';
import ClockNumber from './ClockNumber';
import * as defaultUtils from '../utils/utils';

var MinutesView = function (_Component) {
  _inherits(MinutesView, _Component);

  function MinutesView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MinutesView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MinutesView.__proto__ || Object.getPrototypeOf(MinutesView)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (minutes, isFinish) {
      var updatedDate = _this.props.date.clone().minutes(minutes);
      _this.props.onChange(updatedDate, isFinish);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MinutesView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          step = _props.step,
          utils = _props.utils;

      var f = utils.formatNumber;

      var value = Math.ceil(date.get('minutes') / step) * step;

      return React.createElement(
        Clock,
        {
          type: MINUTES,
          onChange: this.handleChange,
          value: value,
          minutesStep: step
        },
        React.createElement(ClockNumber, { label: f('00'), visible: 0 % step === 0, selected: value === 0, index: 12 }),
        React.createElement(ClockNumber, { label: f('05'), visible: 5 % step === 0, selected: value === 5, index: 1 }),
        React.createElement(ClockNumber, { label: f('10'), visible: 10 % step === 0, selected: value === 10, index: 2 }),
        React.createElement(ClockNumber, { label: f('15'), visible: 15 % step === 0, selected: value === 15, index: 3 }),
        React.createElement(ClockNumber, { label: f('20'), visible: 20 % step === 0, selected: value === 20, index: 4 }),
        React.createElement(ClockNumber, { label: f('25'), visible: 25 % step === 0, selected: value === 25, index: 5 }),
        React.createElement(ClockNumber, { label: f('30'), visible: 30 % step === 0, selected: value === 30, index: 6 }),
        React.createElement(ClockNumber, { label: f('35'), visible: 35 % step === 0, selected: value === 35, index: 7 }),
        React.createElement(ClockNumber, { label: f('40'), visible: 40 % step === 0, selected: value === 40, index: 8 }),
        React.createElement(ClockNumber, { label: f('45'), visible: 45 % step === 0, selected: value === 45, index: 9 }),
        React.createElement(ClockNumber, { label: f('50'), visible: 50 % step === 0, selected: value === 50, index: 10 }),
        React.createElement(ClockNumber, { label: f('55'), visible: 55 % step === 0, selected: value === 55, index: 11 })
      );
    }
  }]);

  return MinutesView;
}(Component);

MinutesView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  utils: PropTypes.object,
  step: PropTypes.number
};
MinutesView.defaultProps = {
  utils: defaultUtils,
  step: 1
};
export default MinutesView;