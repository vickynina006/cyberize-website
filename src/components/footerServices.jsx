import FooterATag, { FooterHTag } from "./footerTexts";

export default function FooterServices() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex w-full pt-6 md:pt-14 md:w-1/2">
        <div class="flex flex-col w-1/2 space-y-5 pr-6">
          <FooterHTag title="Services" />
          <FooterATag title="AI Solutions" />
          <FooterATag title="Mobile Developments" />
          <FooterATag title="Desktop App" />
          <FooterATag title="Web/Cloud Services" />
        </div>
        <div class="flex flex-col w-1/2 space-y-5">
          <FooterHTag title="Company" />
          <FooterATag title="About" href="#about" />
          <FooterATag title="Contact" href="#contact" />
        </div>
      </div>
      <div className="w-full pt-6 pb-2 md:pt-14 md:w-1/2 space-y-5">
        <FooterHTag title="Contact Us" />
        <p className="text-lg text-darkgray">
          Never miss out on our company's latest news, updates, and exclusive
          offers, For Partnership/Contracts Click the button below to Email us.
        </p>
        <div className="flex w-full">
          <div className="w-[15%] rounded-l-lg p-1 flex justify-center items-center bg-white border-solid border-r-0 border-2">
            <i className="fas fa-envelope text-sm"></i>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 text-lg rounded-r-lg bg-white border-solid border-2 w-[85%]"
          />
        </div>

        <a
          href=""
          class="flex py-2 justify-center text-lg text-white w-full rounded-lg bg-darkorange mt-5"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}
