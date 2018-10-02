import React,  {Component} from 'react'


let quizData = require('./quiz_data.json')


class Quiz extends React.Component {
    constructor(props){
        super(props)
    } 
    render() {
        return (
        <div>
       <div><QuestionComponent/></div>
       <div> <OptionsComponent/></div>
       </div>
        );
    }
}

class QuestionComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const data = quizData.quiz_questions
        const questions = data.map((question) => 
        <li>{question.instruction_text}</li>
        );
        return (
            <div>
                {questions}
            </div>
        )
    }
    }

    class OptionsComponent extends React.Component {
        constructor(props){
            super(props)
        }
        render() {
            const data = quizData.quiz_questions
            const answers = data.map((question) => 
            <li>{question.answer_options}</li>
            );
            const options = answers.split();
            const option = options.map((option) => 
            <li>{option}</li>);
            return ( 
                <div>
                    {option}
                </div>
            );
        }
        }



export default Quiz