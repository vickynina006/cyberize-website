export default function AboutParagraph({ title, label }) {
  return (
    <div class="flex flex-col space-y-4 w-full px-6 flex-shrink-0 justify-center items-center md:px-4">
      <h1 class="text-2xl font-semibold md:4xl">{title}</h1>
      <p class="text-center text-[1.2rem] w-full">{label}</p>
    </div>
  );
}
