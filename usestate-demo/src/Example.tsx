import React, {useState,useEffect} from 'react'

function Example() {
    const [count,setCount] = useState(0);
    useEffect(() => {
        document.title=`You clicked ${count} times`;
    })
    return (
        <div>
            
        </div>
    )
}

export default Example
