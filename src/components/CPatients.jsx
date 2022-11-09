import PCard from "./PatientCard";
import React from "react";
class Patients extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            patients:[
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
        }
    }
    UNSAFE_componentWillMount()
    {
        console.log('Patients Component Will Mount')
    }
    addNew = (e)=>{
        let pTemp = this.state.patients
        pTemp.push({
            id:4,
                    full_name:"Sameer Ali",
                    birth_date:"10/10/1999",
                    gender:"m",
                    phone:"+964777809604"
        })

        this.setState({
            patients:pTemp
        })
    }
    render()
    {
        console.log('Rendering')
        return <div>

            <button onClick={this.addNew}>Add</button>
            {
               this.state.patients.map((item)=>{
                return <PCard data={item}/>
               }) 
            }
        </div>
    }
    //
   
    componentDidMount()
    {
        console.log('Mounted to the DOM')
    }
    componentDidUpdate()
    {
        console.log('updated')
    }
}

// const Patients = (props)=>{
//     return <p>Hello</p>
// }
export default Patients;
