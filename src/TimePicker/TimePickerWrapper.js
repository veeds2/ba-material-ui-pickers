var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ModalWrapper from '../wrappers/ModalWrapper';
import TimePicker from './TimePicker';
import PickerBase from '../_shared/PickerBase';
import * as defaultUtils from '../utils/utils';

var TimePickerWrapper = function (_PickerBase) {
  _inherits(TimePickerWrapper, _PickerBase);

  function TimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimePickerWrapper.__proto__ || Object.getPrototypeOf(TimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'hh:mm A', _this.default24hFormat = 'HH:mm', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimePickerWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var coeff = 1000 * 60 * this.props.minutesStep;
      var date = this.state.date;

      var rounded = moment(Math.ceil(date.valueOf() / coeff) * coeff);
      this.setState({ date: rounded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var date = this.state.date;

      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          onChange = _props.onChange,
          returnMoment = _props.returnMoment,
          invalidLabel = _props.invalidLabel,
          utils = _props.utils,
          ampm = _props.ampm,
          minutesStep = _props.minutesStep,
          other = _objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'onChange', 'returnMoment', 'invalidLabel', 'utils', 'ampm', 'minutesStep']);

      return React.createElement(
        ModalWrapper,
        _extends({
          ref: function ref(node) {
            _this2.wrapper = node;
          },
          value: value,
          format: this.getFormat(),
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          invalidLabel: invalidLabel
        }, other),
        React.createElement(TimePicker, {
          date: date,
          onChange: this.handleChange,
          utils: utils,
          ampm: ampm,
          minutesStep: minutesStep
        })
      );
    }
  }]);

  return TimePickerWrapper;
}(PickerBase);

TimePickerWrapper.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  returnMoment: PropTypes.bool,
  invalidLabel: PropTypes.string,
  utils: PropTypes.object,
  ampm: PropTypes.bool,
  minutesStep: PropTypes.number
};
TimePickerWrapper.defaultProps = {
  value: new Date(),
  format: undefined,
  autoOk: false,
  returnMoment: true,
  invalidLabel: undefined,
  utils: defaultUtils,
  ampm: true,
  minutesStep: 1
};
export default TimePickerWrapper;