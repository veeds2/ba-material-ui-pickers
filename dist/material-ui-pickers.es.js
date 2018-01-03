import React, { Component, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button, Dialog, DialogActions, DialogContent, Icon, IconButton, InputAdornment, Paper, Tab, Tabs, TextField, Toolbar, Typography, withStyles, withTheme } from 'material-ui';
import moment from 'moment';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var dialogWidth = 310;
var styles = {
  dialogRoot: {
    minWidth: dialogWidth
  },
  dialog: {
    width: dialogWidth,

    '&:first-child': {
      padding: 0
    }
  }
};

var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      dialogContentClassName = _ref.dialogContentClassName,
      other = objectWithoutProperties(_ref, ['children', 'classes', 'onAccept', 'onDismiss', 'okLabel', 'cancelLabel', 'dialogContentClassName']);
  return React.createElement(
    Dialog,
    _extends({ onClose: onDismiss, classes: { paper: classes.dialogRoot } }, other),
    React.createElement(
      DialogContent,
      { className: classnames(classes.dialog, dialogContentClassName) },
      children
    ),
    React.createElement(
      DialogActions,
      null,
      React.createElement(
        Button,
        {
          color: 'primary',
          onClick: onDismiss,
          'aria-label': cancelLabel
        },
        cancelLabel
      ),
      React.createElement(
        Button,
        {
          color: 'primary',
          onClick: onAccept,
          'aria-label': okLabel
        },
        okLabel
      )
    )
  );
};

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dialogContentClassName: PropTypes.string,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string
};

ModalDialog.defaultProps = {
  dialogContentClassName: '',
  okLabel: 'OK',
  cancelLabel: 'Cancel'
};

var ModalDialog$1 = withStyles(styles, { name: 'MuiPickersModal' })(ModalDialog);

var PickerTitle = function PickerTitle(props) {
  var children = props.children,
      className = props.className,
      classes = props.classes,
      text = props.text,
      other = objectWithoutProperties(props, ['children', 'className', 'classes', 'text']);


  return React.createElement(
    Toolbar,
    _extends({ className: classnames(classes.toolbar, className) }, other),
    React.createElement(
      Typography,
      { type: 'title', color: 'inherit' },
      text
    )
  );
};

PickerTitle.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

PickerTitle.defaultProps = {
  className: ''
};

var styles$1 = function styles(theme) {
  return {
    toolbar: {
      justifyContent: 'center',
      color: '#fff',
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary[400] : theme.palette.background.default
    }
  };
};

var PickerTitle$1 = withStyles(styles$1, { name: 'MuiPickersTitle' })(PickerTitle);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactTextMask = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t(React);}(commonjsGlobal,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t), o.loaded=!0, o.exports}var r={};return t.m=e, t.c=r, t.p="", t(0)}([function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(t,"__esModule",{value:!0}), t.conformToMask=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1, n.configurable=!0, "value"in n&&(n.writable=!0), Object.defineProperty(e,n.key,n);}}return function(t,r,n){return r&&e(t.prototype,r), n&&e(t,n), t}}(),s=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(s).default}});var f=r(11),c=n(f),d=r(9),p=n(d),h=r(5),v=n(h),y=function(e){function t(){return o(this,t), i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e), l(t,[{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0, v.default)(u({inputElement:this.inputElement},e)), this.textMaskInputElement.update(t);}},{key:"componentDidMount",value:function(){this.initTextMask();}},{key:"componentDidUpdate",value:function(){this.initTextMask();}},{key:"render",value:function(){var e=this,t=u({},this.props);return delete t.mask, delete t.guide, delete t.pipe, delete t.placeholderChar, delete t.keepCharPositions, delete t.value, delete t.onChange, delete t.showMask, c.default.createElement("input",u({},t,{onInput:function(t){return e.onChange(t)},defaultValue:this.props.value,ref:function(t){return e.inputElement=t}}))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(), "function"==typeof this.props.onChange&&this.props.onChange(e);}}]), t}(c.default.Component);t.default=y, y.propTypes={mask:p.default.oneOfType([p.default.array,p.default.func,p.default.bool,p.default.shape({mask:p.default.oneOfType([p.default.array,p.default.func]),pipe:p.default.func})]).isRequired,guide:p.default.bool,value:p.default.oneOfType([p.default.string,p.default.number]),pipe:p.default.func,placeholderChar:p.default.string,keepCharPositions:p.default.bool,showMask:p.default.bool};},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}), t.placeholderChar="_";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.guide,u=void 0===n||n,l=r.previousConformedValue,s=void 0===l?a:l,f=r.placeholderChar,c=void 0===f?i.placeholderChar:f,d=r.placeholder,p=void 0===d?(0, o.convertMaskToPlaceholder)(t,c):d,h=r.currentCaretPosition,v=r.keepCharPositions,y=u===!1&&void 0!==s,m=e.length,g=s.length,b=p.length,C=t.length,k=m-g,O=k>0,P=h+(O?-k:0),x=P+Math.abs(k);if(v===!0&&!O){for(var T=a,_=P;_<x;_++)p[_]===c&&(T+=c);e=e.slice(0,P)+T+e.slice(P,m);}for(var w=e.split(a).map(function(e,t){return{char:e,isNew:t>=P&&t<x}}),M=m-1;M>=0;M--){var j=w[M].char;if(j!==c){var S=M>=P&&g===C;j===p[S?M-k:M]&&w.splice(M,1);}}var E=a,R=!1;e:for(var V=0;V<b;V++){var N=p[V];if(N===c){if(w.length>0)for(;w.length>0;){var I=w.shift(),A=I.char,q=I.isNew;if(A===c&&y!==!0){E+=c;continue e}if(t[V].test(A)){if(v===!0&&q!==!1&&s!==a&&u!==!1&&O){for(var D=w.length,F=null,L=0;L<D;L++){var J=w[L];if(J.char!==c&&J.isNew===!1)break;if(J.char===c){F=L;break}}null!==F?(E+=A, w.splice(F,1)):V--;}else E+=A;continue e}R=!0;}y===!1&&(E+=p.substr(V,b));break}E+=N;}if(y&&O===!1){for(var U=null,W=0;W<E.length;W++)p[W]===c&&(U=W);E=null!==U?E.substr(0,U+1):a;}return{conformedValue:E,meta:{someCharsRejected:R}}}Object.defineProperty(t,"__esModule",{value:!0}), t.default=n;var o=r(3),i=r(1),a="";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var t=[],r=void 0;r=e.indexOf(s), r!==-1;)t.push(r), e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}), t.convertMaskToPlaceholder=n, t.isString=o, t.isNumber=i, t.processCaretTraps=a;var u=r(1),l=[],s="[]";},function(e,t){function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,c=e.placeholderChar,d=e.placeholder,p=e.indexesOfPipedChars,h=void 0===p?n:p,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===l)return 0;var m=f.length,g=r.length,b=d.length,C=s.length,k=m-g,O=k>0,P=0===g,x=k>1&&!O&&!P;if(x)return l;var T=O&&(r===s||s===d),_=0,w=void 0,M=void 0;if(T)_=l-k;else{var j=s.toLowerCase(),S=f.toLowerCase(),E=S.substr(0,l).split(o),R=E.filter(function(e){return j.indexOf(e)!==-1});M=R[R.length-1];var V=a.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,N=d.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,I=N!==V,A=void 0!==a[R.length-1]&&void 0!==d[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==d[R.length-1]&&a[R.length-1]===d[R.length-2];!O&&(I||A)&&V>0&&d.indexOf(M)>-1&&void 0!==f[l]&&(w=!0, M=f[l]);for(var q=h.map(function(e){return j[e]}),D=q.filter(function(e){return e===M}).length,F=R.filter(function(e){return e===M}).length,L=d.substr(0,d.indexOf(c)).split(o).filter(function(e,t){return e===M&&f[t]!==e}).length,J=L+F+D+(w?1:0),U=0,W=0;W<C;W++){var B=j[W];if(_=W+1, B===M&&U++, U>=J)break}}if(O){for(var H=_,Y=_;Y<=b;Y++)if(d[Y]===c&&(H=Y), d[Y]===c||y.indexOf(Y)!==-1||Y===b)return H}else if(w){for(var z=_-1;z>=0;z--)if(s[z]===M||y.indexOf(z)!==-1||0===z)return z}else for(var G=_;G>=0;G--)if(d[G-1]===c||y.indexOf(G)!==-1||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}), t.default=r;var n=[],o="";},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,c=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,O=void 0!==k&&k,P=n.showMask,x=void 0!==P&&P;if("undefined"==typeof r&&(r=o.value), r!==t.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===g&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe, s=s.mask);var T=void 0,_=void 0;if(s instanceof Array&&(T=(0, p.convertMaskToPlaceholder)(s,C)), s!==!1){var w=a(r),M=o.selectionEnd,j=t.previousConformedValue,S=t.previousPlaceholder,E=void 0;if(("undefined"==typeof s?"undefined":l(s))===v){if(_=s(w,{currentCaretPosition:M,previousConformedValue:j,placeholderChar:C}), _===!1)return;var R=(0, p.processCaretTraps)(_),V=R.maskWithoutCaretTraps,N=R.indexes;_=V, E=N, T=(0, p.convertMaskToPlaceholder)(_,C);}else _=s;var I={previousConformedValue:j,guide:c,placeholderChar:C,pipe:m,placeholder:T,currentCaretPosition:M,keepCharPositions:O},A=(0, d.default)(w,_,I),q=A.conformedValue,D=("undefined"==typeof m?"undefined":l(m))===v,F={};D&&(F=m(q,u({rawValue:w},I)), F===!1?F={value:j,rejected:!0}:(0, p.isString)(F)&&(F={value:F}));var L=D?F.value:q,J=(0, f.default)({previousConformedValue:j,previousPlaceholder:S,conformedValue:L,placeholder:T,rawValue:w,currentCaretPosition:M,placeholderChar:C,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:E}),U=L===T&&0===J,W=x?T:y,B=U?W:L;t.previousConformedValue=B, t.previousPlaceholder=T, o.value!==B&&(o.value=B, i(o,J));}}}}}function i(e,t){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(t,t,m)},0):e.setSelectionRange(t,t,m));}function a(e){if((0, p.isString)(e))return e;if((0, p.isNumber)(e))return String(e);if(void 0===e||null===e)return y;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var s=r(4),f=n(s),c=r(2),d=n(c),p=r(3),h=r(1),v="function",y="",m="none",g="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout;},function(e,t){function r(e){return function(){return e}}var n=function(){};n.thatReturns=r, n.thatReturnsFalse=r(!1), n.thatReturnsTrue=r(!0), n.thatReturnsNull=r(null), n.thatReturnsThis=function(){return this}, n.thatReturnsArgument=function(e){return e}, e.exports=n;},function(e,t,r){function n(e,t,r,n,i,a,u,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,l],c=0;s=new Error(t.replace(/%s/g,function(){return f[c++]})), s.name="Invariant Violation";}throw s.framesToPop=1, s}}e.exports=n;},function(e,t,r){var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n, r.PropTypes=r, r};},function(e,t,r){e.exports=r(8)();},function(e,t){var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r;},function(t,r){t.exports=e;}])});
});

var MaskedInput$1 = unwrapExports(reactTextMask);
var reactTextMask_1 = reactTextMask.reactTextMask;

var Input = function (_PureComponent) {
  inherits(Input, _PureComponent);

  function Input() {
    classCallCheck(this, Input);
    return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  createClass(Input, [{
    key: 'render',
    value: function render() {
      return this.props.mask ? React.createElement(MaskedInput$1, this.props) : React.createElement('input', this.props);
    }
  }]);
  return Input;
}(PureComponent);

Input.propTypes = {
  mask: PropTypes.any
};
Input.defaultProps = {
  mask: undefined
};

/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/sort-comp */

var DateTextField = function (_PureComponent) {
  inherits(DateTextField, _PureComponent);

  function DateTextField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DateTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DateTextField.__proto__ || Object.getPrototypeOf(DateTextField)).call.apply(_ref, [this].concat(args))), _this), _this.getDisplayDate = function (props) {
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
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DateTextField, [{
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
          other = objectWithoutProperties(_props, ['format', 'disabled', 'onClick', 'invalidLabel', 'labelFunc', 'keyboard', 'value', 'mask', 'InputProps', 'keyboardIcon']);
      var _state = this.state,
          displayValue = _state.displayValue,
          error = _state.error;


      var localInputProps = {
        inputComponent: Input,
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

var date = PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]);

var DomainPropTypes = {
  date: date
};

var ModalWrapper = function (_PureComponent) {
  inherits(ModalWrapper, _PureComponent);

  function ModalWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ModalWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.open = function () {
      _this.setState({ open: true });
    }, _this.close = function () {
      _this.setState({ open: false });
    }, _this.handleAccept = function () {
      _this.close();
      if (_this.props.onAccept) {
        _this.props.onAccept();
      }
    }, _this.handleDismiss = function () {
      _this.close();
      if (_this.props.onDismiss) {
        _this.props.onDismiss();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ModalWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          children = _props.children,
          dialogContentClassName = _props.dialogContentClassName,
          onAccept = _props.onAccept,
          onDismiss = _props.onDismiss,
          invalidLabel = _props.invalidLabel,
          labelFunc = _props.labelFunc,
          okLabel = _props.okLabel,
          cancelLabel = _props.cancelLabel,
          title = _props.title,
          other = objectWithoutProperties(_props, ['value', 'format', 'children', 'dialogContentClassName', 'onAccept', 'onDismiss', 'invalidLabel', 'labelFunc', 'okLabel', 'cancelLabel', 'title']);


      return React.createElement(
        'div',
        null,
        React.createElement(DateTextField, _extends({
          value: value,
          format: format,
          onClick: this.open
          // onFocus={this.togglePicker} <- Currently not properly works with .blur() on TextField
          , invalidLabel: invalidLabel,
          labelFunc: labelFunc
        }, other)),
        React.createElement(
          ModalDialog$1,
          {
            open: this.state.open,
            onAccept: this.handleAccept,
            onDismiss: this.handleDismiss,
            dialogContentClassName: dialogContentClassName,
            okLabel: okLabel,
            cancelLabel: cancelLabel
          },
          title && React.createElement(PickerTitle$1, { text: title }),
          children
        )
      );
    }
  }]);
  return ModalWrapper;
}(PureComponent);

ModalWrapper.propTypes = {
  value: DomainPropTypes.date,
  children: PropTypes.node.isRequired,
  format: PropTypes.string,
  onAccept: PropTypes.func,
  onDismiss: PropTypes.func,
  dialogContentClassName: PropTypes.string,
  invalidLabel: PropTypes.string,
  labelFunc: PropTypes.func,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string
};
ModalWrapper.defaultProps = {
  dialogContentClassName: '',
  invalidLabel: undefined,
  value: new Date(),
  labelFunc: undefined,
  okLabel: undefined,
  cancelLabel: undefined,
  format: undefined,
  onAccept: undefined,
  onDismiss: undefined,
  title: undefined
};

var momentRange = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory(moment);
})(commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16)() ? Symbol : __webpack_require__(18);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRange = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.extendMoment = extendMoment;

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _es6Symbol = __webpack_require__(0);

var _es6Symbol2 = _interopRequireDefault(_es6Symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//-----------------------------------------------------------------------------
// Constants
//-----------------------------------------------------------------------------

var INTERVALS = {
  year: true,
  quarter: true,
  month: true,
  week: true,
  day: true,
  hour: true,
  minute: true,
  second: true
};

//-----------------------------------------------------------------------------
// Date Ranges
//-----------------------------------------------------------------------------

var DateRange = exports.DateRange = function () {
  function DateRange(start, end) {
    _classCallCheck(this, DateRange);

    var s = start;
    var e = end;

    if (arguments.length === 1 || end === undefined) {
      if ((typeof start === 'undefined' ? 'undefined' : _typeof(start)) === 'object' && start.length === 2) {
        var _start = _slicedToArray(start, 2);

        s = _start[0];
        e = _start[1];
      } else if (typeof start === 'string') {
        var _isoSplit = isoSplit(start);

        var _isoSplit2 = _slicedToArray(_isoSplit, 2);

        s = _isoSplit2[0];
        e = _isoSplit2[1];
      }
    }

    this.start = s || s === 0 ? (0, _moment2.default)(s) : (0, _moment2.default)(-8640000000000000);
    this.end = e || e === 0 ? (0, _moment2.default)(e) : (0, _moment2.default)(8640000000000000);
  }

  _createClass(DateRange, [{
    key: 'adjacent',
    value: function adjacent(other) {
      var sameStartEnd = this.start.isSame(other.end);
      var sameEndStart = this.end.isSame(other.start);

      return sameStartEnd && other.start.valueOf() <= this.start.valueOf() || sameEndStart && other.end.valueOf() >= this.end.valueOf();
    }
  }, {
    key: 'add',
    value: function add(other) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { adjacent: false };

      if (this.overlaps(other, options)) {
        return new this.constructor(_moment2.default.min(this.start, other.start), _moment2.default.max(this.end, other.end));
      }

      return null;
    }
  }, {
    key: 'by',
    value: function by(interval) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false, step: 1 };

      var range = this;

      return _defineProperty({}, _es6Symbol2.default.iterator, function () {
        var exclusive = options.exclusive || false;
        var step = options.step || 1;
        var diff = Math.abs(range.start.diff(range.end, interval)) / step;
        var iteration = 0;

        return {
          next: function next() {
            var current = range.start.clone().add(iteration * step, interval);
            var done = exclusive ? !(iteration < diff) : !(iteration <= diff);

            iteration++;

            return {
              done: done,
              value: done ? undefined : current
            };
          }
        };
      });
    }
  }, {
    key: 'byRange',
    value: function byRange(interval) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false, step: 1 };

      var range = this;
      var step = options.step || 1;
      var diff = this.valueOf() / interval.valueOf() / step;
      var exclusive = options.exclusive || false;
      var unit = Math.floor(diff);
      var iteration = 0;

      return _defineProperty({}, _es6Symbol2.default.iterator, function () {
        if (unit === Infinity) {
          return { done: true };
        }

        return {
          next: function next() {
            var current = (0, _moment2.default)(range.start.valueOf() + interval.valueOf() * iteration * step);
            var done = unit === diff && exclusive ? !(iteration < unit) : !(iteration <= unit);

            iteration++;

            return {
              done: done,
              value: done ? undefined : current
            };
          }
        };
      });
    }
  }, {
    key: 'center',
    value: function center() {
      var center = this.start.valueOf() + this.diff() / 2;

      return (0, _moment2.default)(center);
    }
  }, {
    key: 'clone',
    value: function clone() {
      return new this.constructor(this.start, this.end);
    }
  }, {
    key: 'contains',
    value: function contains(other) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false };

      var start = this.start.valueOf();
      var end = this.end.valueOf();
      var oStart = other.valueOf();
      var oEnd = other.valueOf();

      if (other instanceof DateRange) {
        oStart = other.start.valueOf();
        oEnd = other.end.valueOf();
      }

      var startInRange = start < oStart || start <= oStart && !options.exclusive;
      var endInRange = end > oEnd || end >= oEnd && !options.exclusive;

      return startInRange && endInRange;
    }
  }, {
    key: 'diff',
    value: function diff(unit, rounded) {
      return this.end.diff(this.start, unit, rounded);
    }
  }, {
    key: 'duration',
    value: function duration(unit, rounded) {
      return this.diff(unit, rounded);
    }
  }, {
    key: 'intersect',
    value: function intersect(other) {
      var start = this.start.valueOf();
      var end = this.end.valueOf();
      var oStart = other.start.valueOf();
      var oEnd = other.end.valueOf();

      if (start <= oStart && oStart < end && end < oEnd) {
        return new this.constructor(oStart, end);
      } else if (oStart < start && start < oEnd && oEnd <= end) {
        return new this.constructor(start, oEnd);
      } else if (oStart < start && start <= end && end < oEnd) {
        return this;
      } else if (start <= oStart && oStart <= oEnd && oEnd <= end) {
        return other;
      }

      return null;
    }
  }, {
    key: 'isEqual',
    value: function isEqual(other) {
      return this.start.isSame(other.start) && this.end.isSame(other.end);
    }
  }, {
    key: 'isSame',
    value: function isSame(other) {
      return this.isEqual(other);
    }
  }, {
    key: 'overlaps',
    value: function overlaps(other) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { adjacent: false };

      var intersect = this.intersect(other) !== null;

      if (options.adjacent && !intersect) {
        return this.adjacent(other);
      }

      return intersect;
    }
  }, {
    key: 'reverseBy',
    value: function reverseBy(interval) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false, step: 1 };

      var range = this;

      return _defineProperty({}, _es6Symbol2.default.iterator, function () {
        var exclusive = options.exclusive || false;
        var step = options.step || 1;
        var diff = Math.abs(range.start.diff(range.end, interval)) / step;
        var iteration = 0;

        return {
          next: function next() {
            var current = range.end.clone().subtract(iteration * step, interval);
            var done = exclusive ? !(iteration < diff) : !(iteration <= diff);

            iteration++;

            return {
              done: done,
              value: done ? undefined : current
            };
          }
        };
      });
    }
  }, {
    key: 'reverseByRange',
    value: function reverseByRange(interval) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exclusive: false, step: 1 };

      var range = this;
      var step = options.step || 1;
      var diff = this.valueOf() / interval.valueOf() / step;
      var exclusive = options.exclusive || false;
      var unit = Math.floor(diff);
      var iteration = 0;

      return _defineProperty({}, _es6Symbol2.default.iterator, function () {
        if (unit === Infinity) {
          return { done: true };
        }

        return {
          next: function next() {
            var current = (0, _moment2.default)(range.end.valueOf() - interval.valueOf() * iteration * step);
            var done = unit === diff && exclusive ? !(iteration < unit) : !(iteration <= unit);

            iteration++;

            return {
              done: done,
              value: done ? undefined : current
            };
          }
        };
      });
    }
  }, {
    key: 'subtract',
    value: function subtract(other) {
      var start = this.start.valueOf();
      var end = this.end.valueOf();
      var oStart = other.start.valueOf();
      var oEnd = other.end.valueOf();

      if (this.intersect(other) === null) {
        return [this];
      } else if (oStart <= start && start < end && end <= oEnd) {
        return [];
      } else if (oStart <= start && start < oEnd && oEnd < end) {
        return [new this.constructor(oEnd, end)];
      } else if (start < oStart && oStart < end && end <= oEnd) {
        return [new this.constructor(start, oStart)];
      } else if (start < oStart && oStart < oEnd && oEnd < end) {
        return [new this.constructor(start, oStart), new this.constructor(oEnd, end)];
      } else if (start < oStart && oStart < end && oEnd < end) {
        return [new this.constructor(start, oStart), new this.constructor(oStart, end)];
      }

      return [];
    }
  }, {
    key: 'toDate',
    value: function toDate() {
      return [this.start.toDate(), this.end.toDate()];
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.start.format() + '/' + this.end.format();
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.end.valueOf() - this.start.valueOf();
    }
  }]);

  return DateRange;
}();

//-----------------------------------------------------------------------------
// Moment Extensions
//-----------------------------------------------------------------------------

function extendMoment(moment$$1) {
  /**
   * Build a date range.
   */
  moment$$1.range = function range(start, end) {
    var m = this;

    if (INTERVALS.hasOwnProperty(start)) {
      return new DateRange(moment$$1(m).startOf(start), moment$$1(m).endOf(start));
    }

    return new DateRange(start, end);
  };

  /**
   * Build a date range between a date (or now) and a specified interval.
   * @param {String} interval The type of interval
   * @param {Number} [count=1] The number of intervals (positive or negative)
   * @param {Moment|Date} [date=moment()] The date to use
   * @return {DateRange}
   */
  moment$$1.rangeFromInterval = function (interval) {
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : moment$$1();

    if (!moment$$1.isMoment(date)) date = moment$$1(date);
    if (!date.isValid()) throw new Error('Invalid date.');

    var dateWithInterval = date.clone().add(count, interval);

    // Handle negative interval counts by assembling the dates in chronological order.
    var dates = [];
    dates.push(moment$$1.min(date, dateWithInterval));
    dates.push(moment$$1.max(date, dateWithInterval));

    return new DateRange(dates);
  };

  /**
   * Uses moment.parseZone on both the start and end of the given time interval
   * to preserve the time zones on the resulting DateRange object.
   * @param {string} isoTimeInterval the timeInterval to be parsed
   * @return {DateRange} constructed using moments that will preserve the time zones
   */
  moment$$1.parseZoneRange = function (isoTimeInterval) {
    var momentStrings = isoSplit(isoTimeInterval);
    var start = moment$$1.parseZone(momentStrings[0]);
    var end = moment$$1.parseZone(momentStrings[1]);
    return new DateRange(start, end);
  };

  /**
   * Alias of static constructor.
   */
  moment$$1.fn.range = moment$$1.range;

  /**
   * Expose constructor
   */
  moment$$1.range.constructor = DateRange;

  /**
   * Check if the current object is a date range.
   */
  moment$$1.isRange = function (range) {
    return range instanceof DateRange;
  };

  /**
   * Check if the current moment is within a given date range.
   */
  moment$$1.fn.within = function (range) {
    return range.contains(this.toDate());
  };

  return moment$$1;
}

//-----------------------------------------------------------------------------
// Utility Functions
//-----------------------------------------------------------------------------

/**
 * Splits an iso string into two strings.
 */
function isoSplit(isoString) {
  return isoString.split('/');
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var assign        = __webpack_require__(4)
  , normalizeOpts = __webpack_require__(11)
  , isCallable    = __webpack_require__(7)
  , contains      = __webpack_require__(13)

  , d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5)()
	? Object.assign
	: __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== 'function') return false;
	obj = { foo: 'raz' };
	assign(obj, { bar: 'dwa' }, { trzy: 'trzy' });
	return (obj.foo + obj.bar + obj.trzy) === 'razdwatrzy';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var keys  = __webpack_require__(8)
  , value = __webpack_require__(12)

  , max = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i, l = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try { dest[key] = src[key]; } catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < l; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (obj) { return typeof obj === 'function'; };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9)()
	? Object.keys
	: __webpack_require__(10);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function () {
	try {
		return true;
	} catch (e) { return false; }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var keys = Object.keys;

module.exports = function (object) {
	return keys(object == null ? object : Object(object));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

module.exports = function (options/*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (options == null) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (value) {
	if (value == null) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14)()
	? String.prototype.contains
	: __webpack_require__(15);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var str = 'razdwatrzy';

module.exports = function () {
	if (typeof str.contains !== 'function') return false;
	return ((str.contains('dwa') === true) && (str.contains('foo') === false));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var validTypes = { object: true, symbol: true };

module.exports = function () {
	if (typeof Symbol !== 'function') return false;
	try {  } catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (x) {
	if (!x) return false;
	if (typeof x === 'symbol') return true;
	if (!x.constructor) return false;
	if (x.constructor.name !== 'Symbol') return false;
	return (x[x.constructor.toStringTag] === 'Symbol');
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var d              = __webpack_require__(3)
  , validateSymbol = __webpack_require__(19)

  , create = Object.create, defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
  , isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = (function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0, name, ie11BugWorkaround;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty(objPrototype, name, d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}());

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError('Symbol is not a constructor');
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};
defineProperties(SymbolPolyfill, {
	for: d(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return (globalSymbols[key] = SymbolPolyfill(String(key)));
	}),
	keyFor: d(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
	}),

	// To ensure proper interoperability with other native functions (e.g. Array.from)
	// fallback to eventual native implementation of given symbol
	hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
		SymbolPolyfill('isConcatSpreadable')),
	iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
	match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
	replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
	search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
	species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
	split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
	toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
	toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
	unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d('', function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
	var symbol = validateSymbol(this);
	if (typeof symbol === 'symbol') return symbol;
	return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(17);

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ })
/******/ ]);
});

});

unwrapExports(momentRange);
var momentRange_1 = momentRange.extendMoment;

var moment$2 = momentRange_1(moment);

function formatNumber(num) {
  return num;
}

function getCalendarHeaderText(date) {
  return date.format('MMMM YYYY');
}

function getDatePickerHeaderText(date) {
  return date.format('ddd, MMM DD');
}

function getDateTimePickerHeaderText(date) {
  return date.format('MMM DD');
}

function getDayText(date) {
  return date.format('DD');
}

function getHourText(date, ampm) {
  return date.format(ampm ? 'hh' : 'HH');
}

function getMinuteText(date) {
  return date.format('mm');
}

function getMeridiemText(ampm) {
  return ampm === 'am' ? 'AM' : 'PM';
}

function getYearText(date) {
  return date.format('YYYY');
}

function getMonthNumber(date) {
  return date.get('month');
}

function getStartOfMonth(date) {
  return date.clone().startOf('month');
}

function getNextMonth(date) {
  return date.clone().add(1, 'month');
}

function getPreviousMonth(date) {
  return date.clone().subtract(1, 'month');
}

function getYear(date) {
  return date.get('year');
}

function setYear(date, year) {
  return date.clone().set('year', year);
}

function getWeekdays() {
  return [0, 1, 2, 3, 4, 5, 6].map(function (dayOfWeek) {
    return moment$2().weekday(dayOfWeek).format('dd');
  });
}

function getWeekArray(date) {
  var start = date.clone().startOf('month').startOf('week');
  var end = date.clone().endOf('month').endOf('week');

  var weeks = Array.from(moment$2.range(start, end).by('week'));

  var nestedWeeks = [];

  weeks.forEach(function (week) {
    var endOfWeek = week.clone().endOf('week');
    nestedWeeks.push(Array.from(moment$2.range(week, endOfWeek).by('day')));
  });

  return nestedWeeks;
}

var defaultUtils = Object.freeze({
	formatNumber: formatNumber,
	getCalendarHeaderText: getCalendarHeaderText,
	getDatePickerHeaderText: getDatePickerHeaderText,
	getDateTimePickerHeaderText: getDateTimePickerHeaderText,
	getDayText: getDayText,
	getHourText: getHourText,
	getMinuteText: getMinuteText,
	getMeridiemText: getMeridiemText,
	getYearText: getYearText,
	getMonthNumber: getMonthNumber,
	getStartOfMonth: getStartOfMonth,
	getNextMonth: getNextMonth,
	getPreviousMonth: getPreviousMonth,
	getYear: getYear,
	setYear: setYear,
	getWeekdays: getWeekdays,
	getWeekArray: getWeekArray
});

var CalendarHeader = function CalendarHeader(props) {
  var classes = props.classes,
      theme = props.theme,
      currentMonth = props.currentMonth,
      onMonthChange = props.onMonthChange,
      leftArrowIcon = props.leftArrowIcon,
      rightArrowIcon = props.rightArrowIcon,
      utils = props.utils;


  var rtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(currentMonth));
  };
  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(currentMonth));
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: classes.switchHeader },
      React.createElement(
        IconButton,
        { onClick: selectPreviousMonth },
        rtl ? rightArrowIcon : leftArrowIcon
      ),
      React.createElement(
        Typography,
        { type: 'body1' },
        utils.getCalendarHeaderText(currentMonth)
      ),
      React.createElement(
        IconButton,
        { onClick: selectNextMonth },
        rtl ? leftArrowIcon : rightArrowIcon
      )
    ),
    React.createElement(
      'div',
      { className: classes.daysHeader },
      utils.getWeekdays().map(function (day) {
        return React.createElement(
          Typography,
          {
            key: day,
            type: 'caption',
            className: classes.dayLabel
          },
          day
        );
      })
    )
  );
};

CalendarHeader.propTypes = {
  currentMonth: PropTypes.object.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  utils: PropTypes.object
};

CalendarHeader.defaultProps = {
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  utils: defaultUtils
};

var styles$3 = function styles(theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.unit
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      textAlign: 'center',
      color: theme.palette.text.hint
    }
  };
};

var CalendarHeader$1 = withStyles(styles$3, { withTheme: true, name: 'MuiPickersCalendarHeader' })(CalendarHeader);

var moment$1 = momentRange_1(moment);

var Calendar = function (_Component) {
  inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
        return moment$1(date).startOf('day');
      };

      return minDate && day.isBefore(startOfDay(minDate)) || maxDate && day.isAfter(startOfDay(maxDate));
    }, _this.shouldDisableDate = function (day) {
      var _this$props2 = _this.props,
          disablePast = _this$props2.disablePast,
          disableFuture = _this$props2.disableFuture,
          shouldDisableDate = _this$props2.shouldDisableDate;

      return disableFuture && day.isAfter(moment$1(), 'day') || disablePast && day.isBefore(moment$1(), 'day') || _this.validateMinMaxDate(day) || shouldDisableDate(day);
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
      var now = moment$1();

      return week.map(function (day) {
        var _classnames2;

        // should be applied both for wrapper and button
        var disabledClass = classnames(defineProperty({}, classes.disabled, _this.shouldDisableDate(day)));
        var dayInCurrentMonth = utils.getMonthNumber(day) === currentMonthNumber;
        var isHidden = !dayInCurrentMonth;

        var dayClass = classnames(classes.day, disabledClass, (_classnames2 = {}, defineProperty(_classnames2, classes.hidden, isHidden), defineProperty(_classnames2, classes.current, day.isSame(now, 'day')), defineProperty(_classnames2, classes.selected, selectedDate.isSame(day, 'day')), _classnames2));

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
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Calendar, [{
    key: 'render',
    value: function render() {
      var currentMonth = this.state.currentMonth;
      var _props = this.props,
          classes = _props.classes,
          utils = _props.utils;


      return React.createElement(
        Fragment,
        null,
        React.createElement(CalendarHeader$1, {
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
var styles$2 = function styles(theme) {
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

var Calendar$1 = withStyles(styles$2, { name: 'MuiPickersCalendar' })(Calendar);

var moment$3 = momentRange_1(moment);

var YearSelection = function (_PureComponent) {
  inherits(YearSelection, _PureComponent);

  function YearSelection() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, YearSelection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = YearSelection.__proto__ || Object.getPrototypeOf(YearSelection)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
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
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(YearSelection, [{
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
        Array.from(moment$3.range(minDate, maxDate).by('year')).map(function (year) {
          var _classnames;

          var yearNumber = utils.getYear(year);
          var className = classnames(classes.yearItem, (_classnames = {}, defineProperty(_classnames, classes.selectedYear, yearNumber === currentYear), defineProperty(_classnames, classes.disabled, disablePast && year.isBefore(moment$3(), 'year') || disableFuture && year.isAfter(moment$3(), 'year')), _classnames));

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
var styles$4 = function styles(theme) {
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

var YearSelection$1 = withStyles(styles$4, { name: 'MuiPickersYearSelection' })(YearSelection);

var PickerToolbar = function PickerToolbar(props) {
  var children = props.children,
      className = props.className,
      classes = props.classes,
      other = objectWithoutProperties(props, ['children', 'className', 'classes']);


  return React.createElement(
    Toolbar,
    _extends({ className: classnames(classes.toolbar, className) }, other),
    children
  );
};

PickerToolbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

PickerToolbar.defaultProps = {
  className: ''
};

var styles$5 = function styles(theme) {
  return {
    toolbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 100,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary[500] : theme.palette.background.default
    }
  };
};

var PickerToolbar$1 = withStyles(styles$5, { name: 'MuiPickersToolbar' })(PickerToolbar);

var ToolbarButton = function ToolbarButton(props) {
  var classes = props.classes,
      selected = props.selected,
      label = props.label,
      className = props.className,
      other = objectWithoutProperties(props, ['classes', 'selected', 'label', 'className']);


  return React.createElement(
    Typography,
    _extends({
      className: classnames(classes.toolbarBtn, className, defineProperty({}, classes.toolbarBtnSelected, selected))
    }, other),
    label
  );
};

ToolbarButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

ToolbarButton.defaultProps = {
  className: ''
};

var styles$6 = function styles(theme) {
  return {
    toolbarBtn: {
      cursor: 'pointer',
      color: theme.palette.common.lightWhite
    },
    toolbarBtnSelected: {
      color: theme.palette.common.white
    }
  };
};

var ToolbarButton$1 = withStyles(styles$6, { name: 'MuiPickersToolbarButton' })(ToolbarButton);

var DatePicker = function (_PureComponent) {
  inherits(DatePicker, _PureComponent);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showYearSelection: _this.props.openToYearSelection
    }, _this.handleYearSelect = function (date) {
      _this.props.onChange(date, false);
      _this.openCalendar();
    }, _this.openYearSelection = function () {
      _this.setState({ showYearSelection: true });
    }, _this.openCalendar = function () {
      _this.setState({ showYearSelection: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DatePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          onChange = _props.onChange,
          animateYearScrolling = _props.animateYearScrolling,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          renderDay = _props.renderDay,
          utils = _props.utils,
          shouldDisableDate = _props.shouldDisableDate;
      var showYearSelection = this.state.showYearSelection;


      return React.createElement(
        Fragment,
        null,
        React.createElement(
          PickerToolbar$1,
          null,
          React.createElement(ToolbarButton$1, {
            type: 'subheading',
            onClick: this.openYearSelection,
            selected: showYearSelection,
            label: utils.getYearText(this.date)
          }),
          React.createElement(ToolbarButton$1, {
            type: 'display1',
            onClick: this.openCalendar,
            selected: !showYearSelection,
            label: utils.getDatePickerHeaderText(this.date)
          })
        ),
        this.props.children,
        showYearSelection ? React.createElement(YearSelection$1, {
          date: this.date,
          onChange: this.handleYearSelect,
          minDate: this.minDate,
          maxDate: this.maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          animateYearScrolling: animateYearScrolling,
          utils: utils
        }) : React.createElement(Calendar$1, {
          date: this.date,
          onChange: onChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDate: this.minDate,
          maxDate: this.maxDate,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay,
          utils: utils,
          shouldDisableDate: shouldDisableDate
        })
      );
    }
  }, {
    key: 'date',
    get: function get$$1() {
      return this.props.date.startOf('day');
    }
  }, {
    key: 'minDate',
    get: function get$$1() {
      return moment(this.props.minDate);
    }
  }, {
    key: 'maxDate',
    get: function get$$1() {
      return moment(this.props.maxDate);
    }
  }]);
  return DatePicker;
}(PureComponent);

DatePicker.propTypes = {
  date: PropTypes.object.isRequired,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  openToYearSelection: PropTypes.bool,
  children: PropTypes.node,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func,
  utils: PropTypes.object,
  shouldDisableDate: PropTypes.func
};
DatePicker.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disablePast: false,
  disableFuture: false,
  animateYearScrolling: undefined,
  openToYearSelection: false,
  children: null,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  utils: defaultUtils,
  shouldDisableDate: undefined
};

/* eslint-disable react/sort-comp */

var PickerBase = function (_PureComponent) {
  inherits(PickerBase, _PureComponent);

  function PickerBase() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, PickerBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = PickerBase.__proto__ || Object.getPrototypeOf(PickerBase)).call.apply(_ref, [this].concat(args))), _this), _this.getValidDateOrCurrent = function () {
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
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(PickerBase, [{
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

var DatePickerWrapper = function (_PickerBase) {
  inherits(DatePickerWrapper, _PickerBase);

  function DatePickerWrapper() {
    classCallCheck(this, DatePickerWrapper);
    return possibleConstructorReturn(this, (DatePickerWrapper.__proto__ || Object.getPrototypeOf(DatePickerWrapper)).apply(this, arguments));
  }

  createClass(DatePickerWrapper, [{
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
          other = objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'minDate', 'maxDate', 'onChange', 'disablePast', 'disableFuture', 'animateYearScrolling', 'openToYearSelection', 'returnMoment', 'invalidLabel', 'leftArrowIcon', 'rightArrowIcon', 'renderDay', 'labelFunc', 'utils', 'shouldDisableDate']);


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

var ClockPointer = function (_Component) {
  inherits(ClockPointer, _Component);

  function ClockPointer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ClockPointer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ClockPointer.__proto__ || Object.getPrototypeOf(ClockPointer)).call.apply(_ref, [this].concat(args))), _this), _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          max = _this$props.max;


      var angle = 360 / max * value;

      return {
        height: isInner ? '26%' : '40%',
        transform: 'rotateZ(' + angle + 'deg)'
      };
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ClockPointer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          hasSelected = _props.hasSelected;


      return React.createElement(
        'div',
        {
          className: classes.pointer,
          style: this.getAngleStyle()
        },
        React.createElement('div', { className: classnames(classes.thumb, defineProperty({}, classes.noPoint, hasSelected)) })
      );
    }
  }]);
  return ClockPointer;
}(Component);

ClockPointer.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  hasSelected: PropTypes.bool.isRequired,
  isInner: PropTypes.bool.isRequired,
  max: PropTypes.number.isRequired
};
var styles$9 = function styles(theme) {
  return {
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary[500],
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.common.white,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: '14px solid ' + theme.palette.primary[500],
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary[500]
    }
  };
};

var ClockPointer$1 = withStyles(styles$9, { name: 'MuiPickersClockPointer' })(ClockPointer);

var HOURS = 'hours';

var MINUTES = 'minutes';

var clockType = Object.freeze({
	HOURS: HOURS,
	MINUTES: MINUTES
});

var center = {
  x: 260 / 2,
  y: 260 / 2
};

var basePoint = {
  x: center.x,
  y: 0
};

var cx = basePoint.x - center.x;
var cy = basePoint.y - center.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - center.x;
  var y = offsetY - center.y;

  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;

  var value = Math.floor(deg / step) || 0;
  // eslint-disable-next-line no-restricted-properties
  var delta = Math.pow(x, 2) + Math.pow(y, 2);
  var distance = Math.sqrt(delta);

  return { value: value, distance: distance };
};

var getHours = function getHours(offsetX, offsetY, ampm) {
  // eslint-disable-next-line
  var _getAngleValue = getAngleValue(30, offsetX, offsetY),
      value = _getAngleValue.value,
      distance = _getAngleValue.distance;

  value = value || 12;

  if (!ampm) {
    if (distance < 90) {
      value += 12;
      value %= 24;
    }
  } else {
    value %= 12;
  }

  return value;
};

var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

  var _getAngleValue2 = getAngleValue(step, offsetX, offsetY),
      value = _getAngleValue2.value;

  return value * step / 6;
};

var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm) {
  if (ampm) {
    var currentMeridiem = time.hours() >= 12 ? 'pm' : 'am';
    if (currentMeridiem !== meridiem) {
      var hours = meridiem === 'am' ? time.hours() - 12 : time.hours() + 12;

      return time.clone().hours(hours);
    }
  }

  return time;
};

var Clock = function (_Component) {
  inherits(Clock, _Component);

  function Clock() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Clock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Clock.__proto__ || Object.getPrototypeOf(Clock)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchMove = function (e) {
      _this.isMoving = true;
      _this.setTime(e);
    }, _this.handleMouseUp = function (e) {
      if (_this.isMoving) {
        _this.isMoving = false;
      }
      _this.setTime(e.nativeEvent, true);
    }, _this.handleTouchEnd = function (e) {
      if (_this.isMoving) {
        _this.setTime(e.nativeEvent, true);
        _this.isMoving = false;
      }
    }, _this.handleMove = function (e) {
      e.preventDefault();
      e.stopPropagation();
      // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari
      var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

      if (isButtonPressed) {
        _this.setTime(e.nativeEvent, false);
      }
    }, _this.hasSelected = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          value = _this$props.value;


      if (type === HOURS) {
        return true;
      }

      return value % 5 === 0;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Clock, [{
    key: 'setTime',
    value: function setTime(e) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var offsetX = e.offsetX,
          offsetY = e.offsetY;


      if (typeof offsetX === 'undefined') {
        var rect = e.target.getBoundingClientRect();

        offsetX = e.changedTouches[0].clientX - rect.left;
        offsetY = e.changedTouches[0].clientY - rect.top;
      }

      var value = this.props.type === MINUTES ? getMinutes(offsetX, offsetY, 6 * this.props.minutesStep) : getHours(offsetX, offsetY, this.props.ampm);

      this.props.onChange(value, isFinish);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          value = _props.value,
          children = _props.children,
          type = _props.type,
          ampm = _props.ampm;


      var max = type === HOURS ? 12 : 60;
      var isPointerInner = !ampm && type === HOURS && (value < 1 || value > 12);

      return React.createElement(
        'div',
        { className: classes.container },
        React.createElement(
          'div',
          {
            className: classes.clock
          },
          React.createElement('div', {
            role: 'menu',
            tabIndex: -1,
            className: classes.squareMask,
            onTouchMove: this.handleTouchMove,
            onTouchEnd: this.handleTouchEnd,
            onMouseUp: this.handleMouseUp,
            onMouseMove: this.handleMove
          }),
          React.createElement(ClockPointer$1, {
            max: max,
            value: value,
            isInner: isPointerInner,
            hasSelected: this.hasSelected()
          }),
          children
        )
      );
    }
  }]);
  return Clock;
}(Component);

Clock.propTypes = {
  type: PropTypes.oneOf(Object.keys(clockType).map(function (key) {
    return clockType[key];
  })).isRequired,
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  ampm: PropTypes.bool,
  minutesStep: PropTypes.number
};
Clock.defaultProps = {
  ampm: false,
  minutesStep: 1
};
var styles$8 = function styles(theme) {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: [theme.spacing.unit * 4, 0, theme.spacing.unit]
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none'
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 'none'
    }
  };
};

var Clock$1 = withStyles(styles$8, { name: 'MuiPickersClock' })(Clock);

var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};

var ClockNumber = function (_Component) {
  inherits(ClockNumber, _Component);

  function ClockNumber() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ClockNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ClockNumber.__proto__ || Object.getPrototypeOf(ClockNumber)).call.apply(_ref, [this].concat(args))), _this), _this.getTransformStyle = function (index) {
      var position = positions[index];

      return {
        transform: 'translate(' + position[0] + 'px, ' + position[1] + 'px'
      };
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ClockNumber, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          selected = _props.selected,
          label = _props.label,
          index = _props.index,
          classes = _props.classes,
          isInner = _props.isInner,
          visible = _props.visible;


      var className = classnames(classes.clockNumber, (_classnames = {}, defineProperty(_classnames, classes.selected, selected), defineProperty(_classnames, classes.visible, visible), _classnames));

      return React.createElement(
        Typography,
        {
          type: isInner ? 'body1' : 'subheading',
          component: 'span',
          className: className,
          style: this.getTransformStyle(index, isInner)
        },
        label
      );
    }
  }]);
  return ClockNumber;
}(Component);

ClockNumber.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  isInner: PropTypes.bool,
  visible: PropTypes.bool
};
ClockNumber.defaultProps = {
  isInner: false,
  visible: true
};
var styles$10 = function styles(theme) {
  var size = theme.spacing.unit * 4;
  return {
    clockNumber: {
      width: size,
      height: size,
      position: 'absolute',
      left: 'calc(50% - ' + size / 2 + 'px)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      display: 'none',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    selected: {
      color: theme.palette.common.white
    },
    visible: {
      display: 'inline-flex'
    }
  };
};

var ClockNumber$1 = withStyles(styles$10, { name: 'MuiPickersClockNumber' })(ClockNumber);

var HourView = function (_PureComponent) {
  inherits(HourView, _PureComponent);

  function HourView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, HourView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HourView.__proto__ || Object.getPrototypeOf(HourView)).call.apply(_ref, [this].concat(args))), _this), _this.getHourNumbers = function () {
      var _this$props = _this.props,
          ampm = _this$props.ampm,
          utils = _this$props.utils,
          date = _this$props.date;

      var currentHours = date.get('hours');

      var hourNumbers = [];
      var startHour = ampm ? 1 : 0;
      var endHour = ampm ? 12 : 23;

      var isSelected = function isSelected(hour) {
        if (ampm) {
          if (hour === 12) {
            return currentHours === 12 || currentHours === 0;
          }

          return currentHours === hour || currentHours - 12 === hour;
        }

        return currentHours === hour;
      };

      for (var hour = startHour; hour <= endHour; hour += 1) {
        var label = hour.toString();

        if (hour === 0) {
          label = '00';
        }

        var props = {
          index: hour,
          label: utils.formatNumber(label),
          selected: isSelected(hour),
          isInner: !ampm && (hour === 0 || hour > 12)
        };

        hourNumbers.push(React.createElement(ClockNumber$1, _extends({ key: hour }, props)));
      }

      return hourNumbers;
    }, _this.handleChange = function (hours, isFinish) {
      var updatedTime = _this.props.date.clone().hour(hours);

      _this.props.onChange(updatedTime, isFinish);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(HourView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          ampm = _props.ampm;

      var value = date.get('hours');

      return React.createElement(
        Clock$1,
        {
          type: HOURS,
          value: value,
          ampm: ampm,
          onChange: this.handleChange
        },
        this.getHourNumbers()
      );
    }
  }]);
  return HourView;
}(PureComponent);

HourView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  utils: PropTypes.object,
  ampm: PropTypes.bool
};
HourView.defaultProps = {
  utils: defaultUtils,
  ampm: true
};

var MinutesView = function (_Component) {
  inherits(MinutesView, _Component);

  function MinutesView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MinutesView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MinutesView.__proto__ || Object.getPrototypeOf(MinutesView)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (minutes, isFinish) {
      var updatedDate = _this.props.date.clone().minutes(minutes);
      _this.props.onChange(updatedDate, isFinish);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(MinutesView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          step = _props.step,
          utils = _props.utils;

      var f = utils.formatNumber;

      var value = Math.ceil(date.get('minutes') / step) * step;

      return React.createElement(
        Clock$1,
        {
          type: MINUTES,
          onChange: this.handleChange,
          value: value,
          minutesStep: step
        },
        React.createElement(ClockNumber$1, { label: f('00'), visible: 0 % step === 0, selected: value === 0, index: 12 }),
        React.createElement(ClockNumber$1, { label: f('05'), visible: 5 % step === 0, selected: value === 5, index: 1 }),
        React.createElement(ClockNumber$1, { label: f('10'), visible: 10 % step === 0, selected: value === 10, index: 2 }),
        React.createElement(ClockNumber$1, { label: f('15'), visible: 15 % step === 0, selected: value === 15, index: 3 }),
        React.createElement(ClockNumber$1, { label: f('20'), visible: 20 % step === 0, selected: value === 20, index: 4 }),
        React.createElement(ClockNumber$1, { label: f('25'), visible: 25 % step === 0, selected: value === 25, index: 5 }),
        React.createElement(ClockNumber$1, { label: f('30'), visible: 30 % step === 0, selected: value === 30, index: 6 }),
        React.createElement(ClockNumber$1, { label: f('35'), visible: 35 % step === 0, selected: value === 35, index: 7 }),
        React.createElement(ClockNumber$1, { label: f('40'), visible: 40 % step === 0, selected: value === 40, index: 8 }),
        React.createElement(ClockNumber$1, { label: f('45'), visible: 45 % step === 0, selected: value === 45, index: 9 }),
        React.createElement(ClockNumber$1, { label: f('50'), visible: 50 % step === 0, selected: value === 50, index: 10 }),
        React.createElement(ClockNumber$1, { label: f('55'), visible: 55 % step === 0, selected: value === 55, index: 11 })
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

var TimePicker = function (_Component) {
  inherits(TimePicker, _Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TimePicker, [{
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
          PickerToolbar$1,
          { className: classes.toolbar },
          React.createElement(
            'div',
            { className: hourMinuteClassName },
            React.createElement(ToolbarButton$1, {
              type: 'display3',
              onClick: this.openHourView,
              selected: isHourViewShown,
              label: utils.getHourText(date, ampm)
            }),
            React.createElement(ToolbarButton$1, {
              type: 'display3',
              label: ':',
              selected: false,
              className: classes.separator
            }),
            React.createElement(ToolbarButton$1, {
              type: 'display3',
              onClick: this.openMinutesView,
              selected: !isHourViewShown,
              label: utils.getMinuteText(date)
            })
          ),
          ampm && React.createElement(
            'div',
            { className: classes.ampmSelection },
            React.createElement(ToolbarButton$1, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'am',
              type: 'subheading',
              label: utils.getMeridiemText('am'),
              onClick: this.setMeridiemMode('am')
            }),
            React.createElement(ToolbarButton$1, {
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
var styles$7 = function styles() {
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

var TimePicker$1 = withStyles(styles$7, { withTheme: true, name: 'MuiPickersTimePicker' })(TimePicker);

var TimePickerWrapper = function (_PickerBase) {
  inherits(TimePickerWrapper, _PickerBase);

  function TimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TimePickerWrapper.__proto__ || Object.getPrototypeOf(TimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'hh:mm A', _this.default24hFormat = 'HH:mm', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TimePickerWrapper, [{
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
          other = objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'onChange', 'returnMoment', 'invalidLabel', 'utils', 'ampm', 'minutesStep']);


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
        React.createElement(TimePicker$1, {
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

var DateTimePickerView = function DateTimePickerView(props) {
  var view = props.view,
      selected = props.selected,
      children = props.children,
      classes = props.classes;


  if (view !== selected) {
    return null;
  }

  return React.createElement(
    'div',
    { className: classnames(defineProperty({}, classes.hidden, view !== selected)) },
    children
  );
};

DateTimePickerView.propTypes = {
  view: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

var styles$12 = {};

var View = withStyles(styles$12, { name: 'MuiPickerDTPickerView ' })(DateTimePickerView);

var YEAR = 'year';

var DATE = 'date';

var HOUR = 'hour';

var MINUTES$1 = 'minutes';

var viewType = Object.freeze({
	YEAR: YEAR,
	DATE: DATE,
	HOUR: HOUR,
	MINUTES: MINUTES$1
});

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === DATE || openView === YEAR) {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return DATE;
  }

  return HOUR;
};

var DateTimePickerTabs = function DateTimePickerTabs(props) {
  var view = props.view,
      onChange = props.onChange,
      classes = props.classes,
      theme = props.theme,
      dateRangeIcon = props.dateRangeIcon,
      timeIcon = props.timeIcon;


  var indicatorColor = theme.palette.type === 'light' ? 'accent' : 'primary';
  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return React.createElement(
    Paper,
    null,
    React.createElement(
      Tabs,
      {
        fullWidth: true,
        value: viewToTabIndex(view),
        onChange: handleChange,
        className: classes.tabs,
        indicatorColor: indicatorColor
      },
      React.createElement(Tab, { value: 'date', icon: dateRangeIcon }),
      React.createElement(Tab, { value: 'time', icon: timeIcon })
    )
  );
};

DateTimePickerTabs.propTypes = {
  view: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node
};

DateTimePickerTabs.defaultProps = {
  dateRangeIcon: 'date_range',
  timeIcon: 'access_time'
};

var styles$13 = function styles(theme) {
  return {
    tabs: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary[500] : theme.palette.background.default
    }
  };
};

var DateTimePickerTabs$1 = withTheme()(withStyles(styles$13, { name: 'MuiPickerDTTabs' })(DateTimePickerTabs));

var DateTimePickerHeader = function DateTimePickerHeader(props) {
  var date = props.date,
      classes = props.classes,
      openView = props.openView,
      meridiemMode = props.meridiemMode,
      onOpenViewChange = props.onOpenViewChange,
      setMeridiemMode = props.setMeridiemMode,
      theme = props.theme,
      utils = props.utils,
      ampm = props.ampm;


  var changeOpenView = function changeOpenView(view) {
    return function () {
      return onOpenViewChange(view);
    };
  };

  var rtl = theme.direction === 'rtl';
  var hourMinuteClassname = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;

  return React.createElement(
    PickerToolbar$1,
    { className: classes.toolbar },
    React.createElement(
      'div',
      { className: classes.dateHeader },
      React.createElement(ToolbarButton$1, {
        type: 'subheading',
        onClick: changeOpenView(YEAR),
        selected: openView === YEAR,
        label: utils.getYearText(date)
      }),
      React.createElement(ToolbarButton$1, {
        type: 'display1',
        onClick: changeOpenView(DATE),
        selected: openView === DATE,
        label: utils.getDateTimePickerHeaderText(date)
      })
    ),
    React.createElement(
      'div',
      { className: classes.timeHeader },
      React.createElement(
        'div',
        { className: hourMinuteClassname },
        React.createElement(ToolbarButton$1, {
          type: 'display2',
          onClick: changeOpenView(HOUR),
          selected: openView === HOUR,
          label: utils.getHourText(date, ampm)
        }),
        React.createElement(ToolbarButton$1, {
          type: 'display2',
          label: ':',
          selected: false,
          className: classes.separator
        }),
        React.createElement(ToolbarButton$1, {
          type: 'display2',
          onClick: changeOpenView(MINUTES$1),
          selected: openView === MINUTES$1,
          label: utils.getMinuteText(date)
        })
      ),
      ampm && React.createElement(
        'div',
        { className: classes.ampmSelection },
        React.createElement(ToolbarButton$1, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'am',
          type: 'subheading',
          label: utils.getMeridiemText('am'),
          onClick: setMeridiemMode('am')
        }),
        React.createElement(ToolbarButton$1, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'pm',
          type: 'subheading',
          label: utils.getMeridiemText('pm'),
          onClick: setMeridiemMode('pm')
        })
      )
    )
  );
};

DateTimePickerHeader.propTypes = {
  date: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  meridiemMode: PropTypes.string.isRequired,
  openView: PropTypes.string.isRequired,
  onOpenViewChange: PropTypes.func.isRequired,
  setMeridiemMode: PropTypes.func.isRequired,
  utils: PropTypes.object,
  ampm: PropTypes.bool
};

DateTimePickerHeader.defaultProps = {
  utils: defaultUtils,
  ampm: true
};

var styles$14 = function styles() {
  return {
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    ampmSelection: {
      marginLeft: 10,
      marginRight: -10
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
    },
    dateHeader: {
      width: '42%',
      height: 65
    },
    timeHeader: {
      height: 65,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    }
  };
};

var DatetimePickerHeader = withStyles(styles$14, { withTheme: true })(DateTimePickerHeader);

var DateTimePicker = function (_Component) {
  inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      openView: _this.props.openTo,
      meridiemMode: _this.props.date.hours() >= 12 ? 'pm' : 'am'
    }, _this.onChange = function (nextView) {
      return function (time) {
        var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _this.handleChange(time);

        if (isFinish && _this.props.autoSubmit) {
          _this.handleViewChange(nextView);
        }
      };
    }, _this.setMeridiemMode = function (mode) {
      return function () {
        _this.setState({ meridiemMode: mode }, function () {
          return _this.handleChange(_this.props.date, false);
        });
      };
    }, _this.handleViewChange = function (view) {
      _this.setState({ openView: view });
    }, _this.handleChange = function (time) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode, _this.props.ampm);
      _this.props.onChange(withMeridiem, isFinish);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DateTimePicker, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          openView = _state.openView,
          meridiemMode = _state.meridiemMode;
      var _props = this.props,
          date = _props.date,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay,
          utils = _props.utils,
          ampm = _props.ampm,
          minutesStep = _props.minutesStep,
          shouldDisableDate = _props.shouldDisableDate,
          animateYearScrolling = _props.animateYearScrolling;


      return React.createElement(
        Fragment,
        null,
        React.createElement(DatetimePickerHeader, {
          date: date,
          openView: openView,
          meridiemMode: meridiemMode,
          setMeridiemMode: this.setMeridiemMode,
          onOpenViewChange: this.handleViewChange,
          utils: utils,
          ampm: ampm
        }),
        showTabs && React.createElement(DateTimePickerTabs$1, {
          view: openView,
          onChange: this.handleViewChange,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon
        }),
        React.createElement(
          View,
          { view: YEAR, selected: openView },
          React.createElement(YearSelection$1, {
            date: date,
            minDate: minDate,
            maxDate: maxDate,
            onChange: this.onChange(DATE),
            disablePast: disablePast,
            disableFuture: disableFuture,
            utils: utils,
            animateYearScrolling: animateYearScrolling
          })
        ),
        React.createElement(
          View,
          { view: DATE, selected: openView },
          React.createElement(Calendar$1, {
            date: date,
            minDate: minDate,
            maxDate: maxDate,
            onChange: this.onChange(HOUR),
            disablePast: disablePast,
            disableFuture: disableFuture,
            leftArrowIcon: leftArrowIcon,
            rightArrowIcon: rightArrowIcon,
            renderDay: renderDay,
            utils: utils,
            shouldDisableDate: shouldDisableDate
          })
        ),
        React.createElement(
          View,
          { view: HOUR, selected: openView },
          React.createElement(HourView, {
            date: date,
            meridiemMode: meridiemMode,
            onChange: this.onChange(MINUTES$1),
            utils: utils,
            ampm: ampm
          })
        ),
        React.createElement(
          View,
          { view: MINUTES$1, selected: openView },
          React.createElement(MinutesView, {
            date: date,
            onChange: this.handleChange,
            utils: utils,
            step: minutesStep
          })
        )
      );
    }
  }]);
  return DateTimePicker;
}(Component);

DateTimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  autoSubmit: PropTypes.bool,
  openTo: PropTypes.oneOf(Object.keys(viewType).map(function (key) {
    return viewType[key];
  })),
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  showTabs: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node,
  renderDay: PropTypes.func,
  utils: PropTypes.object,
  ampm: PropTypes.bool,
  minutesStep: PropTypes.number,
  shouldDisableDate: PropTypes.func,
  animateYearScrolling: PropTypes.bool
};
DateTimePicker.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  autoSubmit: true,
  openTo: DATE,
  disablePast: false,
  disableFuture: false,
  showTabs: true,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  dateRangeIcon: undefined,
  timeIcon: undefined,
  renderDay: undefined,
  utils: defaultUtils,
  ampm: true,
  minutesStep: 1,
  shouldDisableDate: undefined,
  animateYearScrolling: false
};

var DateTimePickerWrapper = function (_PickerBase) {
  inherits(DateTimePickerWrapper, _PickerBase);

  function DateTimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DateTimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DateTimePickerWrapper.__proto__ || Object.getPrototypeOf(DateTimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'MMMM Do hh:mm a', _this.default24hFormat = 'MMMM Do HH:mm', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DateTimePickerWrapper, [{
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
          openTo = _props.openTo,
          classes = _props.classes,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          autoSubmit = _props.autoSubmit,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          returnMoment = _props.returnMoment,
          invalidLabel = _props.invalidLabel,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay,
          labelFunc = _props.labelFunc,
          utils = _props.utils,
          ampm = _props.ampm,
          minutesStep = _props.minutesStep,
          shouldDisableDate = _props.shouldDisableDate,
          animateYearScrolling = _props.animateYearScrolling,
          other = objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'openTo', 'classes', 'minDate', 'maxDate', 'showTabs', 'autoSubmit', 'disablePast', 'disableFuture', 'returnMoment', 'invalidLabel', 'leftArrowIcon', 'rightArrowIcon', 'dateRangeIcon', 'timeIcon', 'renderDay', 'labelFunc', 'utils', 'ampm', 'minutesStep', 'shouldDisableDate', 'animateYearScrolling']);


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
          dialogContentClassName: classes.dialogContent,
          invalidLabel: invalidLabel,
          labelFunc: labelFunc
        }, other),
        React.createElement(DateTimePicker, {
          date: date,
          openTo: openTo,
          autoSubmit: autoSubmit,
          onChange: this.handleChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDate: minDate,
          maxDate: maxDate,
          showTabs: showTabs,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon,
          renderDay: renderDay,
          utils: utils,
          ampm: ampm,
          minutesStep: minutesStep,
          shouldDisableDate: shouldDisableDate,
          animateYearScrolling: animateYearScrolling
        })
      );
    }
  }]);
  return DateTimePickerWrapper;
}(PickerBase);

DateTimePickerWrapper.propTypes = {
  value: DomainPropTypes.date,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  autoSubmit: PropTypes.bool,
  disableFuture: PropTypes.bool,
  openTo: PropTypes.string,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  showTabs: PropTypes.bool,
  returnMoment: PropTypes.bool,
  invalidLabel: PropTypes.string,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node,
  renderDay: PropTypes.func,
  labelFunc: PropTypes.func,
  utils: PropTypes.object,
  ampm: PropTypes.bool,
  minutesStep: PropTypes.number,
  shouldDisableDate: PropTypes.func,
  animateYearScrolling: PropTypes.bool
};
DateTimePickerWrapper.defaultProps = {
  value: new Date(),
  format: undefined,
  autoOk: false,
  autoSubmit: undefined,
  openTo: undefined,
  disableFuture: undefined,
  minDate: undefined,
  maxDate: undefined,
  showTabs: true,
  returnMoment: true,
  invalidLabel: undefined,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  dateRangeIcon: undefined,
  timeIcon: undefined,
  renderDay: undefined,
  labelFunc: undefined,
  utils: defaultUtils,
  ampm: true,
  minutesStep: 1,
  shouldDisableDate: undefined,
  animateYearScrolling: false
};
var styles$11 = {
  dialogContent: {
    width: 310
  }
};

var DateTimePickerWrapper$1 = withStyles(styles$11, { name: 'MuiPickerDTPickerModal' })(DateTimePickerWrapper);

export { DatePickerWrapper as DatePicker, TimePickerWrapper as TimePicker, DateTimePickerWrapper$1 as DateTimePicker };
//# sourceMappingURL=material-ui-pickers.es.js.map
