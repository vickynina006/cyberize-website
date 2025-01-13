import HeroButton from "./heroButton";
import HeroImage from "./heroImage";
import HeroParagraph from "./heroParagraph";

export default function HeroSection() {
  return (
    <section class="flex flex-col pr-10 pl-10 pt-12 md:pt-20 lg:pt-32 md:flex-row lg:pl-20 md:pr-0">
      <div class="w-full md:w-3/5">
        <HeroParagraph />
        <HeroButton />
      </div>
      <HeroImage />
    </section>
  );
}
