import React, { Component } from 'react'

export default class Palindrome extends Component {
    
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    isPalendrome(userInput) {
        let forwards = userInput
        let backwards = userInput
        backwards = backwards.split('')
        backwards = backwords.reverse()
        backwards = backwards.join('')

        if(forwards === backwards) {
            this.setState({palindrome:'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }
    
    render() {
        return(
            <div className='puzzleBox palindromePB'>
            <h4>Palindrome</h4>
            <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className='conformationButton' onClick={() => this.isPalendrome(this.state.userInput)}>Check</button>
            <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}