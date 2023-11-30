import React from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaYoutube, FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section--title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact--container container grid">
        <div className="contact--data">
          <h3 className="contact--title">Don't be shy!</h3>
          <p className="contact--description">
            Feel free to get in touch with me. I am always open to discussing new projects and opportunities.
          </p>
          <div className="contact--info">
            <div className="info--item">
              <FaEnvelopeOpen className="info--icon" />
              <div>
                <span className="info--title">Mail me</span>
                <h4 className="info--desc">mekdeshaftu373@gmail.com</h4>
              </div>
            </div>
            <div className="info--item">
              <FaPhoneSquareAlt className="info--icon" />
              <div>
                <span className="info--title">Call me</span>
                <h4 className="info--desc">0976135908</h4>
              </div>
            </div>
            <div className="info--item">
              <FaTelegram className="info--icon" />
              <div>
                <span className="info--title">Telegram</span>
                <h4 className="info--desc">@Eldah</h4>
              </div>
            </div>
          </div>
          <div className="contact--socials">
            <a href="https://instagram.com/mekdes3876?" className="contact--social-link">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="contact--social-link">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" className="contact--social-link">
              <FaYoutube />
            </a>
            <a href="https://telegram.com" className="contact--social-link">
              <FaTelegram />
            </a>
          </div>
        </div>
        <form action="" className="contact--form">
          <div className="form--input-group">
            <div className="form--input-div">
              <input type="text" placeholder="Your Name" className="form--control" />
            </div>
            <div className="form--input-div">
              <input type="email" placeholder="Your Email" className="form--control" />
            </div>
            <div className="form--input-div">
              <input type="text" placeholder="Your Subject" className="form--control" />
            </div>
          </div>
          <div className="form--input-div">
            <textarea placeholder="Your Message" className="form--control textarea" />
          </div>
          <button className="button">
            Send Message
            <span className="button--icon contact--button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;