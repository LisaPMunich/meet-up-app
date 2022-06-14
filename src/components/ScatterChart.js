import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {extractLocations, getEvents, checkToken, getAccessToken} from './api';


export default class ScatterChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ["1", "2", "3", "4"],
                datasets: [
                    {
                        label: "city",
                        backgroundColor:"rgba(255,0,255,0.75)",
                        data:[4,5,1,10,32,2,12]
                    },
                    {
                        label:"number of events",
                        backgroundColor: "rgba(0,255,0,0.75)",
                        data:[14,15,21,0,12,2,12]
                    }
                ]
            }
        }
    }

        // getChartData = canvas => {
        // const data = this.state.data
        //     // const {locations, events} = this.state;
        //     // const data = locations.map((location) => {
        //     //     const number = events.filter((event) => event.location === location).length
        //     //     const city = location.split(', ').shift()
        //     //     return {city, number};
        //     // })
        //     return data;
        // };

        render() {
            return (
                <div style={{position: "relative", width: 600, height: 550}}>
                    <h4>Events in each city</h4>
                    <Line
                        options={{
                            responsive: true
                        }}
                        data={this.state.data}
                    />
                </div>
            )
        }
    }



