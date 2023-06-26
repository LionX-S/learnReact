import React, { useCallback, useEffect, useRef, useState } from "react";
import { Table, Button, Modal, Switch } from "antd";
import axios from "axios";
import {
	DeleteOutlined,
	EditOutlined,
	ExclamationCircleOutlined
} from "@ant-design/icons";

import UserForm from "../../../components/user-manage/UserForm";

const UserList = React.memo(() => {
	const [dataSource, setDataSource] = useState([]);
	const [isModalOpen, setIModalOpen] = useState(false);
	const [regionList, setRegionList] = useState([]);
	const [roleList, setRoleList] = useState([]);
	const formRef = useRef(null);

	const columns = [
		{
			title: "区域",
			dataIndex: "region",
			render: (region) => {
				return region ? region : "全球";
			}
		},
		{
			title: "角色名称",
			dataIndex: "role",
			render: (role) => {
				return role.roleName;
			}
		},
		{
			title: "用户名",
			dataIndex: "username"
		},
		{
			title: "用户状态",
			dataIndex: "roleState",
			render: (roleState, item) => {
				return (
					<Switch
						checked={roleState}
						disabled={item.default}
						onChange={() => {
							handleChangeSwitch(item);
						}}
					/>
				);
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
							disabled={item.default}
							icon={<DeleteOutlined />}
						/>
						<Button
							type='primary'
							shape='circle'
							onClick={() => {
								handleUpdate(item);
							}}
							disabled={item.default}
							icon={<EditOutlined />}
						/>
					</div>
				);
			}
		}
	];
	useEffect(() => {
		axios.get("http://localhost:5000/users?_expand=role").then((res) => {
			setDataSource(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get("http://localhost:5000/regions").then((res) => {
			setRegionList(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get("http://localhost:5000/roles").then((res) => {
			setRoleList(res.data);
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
	const deleteItem = useCallback(
		(item) => {
			setDataSource(dataSource.filter((data) => data.id !== item.id));
			axios.delete(`http://localhost:5000/users/${item.id}`);
		},
		[dataSource]
	);

	const showModal = () => {
		setIModalOpen(true);
	};
	const handleOk = () => {
		formRef.current
			.validateFields()
			.then((value) => {
				setIModalOpen(false);
				axios
					.post("http://localhost:5000/users", {
						...value,
						roleState: true,
						default: false
					})
					.then((res) =>
						setDataSource([
							...dataSource,
							{
								...res.data,
								role: roleList.filter((item) => item.id === value.roleId)[0]
							}
						])
					);
				formRef.current.resetFields();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const handleCancel = () => {
		setIModalOpen(false);
	};

	const handleChangeSwitch = (value) => {
		value.roleState = !value.roleState;
		setDataSource([...dataSource]);
		axios.patch(`http://localhost:5000/users/${value.id}`, {
			roleState: value.roleState
		});
	};

	const handleUpdate = async (item) => {
		const { username, password, region, roleId } = item;
		await showModal();
		formRef.current.setFieldsValue({
			username,
			password,
			region,
			roleId
		});
	};
	return (
		<div>
			<Button
				type='primary'
				onClick={showModal}>
				添加用户
			</Button>
			<Table
				dataSource={dataSource}
				columns={columns}
				pagination={{
					pageSize: 5
				}}
				rowKey={(item) => item.id}
			/>
			<Modal
				title='新增用户'
				open={isModalOpen}
				okText='确定'
				cancelText='取消'
				onOk={handleOk}
				onCancel={handleCancel}>
				<UserForm
					regionList={regionList}
					roleList={roleList}
					ref={formRef}
				/>
			</Modal>
		</div>
	);
});

export default UserList;
