# Coding Challenges

This is my coding challenges.

## First challenge - Return the Sum of Two Numbers
Description - Create a function that takes two numbers as arguments and returns their sum.

Folder: AdditionFunction

Completed: true

## Instructions

### 1. Git pull


To get started, you need to pull the latest changes from the repository to your local machine. Follow these steps:

    1. Open your bash.
    2. Navigate to the /coding-challenges directory using the cd command. (or you can right click on the folder and click "open with terminal")
    3. Check if you are on the correct branch by running git branch. You should be on the "main" branch, which will be highlighted  in green.
    4. Pull the latest changes by running git pull.

After pulling the changes, you should see the new folders and files that have been added to the repository.
Once you complete a challenge or all challenges (it's up to you), make sure to upload your changes to GitHub by running the following commands:

```
git add --all
git commit -m "Write a meaningful commit message here, e.g., 'Completed challenge: isLessThan100'"
git push
```
This will push your changes to the main branch. Don't worry about using other branches for now.


### 2. Setting up NPM
Once you have the latest changes in your local machine, you will need to run a command in bash to install Jest.
To do this, in the main directory (coding-challenges) you need to run 
```
npm install
```
This should intall the node_modules folder. How does it know to intall jest? Remember the package.json? This command will install the required packages specified in the package.json file, including Jest, which is used for running tests.

### 3. Starting the challenges

Open up the challenge you want to do by going to into the folder and opening up index.js
In there you will see the function, for example
```
function functionName(){
    //insert logic
}
```
and a little code at the end of the file, 
```
module.exports = functionName
```
Dont worry about that, it just tells javascript to use the function else where, in other files using imports/requires.


Your task is to implement the function logic inside the functionName function where the comment indicates.

To test your solution, run the following command in your terminal or command prompt:

```
npm run test -- --testPathPattern AdditionFunction or
npm run test -- --testPathPattern olderthanme (which ever one you worked on)

```



This command will run the tests associated with the challenge and provide feedback on whether your solution is correct.
If all tests pass, congratulations! You can move on to the next challenge.

note: Don't forget to return your answer
i.e.

```
function functionName(){
    const name = "Mohammed"
    return name <--- 
}

```