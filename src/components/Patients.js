import React, { Component } from 'react';
import PCard from './PatientCard';
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
]
class Patients extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            patients: PATIENTS
        };
    }
    addNew = (e)=>{
        let pTemp = this.state.patients;
        pTemp.push({
            'birth_date':'10/10/2022',
            'full_name':"Fadi Ramzi",
            "phone":"+9647788996523",
            "gender":'m',
            'id':4
        })

        this.setState({
            patients:pTemp
        })
    }
    render() {
        return <div className="">
            <button onClick={this.addNew}>Add</button>
        {
            this.state.patients.map((item, index, lst)=>{
                return <PCard data={item}/>
            })
        }
   
</div>
    }
}

export default Patients;
