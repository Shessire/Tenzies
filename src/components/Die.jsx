function Die ({ value, isHeld, click, id }) {
    return (
        <button onClick={() => click(id)} style={{ backgroundColor: isHeld && "#59E391" }}>
            {value}
        </button>
    )
}

export default Die;