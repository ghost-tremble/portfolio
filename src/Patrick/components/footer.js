import React from "react";
import "../css/footer.css";
import "../css/socials.css";
export const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="">
          <h2>
            patrick <span className="A">A</span>
          </h2>
        </div>

        <div className="socials ">
          <a
            href="https://web.facebook.com/patrickmary.nwakeze/"
            target="_blank">
            <i class="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-mary-nwakeze-372305205/"
            target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/ghost-tremble/" target="_blank">
            <i class="bi bi-github"></i>
          </a>

          <a href="https://mail.google.com/mail/u/0/" target="_blank">
            <i class="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
