import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import SubmitButton from "../components/SubmitButton";

import { registerUser } from "../services/api";

const Register = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First name must contain at least 2 characters")
      .required("First name is required"),

    lastName: Yup.string()
      .min(2, "Last name must contain at least 2 characters")
      .required("Last name is required"),

    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must contain 10 digits")
      .required("Phone number is required"),

    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/[0-9]/, "Password must contain a number")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),

    gender: Yup.string().required("Please select your gender"),

    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      gender: "",
      terms: false,
    },

    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setSuccessMessage("");
      setApiError("");

      try {
        const response = await registerUser({
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          phone: values.phone,
          password: values.password,
          gender: values.gender,
        });

        console.log("API Response:", response);

        setSuccessMessage(
          "Registration successful! Your account has been created."
        );

        resetForm();
      } catch (error) {
        console.error(error);

        setApiError(
          "Unable to register at the moment. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="registration-page">
      <div className="registration-card">

        <div className="registration-header">
          <div className="logo">R</div>

          <h1>Create Account</h1>

          <p>
            Register now and start using our platform.
          </p>
        </div>

        {successMessage && (
          <div className="success-message">
            ✓ {successMessage}
          </div>
        )}

        {apiError && (
          <div className="api-error">
            {apiError}
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>

          <div className="form-row">

            <InputField
              label="First Name"
              name="firstName"
              placeholder="Enter first name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
            />

            <InputField
              label="Last Name"
              name="lastName"
              placeholder="Enter last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.lastName}
              touched={formik.touched.lastName}
            />

          </div>

          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="10 digit mobile number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.phone}
            touched={formik.touched.phone}
          />

          <PasswordField
            label="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />

          <PasswordField
            label="Confirm Password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.confirmPassword}
            touched={formik.touched.confirmPassword}
          />

          <div className="form-group">
            <label>Gender</label>

            <div className="radio-group">

              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formik.values.gender === "Male"}
                  onChange={formik.handleChange}
                />
                Male
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formik.values.gender === "Female"}
                  onChange={formik.handleChange}
                />
                Female
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formik.values.gender === "Other"}
                  onChange={formik.handleChange}
                />
                Other
              </label>

            </div>

            {formik.errors.gender && formik.touched.gender && (
              <small className="error-message">
                {formik.errors.gender}
              </small>
            )}
          </div>

          <div className="terms">

            <input
              type="checkbox"
              name="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
            />

            <span>
              I agree to the Terms & Conditions
            </span>

          </div>

          {formik.errors.terms && formik.touched.terms && (
            <small className="error-message">
              {formik.errors.terms}
            </small>
          )}

          <SubmitButton loading={loading} />

        </form>

        <div className="login-text">
          Already have an account?
          <button type="button">Login</button>
        </div>

      </div>
    </div>
  );
};

export default Register;