export default function HeroBigButton({
  title,
  href,
  color = "bg-backgroundcolo",
  textColor = "text-darkgray",
}) {
  const buttonStyle = `flex justify-center py-4 px-10 ${textColor} ${color} rounded-full shadow-outsideshadow md:py-3 md:px-5 lg:py-4 lg:px-10 hover:text-brightgray`;
  return (
    <a href={href} className={buttonStyle}>
      {title}
    </a>
  );
}
