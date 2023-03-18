function Error(){
    
    function handleclick(){
        Window.location.reload()
    }
    return(
        <div>
            <p>An error occurrd!</p>
            <button onClick={handleclick}> please try again</button>
        </div>
    )
}



export default Error