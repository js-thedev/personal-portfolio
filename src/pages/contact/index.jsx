import '@/pages/index.scss';
import '@/pages/contact/index.scss';

function Contact() {
  return (
    <div className="contact page">
      <div className="contact-list">
        <a
          className="normalLink"
          href="https://www.linkedin.com/in/jongseoscottpark/"
        >
          LinkedIn
        </a>
        <a className="normalLink" href="https://github.com/js-thedev">
          Github
        </a>
      </div>
    </div>
  );
}

export default Contact;
