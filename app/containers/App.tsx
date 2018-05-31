import * as React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                 <p style={{color:'red'}}>hello world</p>
                {this.props.children}
            </div>
        );
    }
}
