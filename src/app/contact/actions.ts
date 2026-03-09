"use server";

export async function handleContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Yahan aap validation ya email sending logic daal sakte hain
  console.log("Inquiry Received:", { name, email, subject, message });

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { 
    success: true, 
    message: "Bucket Received! Our team will contact you within 2 hours." 
  };
}