import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Tree } from "antd";
import axios from "axios";
import {
	DeleteOutlined,
	EditOutlined,
	ExclamationCircleOutlined
} from "@ant-design/icons";

export default function UserList() {
	const [dataSource, setDataSource] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [rightList, setRightList] = useState([]);
	const [checkPermission, setCheckPermission] = useState([]);
	const [updateTreeId, setUpdateTreeId] = useState(0);

	const columns = [
		{
			title: "ID",
			dataIndex: "id"
		},
		{
			title: "角色名称",
			dataIndex: "roleName"
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
						<Button
							type='primary'
							shape='circle'
							onClick={() => {
								showModal();
								checkRights(item);
								setUpdateTreeId(item.id);
							}}
							icon={<EditOutlined />}
						/>
					</div>
				);
			}
		}
	];
	useEffect(() => {
		axios.get("http://localhost:5000/roles").then((res) => {
			setDataSource(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get("http://localhost:5000/rights?_embed=children").then((res) => {
			setRightList(res.data);
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
		setDataSource(dataSource.filter((data) => data.id !== item.id));
		axios.delete(`http://localhost:5000/roles/${item.id}`);
	};

	const onCheck = (item) => {
		setCheckPermission(item);
	};
	const checkRights = (item) => {
		setCheckPermission(item.rights);
	};
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
		setDataSource(
			dataSource.map((data) => {
				if (data.id === updateTreeId) {
					return {
						...data,
						rights: checkPermission
					};
				}
				return data;
			})
		);
    axios.patch(`http://localhost:5000/roles/${updateTreeId}`,{
      rights: checkPermission
    })
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div>
			<Table
				dataSource={dataSource}
				columns={columns}
				rowKey={(item) => item.id}
			/>
			<Modal
				title='权限分配'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}>
				<Tree
					checkable
					checkedKeys={checkPermission}
					onCheck={onCheck}
					treeData={rightList}
				/>
			</Modal>
		</div>
	);
}
