
export default function Button(props){

    return(
    <header> 
          <p>
            <button className="btn btn-outline-info w-100 mb-2" id="submit">
              <a href="index" >{props.title} </a>
            </button>
          </p>
    </header>
    )
}