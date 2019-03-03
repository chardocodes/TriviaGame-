// API for Trivia game 
//

//You'll create a trivia form with multiple choice or true/false options (your choice).


//TRIED TO GET A TRIVIA API TO CONNECT BUT WAS HAVING A HARD TIME WITH THIS. MOVED ON TO A DIFFERENT APPROACH.



// function callAjax() {
//     var triviaApi = "https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=boolean&encode=url3986"
//     $.ajax({
//         url: triviaApi,
//         method: "GET"
//     }).then(function (results) {
//         // console.log(results);
//         for (var i = 0; i < results.length; i++);
//         quizQuestions++;

//         var category = results.category;

//           // Creating an element to have the question displayed
//           var categoryP = $("<p>").text("Question: " + category);

//         // console.log(quizQuestions);
//         // $("<div>").text(results[i]);
//         // $(".#question").text(response_code.question);

//         // console.log(response_code.length);

//     });
// } callAjax();

// * The player will have a limited amount of time to finish the quiz. 
//Creat timer , setInterval decrement from 100 to zero
//at zero, alert game over


    
        var trivia = [
            {
                "category": "Geography",
                "type": "multiple",
                "difficulty": "medium",
                "question": "What is the capital of Peru?",
                "correct_answer": "Lima",
                "incorrect_answers": [
                    "Santiago",
                    "Montevideo",
                    "Buenos Aires"
                ]
            },
            {
                "category": "Geography",
                "type": "multiple",
                "difficulty": "medium",
                "question": "How many counties in the Republic of Ireland.",
                "correct_answer": "26",
                "incorrect_answers": [
                    "32",
                    "28",
                    "30"
                ]
            },
            {
                "category": "Geography",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Which of the following countries is within the Eurozone but outside of the Schengen Area?",
                "correct_answer": "Cyprus",
                "incorrect_answers": [
                    "Malta",
                    "Greece",
                    "Portugal"
                ]
            },
            {
                "category": "Geography",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Where is the world&#039;s oldest still operational space launch facility located?",
                "correct_answer": "Kazakhstan",
                "incorrect_answers": [
                    "Russia",
                    "Iran",
                    "United States"
                ]
            },
            {
                "category": "Geography",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Which of the following is the longest river in Europe?",
                "correct_answer": "Volga",
                "incorrect_answers": [
                    "Danube",
                    "Ural",
                    "Dnieper"
                ]
            }
        ]
console.log(trivia);


// var value = [];
// console.log([0]);
var currentQuestion =0;
var score =0;
var totalQuestions =trivia.length;

var container = $(".triviaContainer");
var questionEl = $(".question");
var opt1 = $("#opt1");
var opt2 = $("#opt2");
var opt3 = $("#opt3");
var opt4 = $("#opt4");
var nextButton = $("#nextButton");
var resultCont = $("#results");

var loadNextQuestion =
function loadQuestion (trivia){
    var q = questions[trivia];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
    var q1 = $("<p>").text("Question: " + trivia);

    // Displaying the rating
    movieDiv.append(pOne);
};

function loadQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(question[currentQuestion].answer == answer){
        score += 1;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestions -1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totalQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
    }
    loadQuestion(currentQuestion);
}
 loadQuestion(currentQuestion);
