const Hello = (props)=>{
    const name = props.name;
    return <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Hello, {name}
  </a>;

}

export default Hello;