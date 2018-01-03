var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles, IconButton } from 'material-ui';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
import classnames from 'classnames';
import CalendarHeader from './CalendarHeader';
import DomainPropTypes from '../constants/prop-types';
import * as defaultUtils from '../utils/utils';

var moment = extendMoment(Moment);

export var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentMonth: _this.props.utils.getStartOfMonth(_this.props.date)
    }, _this.onDateSelect = function (day) {
      var date = _this.props.date;

      var updatedDate = day.clone().hours(date.hours()).minutes(date.minutes());

      _this.props.onChange(updatedDate);
    }, _this.handleChangeMonth = function (newMonth) {
      _this.setState({ currentMonth: newMonth });
    }, _this.validateMinMaxDate = function (day) {
      var _this$props = _this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate;

      var startOfDay = function startOfDay(date) {
        return moment(date).startOf('day');
      };

      return minDate && day.isBefore(startOfDay(minDate)) || maxDate && day.isAfter(startOfDay(maxDate));
    }, _this.shouldDisableDate = function (day) {
      var _this$props2 = _this.props,
          disablePast = _this$props2.disablePast,
          disableFuture = _this$props2.disableFuture,
          shouldDisableDate = _this$props2.shouldDisableDate;

      return disableFuture && day.isAfter(moment(), 'day') || disablePast && day.isBefore(moment(), 'day') || _this.validateMinMaxDate(day) || shouldDisableDate(day);
    }, _this.renderWeeks = function () {
      var utils = _this.props.utils;
      var currentMonth = _this.state.currentMonth;

      var weeks = utils.getWeekArray(currentMonth);

      return weeks.map(function (week) {
        return React.createElement(
          'div',
          { key: 'week-' + week[0].toString(), className: _this.props.classes.week },
          _this.renderDays(week)
        );
      });
    }, _this.renderDays = function (week) {
      var _this$props3 = _this.props,
          classes = _this$props3.classes,
          date = _this$props3.date,
          renderDay = _this$props3.renderDay,
          utils = _this$props3.utils;


      var selectedDate = date.clone().startOf('day');
      var currentMonthNumber = utils.getMonthNumber(_this.state.currentMonth);
      var now = moment();

      return week.map(function (day) {
        var _classnames2;

        // should be applied both for wrapper and button
        var disabledClass = classnames(_defineProperty({}, classes.disabled, _this.shouldDisableDate(day)));
        var dayInCurrentMonth = utils.getMonthNumber(day) === currentMonthNumber;
        var isHidden = !dayInCurrentMonth;

        var dayClass = classnames(classes.day, disabledClass, (_classnames2 = {}, _defineProperty(_classnames2, classes.hidden, isHidden), _defineProperty(_classnames2, classes.current, day.isSame(now, 'day')), _defineProperty(_classnames2, classes.selected, selectedDate.isSame(day, 'day')), _classnames2));

        var dayComponent = React.createElement(
          IconButton,
          { className: dayClass, tabIndex: isHidden ? -1 : 0 },
          React.createElement(
            'span',
            null,
            ' ',
            utils.getDayText(day),
            ' '
          )
        );

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, dayInCurrentMonth, dayComponent);
        }

        return React.createElement(
          'div',
          {
            key: day.toString(),
            onClick: function onClick() {
              return dayInCurrentMonth && _this.onDateSelect(day);
            },
            onKeyPress: function onKeyPress() {
              return dayInCurrentMonth && _this.onDateSelect(day);
            },
            className: disabledClass,
            role: 'presentation'
          },
          dayComponent
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'render',
    value: function render() {
      var currentMonth = this.state.currentMonth;
      var _props = this.props,
          classes = _props.classes,
          utils = _props.utils;


      return React.createElement(
        Fragment,
        null,
        React.createElement(CalendarHeader, {
          currentMonth: currentMonth,
          onMonthChange: this.handleChangeMonth,
          leftArrowIcon: this.props.leftArrowIcon,
          rightArrowIcon: this.props.rightArrowIcon,
          utils: utils
        }),
        React.createElement(
          'div',
          { className: classes.calendar },
          this.renderWeeks()
        )
      );
    }
  }]);

  return Calendar;
}(Component);

Calendar.propTypes = {
  date: PropTypes.object.isRequired,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func,
  utils: PropTypes.object,
  shouldDisableDate: PropTypes.func
};
Calendar.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disablePast: false,
  disableFuture: false,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  utils: defaultUtils,
  shouldDisableDate: function shouldDisableDate() {
    return false;
  }
};
var styles = function styles(theme) {
  return {
    calendar: {
      height: 36 * 6,
      marginTop: theme.spacing.unit * 1.5
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: '0 2px',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium
    },
    current: {
      color: theme.palette.primary[500],
      fontWeight: 600
    },
    selected: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary[500],
      fontWeight: theme.typography.fontWeightMedium
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};

export default withStyles(styles, { name: 'MuiPickersCalendar' })(Calendar);