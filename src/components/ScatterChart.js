import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';
import {extractLocations} from './api';
import '../styling/scatter-chart.css';
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


    getChartData(locations, events) {
        const cities = [];
        const data = locations.map(
            (location) => {
                const number = events.filter((event) => event.location === location).length
                const city = this.getCityFromLocation(location)
                cities.push(city);

                return {
                    x: city,
                    y: number,
                };
            });
        return {
            //labels: cities,
            datasets: [
                {
                    datalabels: {
                        labels: { title: null },
                    },
                    data,
                    backgroundColor: '#F16775',
                    pointRadius: 6,
                },
            ],
        };
    }

    /**
     * @param {string} location
     * @returns {string}
     */
    getCityFromLocation(location) {
        if (location.includes(',')){
            return location.split(', ').shift();
        } else if (location.includes('-')){
            return location.split(' - ').shift();
        } else {
            console.log("There is a syntax error in the location", location)
            return location
        }
    }

    render() {
        const events = this.props.eventData;
        const locations = extractLocations(events);
        const cities = locations.map(location => this.getCityFromLocation(location));
        return (
            <div className="scatter-chart-container">
                <div className="scatter-chart">
                    <h4 className="scatter-chart-title">Events in each City</h4>
                    <Scatter
                        options={{
                            layout: {
                                padding: 20,
                            },
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: {
                                legend: {
                                    display: false,
                                }
                            },
                            scales: {
                                x: {
                                    type: 'category',
                                    //labels: cities,
                                    ticks: {
                                        color: "#fff",
                                        font: {
                                            size: 16,
                                        }
                                    },
                                    grid: {
                                        color: '#FEE36E',
                                        borderColor: '#FEE36E',
                                    }
                                },
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        stepSize: 1,
                                        color: "#fff",
                                        font: {
                                            size: 16,
                                        },
                                    },
                                    grid: {
                                        color: '#FEE36E',
                                        borderColor: '#FEE36E',
                                    },
                                }
                            }
                        }}

                        data={this.getChartData(locations, events)}
                    />
                </div>
            </div>
        )
    }
}
ScatterChart.propTypes = {
    eventData: PropTypes.array.isRequired,
};
