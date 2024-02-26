import { cleanup } from '@testing-library/react';
import React,{useState,useEffect} from 'react'

const  FunctionalCounter = () => {
    const [count,setCount] = useState(1);
    const [title,setTitle] = useState('');
    useEffect(() => {
        console.log('use effect called:');
        document.title=`You clicked ${count} times`;
    },[])
    return (
        <div>
            You clicked {count} times
            <div>
                    Title:
                    <input type='text'
                    onChange={(e)=>setTitle(e.target.value)} />
                </div>
            <div>
                <button onClick={()=>setCount(count + 1)}>
                    Add Counter
                </button>
            </div>
        </div>
    )
}

export default FunctionalCounter
