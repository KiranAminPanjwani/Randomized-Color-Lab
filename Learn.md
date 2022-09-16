# Learning Through This Project:
Through this readme, you will learn about one of the hooks provided by React, called useState. Also sometimes called "State Hook". This lets us add native state to React function components.



**<h3>What is a Hook?</h3>** A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.


**<h3>When would I use a Hook?</h3>** If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.


**<h3>When is useState() in React?</h3>** The **useState()** is a Hook that allows you to have state variables in functional components . To use the <ins>useState</ins> Hook, we first need to <ins>import</ins> it at the top of our component.
_Like this:_

![image](https://user-images.githubusercontent.com/90326051/190815728-f880cbb3-9c99-4d0f-a6e1-0c7055016ceb.png)

</br>

_Now, let's take an example of useState():_

![image](https://user-images.githubusercontent.com/90326051/190823399-5e73ffde-70d0-4454-8dbe-b407dbc6fb07.png)

**<h3>What does calling useState do?</h3>**  It declares a “state variable”. Here, our variable is _**isWin**_ but we could call it anything else, like _**dolphin**_. This is a way to “preserve” some values between the function calls — **useState** is a new way to use the exact same capabilities that **this.state** provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.

