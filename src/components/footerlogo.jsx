import footerlogo from "../assets/footerlogo.png";

export default function FooterLogo() {
  return (
    <div class="flex items-center  space-x-1.5 cursor-pointer">
      <img src={footerlogo} alt="" class="w-28 h-20 " />
      {/* <h1 class="text-2xl font-bold">Syntax Solution</h1> */}
    </div>
  );
}
