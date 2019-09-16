import React from 'react';

class Uploader extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <div id='m'>
                <h3>Upload a .csv file</h3>
                <input type='file' />
                <input type='submit' />

            </div>
        );

    }
}

export default Uploader;