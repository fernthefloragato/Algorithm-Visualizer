

export function Button(props) {

    return(
        <button style={{backgroundColor: props.color, width: props.width, borderRadius: props.borderRadius}}>
            <p>{props.text}</p>
        </button>
    )
}