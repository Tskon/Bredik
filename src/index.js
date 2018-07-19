import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import Header from './common/blocks/header';

ReactDom.render(<BrowserRouter> </BrowserRouter>, document.getElementById('mainApp'));

