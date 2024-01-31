type ToolBadgeProps = {
  text: string;
};

export const ToolBadge = (props: ToolBadgeProps): JSX.Element => (
  <div className="inline-flex bg-matteBlack rounded-full px-4 py-3 items-center justifycenter">
    <div className="bg-customBackground rounded-full w-3 h-3" />
    <p className="text-customBackground text-lg ml-2">{props.text}</p>
  </div>
);
