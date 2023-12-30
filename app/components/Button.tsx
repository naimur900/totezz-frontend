const Button = ({
  text,
  endpoint,
  color,
}: {
  text: String;
  endpoint: String;
  color: String;
}) => {
  return <button className={`btn btn-${color}`}>{text}</button>;
};

export default Button;
