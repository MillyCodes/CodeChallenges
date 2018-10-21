var ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {className: 'Contact'},
                React.createElement('h2', {className: 'Contact-name'}, this.props.name)
            )
        )
    }
});


// This snippet defines a new component called ContactItem. Like HTML elements, a ContactItem accepts a list of attributes(props). Unlike HTML elements, you can define whatever props you need.

// an example of usage:: var element = React.createElement(ContactItem, {name: "James K Nelson"})