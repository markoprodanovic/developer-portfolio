type ToolBadgeProps = {
  text: string;
};

export const ToolBadge = (props: ToolBadgeProps): JSX.Element => (
  <div className="inline-flex bg-matteBlack rounded-full px-3 py-2 sm:px-4 sm:py-3 items-center justifycenter">
    <div className="bg-customBackground rounded-full w-2 h-2 sm:w-3 sm:h-3" />
    <p className="text-customBackground text-md sm:text-lg ml-2">
      {props.text}
    </p>
  </div>
);
