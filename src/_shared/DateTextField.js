var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/jsx-no-duplicate-props */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TextField, InputAdornment, IconButton, Icon } from 'material-ui';

import MaskedInput from './MaskedInput';

/* eslint-disable react/sort-comp */

var DateTextField = function (_PureComponent) {
  _inherits(DateTextField, _PureComponent);

  function DateTextField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTextField.__proto__ || Object.getPrototypeOf(DateTextField)).call.apply(_ref, [this].concat(args))), _this), _this.getDisplayDate = function (props) {
      var value = props.value,
          format = props.format,
          invalidLabel = props.invalidLabel,
          labelFunc = props.labelFunc;


      var date = moment(value);

      if (labelFunc) {
        return labelFunc(date, invalidLabel);
      }

      return date.isValid() ? date.format(format) : invalidLabel;
    }, _this.updateState = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      return {
        value: props.value,
        displayValue: _this.getDisplayDate(props),
        error: ''
      };
    }, _this.state = _this.updateState(), _this.handleChange = function (e) {
      var _this$props = _this.props,
          format = _this$props.format,
          invalidDateMessage = _this$props.invalidDateMessage;

      var oldValue = moment(_this.state.value);
      var newValue = moment(e.target.value, format, true);
      var error = newValue.isValid() ? '' : invalidDateMessage;

      _this.setState({
        displayValue: e.target.value,
        value: error ? newValue : oldValue,
        error: error
      }, function () {
        if (!error && newValue.format('LLLL') !== oldValue.format('LLLL')) {
          _this.props.onChange(newValue, true);
        }
      });
    }, _this.handleFocus = function (e) {
      e.stopPropagation();
      e.preventDefault();
      var keyboard = _this.props.keyboard;


      if (keyboard) {
        return;
      }

      e.target.blur();

      _this.openPicker(e);
    }, _this.openPicker = function (e) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          onClick = _this$props2.onClick;


      if (!disabled) {
        onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value) {
        this.setState(this.updateState(nextProps));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          format = _props.format,
          disabled = _props.disabled,
          onClick = _props.onClick,
          invalidLabel = _props.invalidLabel,
          labelFunc = _props.labelFunc,
          keyboard = _props.keyboard,
          value = _props.value,
          mask = _props.mask,
          InputProps = _props.InputProps,
          keyboardIcon = _props.keyboardIcon,
          other = _objectWithoutProperties(_props, ['format', 'disabled', 'onClick', 'invalidLabel', 'labelFunc', 'keyboard', 'value', 'mask', 'InputProps', 'keyboardIcon']);

      var _state = this.state,
          displayValue = _state.displayValue,
          error = _state.error;


      var localInputProps = {
        inputComponent: MaskedInput,
        inputProps: { mask: mask }
      };

      if (keyboard) {
        localInputProps.endAdornment = React.createElement(
          InputAdornment,
          { position: 'end' },
          React.createElement(
            IconButton,
            { onClick: this.openPicker },
            ' ',
            React.createElement(
              Icon,
              null,
              ' ',
              keyboardIcon,
              ' '
            ),
            ' '
          )
        );
      }

      return React.createElement(TextField, _extends({
        readOnly: true,
        onClick: this.handleFocus,
        error: !!error,
        helperText: error,
        onKeyPress: this.handleChange,
        onBlur: function onBlur(e) {
          return e.preventDefault() && e.stopPropagation();
        },
        disabled: disabled,
        value: displayValue
      }, other, {
        onChange: this.handleChange,
        InputProps: _extends({}, localInputProps, InputProps)
      }));
    }
  }]);

  return DateTextField;
}(PureComponent);

DateTextField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  mask: PropTypes.any,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  invalidLabel: PropTypes.string,
  labelFunc: PropTypes.func,
  keyboard: PropTypes.bool,
  InputProps: PropTypes.shape(),
  keyboardIcon: PropTypes.node,
  invalidDateMessage: PropTypes.string
};
DateTextField.defaultProps = {
  disabled: false,
  invalidLabel: 'Unknown',
  value: new Date(),
  labelFunc: undefined,
  format: undefined,
  InputProps: undefined,
  keyboard: false,
  mask: undefined,
  keyboardIcon: 'event',
  invalidDateMessage: 'Invalid Date Format'
};
export default DateTextField;