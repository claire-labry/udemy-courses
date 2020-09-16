## react notes

### JSX restrictions
- class cannot be used in React because it's reserved for JavaScript, must use className
- react defines attributes of tags in quotation marks
- JSX must have one root element, a downside of 
- the parenthesis wrapping around classes, attributes, and components is react returning the code in a structured way

### creating a functional component 
- in the most simplest terms, component is just a function that returns some JSX, some HTML
- must always import React because if don't, JSX will not be returned/rendered correctly
- we don't have to add class component because Person is a functional component. 
- when requring a component in your main App.js be sure to add './' since it's a relative path (think realtive closest to you)
- React elements must be uppercase because lowercase characters like div, h1 are reserved for the native HTML elements

## components & JSX cheat sheet
- QUOTED FROM MAX SCHWARZMÜLLER: 
    - Components are the core building block of React apps. React is really a library for creating components in its core.
    - A typical React app therefore could be depicted as a component tree - having one root component (App) and then a potentially infininate amoun of nested child components. 
    - Each component needs to return/render some JSX code - it defines which HTML code React should render to the real DOM in the end. 
    - JSX is NOT HTML but it looks like it. Differences can be seen when looking closely through (className in JSX verses class in 'normal HTML'). JSX is just syntatic sugar for JavaScript, allowing you to write HTMLish code instea of nested React.createElement(...) calls. 
    - When creating components, you have the choice to explore 2 different ways: 
        1. *functional components* (also referred to 'presentational', or 'stateless' components) => const cmp = () =>{ return <div>some JSX </div>} 
        2. *class-based components* (also referred to 'containers', 'stateful' components) => class Cmp extends Component = () =>{ render(){ return <div>some JSX </div>} }
    - note: you should use functional components as often as possible. 

## working with components & re-using them
- components are easily re-used throughout an application
- JSX code should be dynamic, should output different things depending on the state of your application or on some user input. 

## outputting dynamic content
- if you want to put dynamic content in a react functional component, put curly brackets around them otherwise, it'll output as a text. 

## working with props
- props makes components configurable, flexible, dynamic
- it would be nice to add attributes to components, thus where props come in to help this i.e. in your App.js you have the `<Person>` component and by adding attributes it would look something like this: `<Person name="Claire" age="26" />` but if in the Person functional component, the arugment props must be called in the person function. 
- IMPT NOTE: When using class-based components, it's `{this.props}` instead of `{props.name}` as shown in functional components.

## understanding the 'children' prop
- children prop allows us to output whatever we pass between the opening and closing tag of our custom component. in this case, i'm passing 'Hobbies: Gardening' in the Person component in the App.js file but it will not render unless you wrap your retun with parenthesis, wrap it up with a parent element, and create a new tag with {props.children}
- the 'children' prop is a reserved word
- you can put your content into your component from outside
- props is simply an object giving us access to all the attributes passed into components whether it be inside the custom component tag or in between custom component beginning and ending tags 

## understanding & using state (re-watch)
- aside from props, sometimes you don't want to get some information from the ouside, but you want to have it inside a component (i.e. `<Person name="Claire" age="26" />` but instead having this info in your component rather than App.js)

## props & state
- QUOTED FROM MAX SCHWARZMÜLLER: 
    - `props` and `state` are CORE concepts of React. Actually, only changes in `props` &/or `state` trigger React to re-render your components & potentially update the DOM in the browser.
    - PROPS: 
    - `props` allow you to pass data from a parent (wrapping) component to a child (embeded) component. 
    - EXAMPLE `AllPosts` Component: 
    - ```const posts = () => {
        return (
            <div>
            <Post title='My first Post />
            </div>
        )};
    - here `title` is the custom property (prop) set up on the custom `Post` component. We basically replicate the default HTML attribute behavior we already know (e.g. `<input type='text'>` informs the browser about how to handle that input.)
    - EXAMPLE `Post` Component:
    - ```const post = (props) => {
        return (
            <div>
            <h1>{props.title}</h1>
            </div>
        )};
    - The `Post` component receives the `props` argument. You can ofc name this argument whatever you want, it's your function definition, React doesn't care. (it's highly suggested to use `props` to make your code easier to understand & readable for others.) But React will pass one arguement to your component function => An object which contains all properties you set up on `<Post .../>`
    - `{props.title}` then dynamically outputs the `title` property of the `props` object - which is available since we set the `title` property inside `AllPosts` component (see above)
    - STATE:
    - Whilst props allow you to pass data down the component tree, (and hence trugger an UI update), state is used to change the component, (state from within). Changes to state also trigger an UI update. 
    - EXAMPLE `NewPost` Component: 
    - ```class NewPost extends Component {
        state ={
            counter: 1
        };
        render(){return (
            <div{ths.state.counter}</div>
        )}}
    - here, the `NewPost` component contains `state`. Only class-based components can define and use `state`. You can of course pass the `state` down to functional components, but these then cannot directly edit it. 
    - `state` simply is a property of the component class, you have to call it `state` though - the name is NOT optional. You can access it via `this.state` in your JSX code (which you return in the required `render()` method).
    - Whenever `state` changes, the component will re-render and reflect the new state. The difference to `props` is, that this happens within one and the same component - you don't receive new data(`props`) from outside!


## handling events with methods
- onClick functions must be in camelCase
- Typical practice of naming methods with an onClick function in React should have a 'Handler' at the end to show that it's an event handler & is being called in the application somewhere.
- when calling an event handler in your app, don't put () because that would get executed immediately once react renders it to the dom 

## to which events can you listen?
- refer to the list of supported events here: [https://reactjs.org/docs/events.html#supported-events]

## manipulating the state

## function components naming
- refer to the notes/resource file in the udemy course

## using the useState() Hook for state manipulation

## stateless vs. stateful components

## passing method references between components

## adding two way binding

## adding styling with stylesheets

## assignment #1 time to practice - the base syntax 

(51 out of 490 complete [439 left])

## questions to explore & answers to them
- the difference between functional component and class component? (ANSWERED IN COMPONENTS & JSX CHEAT SHEET)