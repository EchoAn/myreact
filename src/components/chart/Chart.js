import './chart.scss';

import React, {
    Component
} from 'react';

import FontAwesome from 'react-fontawesome';

export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    render() {
        const {
            chartMsg,
            changeChartMsg,
        } = this.props;

        return (
            <div>
                <div><span className='chart-icon'></span>[{chartMsg}]<span className='chart-icon2'></span></div>
                <div>
                    <FontAwesome name='rocket' />
                    <input
                        style={{border:'1px solid #f00'}}
                        type="text"
                        onChange={(event) => changeChartMsg(event.target.value)}
                        value={chartMsg}
                    />
                </div>
            </div>
        );
    }
}