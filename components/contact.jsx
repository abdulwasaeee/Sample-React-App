import React from "react";
import '../index.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            feugiat tellus eget urna tempus, vel suscipit tortor aliquet.
            Phasellus vulputate felis vel urna maximus, non cursus est
            molestie. Vivamus nec posuere turpis. Donec a est ut orci
            sagittis faucibus.
          </p>
          <p>
            Nullam scelerisque orci a ante fermentum, vitae fermentum dolor
            vehicula. Nulla tincidunt metus quis tempor iaculis. Nam et dui
            at odio sagittis tempus.
          </p>
        </div>
      </div>
      <hr />
      <div className="contact-info">
        <h4>Contact Information</h4>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> info@example.com</p>
        <p>
          <strong>Social Media:</strong>{" "}
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square fa-lg mx-2"></i>
          </a>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square fa-lg mx-2"></i>
          </a>
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram-square fa-lg mx-2"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
