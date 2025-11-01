//Botón individual
function Button({label, onClick}){
    return(
        <button className="btn" onClick={() => onClick(label)}>
            {label}
        </button>
    );
}

export default Button;