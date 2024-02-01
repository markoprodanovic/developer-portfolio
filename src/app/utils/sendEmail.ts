import { FormData } from "../contact/page";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "api/email";

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
  } catch (err) {
    return err;
  }
}
