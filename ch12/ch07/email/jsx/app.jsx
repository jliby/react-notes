import '../css/main.css'; //imports css

import React from 'react'; //imports react framework
import { render } from 'react-dom'; //imports react's dom
import Content from './content.jsx'; //imports content file

render(
    <Content />,
    document.getElementById('content')
)