import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

let viewerStyle = {
  position: 'fixed',
  top: 70,
  left: 150,
  width: 400,
  height: 400
}
let toolsStyle = {
  position: 'fixed',
  top: 70,
  left: 20,
  width: 100,
  height: 600
}
let infoStyle = {
  position: 'fixed',
  top: 70,
  left: 600,
  width: 400,
  height: 400
}
let toolStyle = {
margin: 5,
borderRadius: 5,
height: 40,
minWidth: 40
}

class ShChem extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
	  <FlatButton backgroundColor="#d3c324" hoverColor="#a6c325" label="Molecule" />
	  <FlatButton backgroundColor="#d3c324" hoverColor="#a6c325" label="Docker" />
	  <FlatButton backgroundColor="#d3c324" hoverColor="#a6c325" label="Collab" />
	  <FlatButton backgroundColor="#d3c324" hoverColor="#a6c325" label="Help" />
        </div>
	<div>
	<Paper style={toolsStyle}>
	<FlatButton backgroundColor="#a4c639" hoverColor="#8AA624" style={toolStyle} label=""/>
	<FlatButton backgroundColor="#b4c639" hoverColor="#9AA624" style={toolStyle} label=""/>
	<FlatButton backgroundColor="#c4c639" hoverColor="#0AA624" style={toolStyle} label=""/>
	</Paper>
	<Paper style={viewerStyle}> </Paper>
	<Paper style={infoStyle}> </Paper>
	</div>
      </div>
    );
  }
}

export default ShChem;