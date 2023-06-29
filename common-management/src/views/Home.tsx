import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Breadcrumb, Layout, theme } from "antd";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;



const Home: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer }
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}>
				<div className='demo-logo-vertical' />
				<MainMenu/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: "21px 16px",
						background: colorBgContainer
					}}>
					<Breadcrumb
						items={[
							{ title: "Home" },
							{
								title: <a href=''>Application Center</a>
							}
						]}
					/>
				</Header>
				<Content
					style={{
						margin: "16px 16px 0",
						height: "100%",
						background: colorBgContainer
					}}>
					<Outlet />
				</Content>
				<Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
					通用管理后台 ©2023 Created by Fredy
				</Footer>
			</Layout>
		</Layout>
	);
};

export default Home;
