
export default function Header(){
    const dataTime = new Date()

    return(
    <header> 
        <div align="left">
            <img src='logo.jpg' alt="FreeBot"   />
            <span >Время сейчас: {dataTime.toLocaleTimeString()}</span>   
        </div>
        <h1 align="right" vertical-align="top">
          <button title="Больше информации о боте"></button>

        </h1>
        
    </header>
    )
}