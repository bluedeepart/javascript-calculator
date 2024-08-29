const Button = ({ children, bgColor, id, handleClick, value }) => {
  const clsName = `btn ${bgColor || "btn-gradient"}`;

  return (
    <button onClick={() => handleClick(id, value)} className={`${clsName}`} id={id}>
      {children}
    </button>
  );
};

export default Button;
