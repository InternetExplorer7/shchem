import React from 'react'
import ReactTooltip from 'react-tooltip';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import Hexane from '../Hexane';
import Pentane from '../Pentane';
import Butane from '../Butane';

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

const Molecules = () => (
  <div>
    <Paper style={toolsStyle}>
      <FlatButton
        icon={<Hexane />}
        backgroundColor="#a4c639"
        hoverColor="#8AA624"
        style={toolStyle}
        data-tip='cyclohexane'
      />
      <FlatButton
        icon={<Pentane />}
        backgroundColor="#b4c639"
        hoverColor="#9AA624"
        style={toolStyle}
        data-tip='cyclopentane'
      />
      <FlatButton
        icon={<Butane />}
        backgroundColor="#c4c639"
        hoverColor="#0AA624"
        style={toolStyle}
        data-tip='cyclobutane'
      />
    </Paper>
    <Paper style={viewerStyle} />
    <Paper style={infoStyle} />
    <ReactTooltip place="top" type="dark" effect="solid" />
  </div>
)

export default Molecules
