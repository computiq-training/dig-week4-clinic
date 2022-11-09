const PCard = (props)=>{
    console.log(props)
    const patient = props.data
    return <div className="card-bg">
        <p>{patient.full_name}</p>
        <p>{patient.gender}</p>
        <p>{patient.phone}</p>
    </div>
}

export default PCard;