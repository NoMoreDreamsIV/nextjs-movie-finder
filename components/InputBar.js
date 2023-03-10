

export default function InputBar(props) {
    return (
        <div className="input-bar">
            <input value={props.value} onChange={(evt) => props.setSearch(evt.target.value)} placeholder="Type to search"></input>
        </div>
    )
}