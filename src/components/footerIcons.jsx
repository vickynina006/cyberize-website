export default function FooterIcons({
  icon,
  hover = "hover:text-desblue",
  textColor = "text-blue-800",
  link
}) {
  const icons = `${icon} `;
  const iconstyle = `${hover} ${textColor} bg-white p-1 w-9 h-9 rounded-full flex items-center justify-center `;
  return (
    <a href={link} className={iconstyle}>
      <i className={icons}></i>
    </a>
  );
}
