import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';
import {extractLocations, getEvents, checkToken, getAccessToken} from './api';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {mockData} from "../mock-data";
import PropTypes from "prop-types";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export default class ScatterChart extends Component {
    state = {
        events: [],
        locations: [],
        cities: [],
    };
    constructor(props) {
        super(props);
        console.log('constructor called with props: ', props);
    }
    componentDidMount() {
    }
    getChartData() {
        const {locations, events} = this.state;
        const data = locations.map(
            (location) => {
                const number = events.filter((event) => event.location === location).length
                const city = location.split(', ').shift()
                return {
                    x: city,
                    y: number,
                };
            });
        return {
            labels: this.state.cities,
            datasets: [
                {
                    data,
                    backgroundColor: '#F16775',
                    pointRadius: 6,
                },
            ],
        };
    };
    render() {
        const locations = extractLocations(this.state.events);
        const cities = locations.map(location => location.split(', ').shift());
        console.log('prop events', this.props.eventData)
        return (
            <div style={{position: "relative", height: 550}}>
                <h4>Events in each city</h4>
                <Scatter
                    options={{
                        responsive: true,
                        scales: {
                            x: {
                                type: 'category',
                                labels: cities,
                                grid: {
                                    color: '#FEE36E',
                                    borderColor: '#FEE36E',
                                }
                            },
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    stepSize: 1,
                                },
                                grid: {
                                    color: '#FEE36E',
                                    borderColor: '#FEE36E',
                                },
                            }
                        }
                    }}
                    data={this.getChartData()}
                />
            </div>
        )
    }
}
ScatterChart.propTypes = {
    eventData: PropTypes.array.isRequired,
};
