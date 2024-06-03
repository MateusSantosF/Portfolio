import sytles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={sytles.footer}>
      <section className={sytles.content}>
        <div>&copy; All rights reserved.</div>
        <div className={sytles["social-links"]}>
          <nav>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mateusferreira-dev/"
            >
              Linkedin
            </a>
            /
            <a target="_blank" href="https://github.com/MateusSantosF">
              GitHub
            </a>
          </nav>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
