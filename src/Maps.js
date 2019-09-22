import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Chart from './Chart';

const TOKEN = 'pk.eyJ1Ijoic3N0YXJ2aWV3IiwiYSI6ImNrMG1zamdpazAxYnozZW9ob2lodzQzZjMifQ.LckCtFkvir7P1LUEiAI4tg';

class Maps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 580,
                height: 480,
                latitude: 12.9716,
                longitude: 77.5946,
                zoom: 8
            },
            data: []


        }
        // this.handleMapChange = this.handleMapChange.bind(this);
    }

    _onViewportChange = viewport => {
        this.setState({
            viewport,
            data: this.state.data
        })
    }

    componentDidMount() {
        this.setState({
            data: this.props.location
        })
        console.log('cdm', this.state.data);
    }
    // componentDidUpdate(preState) {
    //     if (!preState.data === this.props.location) {
    //         this.setState({
    //             data: this.props.location
    //         })
    //         console.log('update', this.state.data)
    //     }
    // }

    render() {
        // console.log('map', this.props.location) //process.env.REACT_APP_MAPBOX_TOKEN);
        const myLocation = this.state.data.map(item => ({ id: parseFloat(item.id), lat: parseFloat(item.from_lat), long: parseFloat(item.from_long) }));
        // const icon = myLocation.map(mark => {
        //     return
        //     <Marker latitude={mark.lat} longitude={mark.long} offsetLeft={-20} offsetTop={-20}>

        //         <img src='/location.svg' alt='Location Icon'></img>

        //     </Marker>
        // });
        const my = myLocation.slice(0, 3945);

        // const vvar = {
        //     name: 'salman',
        //     id: 55,
        //     calue: 'kkjk'
        // }
        // console.log('render', this.state.data);
        //const val = my.map(i => i.lat);
        //console.log('render', vvar.id, vvar.name);
        // console.log('render', my);




        return (
            <div>
                <ReactMapGL
                    {...this.state.viewport}
                    mapboxApiAccessToken={TOKEN}
                    onViewportChange={(viewport) => this.setState({ viewport })}
                >
                    {my.map((mark) => {
                        return (
                            <Marker key={mark.id} latitude={mark.lat} longitude={mark.long}
                                offsetLeft={-20} offsetTop={-20}>

                                <img src='/location.svg' alt='Location Icon'></img>

                            </Marker>
                        );
                    })}


                </ReactMapGL >
                {/* {myLocation.map(item => {
                    return (
                        <div key={item.id}>
                            <h3>{item.id} Location: {item.from_long}</h3>
                        </div>
                    )
                })} */}

                <Chart chartData={this.state.data} />
            </div>


        );
    }
}

export default Maps;