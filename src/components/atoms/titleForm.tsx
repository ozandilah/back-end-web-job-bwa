import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const TitleForm = (props: Props) => {
  return (
    <div>
      <div className="text-lg font-semibold">{props.title}</div>
      <div className="text-gray-400">{props.subTitle}</div>
    </div>
  );
};

export default TitleForm;
