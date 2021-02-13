import React, {Component} from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, redirect: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(" Error boundary caught an error.", error, errorInfo);
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000);
        }
    }

    render() {

        // first thing inside render
        if (this.state.redirect) {
            return <Redirect to="/" noThrow />;
        }

        if (this.state.hasError) {
            return (
                <h1>
                    There was an error with this listing. <Link to="/">Click here</Link>{" "}
                    to back to the home page or wait five seconds.
                </h1>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;