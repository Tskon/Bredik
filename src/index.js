import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import router from './core/router';


ReactDom.render(<Provider store={store}>{router}</Provider>, document.getElementById('mainApp'));

