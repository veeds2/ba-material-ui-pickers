var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DomainPropTypes from '../constants/prop-types';

/* eslint-disable react/sort-comp */

var PickerBase = function (_PureComponent) {
  _inherits(PickerBase, _PureComponent);

  function PickerBase() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PickerBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PickerBase.__proto__ || Object.getPrototypeOf(PickerBase)).call.apply(_ref, [this].concat(args))), _this), _this.getValidDateOrCurrent = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;

      var date = moment(props.value);

      return date.isValid() ? date : moment();
    }, _this.state = {
      date: _this.getValidDateOrCurrent()
    }, _this.getFormat = function () {
      if (_this.props.format || _this.props.labelFunc) {
        return _this.props.format;
      }

      return _this.props.ampm ? _this.default12hFormat : _this.default24hFormat;
    }, _this.handleAccept = function () {
      var dateToReturn = _this.props.returnMoment ? _this.state.date : _this.state.date.toDate();

      _this.props.onChange(dateToReturn);
    }, _this.handleDismiss = function () {
      _this.setState({ date: _this.getValidDateOrCurrent(_this.props) });
    }, _this.handleChange = function (date) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({ date: date }, function () {
        if (isFinish && _this.props.autoOk) {
          _this.handleAccept();
          _this.wrapper.close();
        }
      });
    }, _this.handleTextFieldChange = function (date) {
      _this.setState({ date: date }, _this.handleAccept);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PickerBase, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState({ date: this.getValidDateOrCurrent(nextProps) });
      }
    }
  }]);

  return PickerBase;
}(PureComponent);

PickerBase.propTypes = {
  value: DomainPropTypes.date,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  returnMoment: PropTypes.bool,
  format: PropTypes.string,
  labelFunc: PropTypes.func,
  ampm: PropTypes.bool
};
PickerBase.defaultProps = {
  value: new Date(),
  autoOk: false,
  returnMoment: false,
  labelFunc: undefined,
  format: undefined,
  ampm: true
};
export default PickerBase;