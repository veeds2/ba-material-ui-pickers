var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import ModalWrapper from '../wrappers/ModalWrapper';
import DatePicker from './DatePicker';
import DomainPropTypes from '../constants/prop-types';
import PickerBase from '../_shared/PickerBase';
import * as defaultUtils from '../utils/utils';

var DatePickerWrapper = function (_PickerBase) {
  _inherits(DatePickerWrapper, _PickerBase);

  function DatePickerWrapper() {
    _classCallCheck(this, DatePickerWrapper);

    return _possibleConstructorReturn(this, (DatePickerWrapper.__proto__ || Object.getPrototypeOf(DatePickerWrapper)).apply(this, arguments));
  }

  _createClass(DatePickerWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var date = this.state.date;

      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          onChange = _props.onChange,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          animateYearScrolling = _props.animateYearScrolling,
          openToYearSelection = _props.openToYearSelection,
          returnMoment = _props.returnMoment,
          invalidLabel = _props.invalidLabel,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          renderDay = _props.renderDay,
          labelFunc = _props.labelFunc,
          utils = _props.utils,
          shouldDisableDate = _props.shouldDisableDate,
          other = _objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'minDate', 'maxDate', 'onChange', 'disablePast', 'disableFuture', 'animateYearScrolling', 'openToYearSelection', 'returnMoment', 'invalidLabel', 'leftArrowIcon', 'rightArrowIcon', 'renderDay', 'labelFunc', 'utils', 'shouldDisableDate']);

      return React.createElement(
        ModalWrapper,
        _extends({
          ref: function ref(node) {
            _this2.wrapper = node;
          },
          value: value,
          format: format,
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          invalidLabel: invalidLabel,
          labelFunc: labelFunc
        }, other),
        React.createElement(DatePicker, {
          date: date,
          onChange: this.handleChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          animateYearScrolling: animateYearScrolling,
          openToYearSelection: openToYearSelection,
          minDate: minDate,
          maxDate: maxDate,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay,
          utils: utils,
          shouldDisableDate: shouldDisableDate
        })
      );
    }
  }]);

  return DatePickerWrapper;
}(PickerBase);

DatePickerWrapper.propTypes = {
  /* Datepicker value */
  value: DomainPropTypes.date,
  /* Min selectable date */
  minDate: DomainPropTypes.date,
  /* Max selectable date */
  maxDate: DomainPropTypes.date,
  /* Moment format string for input */
  format: PropTypes.string,
  /* Callback firing when date accepted */
  onChange: PropTypes.func.isRequired,
  /* Auto accept date on selection */
  autoOk: PropTypes.bool,
  /* Disable past dates */
  disablePast: PropTypes.bool,
  /* Disable future dates */
  disableFuture: PropTypes.bool,
  /* To animate scrolling to current year (with scrollIntoView) */
  animateYearScrolling: PropTypes.bool,
  /* Open datepicker from year selection */
  openToYearSelection: PropTypes.bool,
  /* Return moment object in onChange event */
  returnMoment: PropTypes.bool,
  /* Displayed string if date can`t be parsed (or null) */
  invalidLabel: PropTypes.string,
  /* Allow to specify dynamic label for text field labelFunc(date, invalidLabel) */
  labelFunc: PropTypes.func,
  /* Left arrow icon */
  leftArrowIcon: PropTypes.node,
  /* Right arrow icon */
  rightArrowIcon: PropTypes.node,
  /* Custom renderer for day renderDay(date, selectedDate, dayInCurrentMonth) */
  renderDay: PropTypes.func,
  /* Date displaying utils */
  utils: PropTypes.object,
  /* Disable specific date hook */
  shouldDisableDate: PropTypes.func
};
DatePickerWrapper.defaultProps = {
  value: new Date(),
  format: 'MMMM Do',
  autoOk: false,
  returnMoment: true,
  minDate: undefined,
  maxDate: undefined,
  disablePast: undefined,
  disableFuture: undefined,
  animateYearScrolling: undefined,
  openToYearSelection: undefined,
  invalidLabel: undefined,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  labelFunc: undefined,
  utils: defaultUtils,
  shouldDisableDate: undefined
};
export default DatePickerWrapper;