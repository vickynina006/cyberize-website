import logo from "../assets/logo.png";

export default function HeaderLogo() {
  return (
    <div className="flex space-x-2 items-center cursor-pointer">
      <img src={logo} alt="header logo" className="w-11 h-7 md:w-16 md:h-10" />
      <h1 className="text-[1.35rem] text-purple-600 font-extrabold md:text-2xl">
        Cybe<span className="text-red-500">rize</span>{" "}
      </h1>
    </div>
  );
}
