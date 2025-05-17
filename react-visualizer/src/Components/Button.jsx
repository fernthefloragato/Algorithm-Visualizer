

export function Button(props) {

    return(
        <button onClick={() => props.func(props.arr)}style={{
            backgroundColor: props.color,
            width: props.width,
            borderRadius: props.borderRadius,
            height: props.height}}>

            <p>{props.text}</p>
        </button>
    )
}