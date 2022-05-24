import React from 'react';

class ToggleDetailsButton extends React.Component {
    render() {
        return (
            <button
                className="button"
                onClick={this.props.onClick}
            >show details
            </button>
        );
    }
}


export default ToggleDetailsButton;