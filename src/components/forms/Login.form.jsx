import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetchIf.hook";
import CloneLoader from "../../loaders/Clone.loader";

export default function LoginForm() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);

  const [startFetching, setStartFetching] = useState(false);
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      setLoginPayload({
        email: values.email,
        password: values.password,
      });
      setStartFetching(true);
    },
  });

  const { response, loading, error } = useFetch({
    startFetching,
    url: "/login",
    payload: loginPayload,
  });

  useMemo(() => {
    if (response.statusCode === 200) {
      localStorage.setItem("auth", JSON.stringify(response.result.token));
      navigate("/");
    }
  }, [response]);

  useMemo(() => {
    setStartFetching(false);
    if (error) {
      alert("Loginnn failure...");
    }
  }, [error]);

  useMemo(() => {
    setStartFetching(false);
  }, [loading]);

  return (
    <>
      {loading ? <CloneLoader /> : null}
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center w-full flex-col gap-y-3"
      >
        <label htmlFor="email">
          Email Address<sup className="text-red-600">*</sup>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E.g, name@email.com"
          className="w-full py-3 px-3 shadow-inner rounded-md"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">
          Password <sup className="text-red-600">*</sup>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          className="w-full py-3 px-3 shadow-inner rounded-md"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}

        <button
          type="submit"
          className="py-3 bg-[#EB2730] w-full rounded-md text-lg font-medium text-white mt-5"
        >
          Login
        </button>
      </form>
    </>
  );
}
