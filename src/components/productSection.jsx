import ProductContent from "./productContent";
import colorful from "../assets/A colorful logo featuring a stylized, modern design of a delivery truck with gradient colors 1.png";
import healthwise from "../assets/healthwise.jpeg";
import eke from "../assets/eke.jpeg";
import explained from "../assets/explained.jpg";
export default function ProductSection() {
  return (
    <section
      id="products"
      class="py-24 px-10 w-full flex relative overflow-hidden"
    >
      <div class="flex space-x-20 w-full animate-steadyslide" id="carousel">
        <ProductContent
          title="PickUpStation"
          label=" An efficient logistics company for businesses, It provides
              services for customers shipping goods locally and soon overseas,
              Utilizing latest technologies while reducing cost and time of
              shipping."
          src={colorful}
        />
        <ProductContent
          title="Eke"
          label=" An E-Commerce (Online market place) Designed with the igbo's
              trading strategies, Enhanced and brought into the web space.."
          src={eke}
          color="bg-backgroundcolo"
          textColor="text-darkgray"
          hover="hover:text-brightgray hover:bg-backgroundcolo"
        />

        <ProductContent
          title="HealthWise"
          label=" Health App Designed to track our health status and even determine
              Gender of unborn kids"
          src={healthwise}
        />

        <ProductContent
          title="Explained"
          label=" As the name implies is Blog designed to clearify doubts/confusion people have about anything and also teach/push all tech related content."
          src={explained}
          color="bg-backgroundcolo"
          textColor="text-darkgray"
          hover="hover:text-brightgray hover:bg-backgroundcolo"
        />
        <ProductContent
          title="PickUpStation"
          label=" An efficient logistics company for businesses, It provides
              services for customers shipping goods locally and soon overseas,
              Utilizing latest technologies while reducing cost and time of
              shipping."
          src={colorful}
        />
      </div>
    </section>
  );
}
