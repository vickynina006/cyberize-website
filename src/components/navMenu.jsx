export default function NavMenu({ title, href }) {
  return (
    <a href={href} className=" hover:text-brightgray">
      {title}
    </a>
  );
}
