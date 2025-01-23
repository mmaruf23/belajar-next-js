function Button(props) {
  return (
    <button className={`h-10 px-6 font-semibold rounded ${props.className}`}>
      {props.children}
    </button>
  );
}

export default Button;
