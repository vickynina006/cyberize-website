import FooterIcons from "./footerIcons";
import FooterLogo from "./footerlogo";
import FooterServices from "./footerServices";

export default function FooterSection() {
  return (
    <footer
      id="contact"
      class="flex flex-col px-5 mt-10 pb-14 shadow-outsideshadow lg:flex-row md:px-10"
    >
      <div class="flex flex-col w-full pt-20 lg:w-[35%]">
        <FooterLogo />
        <div class="flex space-x-10 text-2xl py-8">
          <FooterIcons icon="fab fa-facebook-f" />
          <FooterIcons
            icon="fab fa-youtube"
            textColor="text-red-600"
            hover="hover:text-red-500"
          />
          <FooterIcons icon="fab fa-twitter" />
          <FooterIcons
            icon="fab fa-instagram"
            textColor="text-red-600"
            hover="hover:text-red-500"
          />
        </div>
        <div class="text-lg text-gray-500 leading-loose">
          <h1>Contacts</h1>
          <p>P.O 400283 Enugu Nigeria</p>
          <a href="">(+234) 8156684102</a>
        </div>
      </div>

      <div class="flex flex-col text-gray-500 w-full lg:w-[65%]">
        <FooterServices />
        <div class="space-y-2">
          <h1 class="text-lg text-darkgray">© 2024. All Rights Reserved.</h1>
          <p class="text-lg">
            Built with <span class="text-brightblue text-lg">♥</span> by
            Syntax's Team
          </p>
        </div>
      </div>
    </footer>
  );
}
