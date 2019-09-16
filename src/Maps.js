import React from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1Ijoic3N0YXJ2aWV3IiwiYSI6ImNrMG1zamdpazAxYnozZW9ob2lodzQzZjMifQ.LckCtFkvir7P1LUEiAI4tg';

class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 12.9716,
                longitude: 77.5946,
                zoom: 8
            }
        }
    }
    render() {
        console.log('token', TOKEN) //process.env.REACT_APP_MAPBOX_TOKEN);
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken={TOKEN}
                onViewportChange={(viewport) => this.setState({ viewport })}
            >
            </ReactMapGL>
        );
    }
}

export default Maps;