import React from "react";

function Button(props) {
  const { text, event, className, disabled } = props;

  return (
    <button
      onClick={event}
      type="button"
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
