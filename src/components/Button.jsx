function Button({ className, onClick, id, type, form, children }) {
  return (
    <button
      className={className}
      onClick={onClick}
      id={id}
      type={type}
      form={form}
    >
      {children}
    </button>
  );
}

export default Button;
