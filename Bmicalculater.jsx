import React, { useMemo, useState } from 'react'

function Bmicalculater() {
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(180);

    function onweightchange(e) {
        setWeight(e.target.value);

    }
    function onheightchange(e){
        setHeight(e.target.value);
    }

    const output = useMemo(()=> {
        const calculatedheight = height/100;

        return(weight/(calculatedheight*calculatedheight)).toFixed(1)

    }, [height, weight])
    return (
        <div className='main'>
            <h2>bmi calculater data</h2>
            <p>{weight}KG</p>
            <input type="range"
                step="1"
                min="40"
                max="200"
                value={weight}
                onChange={onweightchange}
            />

            <p>{height}cm</p>
            <input type="range"
                min="140"
                max="250"
                value={height}
                onChange={onheightchange}
            />
            <br />
            <h4>your bmi is</h4>
            <p>{output}</p>




        </div>
    )
}

export default Bmicalculater
