import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage/index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
