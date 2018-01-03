var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Dialog, DialogActions, DialogContent, Button, withStyles } from 'material-ui';

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
      other = _objectWithoutProperties(_ref, ['children', 'classes', 'onAccept', 'onDismiss', 'okLabel', 'cancelLabel', 'dialogContentClassName']);

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

export default withStyles(styles, { name: 'MuiPickersModal' })(ModalDialog);