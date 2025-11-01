//Conjunto de botones
import Button from './Button';

function Keypad({onButtonClick}){
    const buttons = [
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','-',
        '0','.','=','+',
        '(',')','sin','cos','tan','log',
        '√','^','π','e',
        '⌫','c'//Limpiar display
    ];


    return(
        <div className="keypad">
            {buttons.map((btn,index)=>(
                <Button key={index} label={btn} onClick={() => onButtonClick(btn)} />
            ))}
        </div>
    );

}

export default Keypad;