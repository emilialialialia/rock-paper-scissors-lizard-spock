$(function() {
    $("img").click(playGame);
    $("#restart").click(restartGame);


    function playGame() {
        // players choice
        var playerChoice = $(this).attr("id");

        // computers choice
        var choices = ["rock", "paper", "scissors", "lizard", "spock"];
        var computerChoice = choices[Math.round(Math.random() * 5)];

        // make output correct
        switch (playerChoice) {
            case "rock":
                if (computerChoice == "rock") {
                    output = "Tie Game!";
                } else if (computerChoice == "scissors" || computerChoice == "lizard") {
                    output = "You Won!"
                } else {
                    output = "You Lost :(";
                }
                break;

            case "paper":
                if (computerChoice == "paper") {
                    output = "Tie Game!";
                } else if (computerChoice == "rock" || computerChoice == "spock") {
                    output = "You Won!"
                } else {
                    output = "You Lost :(";
                }
                break;

            case "scissors":
                if (computerChoice == "scissors") {
                    output = "Tie Game!";
                } else if (computerChoice == "paper" || computerChoice == "lizard") {
                    output = "You Won!"
                } else {
                    output = "You Lost :(";
                }
                break;

            case "lizard":
                if (computerChoice == "lizard") {
                    output = "Tie Game!";
                } else if (computerChoice == "spock" || computerChoice == "paper") {
                    output = "You Won!"
                } else {
                    output = "You Lost :(";
                }
                break;

            case "spock":
                if (computerChoice == "spock") {
                    output = "Tie Game!";
                } else if (computerChoice == "scissors" || computerChoice == "rock") {
                    output = "You Won!"
                } else {
                    output = "You Lost :(";
                }
                break;
        }



        // put images on end screen
        $("#" + playerChoice).clone().appendTo("#endScreen");
        $("#" + computerChoice).clone().appendTo("#endScreen");

        // output results
        $("#screen").hide();
        $("#output").text(output);
        $("#endScreen").show();



    }


    /* MY ORIGINAL THINKING, thought it would be interesting to include this */

    // function playGame() {
    //     // players choice
    //     var playerChoice = $(this).attr("id");

    //     // computers choice
    //     var choices = ["rock", "paper", "scissors", "lizard", "spock"];
    //     //var computerChoice = choices[Math.round(Math.random() * 5)];
    //     var computerChoice = "rock";

    //     // determine if you win, lose or tie
    //     switch (playerChoice) {
    //         case "rock":
    //             if (computerChoice == "rock") {
    //                 tieGame(playerChoice);
    //             } else if (computerChoice == "scissors" || computerChoice == "lizard") {
    //                 playerWon(playerChoice, computerChoice);
    //             } else {
    //                 computerWon(playerChoice, computerChoice);
    //             }
    //             break;

    //         case "paper":
    //             if (computerChoice == "paper") {
    //                 tieGame(playerChoice);
    //             } else if (computerChoice == "rock" || computerChoice == "spock") {
    //                 playerWon(playerChoice, computerChoice);
    //             } else {
    //                 computerWon(playerChoice, computerChoice);
    //             }
    //             break;
    //         case "scissors":
    //             if (computerChoice == "scissors") {
    //                 tieGame(playerChoice);
    //             } else if (computerChoice == "paper" || computerChoice == "lizard") {
    //                 playerWon(playerChoice, computerChoice);
    //             } else {
    //                 computerWon(playerChoice, computerChoice);
    //             }
    //             break;
    //         case "lizard":
    //             if (computerChoice == "lizard") {
    //                 tieGame(playerChoice);
    //             } else if (computerChoice == "spock" || computerChoice == "paper") {
    //                 playerWon(playerChoice, computerChoice);
    //             } else {
    //                 computerWon(playerChoice, computerChoice);
    //             }
    //             break;
    //         case "spock":
    //             if (computerChoice == "spock") {
    //                 tieGame(playerChoice);
    //             } else if (computerChoice == "scissors" || computerChoice == "rock") {
    //                 playerWon(playerChoice, computerChoice);
    //             } else {
    //                 computerWon(playerChoice, computerChoice);
    //             }
    //             break;
    //     }
    // }

    // function tieGame(playerChoice) {
    //     var output = "Tie Game";
    //     // copies image twice, tied so same roll
    //     $("#" + playerChoice).clone().appendTo("#endScreen");
    //     $("#" + playerChoice).clone().appendTo("#endScreen");

    //     // output results
    //     $("#screen").hide();
    //     $("#output").text(output);
    //     $("#endScreen").show();

    // }

    // function playerWon(playerChoice, computerChoice) {
    //     var output = "You Won!";

    //     // copies your image, then computer image
    //     $("#" + playerChoice).clone().appendTo("#endScreen");
    //     $("#" + computerChoice).clone().appendTo("#endScreen");


    //     // output results
    //     $("#screen").hide();
    //     $("#output").text(output);
    //     $("#endScreen").show();
    // }

    // function computerWon(playerChoice, computerChoice) {
    //     var output = "You lost :(";

    //     // copies your image, then computer image
    //     $("#" + playerChoice).clone().appendTo("#endScreen");
    //     $("#" + computerChoice).clone().appendTo("#endScreen");


    //     // output results
    //     $("#screen").hide();
    //     $("#output").text(output);
    //     $("#endScreen").show();
    //     $("#startScreen").hide();

    // }

    function restartGame() {
        $("#endScreen img").remove();
        $("#screen").show();
        $("#endScreen").hide();

    }
});