"use server";

export async function handleContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Yahan aap Nodemailer ya Resend use karke email bhej sakte hain
  console.log("New Inquiry for Server Bucket:", { name, email, message });

  return { success: true, message: "Server Bucket team will contact you soon!" };
}