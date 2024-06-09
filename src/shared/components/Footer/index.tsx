import { SocialMediasURLs } from "@/shared/Constants/social-media";
import sytles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={sytles.footer}>
      <section className={sytles.content}>
        <div>&copy; All rights reserved.</div>
        <div className={sytles["social-links"]}>
          <nav>
            <a target="_blank" href={SocialMediasURLs.linkedin}>
              Linkedin
            </a>
            |
            <a target="_blank" href={SocialMediasURLs.github}>
              GitHub
            </a>
          </nav>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
