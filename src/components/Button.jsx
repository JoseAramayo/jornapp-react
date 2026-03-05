function Button({ className, onClick, id, children }) {
    return (
        <button className={className} onClick={onClick} id={id}>{children}</button>
    )
}

export default Button;