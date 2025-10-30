import AboutParagraph from "./aboutParagraph";
import SmallButton from "./smallButton";

export default function AboutSection() {
  return (
    <section id="about" class="md:px-20">
      <div class="flex space-x-10 justify-center items-center pt-5 pb-3 md:pt-20 md:pb-24">
        <SmallButton />
        <h1 class="text-[2.1rem] font-semibold text-gray-800 mb-8 md:text-[2.75rem]">
          About Us
        </h1>
        <SmallButton />
      </div>

      <div class="rounded-lg shadow-outsideshadow py-5 px-8">
        <div class="overflow-hidden w-full">
          <div class="flex w-full animate-slide">
            <AboutParagraph
              title="About Us"
              label="Here at Syntax Solution, we blend innovation, expertise, and
                commitment to empower businesses with cutting-edge technology
                solutions. Our journey began with a vision—to bridge the gap
                between complex IT challenges and practical, sustainable
                solutions. Today, we stand as a trusted partner for
                organizations seeking transformational ICT services."
            />
            <AboutParagraph
              title="Our Mission"
              label="Our mission is simple yet profound: To decode complexity and
                deliver simplicity. We believe that technology should enhance
                efficiency, streamline processes, and drive growth. Whether it’s
                optimizing cloud infrastructure, securing data, or developing
                custom software, we’re here to simplify the intricate world of
                ICT for our clients."
            />
            <AboutParagraph
              title="About Us"
              label="Here at Syntax Solution, we blend innovation, expertise, and
                commitment to empower businesses with cutting-edge technology
                solutions. Our journey began with a vision—to bridge the gap
                between complex IT challenges and practical, sustainable
                solutions. Today, we stand as a trusted partner for
                organizations seeking transformational ICT services."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
