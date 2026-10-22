import { profile } from "@/content/profile";
import { Sheet } from "@/components/Sheet";
import { Header } from "@/components/Header";
import { Highlights } from "@/components/Highlights";
import { SectionHeader } from "@/components/SectionHeader";
import { Entry } from "@/components/Entry";
import { EducationItem } from "@/components/EducationItem";
import { SkillGroup } from "@/components/SkillGroup";
import { AwardsList } from "@/components/AwardsList";
import { PrintButton } from "@/components/PrintButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <PrintButton />
      <Sheet>
        <Header profile={profile} />
        <Highlights items={profile.highlights} />

        <section aria-labelledby="pub-label" className={styles.section}>
          <SectionHeader id="pub-label">Publication</SectionHeader>
          <Entry entry={profile.publication} />
        </section>

        <section aria-labelledby="exp-label" className={styles.section}>
          <SectionHeader id="exp-label">Experience</SectionHeader>
          {profile.experience.map((entry) => (
            <Entry entry={entry} key={entry.slug} />
          ))}
        </section>

        <section aria-labelledby="proj-label" className={styles.section}>
          <SectionHeader id="proj-label">Projects &amp; Competitions</SectionHeader>
          {profile.projects.map((entry) => (
            <Entry entry={entry} key={entry.slug} />
          ))}
        </section>

        <section aria-labelledby="edu-label" className={styles.section}>
          <SectionHeader id="edu-label">Education</SectionHeader>
          {profile.education.map((item) => (
            <EducationItem item={item} key={item.title} />
          ))}
        </section>

        <section aria-labelledby="skills-label" className={styles.section}>
          <SectionHeader id="skills-label">Skills</SectionHeader>
          {profile.skills.map((group) => (
            <SkillGroup group={group} key={group.category} />
          ))}
        </section>

        <section aria-labelledby="awards-label" className={styles.section}>
          <SectionHeader id="awards-label">Awards &amp; Recognition</SectionHeader>
          <AwardsList awards={profile.awards} />
        </section>

        <footer className={styles.footer}>
          <span>{profile.identity.name} — Résumé</span>
          <a href={profile.contact.githubUrl} target="_blank" rel="noopener noreferrer">
            {profile.contact.github}
          </a>
        </footer>
      </Sheet>
    </>
  );
}
