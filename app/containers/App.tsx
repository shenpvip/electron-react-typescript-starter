import React, { PureComponent } from 'react'

export default class App extends PureComponent<Props, object> {
    render() {
        return (
            <div>
                <p style={{ color: 'red' }}>hello world</p>
                {this.props.children}
            </div>
        );
    }
}
