import React from 'react';

class ToggleDetailsButton extends React.Component {
    render() {
        return (
            <button
                className="button"
                onClick={this.props.onClick}
            >{this.props.children}
            </button>
        );
    }
}


export default ToggleDetailsButton;