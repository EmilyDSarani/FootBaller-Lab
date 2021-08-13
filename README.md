## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

Exercise: make a football scoreboard that keeps track of two teams’ scores. Scores should increment by 7 every time the button is clicked.

HTML- Need 4 buttons and 2 divs
Teams: The Montegues vs The Capulets 
Montegue Scores go up and down with click
Capulets Scores go up and down with click

Events- need there to be a click where the scores go up and down