import React,{useState} from 'react'
import { IStudent } from './IStudent';

interface StudentFormProps{
    getStudentDetails(details:IStudent):void;
}
const StudentForm = (props:StudentFormProps) => {
    const [name,setName] = useState<string>('');
    const [clas,setClass] = useState<number>(0);
    const [marks,setMarks] = useState<number>(0);

    const PrintDetails  = ():void =>{
        let studentDetails:IStudent = {name:name,clas:clas,marks:marks}
        props.getStudentDetails(studentDetails);
    }

    return (
        <>
            <div>Name:<input type='text' onChange={(e) => setName(e.target.value)}/></div>
            <div>Class:<input type='text' onChange={(e) => setClass(Number(e.target.value))}/></div>
            <div>Marks:<input type='text' onChange={(e) => setMarks(Number(e.target.value))}/></div>
           <div>
               <button onClick={() => PrintDetails()}>Print</button>
           </div>
          
           
        </>
    )
}

export default StudentForm
