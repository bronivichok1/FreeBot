import styles from '../Style/App_module.css'
import Button from './Button'

export default function Header(){
    const dataTime = new Date()

    return(
    <header> 
        <div className={styles.item}>
            <img src='logo.jpg' alt="FreeBot"   />
            <span>Время сейчас: {dataTime.toLocaleTimeString()}</span>   
        </div>
        <h1 align="right" vertical-align="top">
          <Button title="Больше информации о боте"/>
        </h1>
        
    </header>
    )
}