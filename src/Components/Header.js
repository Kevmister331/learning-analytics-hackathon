import { useState, useEffect } from "react"
import GraphHandler from "./GraphHandler"
import Weighting from "./Weighting";
import './Header.css';
const Header = () => {


    const [assignment, setAssignment] = useState('All')
    const [asnVisible, setVisible] = useState(false)

    useEffect(()=>{
        setAssignment('All')
    },[])

    useEffect(()=>{
        assignment=='All' ? setVisible(true) : setVisible(false)
    },[assignment])

    return (
        <div>
            
            <button onClick={()=>{
                setAssignment("One")
            }}>
                Assignment 1
            </button>
            <button onClick={()=>{
                setAssignment("Two")
            }}>
                Assignment 2
            </button>
            <button onClick={()=>{
                setAssignment("Three")
            }}>
                Assignment 3
            </button>

            <button onClick={()=>{
                setAssignment("Participation")
            }}>
                Participation
            </button>

            <button onClick={()=>{
                setAssignment("All")
            }}>
                All
            </button>

            <GraphHandler asn={assignment}/>
            <div className="center">
              <Weighting />
            </div>
            
        </div>
    )
}

export default Header;