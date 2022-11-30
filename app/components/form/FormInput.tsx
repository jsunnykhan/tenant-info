import React, { Ref, useState } from "react";

interface PropsType {
  type?: string;
  placeHolder?: string;
  value?: string;
  onChangeHandler: Function;
  id: string;
}

const FormInput = (props: PropsType) => {
  const {
    type = "text",
    placeHolder = "write something",
    value = "",
    onChangeHandler,
    id,
  } = props;

  const [onFocus, setOnFocus] = useState<boolean>(false);
  return (
    <div className="w-full">
      {onFocus ? (
        <p className="transition-all duration-300 mb-2 text-gray-500">
          {placeHolder}
        </p>
      ) : null}
      <input
        className="outline-none py-2 border-2 rounded px-3"
        type={type}
        placeholder={!onFocus ? placeHolder : ""}
        value={value}
        id={id}
        onChange={(event) => onChangeHandler(event)}
        onFocus={() => setOnFocus(true)}
      />
    </div>
  );
};

export default FormInput;
