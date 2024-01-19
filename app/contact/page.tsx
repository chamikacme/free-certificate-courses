import React from "react";
import Tags from "../components/Tags";

const ContactPage = () => {
  return (
    <div className="py-2 flex gap-4">
      <section className="lg:w-3/4">
        <h1>Contact Us</h1>

        <p>
          Have questions, suggestions, or just want to say hello? We&apos;d love
          to hear from you!
        </p>

        <h2>Contact Information</h2>
        <p>
          Email: <a href="mailto:info@yourblog.com">info@yourblog.com</a>
        </p>

        <h2>Visit Us</h2>
        <p>
          Your Blog Name
          <br />
          123 Blog Street
          <br />
          City, Country
        </p>

        <h2>Connect With Us</h2>
        <p>
          Follow us on social media:
          <br />
          <a href="https://twitter.com/yourblog" target="_blank">
            Twitter
          </a>
          <br />
          <a href="https://facebook.com/yourblog" target="_blank">
            Facebook
          </a>
          <br />
          <a href="https://instagram.com/yourblog" target="_blank">
            Instagram
          </a>
        </p>
      </section>
      <aside className="grow border rounded-lg p-5 mt-2 lg:w-1/4 hidden lg:block">
        <Tags />
      </aside>
    </div>
  );
};

export default ContactPage;
