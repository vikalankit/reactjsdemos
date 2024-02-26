import React,{useState} from 'react'
import { IStudent } from './IStudent';
import StudentForm from './StudentForm';
const Home = () => {
    const [studentDetails,setStudentDetails] = useState<IStudent>({name:'',clas:0,marks:0});

    const getStudentDetails = (details:IStudent):void =>{
        setStudentDetails(details);
    }
    return (
        <div>
            <StudentForm getStudentDetails={getStudentDetails}/>
            <hr/>
            <div>
               Name:{studentDetails.name}
           </div>
           <div>
               Class:{studentDetails.clas}
           </div>
           <div>
               Marks:{studentDetails.marks}
           </div>
        </div>
    )
}

export default Home
