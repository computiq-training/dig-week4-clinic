import { useParams } from "react-router-dom"

const Patient= ()=>{
    const pars = useParams(

    )
    return <p>Hi, {pars.id}</p>
}

export default Patient;