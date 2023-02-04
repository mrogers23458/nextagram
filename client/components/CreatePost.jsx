export default function CreatePost(){
    function logger(e){
        e.preventDefault()
        console.log(e)
    }
    return (
        <div>
            <form >
                <input type="file" id="myFile" name="filename" onChange={(e) => logger(e)} />
                <button onClick={(e) => logger(e)}>Click me</button>
            </form>
        </div>
    )
}