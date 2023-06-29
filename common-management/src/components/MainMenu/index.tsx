import { FunctionComponent, useState } from "react";
import {
	DesktopOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined
} from "@ant-design/icons";
import { Menu, type MenuProps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Option 1", "/page1", <PieChartOutlined />),
	getItem("Option 2", "/page2", <DesktopOutlined />),
	getItem("User", "sub1", <UserOutlined />, [
		getItem("Tom", "3"),
		getItem("Bill", "4"),
		getItem("Alex", "5")
	]),
	getItem("Team", "sub2", <TeamOutlined />, [
		getItem("Team 1", "6"),
		getItem("Team 2", "8")
	])
];
interface MainMenuProps {}
const rootSubmenuKeys = ["sub1", "sub2"];

const MainMenu: FunctionComponent<MainMenuProps> = () => {
	const [openKeys, setOpenKeys] = useState(Array<string>);
	const navigateTo = useNavigate();
	const handleClick: MenuProps["onClick"] = (e) => {
		navigateTo(e.key);
	};
	const handleOpenChange: MenuProps["onOpenChange"] = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
		if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};
	return (
		<Menu
			theme='dark'
			defaultSelectedKeys={[useLocation().pathname]}
			mode='inline'
			items={items}
			onClick={handleClick}
			openKeys={openKeys}
			onOpenChange={handleOpenChange}
		/>
	);
};

export default MainMenu;
