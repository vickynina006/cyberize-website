export default function FooterATag({ href, title }) {
  return (
    <a href={href} className="text-lg hover:text-darkgray">
      {title}
    </a>
  );
}

export function FooterHTag({ title }) {
  return <h1 className="text-[1.6rem] font-medium text-gray-800">{title}</h1>;
}
