
/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function () {
    // 1. Build a function constructor called Question to describe a question.
    
    function Question(ques, ans, correct) {
        this.question=ques;
        this.answer=ans;
        this.correct=correct;
    }
    
    // 4. Select one random question and log it on the console
    
    Question.prototype.ask = function () {
        console.log(this.question);
        for(let i=0; i<this.answer.length; i++) {
            console.log(i + ": " + this.answer[i]);
        }
    }
    // 6. Check if the answer is correct and print to the console whether the answer is correct ot not
    
    Question.prototype.check = function () {
        if(answ===this.correct) {
            console.log('Wow! correct answer :)');
        }
        else {
            console.log('Wrong answer, Try again :(');
        }
    }
    
    
    // 2. & 3. Create a couple of questions using the constructor & Store them all inside an array
    
    let questions=[];
    questions.push(new Question('How many days do we have in a week?', ['Six', 'Seven', 'Five', 'Four'], 1));
    questions.push(new Question(' How many days are there in a year?', [300, , 500, 365], 2));
    questions.push(new Question('How many colors are there in a rainbow?', [3, 5, 7], 2));
    questions.push(new Question('Which animal is known as the ‘Ship of the Desert?', ['Dog', 'Cat', 'Zebra', 'Camel'], 3));
    questions.push(new Question("How many letters are there in the English alphabet?", [5, 10, 18, 26], 3));
    questions.push(new Question('How many consonants are there in the English alphabet?', [5, 21, 20, 10], 1));
    questions.push(new Question('How many sides are there in a triangle?', [1, 2, 3, 5], 2));
    questions.push(new Question('In which direction does the sun rise?', ['North', 'West', 'East', 'South'], 2));
    questions.push(new Question('What do you call a type of shape that has five sides?', ['Pentagon', 'Decagon', 'Triangle', 'Square'], 0));
    questions.push(new Question('Which month of the year has the least number of days?', ['January', 'December', 'February', 'May'], 2));
    questions.push(new Question('What is a baby frog called?', ['Cub', 'Baby', 'Tadpole', 'Puppy'], 2));
    questions.push(new Question('We smell with our', ['Ears', 'Nose', 'Mouth', 'Eyes'], 1));
    questions.push(new Question('Which is the largest mammal?', ['Whale', 'Deer', 'Lion', 'Anaconda'], 0));
    questions.push(new Question('What do you call the person who brings a letter to your home from post office?', ['Postman', 'Doctor', 'Driver', 'Teacher'], 0));
    questions.push(new Question('Who was the first prime minister of India?', ['Mahatma Gandhi', 'Pandit Jawaharlal Nehru', 'Narendra Modi', 'Indira Gandhi'], 1));
    questions.push(new Question('Who was the first man to walk on the moon?', ['Michael Collins', 'Yuri Gagarin', 'Buzz Aldrin', 'Neil Armstrong'], 3));
    questions.push(new Question('How many primary colors are there?', [1, 2, 3, 4], 2));
    questions.push(new Question('Which way is anti-clockwise, left or right?', ['Left', 'Right'], 0));
    questions.push(new Question('How many equal sides does an isosceles triangle have?', [1, 2, 3, 0], 1));
    questions.push(new Question('How many days are there in the month of February in a leap year?', [28, 29, 20, 21], 1));
    questions.push(new Question('What do you call a house made of ice?', ['Tent', 'Home', 'Boat house', 'Igloo'], 3));
    questions.push(new Question('Which is the longest river on the earth?', ['Amazon', 'Niel', 'Ganga', 'Brahamputra'], 1));
    questions.push(new Question('Which is the principal source of energy for earth?', ['Sun', 'Moon', 'Stars', 'Electricity'], 0));
    questions.push(new Question('Which is the smallest continent?', ['Asia', 'Africa', 'Australia', 'India'], 2));
    questions.push(new Question('What is the standard taste of the water?', ['Sour', 'Salty', 'Tastless', 'Sweet'], 2));
    questions.push(new Question('Which is the tallest mountain in the world?', ['Alps', 'Mt. Fuji', 'Mt. Everest', 'Kanchanjanga'], 2));
    questions.push(new Question('Which country is called the land of rising sun?', ['Korea', 'Japan', 'New Zeland', 'Canada'], 1));
    questions.push(new Question('Which is the fastest animal on the land?', ['Ostrich', 'King Cobra', 'Cheetah', 'Lion'], 2));
    questions.push(new Question('Which planet is known as the Red Planet?', ['Venus', 'Mercury', 'Mars', 'Jupiter'], 2));
    questions.push(new Question('The largest ‘Democracy’ in the world?', ['China', 'Mexico', 'England', 'India'], 3));
    questions.push(new Question('Which is the largest country in the world?', ['China', 'India', 'Japan', 'Russia'], 3));
    
    console.log(questions);
    
    let rand=Math.floor(Math.random()*questions.length);
    
    questions[rand].ask();
    
    // 5. Use the 'prompt' function to ask the user for the correct answer.
    let answ=parseInt(prompt(questions[rand].question));
    questions[rand].check(answ);
})();