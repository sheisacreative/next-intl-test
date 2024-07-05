import { useTranslations } from "next-intl";
import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{t("title")}</h1>
        <p>{t("paragraph")}</p>
      </div>
    </main>
  );
}
