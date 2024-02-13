type CardButtonProps = {
  text: string;
  href: string;
};

export const CardButton = ({ text, href }: CardButtonProps) => {
  return (
    <a
      className="p-1.5 text-center text-lg bg-customBackground link-underline"
      href={href}
      target="_blank"
    >
      <p className="font-bold">{text + " >"}</p>
    </a>
  );
};
