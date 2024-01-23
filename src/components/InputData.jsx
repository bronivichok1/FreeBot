
export default function InputData(props){

    return(
    <header> 
      <input
               type="text"
               class="form-control mb-2"
               placeholder={props.title}
               value=""
               >
        </input>
    </header>
    )
}