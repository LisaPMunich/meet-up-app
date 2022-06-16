import React, {Component} from 'react';
import ToggleChartDetailsButton from './ToggleChartDetailsButton';
import '../styling/chart-detail.css';
import ScatterChart from "./ScatterChart";
import PieChart from "./PieChart";


class ChartDetail extends Component {

    state = {
        showChartDetails: false
    }

    handleClick = (event) => {
        this.setState({
            showChartDetails: !this.state.showChartDetails,
        });
    }

    render() {
        const buttonText = this.state.showChartDetails
            ? "Hide Details"
            : "Show Details";
        return (
            <>
                <button
                    onClick={this.handleClick}
                    className="button">
                    {buttonText}
                </button>

                {this.state.showChartDetails && (
                    <div className="charts">
                        <ScatterChart
                            eventData={limitedEvents}
                        />
                        <PieChart
                            eventData={limitedEvents}
                        />
                    </div>
                )
                }
            </>
        );
    }
}

export default EventDetail;