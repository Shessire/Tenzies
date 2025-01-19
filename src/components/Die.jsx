function Die ({ value, isHeld, click, id }) {
    return (
        <button 
            onClick={() => click(id)} 
            style={{ backgroundColor: isHeld && "#59E391" }}
            aria-pressed={isHeld}
            aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
        >
            {value}
        </button>
    )
}

export default Die;