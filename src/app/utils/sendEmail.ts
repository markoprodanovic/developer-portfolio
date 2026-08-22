import { FormData } from "../contact/page";

export async function sendEmail(data: FormData) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: `Message from ${data.name} (${data.email})`,
      from_name: data.name,
      ...data,
    }),
  });

  return res.json();
}
