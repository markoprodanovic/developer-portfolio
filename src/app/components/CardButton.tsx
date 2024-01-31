type CardButtonProps = {
  text: string;
  href: string;
};

export const CardButton = ({ text, href }: CardButtonProps) => {
  return (
    <a
      className="border border-matteBlack py-3.5 rounded-lg text-center bg-customBackgroundSecondary hover:bg-gray-100 shadow-sm"
      style={{ transition: "all 0.3s ease" }}
      href={href}
      target="_blank"
    >
      <p className="font-bold">{text}</p>
    </a>
  );
};
