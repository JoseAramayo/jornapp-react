function Button({ className, onClick, id, type, form, children, onSubmit }) {
  return (
    <button
      className={className}
      onClick={onClick}
      id={id}
      type={type}
      form={form}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
}

export default Button;
