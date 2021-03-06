import React, {
    Component,
} from 'react';

import PropTypes from 'prop-types';

import './index.scss';

export default class Chart extends Component {
    static propTypes = {
        chartMsg: PropTypes.string,
        changeChartMsg: PropTypes.func,
    }

    static defaultProps = {
        chartMsg: '',
        changeChartMsg: () => {},
    }


    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    render() {
        const {
            chartMsg,
            changeChartMsg,
        } = this.props;

        return (
            <div>
                <div>
                    <span className="chart-icon" />
                    [{chartMsg}]
                    <span className="chart-icon2" />
                </div>
                <div>
                    <input
                        style={{ border: '1px solid #f00' }}
                        type="text"
                        onChange={event => changeChartMsg(event.target.value)}
                        value={chartMsg}
                    />
                </div>
            </div>
        );
    }
}
