"use client";

import { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/sendEmail";
import { useRouter } from "next/navigation";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: NextPage = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await sendEmail(data);
      router.push("/");
      alert(response.message);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div className="mx-10">
        <section>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-matteBlack">
              Get in touch
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-matteBlack"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-customBackgroundSecondary border border-gray-300 text-matteBlack text-sm rounded-lg block w-full p-2.5"
                  placeholder="Archie"
                  {...register("name", { required: true })}
                />
              </div>
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
                  placeholder="Enter Email address..."
                  {...register("email", { required: true })}
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
                  placeholder="Type your message..."
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
