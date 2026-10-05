import React, { useState } from "react";

const PasswordField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <div className="password-container">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={error && touched ? "input-error" : ""}
        />

        <button
          type="button"
          className="show-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {error && touched && (
        <small className="error-message">{error}</small>
      )}
    </div>
  );
};

export default PasswordField;