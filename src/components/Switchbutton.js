import React from 'react';

const SwitchButton = props => (
    <button onClick={props.start}>{props.active ? 'Stop' : 'Start'}</button>
)

export default SwitchButton;