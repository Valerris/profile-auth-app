import { default as React } from "react";
import Cell from "components/Cell/Cell";
import Row from "components/Row/Row";
import styles from "./Table.module.css";

function Table({ children }) {
	return (
		<div className={styles.table}>{children ? children : null}</div>
	);
}

Table.Cell = Cell;
Table.Row = Row;
Table.classTableHeader = styles["table__header"];
Table.classTableSubheader = styles["table__subheader"];

export default Table;
