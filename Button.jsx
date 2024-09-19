export default function Button({children, onSelect}){
 
    return (
        <li>
        <button onClick={onSelect}> {children} </button>
        </li>
    )
}