import React, { useState, useRef } from 'react';

const RefDemo1 = () => {
    const no1 = useRef(0);
    const no2 = useRef(0);
    const [data,setData] = useState(0);
    const  addValues = () => {
        let n1 = Number(no1.current);
        let n2 = Number(no2.current);
       
        setData(n1 + n2);
      }
    return(
        <div>
                    <input type="text"  ref={no1} />
                    <input type="text"  ref={no2} />
                    <button onClick={addValues} >Add</button>
                    Result:{data}    
        </div>
    )
};

export default RefDemo1;