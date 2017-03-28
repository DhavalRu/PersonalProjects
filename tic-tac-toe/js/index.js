$(document).ready(function() {
    var board = [null, null, null, null, null, null, null, null, null];
    var AIturn = false;
    var playa;
    var compa;
    var cell;
    if ($("#playX").prop("checked", true)) {
        playa = "X";
        compa = "O";
    }
    else {
        playa = "O";
        compa = "X";
    }
    $("#playX").click(function() {
        reset();
        playa = "X";
        compa = "O";
    });
    $("#playO").click(function() {
        reset();
        playa = "O";
        compa = "X";
    });
    $("button").click(function() {
        cell = parseInt($(this).attr("id")[2]);
        $("#"+$(this).attr("id")).prop("disabled", true);
        if (!AIturn) {
            board[cell] = playa;
            AIturn = true;
            board = nextMove(board, compa)[1];
            AIturn = false;
            for (var i = 0; i < 9; i++) {
                if (board[i] === null) {
                    $("#sq" + i).text("");
                }
                else {
                    $("#sq"+i).prop("disabled", true);
                    $("#sq" + i).text(board[i]);
                }
            }
            var winner = checkWinner(board);
            if (winner === 1) {
                $("#winner").text("Computer Wins");
                disableButtons();
                setTimeout(reset, 2000);
            }
            else if (winner === -1) {
                $("#winner").text("You Win");
                disableButtons();
                setTimeout(reset, 2000);
            }
            else if (winner === 0) {
                $("#winner").text("It's a draw");
                disableButtons();
                setTimeout(reset, 2000);
            }
            else {
                $("#winner").text("");
            }
        }
    });

    function reset() {
        board = [null, null, null, null, null, null, null, null, null];
        AIturn = false;
        for (var i = 0; i < 9; i++) {
            $("#sq" + i).text("");
        }
        $("#winner").text("");
        for (var j = 0; j < 9; j++) {
            $("#sq"+j).prop("disabled", false);
        }     
    }

    function disableButtons() {
        for (var j = 0; j < 9; j++) {
            $("#sq"+j).prop("disabled", true);
        }
    }

    function checkWinner(board) {
        for (var i = 0; i < 9; i+=3) { //rows
            if (board[i] === board[i+1] && board[i] === board[i+2] && board[i] === playa) {
                return -1;
            }
            else if (board[i] === board[i+1] && board[i] === board[i+2] && board[i] === compa) {
                return 1;
            }
        }
        for (var j = 0; j < 3; j++) { //columns
            if (board[j] === board[j+3] && board[j] === board[j+6] && board[j] === playa) {
                return -1;
            }
            else if (board[j] === board[j+3] && board[j] === board[j+6] && board[j] === compa) {
                return 1;
            }
        }
        if (board[0] === board[4] && board[0] === board[8] && board[0] === playa) {
            return -1;
        }
        else if (board[2] === board[4] && board[2] === board[6] && board[2] === playa) {
            return -1;
        }
        else if (board[0] === board[4] && board[0] === board[8] && board[0] === compa) {
            return 1;
        }
        else if (board[2] === board[4] && board[2] === board[6] && board[2] === compa) {
            return 1;
        }
        else if (board[0] !== null && board[1] !== null && board[2] !== null && board[3] !== null && 
            board[4] !== null && board[5] !== null && board[6] !== null && board[7] !== null && board[8] !== null) {
            return 0;
        }
        else {
            return null;
        }
    }

    function nextMove(board, player) {
        var winner = checkWinner(board);
        if (winner === null) {
            var value = 0;
            var score = null;
            var nextBoard = [];
            var nextPlayer;
            if (player === "X") {
                nextPlayer = "O";
            }
            else {
               nextPlayer = "X";
            }
            for (var i = 0; i < 9; i++) {
                if (board[i] == null) {
                    board[i] = player;
                    value = nextMove(board, nextPlayer)[0];
                    if ((player === compa && (score === null || value >= score)) || (player === playa && (score === null || value <= score))) {
                        nextBoard = board.slice(); //need to clone board, not just reference it
                        score = value;
                    }
                    board[i] = null;
                }
            }
            return [score, nextBoard];
        }
        else {
            return [winner, board];
        }
    }

  /* Copyright year */
  var today = new Date();
  var year = today.getFullYear();
  var copyright = document.getElementById("copyyear");
  copyright.innerHTML = year;
});