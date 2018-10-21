## Writing a single-file React.js app

[following along with this article on learning raw react -no JSX, no flux, no ES6, no Webpack..](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)

#### file: index.js 
* Create basic html page with empty div id: react-app
* Create js file where React.createElement makes a contact list and generates an element and its corresponding content using this template from th documentation: ``` createElement(string/ReactClass type, [object props], [children ...]) -> ReactElement -> Example: React.createElement('h1', {}, "Contacts")``` (NOTE: CLASS)

* **This shows what React does at it’s most basic, React is a tool for rendering HTML with JavaScript. ```ReactDOM.render``` takes a ReactElement object describing what to render, adding the result to the given DOM node.**

* type: specifies what kind of HTML element to use; also allows specification of custom elements. 
* props: argument is a way of specifying which attributes are defined on the HTML element, as seen in the mailto link in the exercise.
* children: argument can be a string or ReactElement objects(or arrays of the same) which will be used for the returned elements content. 
* By choosing to omit or specify children, you can return a single ReactElement or an entire tree.
### file conditional.js
Since createElement is just plain JavaScript, you can mix in loops, if statements, and anything else JavaScript allows. You can also easily substitute in data stored in JSON. 

For example as in the conditional script, if you had a list of contacts but didn’t want to render the ones without e-mail addresses, you could do something like what is done in this file.

## Neat... Components
```React.createElement``` isn’t limited to standard HTML. It also lets you create your very own components!



