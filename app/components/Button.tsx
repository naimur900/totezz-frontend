const Button = ({
  text,
  endpoint,
  color,
}: {
  text: String;
  endpoint: String;
  color: String;
}) => {
  return <button className={`btn btn-${color} my-5`}>{text}</button>;
};

export default Button;
