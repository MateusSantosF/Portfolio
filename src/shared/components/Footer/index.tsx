import sytles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={sytles.footer}>
      <section className={sytles.content}>
        <div>&copy; All rights reserved.</div>
      </section>
    </footer>
  );
}

export default Footer;
