
export default function Header(){
    const dataTime = new Date()

    return(
    <header> 
        <div >
            <img src='logo.jpg' alt="FreeBot"   />
            <span>Время сейчас: {dataTime.toLocaleTimeString()}</span>   
        </div>
        <h1 align="right" vertical-align="top">
          <button title="Больше информации о боте"/>
        </h1>
        
    </header>
    )
}