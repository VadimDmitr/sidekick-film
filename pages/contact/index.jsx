// pages/contact.js
// import React from 'react';
// import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      {/* <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for more information" />
      </Head> */}
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
