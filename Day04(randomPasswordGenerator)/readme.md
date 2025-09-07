#### Learning about react hooks with a project of password generator
- useState hook :- when we want to render the changes in the ui when we change any variable
- useEffect hook :- allows us to perform side effects (jab bhi page refresh hota hai tab hi ye call hota hai also jab bhi iski given dependency me koi changes ho jaenge tb bhi ye chalega)
- useCallback hook :- it is used to store a function, variable or any other thing in the memory so that we can optimise our program
- useRef hook :- this hook is used when we have to take any refrence in our prog for eg:- when we have to connect our button with one of our input fields.(it is used by creating a variable)

###### Some other concepts

So basically const [variable, function] = useState(initial Value) This is how we change the value and render it to the website 

Also keep in mind to update the variable you cant directly update it you have to call the function and then update in it to understand it more breifly understand it with the help of code.

also in hook the hook basically has 2 parts, 
- hookName(function, [dependency Array]);