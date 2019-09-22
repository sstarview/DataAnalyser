import React from 'react';

import { CSVReader } from 'react-papaparse';

class PapaParse extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    handleReadCSV = (data) => {
        console.log(data);
    }

    handleOnError = (err, file, inputElem, reason) => {
        console.log(err);
    }

    handleImportOffer = () => {
        this.fileInput.current.Click();
    }

    render() {
        const { myData } = this.handleReadCSV;
        console.log('mydata...........', myData);
        return (
            <div>
                <CSVReader
                    onFileLoaded={this.handleReadCSV}
                    inputRef={this.fileInput}
                    style={{ display: 'none' }}
                    onError={this.handleOnError}
                    configOptions={{ header: true /* Header row support */ }}
                />
                <button onClick={this.handleImportOffer}>Import</button>
            </div>
        );
    }
}

export default PapaParse;