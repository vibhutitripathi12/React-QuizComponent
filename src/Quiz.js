import React,  {Component} from 'react'


let quizData = require('./quiz_data.json')


class Quiz extends Component {
    constructor(props){
        super(props)
    } 
    render() {
        return (
       <div><QuestionComponent/></div>
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

export default Quiz