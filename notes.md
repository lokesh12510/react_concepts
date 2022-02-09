**React Notes!**

# createElement

React.createElement("div": <string>,{id:'name'}:<object will apply to the element>,'Hello world!':<child for 'div' tag>)

# Props
Can't change the value of props in a component (props are immutable)

# State
[1] State is a object that is privately maintained inside the component
[2] Don't directly change state, it will not re-render the component, change only through setState() method.
[3] setState() is a async operation.
[4] setState() accepts second args which is a callback func(arrow func). which will executes after the state is changed. 
[5] If you want to change the state based on prevState pass a func, instead of regular object. It also has a second args "props"


*React QA!*

[1] What do you like and dislike about React?
        It is javascript under the hood, also its  unidirectional flow from parent to child. Angular and Vue has two way data flow and own syntax.

[2] Conditional and List rendering?
[3] What is the significance of having the key prop when rending list?
        Key is a special-string attribute you need to include when creating lists. It give stable identity to elements. Is helps react identify which items have changed, added or removed. It helps in efficient update of user interface.


[4] How react compares what is changed using props as key?
[5] What is a potential bug that you can introduce when using index as key?
[6] Class component's lifecycle methods? Learn mounting phase, the updation phase and unmounting phase and order of invocation and when to use each of them?
[7] Context API & Props drilling?
[8] What was the need for hooks? useState, useEffect and useContext, how it related to lifecycle methods?
        1.Understand how this keyword works, Remember to bind event handlers in class components, Classes don't minify very well and make hot reloading very unreliable.
        2. setState in class comp. will merge the state, but in func comp. setter func. provided with hook will update the state, we need to merge the state manually.
[9] About Pure components, React Memo, useMemo and useCallback hook and how do they prevent unnecessary re-rendering? 
        1. useCallback is a hook that will return a memorized version of the callback function that only changes if one of the dependencies has changed.


[10] How to share logic across components? like using Higher order components, Render props pattern & Custom hooks?
[11] What are some of packages that you use along with React?
        From styling, Routing, Form handling, State management, CRA vs Custom webpack config
[12] What is wekpack? 

<!-- Redux -->

[13] What is Redux?
[14] How to decide Context API or Redux?
[15] What are redux store, actions, action creators, reducers, control flow b/w parts.
[16] What does the connect function do from the react-redux library?
[17] What do mapStateToProps and mapDispatchToProps do?
[18] Why should you dispatch an action to update the state and not update to store directly?
[19] In a reducer, why should you return a new object as state and not modify the existing state object?
[20] Diff b/w typeScript and javaScript?

*---------TypeScript!----------*
        Typescript is a superset of javascript, it does everything that js does, but with some added features. Using ts is to add static typing to js, means variable type cannot be changed at any point in a program. Js is a dynamically typed language, variables can change type.

        Interface can be extendable using the extends keyword, extending a type is via intersections.

        Interface can be reopened to add new fields, but type cannot changed.


## Re-rendering process

        React has two phase -> render and commit phase

        In Render phase, it find all elements flagged for update.
        For each ele flagged, convert JSX to React ele and result is stored.
        Then perform reconciliation - differentiate old and new tree of react elements ( which is knows as virtual DOM)

        Then hand over the changes to next phase (commit phase)

        In commit phase - changes are applied to the DOM

        React uses object.is algorithm to compare the changes

        Mutating an object or an array as state will not cause re-render when used with the useState or useReducer hook.

        To re-render, make a copy of the existing state, modify as necessary and then pass the new state to the setter function or while returning from a reducer function.

        Directly mutating create bugs.

        React will re-render child comp. only when the parent comp re-rendered (not because the props changed.)

        To optimize unnecessary re-rendering of child comp. Usee React.memo, it will perform a shallow comparison of the previous and new props and re-render the child comp only if the props have changed.

        Incorrect method of using react.memo on impure components like using date, random etc.