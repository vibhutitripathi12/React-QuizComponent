import React,  {Component} from 'react'


let quizData = require('./quiz_data.json')


class Quiz extends Component {
    constructor(props){
        super(props)
    } 
    render() {
        const data = quizData.quiz_questions
        return (
       <div>{data[0].instruction_text}</div>
        );
    }
}
export default Quiz