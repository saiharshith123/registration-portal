import React from "react";

const SubmitButton = ({ loading }) => {
  return (
    <button type="submit" className="submit-btn" disabled={loading}>
      {loading ? "Creating Account..." : "Create Account"}
    </button>
  );
};

export default SubmitButton;