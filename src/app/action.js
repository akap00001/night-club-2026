"use server";
const action = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  //   Tæller for ContactForm
  const resname = formData.get("resname");
  const resemail = formData.get("email");
  const rescomment = formData.get("content");

  //   Tæller for BookForm
  const restable = formData.get("table-num");
  const resguests = formData.get("num-of-guest");
  const resnight = formData.get("choose-night");
  const rescontact = formData.get("contact-num");

  // Valideringer
  if (!resname) {
    return { success: false, message: "Name is required" };
  }
  if (!resemail) {
    return { success: false, message: "Email is required" };
  }
  if (!rescomment) {
    return { success: false, message: "Comment is required" };
  }

  //   if (!restable) {
  //     return { sucess: false, message: "Table Number is required" };
  //   }
  //   if (!resguests) {
  //     return { sucess: false, message: "Number of Guests is required" };
  //   }
  //   if (!resnight) {
  //     return { sucess: false, message: "Please choose preferred night" };
  //   }
  //   if (!rescontact) {
  //     return { sucess: false, message: "Contact Number is required" };
  //   }

  try {
    // HUSK AT ÆNDRE URL'EN
    const res = await fetch("http://localhost:4000/contact_messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: resname,
        email: resemail,
        content: rescomment,
        date: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return { success: false, message: "Failed to send form. Try Again" };
    }

    return { success: true, message: "Form sent successfully" };
  } catch (error) {
    return { success: false, message: "An error occurred while sending the form" };
  }
};

export default action;
