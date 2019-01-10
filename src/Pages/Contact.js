import React, { Component } from "react";
import "../Style/contact.css";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="form-title">Get in touch!</h2>
        <form action="">
          <div className="form-container small-container">
            <div className="form-wrapper small">
              <label for="name">Name</label>
              <input
                id="name"
                name="name"
                value=""
                placeholder="What is your name?"
                type="text"
                className="small"
              />
            </div>
          </div>
          <div className="form-container small-container">
            <div className="form-wrapper small">
              <label for="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="What is your e-mail adress?"
                type="email"
                className="small"
              />
            </div>
          </div>
          <div className="form-container small-container">
            <div className="form-wrapper small">
              <label for="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                value=""
                placeholder="What do you want to talk about?"
                type="text"
                className="small"
              />
            </div>
          </div>
          <div className="form-container">
            <div className="form-wrapper big">
              <label for="msg">Message</label>
              <textarea
                name="message"
                id="msg"
                cols="30"
                rows="8"
                placeholder="Your message here"
              />
            </div>
          </div>
          <input type="submit" value="Send message!" />
        </form>
        <div className="social">
          <div className="social-items">
            <img src={require("../Images/social-git.png")} alt="" />
          </div>
          <div className="social-items">
            <img src={require("../Images/social-fb.png")} alt="" />
          </div>
          <div className="social-items">
            <img src={require("../Images/social-tw.png")} alt="" />
          </div>
          <div className="social-items">
            <img src={require("../Images/social-mail.png")} alt="" />
          </div>
          <div className="social-items">
            <img src={require("../Images/social-ig.png")} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
