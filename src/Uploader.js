import React from 'react';
import { CSVReader } from 'react-papaparse';
import Maps from './Maps';

class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: [],
            viewMap: false,
        }
    }

    handleReadCSV = (data) => {
        //console.log('handledata', data);
        this.setState({
            mydata: data.data,
            viewMap: true,
        });
    }

    handleOnError = (err, file) => {
        console.log(err);
    }

    render() {
        const myMap = this.state.viewMap ? <Maps location={this.state.mydata} /> : false;
        //console.log(this.state.mydata);
        return (
            <div>
                <h3>Upload a .csv file</h3>
                <CSVReader
                    onFileLoaded={this.handleReadCSV}
                    //inputRef={this.fileInput}
                    //style={{ display: 'none' }}
                    onError={this.handleOnError}
                    configOptions={{ header: true }}
                />
                {myMap}

            </div>
        );

    }
}

export default Uploader;