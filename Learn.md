# Learning Through This Project:

Random-Color-Lab Project is easy to play and understand color guessing game. I created this website while learning front-end development. In this project, I used all the basic React JS principles (components, properties, and hooks), and color hex codes are stored using the UseState() - Hook concept. I believe this project will help the learners to understand the basic concepts of React and how to implement them. 

👉Through this readme, you will learn about one of the hooks provided by React, called _**useState**_. Also sometimes called "_**State Hook**_". This lets us add native state to React function components.



**<h3>What is a Hook?</h3>** A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.


**<h3>When would I use a Hook?</h3>** If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.


**<h3>When is useState() in React?</h3>** The **useState()** is a Hook that allows you to have state variables in functional components . To use the <ins>useState</ins> Hook, we first need to <ins>import</ins> it at the top of our component.
_Like this:_

![image](https://user-images.githubusercontent.com/90326051/190815728-f880cbb3-9c99-4d0f-a6e1-0c7055016ceb.png)

</br>

_Now, let's take an example of useState():_

![image](https://user-images.githubusercontent.com/90326051/190823399-5e73ffde-70d0-4454-8dbe-b407dbc6fb07.png)

**<h3>What does calling useState do?</h3>**  It declares a “state variable”. Here, our variable is _**isWin**_ but we could call it anything else, like _**dolphin**_. This is a way to “preserve” some values between the function calls — **useState** is a new way to use the exact same capabilities that **this.state** provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.

_Some other examples:_

![image](https://user-images.githubusercontent.com/90326051/190826413-47fa93ea-1565-450f-8d1f-c2e9973a5461.png)

- _**Line 6:**_	Represents an array useState to hold 6 different color hexcodes.
- _**Line 7:**_	Represents a numerical useState and here its initial value is set to zero.
- _**Line 8:**_	Represents a boolean useState and its initial value can be set to null/true/false.


**<h3>What does useState return?</h3>** It returns a pair of values: the current state and a function that updates it. This is why we write _const [num, setnum] = useState()_.

_For example:_

<img width="40%" align="right"   src="https://user-images.githubusercontent.com/90326051/190826834-6132792d-43ab-4774-9768-32d1dc85ac5b.png" >

- _**Line 1:**_	We import the **useState** Hook from React. It lets us keep local state in a function component.
- _**Line 4:**_	Inside the _**Example**_ component, we declare a new state variable by calling the _**useState**_ Hook. It returns a pair of values, to which we give names. We’re calling our variable num because it holds the number of button clicks. We initialize it to zero by passing _**0**_ as the only _useState_ argument. The second returned item is itself a function. It lets us update the num so we’ll name it _**setnum**_.
- _**Line 9:**_	When the user clicks, we call setnum with a new value. React will then re-render the _**Example**_ component, passing the new _**num**_ value to it.



