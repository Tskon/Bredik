import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import store from 'redux/store';
import MainRouter from 'core/mainRouter';


ReactDom.render(<Provider store={store}><MainRouter/></Provider>, document.getElementById('mainApp'));

