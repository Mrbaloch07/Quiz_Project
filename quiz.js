const quizData = [
    {
        question: "What is the capital city of Pakistan?",
        choices: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        correctAnswer: "Islamabad"
    },
    {
        question: "Which river is the longest in Pakistan?",
        choices: ["Chenab", "Indus", "Jhelum", "Ravi"],
        correctAnswer: "Indus"
    },
    {
        question: "Who is known as the Father of the Nation in Pakistan?",
        choices: ["Allama Iqbal", "Liaquat Ali Khan", "Muhammad Ali Jinnah", "Zulfikar Ali Bhutto"],
        correctAnswer: "Muhammad Ali Jinnah"
    },
    {
        question: "In which year did Pakistan gain independence?",
        choices: ["1945", "1947", "1950", "1952"],
        correctAnswer: "1947"
    },
    {
        question: "What is the national language of Pakistan?",
        choices: ["Punjabi", "Sindhi", "Urdu", "Pashto"],
        correctAnswer: "Urdu"
    },
    {
        question: "Which city is known as the City of Lights in Pakistan?",
        choices: ["Lahore", "Islamabad", "Karachi", "Quetta"],
        correctAnswer: "Karachi"
    },
    {
        question: "What is the highest mountain peak in Pakistan?",
        choices: ["K2", "Nanga Parbat", "Gasherbrum I", "Broad Peak"],
        correctAnswer: "K2"
    },
    {
        question: "Which of the following is the national flower of Pakistan?",
        choices: ["Jasmine", "Rose", "Tulip", "Sunflower"],
        correctAnswer: "Jasmine"
    },
    {
        question: "Who was the first Prime Minister of Pakistan?",
        choices: ["Liaquat Ali Khan", "Muhammad Ali Jinnah", "Zulfikar Ali Bhutto", "Ayub Khan"],
        correctAnswer: "Liaquat Ali Khan"
    },
    {
        question: "Which sport is considered the national sport of Pakistan?",
        choices: ["Cricket", "Hockey", "Football", "Squash"],
        correctAnswer: "Hockey"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');
const scoreText = document.getElementById('score-value');

let currentQuestion = 0;
let score = 0;

// Load question and choices
function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question').textContent = (currentQuestion + 1) + ". " + q.question;

    const choices = document.getElementById('choices');
    choices.innerHTML = '';

    for (let i = 0; i < q.choices.length; i++) {
        const choice = q.choices[i];
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.addEventListener('click', function() {
            checkAnswer(choice);
        });
        choices.appendChild(button);
    }
}

// Check answer function
function checkAnswer(answer) {
    const q = quizData[currentQuestion];
    if (answer === q.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results function
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    document.getElementById('result-text').textContent = `You scored ${score} out of ${quizData.length}`;
    scoreText.textContent = score;
}

// Restart quiz function
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    scoreText.textContent = score;
    loadQuestion();
}

// Start quiz on page load
loadQuestion();

// Event listener for submit button
submitButton.addEventListener('click', function() {
    const selectedOption = document.querySelector('.choices .choice:checked');
    if (selectedOption) {
        const answer = selectedOption.textContent;
        checkAnswer(answer);
    }
});

// Event listener for restart button
restartButton.addEventListener('click', function() {
    restartQuiz();
});
