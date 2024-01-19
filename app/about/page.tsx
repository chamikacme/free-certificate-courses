import React from "react";
import Tags from "../components/Tags";

const AboutPage = () => {
  return (
    <div className="py-2 flex gap-4">
      <section className="lg:w-3/4">
        <h2>Welcome to Your Blog Name!</h2>

        <p>
          Thank you for visiting Your Blog Name! We are a team of passionate
          individuals who share a common love for [your blog niche or topic].
          Our mission is to [briefly describe your mission or purpose]. We
          believe in [your core values or principles] and strive to create
          content that is informative, engaging, and enjoyable for our readers.
        </p>

        <h2>Our Journey</h2>

        <p>
          The story of Your Blog Name began [mention the inception or founding
          date]. It started as a small initiative driven by our enthusiasm for
          [your blog topic]. Over the years, we have grown and evolved,
          expanding our team and reaching a wider audience. Today, we are proud
          to be a trusted source for [your niche] content.
        </p>

        <h3>Your Name</h3>
        <p>
          [Briefly describe yourself, your background, and your role in the
          blog. Highlight your expertise and share your passion for the
          blog&apos;s subject matter.]
        </p>

        <p>
          Thank you for being a part of the Your Blog Name community. We look
          forward to sharing more exciting content with you!
        </p>
      </section>
      <aside className="grow border rounded-lg p-5 mt-2 lg:w-1/4 hidden lg:block">
        <Tags />
      </aside>
    </div>
  );
};

export default AboutPage;
