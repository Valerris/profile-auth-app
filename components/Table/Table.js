import { default as React } from "react";
import Cell from "components/Cell/Cell";
import Row from "components/Row/Row";

function Table({ children }) {
	return <div>{children ? children : null}</div>;
}

Table.Cell = Cell;
Table.Row = Row;

export default Table;
