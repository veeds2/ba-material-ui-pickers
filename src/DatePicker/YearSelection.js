var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import classnames from 'classnames';
import { extendMoment } from 'moment-range';
import { withStyles } from 'material-ui';
import DomainPropTypes from '../constants/prop-types';
import * as defaultUtils from '../utils/utils';

var moment = extendMoment(Moment);

export var YearSelection = function (_PureComponent) {
  _inherits(YearSelection, _PureComponent);

  function YearSelection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, YearSelection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YearSelection.__proto__ || Object.getPrototypeOf(YearSelection)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.scrollToCurrentYear();
    }, _this.onYearSelect = function (year) {
      var _this$props = _this.props,
          date = _this$props.date,
          onChange = _this$props.onChange,
          utils = _this$props.utils;


      var newDate = utils.setYear(date, year);
      onChange(newDate);
    }, _this.scrollToCurrentYear = function () {
      var _this$props2 = _this.props,
          animateYearScrolling = _this$props2.animateYearScrolling,
          classes = _this$props2.classes;

      var currentYearElement = document.getElementsByClassName(classes.selectedYear)[0];

      if (currentYearElement) {
        currentYearElement.scrollIntoView({
          behavior: animateYearScrolling ? 'smooth' : 'auto'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(YearSelection, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          date = _props.date,
          classes = _props.classes,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          utils = _props.utils;

      var currentYear = utils.getYear(date);

      return React.createElement(
        'div',
        { className: classes.container },
        Array.from(moment.range(minDate, maxDate).by('year')).map(function (year) {
          var _classnames;

          var yearNumber = utils.getYear(year);
          var className = classnames(classes.yearItem, (_classnames = {}, _defineProperty(_classnames, classes.selectedYear, yearNumber === currentYear), _defineProperty(_classnames, classes.disabled, disablePast && year.isBefore(moment(), 'year') || disableFuture && year.isAfter(moment(), 'year')), _classnames));

          return React.createElement(
            'div',
            {
              role: 'button',
              key: utils.getYearText(year),
              className: className,
              tabIndex: yearNumber,
              onClick: function onClick() {
                return _this2.onYearSelect(yearNumber);
              },
              onKeyPress: function onKeyPress() {
                return _this2.onYearSelect(yearNumber);
              }
            },
            utils.getYearText(year)
          );
        })
      );
    }
  }]);

  return YearSelection;
}(PureComponent);

YearSelection.propTypes = {
  date: PropTypes.shape({}).isRequired,
  minDate: DomainPropTypes.date.isRequired,
  maxDate: DomainPropTypes.date.isRequired,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool.isRequired,
  disableFuture: PropTypes.bool.isRequired,
  animateYearScrolling: PropTypes.bool,
  utils: PropTypes.object
};
YearSelection.defaultProps = {
  animateYearScrolling: false,
  utils: defaultUtils
};
var styles = function styles(theme) {
  return {
    container: {
      maxHeight: 320,
      overflowY: 'auto',
      justifyContent: 'center'
    },
    yearItem: {
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      color: theme.palette.text.primary
    },
    selectedYear: {
      fontSize: 26,
      margin: '10px 0',
      color: theme.palette.primary[500]
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
};

export default withStyles(styles, { name: 'MuiPickersYearSelection' })(YearSelection);