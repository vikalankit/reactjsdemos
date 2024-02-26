import React,{useState,useRef,useEffect} from 'react';

const UseRefDemo = () =>{
    const inputRef = useRef<any>(null);
    const oldData = useRef<string>('');
    const [name,setName] = useState<string>('');
    useEffect(()=>{
        oldData.current = name
    },[name]);
    const handleChange = (event:any) =>{
        setName(event.target.value);
    }
    return(
        <>
            <h1>
                Name:{name}
                Old Data:{oldData.current}
            </h1>
            <input 
                ref={inputRef}
                value={name}
                onChange={handleChange}
                />
            <button onClick={()=>{
                inputRef.current.value = 'Hi';
                inputRef.current.focus()}}>Set Focus</button>
        </>
    )
}

export default UseRefDemo;