import HeroBigButton from "./heroBigButton";
import SmallButton from "./smallButton";

export default function HeroButton() {
  return (
    <div class="flex flex-col md:flex-wrap my-10 text-xl space-y-4 font-opensans md:my-12 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-9">
      <div class="flex items-center space-x-9 md:space-x-4 lg:space-x-9">
        <SmallButton />
        <HeroBigButton
          title="Contact Us"
          href="#product"
          color="bg-darkorange"
          textColor="text-white"
        />
      </div>
      <div class="flex items-center space-x-9 md:space-x-4 lg:space-x-9">
        <HeroBigButton title="Products" href="#product" />
        <SmallButton color="bg-darkorange" />
      </div>
    </div>
  );
}
