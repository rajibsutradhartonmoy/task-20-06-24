import React from "react";

/**
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>} props
 * @returns {JSX.Element}
 */
export const FormCheckbox = (props) => {
  const { id, ...rest } = props;

  return (
    <label htmlFor={id} className="form-checkbox">
      <input type="checkbox" id={id} {...rest} />
      <span class="checkmark"></span>
    </label>
  );
};

FormCheckbox.propTypes = {};
