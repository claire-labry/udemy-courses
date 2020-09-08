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
        note: you should use functional components as often as possible. 

## questions to explore
- the difference between functional component and class component? (ANSWERED IN COMPONENTS & JSX CHEAT SHEET)