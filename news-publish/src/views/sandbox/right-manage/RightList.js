import React, { useEffect, useState } from "react";
import { Button, Tag, Modal, Popover, Switch, Table } from "antd";
import axios from "axios";
import {
	DeleteOutlined,
	EditOutlined,
	ExclamationCircleOutlined
} from "@ant-design/icons";

export default function RightList() {
	const [dataSource, setDataSource] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:5000/rights?_embed=children").then((res) => {
			setDataSource(res.data);
		});
	}, []);

	const confirmDelete = (item) => {
		Modal.confirm({
			icon: <ExclamationCircleOutlined />,
			content: "确认删除吗？",
			onOk() {
				deleteItem(item);
			},
			onCancel() {
				console.log("Cancel");
			}
		});
	};
	const deleteItem = (item) => {
		if (item.grade === 1) {
			setDataSource(dataSource.filter((data) => data.id !== item.id));
			axios.delete(`http://localhost:5000/rights/${item.id}`);
		} else {
			const list = dataSource.filter((data) => data.id === item.rightId);
			list[0].children = list[0].children.filter((data) => data.id !== item.id);
			setDataSource([...dataSource]);
			axios.delete(`http://localhost:5000/children/${item.id}`);
		}
	};
	const switchPermisson = (item) => {
		item.pagepermisson = item.pagepermisson === 0 ? 1 : 0;
		setDataSource([...dataSource]);
		if (item.grade === 1) {
			axios.patch(`http://localhost:5000/rights/${item.id}`, {
				pagepermisson: item.pagepermisson
			});
		} else {
			axios.patch(`http://localhost:5000/children/${item.id}`, {
				pagepermisson: item.pagepermisson
			});
		}
	};
	const columns = [
		{
			title: "ID",
			dataIndex: "id"
		},
		{
			title: "权限名称",
			dataIndex: "title"
		},
		{
			title: "权限路径",
			dataIndex: "key",
			render(key) {
				return <Tag color='orange'>{key}</Tag>;
			}
		},
		{
			title: "操作",
			render(item) {
				return (
					<div>
						<Button
							danger
							shape='circle'
							onClick={() => {
								confirmDelete(item);
							}}
							icon={<DeleteOutlined />}
						/>
						<Popover
							content={
								<div style={{ textAlign: "center" }}>
									<Switch
										checked={item.pagepermisson}
										onClick={() => {
											switchPermisson(item);
										}}
									/>
								</div>
							}
							title='配置项'
							trigger={item.pagepermisson === undefined ? "" : "click"}>
							<Button
								type='primary'
								shape='circle'
								icon={<EditOutlined />}
								disabled={item.pagepermisson === undefined}
							/>
						</Popover>
					</div>
				);
			}
		}
	];
	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			pagination={{
				pageSize: 5
			}}></Table>
	);
}
