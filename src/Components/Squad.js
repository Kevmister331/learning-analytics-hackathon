import React from 'react';
import Stuart from '../imgs/stc.jpg'
import Kevin from '../imgs/kevin hu.jfif'
import Allan from '../imgs/allan xing.jfif'
import Eric from '../imgs/eric fu.jfif'
import '../App.css';

const Squad = () => {
    return (
        <div>
            <h1>Team Introduction!</h1>
                <div class="squad_pics">
                    <div class="combine">
                        <p>Stuart</p>
                        <img src={Stuart} class ="individudal"></img>
                    </div>
                    <div class="combine">
                        <p>Kevin</p>
                        <img src={Kevin} class ="individudal"></img>
                    </div>
                    <div class="combine">
                        <p>Allan</p>
                        <img src={Allan} class ="individudal"></img>
                    </div>
                    <div class="combine">
                        <p>Eric</p>
                        <img src={Eric} class ="individudal"></img>
                    </div>
                </div>
        </div> 
    )
}


export default Squad