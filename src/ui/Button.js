const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  disable: "btn--disable",
  footer:"btn--footer"
};

function Button({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
