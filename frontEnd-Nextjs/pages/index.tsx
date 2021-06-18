import styles from "../styles/Home.module.css";
import TextEditor from "../container/TextEditor";

export default function Home() {
  return (
    <div className={styles.container}>
      <TextEditor />
    </div>
  );
}
