import React, {Component} from "react";
import PieChart from "./RadialChart";

class Weighting extends Component {
    constructor(props) {
        super(props);
        // intiialize set weight functions
        this.setAssignment1 = this.setAssignment1.bind(this);
        this.setAssignment2 = this.setAssignment2.bind(this);
        this.setAssignment3 = this.setAssignment3.bind(this);
        this.setParticipation = this.setParticipation.bind(this);
        // initial weights
        this.state = {
            assignment1: 20,
            assignment2: 30,
            assignment3: 30,
            participation: 20
        };
        // handle submit button
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    // handle set weight functions
    setAssignment1(event) {
        this.setState({assignment1: event.target.value});
    }

    setAssignment2(event) {
        this.setState({assignment2: event.target.value});
    }

    setAssignment3(event) {
        this.setState({assignment3: event.target.value});
    }

    setParticipation(event) {
        this.setState({participation: event.target.value});
    }

    // handle submit definition
    handleSubmit(event) {
    event.preventDefault();
    alert(`The weight you entered was: ${this.state.assignment1}, ${this.state.assignment2}, ${this.state.assignment3}, ${this.state.participation}`)
    }
    
    // attach elements that rely on weighting here
    render() {
        // bring the weights into scope
        const a1 = this.state.assignment1;
        const a2 = this.state.assignment2;
        const a3 = this.state.assignment3;
        const p = this.state.participation;

    return (
        <div>
            <PieChart a1={a1} a2={a2} a3={a3} p={p} width={300} height={300}/>
        <h4>
            Use these fields to change the % weight of each assignment (must add up to 100%):
        </h4>
        
        {/* Form for changing the weights */}
        <form onSubmit={this.handleSubmit}>
            <label> Assignment 1 Weight:
                <input 
                type="number"
                value={this.state.assignment1}
                onChange={this.setAssignment1}
                />
            </label>
            <label> Assignment 2 Weight:
                <input 
                type="number"
                value={this.state.assignment2}
                onChange={this.setAssignment2}
                />
            </label>
            <label> Assignment 3 Weight:
                <input 
                type="number"
                value={this.state.assignment3}
                onChange={this.setAssignment3}
                />
            </label>
            <label> Participation Weight:
                <input 
                type="number"
                value={this.state.participation}
                onChange={this.setParticipation}
                />
            </label>
            <input type="submit"/>
        </form>
        </div>
    )
    }
}


export default Weighting