import Photos from '../Photos/Photos';
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { } from '../Photos/Photos.js';



var styles = {
  dialogRoot: {
    
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0
  },
  dialogContent: {
    position: 'relative',
    width: '80%',
    maxWidth: "none"
  },
  dialogBody: {
    paddingBottom: 0
  }
};
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class Dialogo extends React.Component {
  state = {
    open: false,
  };


  render() {
    const actions = [
      <FlatButton
        label="Cerrar"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];   
 

    return (
      <div>
        <RaisedButton label="Ver fotos" onClick={this.handleOpen} />
        <Dialog
          title="Fotos"
          actions={actions}
          bodyStyle={ styles.dialogBody }
          style={ styles.dialogRoot }
          repositionOnUpdate={ false }
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={styles.dialogContent}
          autoDetectWindowHeight={true}
        >
        <Photos />     
        </Dialog>
      </div>
    );
  }
}