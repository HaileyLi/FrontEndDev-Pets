

import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <h1>Male:</h1>
                {this.props.maleCat.length === 0 ?
                    <span>No Cats Recorded</span> :
                    <ul>
                        {this.props.maleCat.sort().map(item =>
                            <li>{item}</li>
                        )}
                    </ul>}
                <h1>Female:</h1>

                {this.props.femaleCat.length === 0 ?
                    <span>No Cats Recorded</span> :
                    <ul>
                        {this.props.femaleCat.sort().map(item =>
                            <li>{item}</li>
                        )}
                    </ul>}

            </div>
        );
    }
};

export default Display;
