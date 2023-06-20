import React, { useState } from "react";
import { Layout, Dropdown, Space, Avatar } from "antd";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	DownOutlined,
  SmileOutlined,
  UserOutlined
} from "@ant-design/icons";
export default function TopHeader(props) {
	const { Header } = Layout;
	const [collapsed] = useState(false);
	const items = [
		{
			key: "1",
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.antgroup.com'>
					1st menu item
				</a>
			)
		},
		{
			key: "2",
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.aliyun.com'>
					2nd menu item (disabled)
				</a>
			),
			icon: <SmileOutlined />,
			disabled: true
		},
		{
			key: "3",
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.luohanacademy.com'>
					3rd menu item (disabled)
				</a>
			),
			disabled: true
		},
		{
			key: "4",
			danger: true,
			label: "a danger item"
		}
	];
	return (
		<Header
			className='site-layout-background'
			style={{
				padding: "0 16px"
			}}>
			{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			<div style={{ float: "right" }}>
				<span>欢迎回来</span>
				<Dropdown menu={{ items }}>
					<a onClick={(e) => e.preventDefault()}>
						<Space>
              <Avatar size="large" icon={<UserOutlined />} />
							<DownOutlined />
						</Space>
					</a>
				</Dropdown>
			</div>
		</Header>
	);
}
