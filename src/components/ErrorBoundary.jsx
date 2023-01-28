import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            message: ""
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error:', error);
        console.log('errorInfo:', errorInfo);
        this.setState({ error: true, message: JSON.stringify(errorInfo) })
    }

    render() {
        if (this.state.error) {
            return <div>
                <h3>500 - Internal Server Error</h3>
                <h6>{this.state.message}</h6>
            </div>
        }

        return this.props.children
    }
}

export default ErrorBoundary;