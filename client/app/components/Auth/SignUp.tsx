"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../../app/styles/style";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Signup: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);
  const [register, { data, error, isSuccess }] = useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Registration successful";
      toast.success(message);
      setRoute("Verification");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      const data = {
        name,
        email,
        password,
      };
      await register(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className=" flex items-center justify-center dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-2">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl p-10 dark:border-gray-800">
        <h1
          className={`text-3xl font-extrabold text-center mb-6 text-gray-800 dark:text-white tracking-tight ${styles.title}`}
        >
          Join to ELearning
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className={`block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200 ${styles.label}`}
              htmlFor="name"
            >
              Enter your Name
            </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
              placeholder="johndoe"
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all duration-200 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } ${styles.input}`}
            />
            {errors.name && touched.name && (
              <span className="text-red-500 pt-2 block text-xs font-medium">
                {errors.name}
              </span>
            )}
          </div>
          <div>
            <label
              className={`block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200 ${styles.label}`}
              htmlFor="email"
            >
              Enter your Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="loginmail@gmail.com"
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all duration-200 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } ${styles.input}`}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 pt-2 block text-xs font-medium">
                {errors.email}
              </span>
            )}
          </div>
          <div className="relative">
            <label
              className={`block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200 ${styles.label}`}
              htmlFor="password"
            >
              Enter your password
            </label>
            <input
              type={!show ? "password" : "text"}
              name="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="password!@%"
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all duration-200 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              } ${styles.input}`}
            />
            {!show ? (
              <AiOutlineEyeInvisible
                className="absolute bottom-3 right-3 z-10 cursor-pointer text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                size={22}
                onClick={() => setShow(true)}
              />
            ) : (
              <AiOutlineEye
                className="absolute bottom-3 right-3 z-10 cursor-pointer text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                size={22}
                onClick={() => setShow(false)}
              />
            )}
            {errors.password && touched.password && (
              <span className="text-red-500 pt-2 block text-xs font-medium">
                {errors.password}
              </span>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="Sign Up"
              className={`w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold shadow-md transition-all duration-200 cursor-pointer ${styles.button}`}
            />
          </div>
          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="h-px w-16 bg-gray-200 dark:bg-gray-700" />
            <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
              Or join with
            </span>
            <span className="h-px w-16 bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex items-center justify-center gap-6 mt-1">
            <button
              type="button"
              className="flex items-center justify-center p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all"
            >
              <FcGoogle size={28} />
            </button>
            <button
              type="button"
              className="flex items-center justify-center p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all"
            >
              <AiFillGithub
                size={28}
                className="text-gray-800 dark:text-white"
              />
            </button>
          </div>
          <div className="text-center pt-2">
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              Already have an account?
            </span>
            <span
              className="text-[#2190ff] pl-1 cursor-pointer font-semibold hover:underline"
              onClick={() => setRoute("Login")}
            >
              Sign in
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
