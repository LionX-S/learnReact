import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import axios from "axios";
import {
	HomeOutlined,
	UserOutlined,
	SettingOutlined,
	FormOutlined,
	AuditOutlined,
	ToTopOutlined
} from "@ant-design/icons";
const { Sider } = Layout;

// 因为antd采用了新版的写法，所以做下数据改造
function getItem({ title, key, children, pagepermisson }) {
	const iconList = {
		"/home": <HomeOutlined />,
		"/user-manage": <UserOutlined />,
		"/right-manage": <SettingOutlined />,
		"/news-manage": <FormOutlined />,
		"/audit-manage": <AuditOutlined />,
		"/publish-manage": <ToTopOutlined />
	};
	const newChildren =
		children &&
		children
			.filter((item) => item.pagepermisson === 1)
			.map((item) => getItem(item));
	if (pagepermisson === 1) {
		return newChildren && newChildren.length === 0
			? {
					key,
					icon: iconList[key],
					label: title
			  }
			: {
					key,
					icon: iconList[key],
					children: newChildren,
					label: title
			  };
	}
}

// submenu keys of first level
const rootSubmenuKeys = [
	"/home",
	"/user-manage",
	"/right-manage",
	"/news-manage",
	"/audit-manage",
	"/publish-manage"
];
function SideMenu(props) {
	useEffect(() => {
		axios.get("http://localhost:5000/rights?_embed=children").then((res) => {
			setMenu(
				res.data.map((item) => {
					return getItem(item);
				})
			);
		});
	}, []);
	const [collapsed] = useState(false);
	const [menu, setMenu] = useState([]);
	const [openKeys, setOpenKeys] = useState([]);
	const onOpenChange = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};
	const onClickHandle = (eve) => {
		props.history.push(eve.key);
	};
	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}>
			<div className='logo' />
			<Menu
				theme='dark'
				mode='inline'
				openKeys={openKeys}
				onClick={onClickHandle}
				onOpenChange={onOpenChange}
				items={menu}
			/>
		</Sider>
	);
}

export default withRouter(SideMenu);
