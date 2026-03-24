let questions = [
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correct: 2
    },
    {
        question: "Which language is used for Arduino?",
        options: ["Python", "Java", "C/C++", "HTML"],
        correct: 3
    },
    {
        question: "5 + 3 = ?",
        options: ["6", "8", "9", "7"],
        correct: 2
    },
    {
        question: "Which is an operating system?",
        options: ["Windows", "Keyboard", "Mouse", "Printer"],
        correct: 1
    },
    {
        question: "How many bits in 1 byte?",
        options: ["4", "16", "8", "2"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;
let username = "";
let selectedAnswers = [];

function startQuiz() {
    username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter your name");
        return;
    }

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";

    loadQuestion();
}

function loadQuestion() {
    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;
    document.getElementById("btn1").innerText = q.options[0];
    document.getElementById("btn2").innerText = q.options[1];
    document.getElementById("btn3").innerText = q.options[2];
    document.getElementById("btn4").innerText = q.options[3];

    document.getElementById("progress").innerText =
        "Question " + (currentQuestion + 1) + "/" + questions.length;

    // Remove previous selection highlight
    document.getElementById("btn1").classList.remove("selected");
    document.getElementById("btn2").classList.remove("selected");
    document.getElementById("btn3").classList.remove("selected");
    document.getElementById("btn4").classList.remove("selected");

    // If already answered, highlight selected
    if (selectedAnswers[currentQuestion] != null) {
        document.getElementById("btn" + selectedAnswers[currentQuestion]).classList.add("selected");
    }
}

function selectAnswer(answer) {
    selectedAnswers[currentQuestion] = answer;

    // Remove selected class from all buttons
    document.getElementById("btn1").classList.remove("selected");
    document.getElementById("btn2").classList.remove("selected");
    document.getElementById("btn3").classList.remove("selected");
    document.getElementById("btn4").classList.remove("selected");

    // Add selected class to clicked button
    document.getElementById("btn" + answer).classList.add("selected");
}

function nextQuestion() {
    if (selectedAnswers[currentQuestion] == null) {
        alert("Please select an answer before going to next question.");
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showResult() {
    score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (selectedAnswers[i] == questions[i].correct) {
            score++;
        }
    }

    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("endScreen").style.display = "block";

    document.getElementById("finalMessage").innerText =
        username + ", your score is " + score + "/" + questions.length +
        "\nThank you for playing the Quiz Game!";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswers = [];

    document.getElementById("endScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
}