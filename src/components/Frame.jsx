const Frame = ({children})=>{
    return <>
    <div style={
{
    backgroundColor:'blue',
    height:'10px'
}
    }></div>
    {children}
    </>
}

export default Frame;