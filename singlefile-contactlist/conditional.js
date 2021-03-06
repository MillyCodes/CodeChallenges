var contacts = [
    {key: 1, name: "James Nelson", email: "james@jamesknelson.com"},
    {key: 2, name: "Bob"}
]

var listElements = contacts
    .filter(function(contact) { return contact.email;})
    .map(function(contact) {
        return  React.createElement('li', {key: contact.key},
            React.createElement('h2', {}, contact.name),
            React.createElement('a', {href: 'mailto:'+contact.email},
            contact.email)
        )
    })


var rootElement = 
    React.createElement('div', {},
        React.createElement('h1', {}, "Contacts"),
        
        //if children is an array, must give each a unique key prop 
        React.createElement('ul', {}, listElements)
    )

ReactDOM.render(rootElement, document.getElementById('react-app'))










