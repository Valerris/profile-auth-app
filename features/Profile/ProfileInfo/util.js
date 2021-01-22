import { default as React } from "react";
import Table from "components/Table/Table";

function createRows(data) {
	return data.map((arr, i) => (
		<Table.Row key={i}>
			{arr.map((item, idx) => (
				<Table.Cell key={idx} {...item.opts}>
					{item.content}
				</Table.Cell>
			))}
		</Table.Row>
	));
}

export default function createTable(data) {
	return <Table>{createRows(data)}</Table>;
}
