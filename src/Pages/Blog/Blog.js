import React from 'react';

const BLog = () => {
    return (
        <div className='min-h-screen w-10/12 mx-auto'>
            <div className='my-6 border-b-2'>
                <h3 className='text-2xl font-semibold mb-4'>1. What are the different ways to manage a state in a React application?</h3>
                <p className='m-4 '>Ans: States in react refers to a sitution where data might change. To manage the potential changeable data we use state. The Four Kinds of React State to Manage
                    1. Local state.
                    2. Global state.
                    3. Server state.
                    4. URL state</p>
            </div>
            <div className='my-6 border-b-2'>
                <h3 className='text-2xl font-semibold mb-4'>2. How does prototypical inheritance work?</h3>
                <p className='m-4 '>Ans: Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object,</p>
            </div>
            <div className='my-6 border-b-2'>
                <h3 className='text-2xl font-semibold mb-4'>3. What is a unit test? Why should we write unit tests?</h3>
                <p className='m-4 '>Ans: Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated. A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                    Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base .</p>
            </div>
            <div className='my-6 border-b-2'>
                <h3 className='text-2xl font-semibold mb-4'>4. React vs. Angular vs. Vue ?</h3>
                <p className='m-4 '>Ans: React : <br />
                    React is based on JavaScript, but it is mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.

                    Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it is  more intuitive.
                    <br />
                    Vue : The Vue.js core library focuses on the View layer only. It is called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                    Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you will be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View. <br />
                    Angular : In this article, I am discussing Angular 2, and not the first version of the framework which is now known as AngularJS.

                    AngularJS, the original framework, is an MVC Model-View-Controller framework. But in Angular 2, there is no strict association with MV*-patterns as it is also component-based.
                </p>
            </div>
        </div>
    );
};

export default BLog;