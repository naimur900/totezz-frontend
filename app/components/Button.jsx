const Button = ({ text, endpoint, color }) => {
  return <button className={`btn btn-${color}`}>{text}</button>;
};

export default Button;
