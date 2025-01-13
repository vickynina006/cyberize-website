export default function ProductContent({
  src,
  title,
  label,
  color = "bg-darkorange",
  textColor = "text-white",
  hover = " hover:bg-backgroundcolo hover:text-darkgray",
}) {
  const buttonStyle = `py-4 px-4 inline-block ${textColor} ${color} rounded-full shadow-outsideshadow md:px-10 ${hover}`;

  return (
    <div className="flex flex-col flex-shrink-0 justify-center items-center py-4 px-4 md:py-10 md:px-12 rounded-xl shadow-outsideshadow w-full md:w-[47.5%]">
      <div className="flex rounded-full mb-5 w-32 h-32 overflow-hidden">
        <img
          src={src}
          alt=""
          className="rouded-full w-full h-full object-cover"
        />
      </div>
      <div className="space-y-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
        <p className="text-[1.2rem] text-darkgray text-center">{label}</p>
        <a href="" className={buttonStyle}>
          In Development
        </a>
      </div>
    </div>
  );
}
