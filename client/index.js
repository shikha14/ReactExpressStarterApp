/**
 * Created by Shikha on 17/06/17.
 */

import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter  } from 'react-router-dom';
import routes from './routes'
import App from './components/App';

render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('app'));