const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
// const question = document.querySelector('#question');
// const question = document.querySelector('#question');
// const question = document.querySelector('#question');
let nowQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availabeQuestions = {}

let questions =[ 
    {
    question: 'What is 2+2',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 2,
},
{
    question: 'What is 20+59',
    choice1: '20',
    choice2: '45',
    choice3: '79',
    choice4: '57',
    answer: 3,
},
{
    question: 'What is 22/11',
    choice1: '2',   
    choice2: '48',
    choice3: '21',
    choice4: '37',
    answer: 1,
}
]

