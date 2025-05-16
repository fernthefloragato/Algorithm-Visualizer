

export function Button(props) {

    return(
        <button style={{backgroundColor: props.color, width: props.width}}>
            <p>{props.text}</p>
        </button>
    )
}