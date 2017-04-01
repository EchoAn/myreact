'use strict';
import 'font-awesome/scss/font-awesome.scss';

import React from 'react';

import ReactDom from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

const render = (Component) => {
    ReactDom.render(
        <AppContainer>
            <App></App>
        </AppContainer>,
        document.getElementById('app')
    );
}

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App)
    });
}