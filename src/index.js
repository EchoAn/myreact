import 'normalize.css';
import React from 'react';

import ReactDom from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

import './scss/common.scss';

const render = () => {
    ReactDom.render(
        /* eslint-disable */
        <AppContainer>
            <App />
        </AppContainer>,
        /* eslint-enable */
        document.getElementById('app'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App);
    });
}
