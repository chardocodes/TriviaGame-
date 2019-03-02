// API for Trivia game 
//

//You'll create a trivia form with multiple choice or true/false options (your choice).

function callAjax() {
    var triviaApi = "https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=boolean&encode=url3986"
    $.ajax({
        url: triviaApi,
        method: "GET"
    }).then(function (response) {
        //console.log(response);
        $(".#question").text(response);
        console.log(response);
        
    });
} callAjax();

// * The player will have a limited amount of time to finish the quiz. 
//Creat timer , setInterval decrement from 100 to zero
//at zero, alert game over

var counter = 100;
setInterval(function () {
    counter--
    if (counter === 0) {
        alert("GAME OVER!");
        // clearInterval(counter);
    $("#timer").text(counter)
    } console.log(counter);
}, 1000)




// * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.