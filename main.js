let questions = [
    {
        question: " Q1: HTML Stands For ?",
        option: [
            "Hyper Text Markup Language",
            "Case Cading Language",
            "Hyper Text Mockyp Language",
            "None of this",
        ],
        correctans: "Hyper Text Markup Language",
    },
    {
        question: "Q2: CSS Stands For ?",
        option: [
            "Case Style Sheet",
            "Case Code Style Sheet",
            "Case Cading Style Sheet",
            "None of this",
        ],
        correctans: "Case Cading Style Sheet",
    },
    {
        question: "Q3: RAM Stands For ?",
        option: [
            "Read Only Memory",
            "Read a Module",
            "Readom Access Memory",
            "Readom Account Model",
        ],
        correctans: "Readom Access Memory",
    },
    {
        question: "Q4: JS Stands For ?",
        option: [
            "JAVAS",
            "JavaScript",
            "Hyper Text Mockyp Language",
            "None of this",
        ],
        correctans: "JavaScript",
    },
    {
        question: "Q5: DOM Stands For ?",
        option: [
            "Document Object Module",
            "Data Object Module",
            "Html",
            "Document Oriented Module",
        ],
        correctans: "Document Object Module",
    },
    {
        question: "Q6: Why We Use HTML ?",
        option: [
            "To Design Structure",
            "To Create Logic",
            "To Create Structure",
            "To Join With Server",
        ],
        correctans: "To Create Structure",
    },
];

const questionHeading = document.getElementById('question');
const answerContainer = document.getElementById('button-div');
const currentQuestionDiv = document.getElementById('currentquestionnumber');
const totalQuestionDiv = document.getElementById('totalquestionnumber');
const resultdiv = document.getElementById('result');
const maindiv = document.getElementById('main');
const totalScore = document.getElementById('markvalue');

var currentQuestionIndex = 0;
var score = 0;

function showQuestion() {
    questionHeading.innerHTML = questions[currentQuestionIndex].question;

    
    totalQuestionDiv.innerText = "TOTAL NUMBER 6";
    answerContainer.innerHTML = "";

    for (let index = 0; index < questions[currentQuestionIndex].option.length; index++) {
        var option = questions[currentQuestionIndex].option[index];
        var correct = questions[currentQuestionIndex].correctans;
        answerContainer.innerHTML += `
        <button onclick="checkAnswer('${option}', '${correct}')" class="opt-btn">${option}</button>
        `;
    }
}

showQuestion();

function checkAnswer(option, correct) {
    if (option === correct) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex + 1 === questions.length) {
        totalScore.innerText = score;
    } else {
        currentQuestionIndex++;
        showQuestion();
    }
}
