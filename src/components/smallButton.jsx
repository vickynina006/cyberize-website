export default function SmallButton({ color = "bg-backgroundcolo" }) {
  const buttonStyle = `h-5 w-10 ${color} rounded-full shadow-outsideshadow`;
  return <button className={buttonStyle}></button>;
}
