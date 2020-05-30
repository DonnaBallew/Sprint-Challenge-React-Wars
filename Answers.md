# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a user interface component library built by Facebook to solve managing all the data without bogging down the DOM or web browser. Rather than working with the DOM directly, React creates a virtual representation of what the DOM will be. The HTML elements will be given to the engine (virtual DOM) and React will take the code and compile it to the screen.
In a process called "reconciliation" React will detect that the state of the app has changed. It will then update the DOM taking note of which nodes have changed due to the state of changes.
And this is how it takes the pressure off the browser. By doing so, it creates a smooth experience for users.

2. Describe component state.

State is a plain JavaScript object and is managed within the component (similar to variables declared within a function). State object is where you store property values that belong to the component.
When the state object changes, the component re-renders.

3. Describe props.

Props are plain JavaScript objects that get passed to the component (similar to function parameters). Props are arguments passed into React components via HTML attributes.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that affects something outside the scope of the function being executed. Examples of side effects are fetching data from an API, timers, logging, and manually manipulating the DOM.
There are two catagories of side effects in React components...side effects that require clean up and those that don't. You use an effect hook to perfom a side effect in function components.

Regarding synching, React synchronizes the DOM according to our current props and state. Think of useEffect in a similar way. useEffect lets you synchronize things outside of the React tree according
to our props and state. Only the parts that changed are updated. Using a dependency array as the second arguement in the effect hook will tell it which state or props the effect should be synched with.
