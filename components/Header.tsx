import type { Profile } from "@/content/types";
import styles from "./Header.module.css";

export function Header({ profile }: { profile: Profile }) {
  const { identity, contact } = profile;
  return (
    <header className={styles.hero}>
      <h1 className={styles.name}>{identity.name}</h1>
      <p className={styles.tagline}>{identity.tagline}</p>
      <p className={styles.summary}>{identity.summary}</p>
      <ul className={styles.contact}>
        <li>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer">
            {contact.github}
          </a>
        </li>
        <li>{contact.phone}</li>
        <li>{contact.location}</li>
      </ul>
    </header>
  );
}
