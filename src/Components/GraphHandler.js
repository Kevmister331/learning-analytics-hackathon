import { Component, useEffect, useState } from "react";
import Papa from "papaparse";
import { getSystemErrorMap } from "util";
import csv from "../Data/gradebook.csv"
import "./Header.css"

import {  
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas
} from "react-vis";
import { arrayExpression } from "@babel/types";



// asn -- assignment
const GraphHandler = ({asn}) => {

    const A1 = "Assignment 1 Current Score";
    const A2 = "Assignment 2 Current Score";
    const A3 = "Assignment 3 Current Score";
    const PART = "Participation & engagement Current Score";
    const ALL = "Current Score";

    const init = () => {

        Papa.parse("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/UBC-LA-Hackathon/hack-la-2022/main/data/additional/gradebook.csv", {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                console.log(results);
                const rowsArray = [];
                const valuesArray = [];

                // Iterating data to get column name and their values
                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                // Parsed Data Response in array format
                setParsedData(results.data);

                // Filtered Column Names
                setTableRows(rowsArray[0]);

                // Filtered Values
                setValues(valuesArray);

                // setData(results.data);

                
            },
        });

    }
    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);

    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);

    //State to store the values
    const [values, setValues] = useState([]);

    // state to store the assignment target
    const [assignment, setAssignment] = useState('All')

    const [numbers, setNumbers] = useState([]);
    const [data, setData] = useState([]);

    // on page reload
    useEffect(() => {
        init();
        setParsedData([]);
        setTableRows([]);
        setValues([]);
        setAssignment("All");
        setData([]);
        setNumbers([]);
    }, [])
    

    // runs on asn change
    useEffect(() => {
        handleAssignment();
    }, [asn]);

    useEffect(() => {
        console.log(percentileCalculation(0));
    }, [numbers])

    
    const histFormat = (array) => {
        const map = new Map();

        for (let i = 0; i< array.length;i++) {
            let j = Math.floor(array[i]/5)
            if (!map.has(j)) {
                map.set(j,1)
            } else {
                map.set(j,map.get(j)+1)
            }
            
        }
    
        let keyArray = []
    
        for (var key of map.keys()) {
            keyArray.push(key)
        }
        
        keyArray.sort(function(a, b){return a - b})
    
        let histArray = []
    
        for (let i = 0; i<keyArray.length; i++) {
            histArray.push({x: keyArray[i], y:map.get(keyArray[i])})
        }

        return histArray;
    }

    const computeData = (assignmentName) => {

        var index = tableRows.indexOf(assignmentName);
        var nums = [];
        var min = 100;
        var max = 0;
        for (var i = 0; i < values.length; i++) {
            let val = values[i][index];
            if (isNaN(val) || val == "") continue;
            let num = parseInt(val);
            min = Math.min(min, num);
            max = Math.max(max, num);
            nums.push(num);
            
        }
        var n = 10; // number of bars
        var interval = Math.ceil((max - min) / n);
        // console.log(min, max, interval);
        var nData = [];

        nums.sort((a, b)=>{
            return a - b;
        });
        
        nData = histFormat(nums);

        for (let i = 0; i < nData.length; i++) {
            nData[i]["x"] *= 5;
        }

        setNumbers(nums);
        setData(nData);
        

    };

    const percentileCalculation = ( percentile) => {
        
        var idx = Math.floor((numbers.length) * percentile) - 1;
        console.log(idx, numbers.length, numbers);
        return idx < 0 ? numbers[0] : numbers[idx];
   }

   const meanCalculation = () => {
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        return (sum / numbers.length).toFixed(2);

   }

    const handleAssignment = () => {
        console.log(tableRows);
        switch(asn) {
            case "One":
                computeData(A1);
                break;
            case "Two":
                computeData(A2);
                break;
            case "Three":
                computeData(A3)
                break;
            case "All":
                computeData(ALL);
                break;
            case "Participation":
                computeData(PART);
                break;
        }

    }

    return (
        <div className="center">
            <XYPlot height={500} width={1000}>
            <VerticalBarSeries className="vertical-bar-series-example" data={data} />
            
            <XAxis tickFormat={v => `${v}`} tickLabelAngle={0} />
            <YAxis />
            </XYPlot>
            
          <br />
          <br />

            <div>
                Mean: {meanCalculation()}
                {"\t"}
                Median: {percentileCalculation(0.5)} 
                {"\t"}
                Range: {numbers[numbers.length - 1] - numbers[0]}
                {"\t"}
                IQR: {percentileCalculation(0.75) - percentileCalculation(0.25)}
                {"\t"}
            </div>

            

        </div>
      );
}

export default GraphHandler;