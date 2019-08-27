import React, { Component } from 'react'

export default class FilterObject extends Component {

    constructor(){
        super()

        this.state= {
            family: [{
                name: 'Courtney',
                age: 24,
                state: 'Idaho'
            },{
                name: 'Katie',
                age: 21,
                haircolor: 'Light Brown'
            }, {
                name: 'Carly',
                state: 'Louisiana'
            }
        ],

            userInput: '',
            filteredFamily: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterFamily(prop) {
        let employees = this.state.family;
        let filteredFamily = [];
    
        for (let i = 0; i < family.length; i++) {
          if (family[i].hasOwnProperty(prop)) {
            filteredFamily.push(family[i]);
          }
        }
    
        this.setState({filteredFamily: filteredFamily});
      }

    render() {
        return (
           <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>Original: {JSON.stringify(this.state.filteredFamily, null, 10)}</span>
            <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className='confirmationButton' onClick={() => this.filterFamily}>Filter</button>
            <span className='resultsBox filterObjectPB'>Filtered: {JSON>stringify(this.state.filteredFamily, null, 10)}</span>
           </div>
        )
    }
}