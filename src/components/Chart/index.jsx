import React, {
    Component,
} from 'react';

import PropTypes from 'prop-types';

import './index.scss';

const propTypes = {
    chartMsg: PropTypes.string,
    changeChartMsg: PropTypes.func,
};

const defaultProps = {
    chartMsg: '',
    changeChartMsg: () => {},

};

class Chart extends Component {
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

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default Chart;
