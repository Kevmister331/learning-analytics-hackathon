import { XYPlot, LineSeries, RadialChart } from 'react-vis';
import Weighting from './Weighting';
import {useState} from "react";

const PieChart = ({a1, a2, a3, p, width, height}) => {

    // const [assignment1, setAssignment1] = useState(20);
    // const [assignment2, setAssignment2] = useState(30);
    // const [assignment3, setAssignment3] = useState(30);
    // const [participation, setParticipation] = useState(20);

    // const handleSubmit = (event) => {
    // event.preventDefault();
    // alert(`The weights you entered were: ${assignment1}, ${assignment2}, ${assignment3}, and ${participation}, respectively.`)
    // }

    const pieData = 
        [
            { angle: a1, label: 'Assignment 1'},
            { angle: a2, label: 'Assignment 2'},
            { angle: a3, label: 'Assignment 3'},
            { angle: p, label: 'Participation'}
        ];

    return (
        <div>
            <RadialChart
                data={pieData}
                width={width}
                height={height}
                showLabels={true}
                labelsAboveChildren={true}
            />
        </div>

            

            /* <h4>
                Use these fields to change the % weight of each assignment (should add up to 100% for best results):
            </h4>
            <form onSubmit={handleSubmit}>
                <label> Assignment 1 Weight:
                    <input 
                    type="number"
                    value={assignment1}
                    onChange={(e) => setAssignment1(parseFloat(e.target.value))}
                    />
                </label>
                <label> Assignment 2 Weight:
                    <input 
                    type="number"
                    value={assignment2}
                    onChange={(e) => setAssignment2(parseFloat(e.target.value))}
                    />
                </label>
                <label> Assignment 3 Weight:
                    <input 
                    type="number"
                    value={assignment3}
                    onChange={(e) => setAssignment3(parseFloat(e.target.value))}
                    />
                </label>
                <label> Participation Weight:
                    <input 
                    type="number"
                    value={participation}
                    onChange={(e) => setParticipation(parseFloat(e.target.value))}
                    />
                </label>
                <input type="submit"/>
            </form> */

    )

}

export default PieChart