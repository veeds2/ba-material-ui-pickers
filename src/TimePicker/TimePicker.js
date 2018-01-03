var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import PickerToolbar from '../_shared/PickerToolbar';
import ToolbarButton from '../_shared/ToolbarButton';
import HourView from './HourView';
import MinutesView from './MinutesView';
import { convertToMeridiem } from '../utils/time-utils';
import * as defaultUtils from '../utils/utils';

export var TimePicker = function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isHourViewShown: true,
      meridiemMode: _this.props.date.hours() >= 12 ? 'pm' : 'am'
    }, _this.setMeridiemMode = function (mode) {
      return function () {
        _this.setState({ meridiemMode: mode }, function () {
          return _this.handleChange(false)(_this.props.date, false);
        });
      };
    }, _this.handleChange = function (openMinutes) {
      return function (time, isFinish) {
        var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode, _this.props.ampm);

        if (isFinish) {
          if (!openMinutes) {
            _this.props.onChange(withMeridiem, isFinish);
            return;
          }

          _this.openMinutesView();
        }

        _this.props.onChange(withMeridiem, false);
      };
    }, _this.openMinutesView = function () {
      _this.setState({ isHourViewShown: false });
    }, _this.openHourView = function () {
      _this.setState({ isHourViewShown: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          date = _props.date,
          utils = _props.utils,
          ampm = _props.ampm,
          minutesStep = _props.minutesStep;
      var _state = this.state,
          isHourViewShown = _state.isHourViewShown,
          meridiemMode = _state.meridiemMode;


      var rtl = theme.direction === 'rtl';
      var hourMinuteClassName = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;

      return React.createElement(
        Fragment,
        null,
        React.createElement(
          PickerToolbar,
          { className: classes.toolbar },
          React.createElement(
            'div',
            { className: hourMinuteClassName },
            React.createElement(ToolbarButton, {
              type: 'display3',
              onClick: this.openHourView,
              selected: isHourViewShown,
              label: utils.getHourText(date, ampm)
            }),
            React.createElement(ToolbarButton, {
              type: 'display3',
              label: ':',
              selected: false,
              className: classes.separator
            }),
            React.createElement(ToolbarButton, {
              type: 'display3',
              onClick: this.openMinutesView,
              selected: !isHourViewShown,
              label: utils.getMinuteText(date)
            })
          ),
          ampm && React.createElement(
            'div',
            { className: classes.ampmSelection },
            React.createElement(ToolbarButton, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'am',
              type: 'subheading',
              label: utils.getMeridiemText('am'),
              onClick: this.setMeridiemMode('am')
            }),
            React.createElement(ToolbarButton, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'pm',
              type: 'subheading',
              label: utils.getMeridiemText('pm'),
              onClick: this.setMeridiemMode('pm')
            })
          )
        ),
        this.props.children,
        isHourViewShown ? React.createElement(HourView, {
          date: date,
          meridiemMode: meridiemMode,
          onChange: this.handleChange(true),
          utils: utils,
          ampm: ampm
        }) : React.createElement(MinutesView, {
          date: date,
          onChange: this.handleChange(false),
          utils: utils,
          step: minutesStep
        })
      );
    }
  }]);

  return TimePicker;
}(Component);

TimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.node,
  utils: PropTypes.object,
  ampm: PropTypes.bool,
  minutesStep: PropTypes.number
};
TimePicker.defaultProps = {
  children: null,
  utils: defaultUtils,
  ampm: true,
  minutesStep: 1
};
var styles = function styles() {
  return {
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 50
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    ampmSelection: {
      marginLeft: 20,
      marginRight: -20
    },
    ampmLabel: {
      fontSize: 18
    },
    hourMinuteLabel: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    hourMinuteLabelReverse: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flexDirection: 'row-reverse'
    }
  };
};

export default withStyles(styles, { withTheme: true, name: 'MuiPickersTimePicker' })(TimePicker);