function Button({ text, type = "button" }) {
  return (
    <button
      type={type}
      className="w-full rounded-md bg-amber-500 p-2 font-medium text-white hover:bg-amber-600"
    >
      {text}
    </button>
  );
}

export default Button;