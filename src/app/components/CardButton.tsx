type CardButtonProps = {
  text: string;
  href: string;
};

export const CardButton = ({ text, href }: CardButtonProps) => {
  return (
    <a
      className="p-1.5 rounded-lg text-center text-lg bg-customBackgroundSecondary hover:bg-gray-100"
      style={{ transition: "all 0.3s ease" }}
      href={href}
      target="_blank"
    >
      <p className="font-bold">{text + " >"}</p>
    </a>
  );
};
