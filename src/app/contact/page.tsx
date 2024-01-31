"use client";

import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/sendEmail";

export type FormData = {
  email: string;
  subject: string;
  message: string;
};

const Contact: NextPage = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    sendEmail(data);
  };

  return (
    <div>
      <Link href="/">Go to home</Link>
      <div className="mx-10">
        <section>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-matteBlack">
              Get in touch
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-matteBlack"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-customBackgroundSecondary border border-gray-300 text-matteBlack text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@gmail.com"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-matteBlack"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="shadow-sm bg-customBackgroundSecondary border border-gray-300 text-matteBlack text-sm rounded-lg block w-full p-2.5"
                  placeholder="What do you wanna talk about?"
                  {...register("subject", { required: true })}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-matteBlack"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-matteBlack bg-customBackgroundSecondary rounded-lg shadow-sm border border-gray-300"
                  placeholder="Tyle your message..."
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <div className="flex flex-row justify-end">
                <button type="submit" className="px-3 py-1 font-bold">
                  Send message {">"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
