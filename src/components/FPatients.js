import { useState } from "react"
import PCard from "./PatientCard";
const PATIENTS = [
    {
        id:1,
        full_name:"Ali Ahmed",
        birth_date:"10/10/1999",
        gender:"m",
        phone:"+96477889654"
    },
    {
        id:2,
        full_name:"Ameer Saad",
        birth_date:"10/10/2000",
        gender:"m",
        phone:"+96477809654"
    },
    {
        id:3,
        full_name:"Muna Ali",
        birth_date:"10/10/1998",
        gender:"f",
        phone:"+964777809654"
    }
];
const Patients =  (props)=>{
    const [patients, setPatients] = useState(null)
    const [fullName , setFullName] = useState('')
    const [gender, setGender] = useState('m')
    const addNew = ()=>{
        if(!fullName)
        {
            alert('Please fill your name')
            return;
        }
        let pTemp = !patients?[]:patients
        pTemp.push({
            id:4,
                    full_name:fullName,
                    birth_date:"10/10/1999",
                    gender:gender,
                    phone:"+964777809604"
        })

        setPatients([...pTemp])
    }

    const changeFullName = (e)=>{
        let v = e.target.value
        console.log(v)
        setFullName(v)
    }


    const genderOnChange = (e)=>{
        setGender(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault()
        addNew()
    }
    return <div>
        
    
    <form onSubmit={submit}>
        <input value={fullName} onChange={changeFullName} type="text" placeholder="Full Name"/>
        <select value={gender} onChange={genderOnChange}>
            <option value='m'>Male</option>
            <option value="f">Female</option>
        </select>
        <input type="submit"/>
    </form>
    {
        patients?patients.map((item,index)=>{
            return <PCard key={index} data={item}/>
           })
           :
           <p>No Data</p>
    }
</div>
}

export default Patients;