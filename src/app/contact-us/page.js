import Heading from "@/components/Heading";
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <div className="bg-background-tertiary">
      <Heading>Contact Us</Heading>

      <main className="p-6 mt-4 mb-10">
        <ContactForm />
      </main>
    </div>
  );
}

export default Contact;
