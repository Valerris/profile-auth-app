import styles from "./FormText.module.css";

export default function FormText({ children }) {
	return <span className={styles.formText}>{children}</span>;
}
