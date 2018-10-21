import React, { Component } from "react";

class Counter extends Component {
    //with componentDidUpdate we can figure out if we want to mke an ajax call to get new data based on the changes in props and state objects

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("prevProps: ", prevProps);
    //     console.log("prevState: ", prevState);
    //     if (prevProps.counter.value !== this.props.counter.value) {
    //         console.log("hi");
    //         Ajax call and get new data from the server.
    //     }
    // }

    // componentWillUnmount() {
    //     // this method runs just before a component is removed from the DOM. State of App component is changed so the entire component tree is re-rendered without this counter component, a new virtual dom. This method can be used to clean up any set up timers or listeners.
    //     console.log("Counter - Unmount");
    // }

    render() {
        console.log("Rendered - Counter");
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2"
                >
                    +
                </button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-primary btn-sm m-2"
                >
                    -
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
