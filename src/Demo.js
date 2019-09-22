import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';


const TOKEN = 'pk.eyJ1Ijoic3N0YXJ2aWV3IiwiYSI6ImNrMG1zamdpazAxYnozZW9ob2lodzQzZjMifQ.LckCtFkvir7P1LUEiAI4tg';

class Demo extends React.Component {

    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };

    _onViewportChange = viewport => {
        if (viewport.longitude > 0) {
            viewport.longitude = 0;
        }
        this.setState({ viewport });
    }

    _goToNYC = () => {
        const viewport = { ...this.state.viewport, longitude: -74.1, latitude: 40.7 };
        this.setState({ viewport });
    }

    render() {
        return (
            <div>
                <ReactMapGL {...this.state.viewport} mapboxApiAccessToken={TOKEN} onViewportChange={this._onViewportChange}>
                    <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>

                        <img src='/location.svg' alt='Location Icon'></img>

                    </Marker>
                </ReactMapGL>
                <button onClick={this._goToNYC}>New York City</button>
            </div>
        );
    }
}

export default Demo;