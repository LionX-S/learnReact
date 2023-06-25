import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import Home from "./home/Home";
import UserList from "./user-manage/UserList";
import RightList from "./right-manage/RightList";
import RoleList from "./right-manage/RoleList";
import NoPermission from "./nopermission/NoPermission";
import { Layout } from "antd";
import './NewsSandBox.css'

export default function NewsSendBox() {
	return (
		<Layout>
			<SideMenu></SideMenu>
			<Layout className='site-layout'>
				<TopHeader></TopHeader>
				<Layout.Content
					className='site-layout-background'
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						overflow:'auto'
					}}>
					<Switch>
						<Route
							path='/home'
							component={Home}
						/>
						<Route
							path='/user-manage/list'
							component={UserList}
						/>
						<Route
							path='/user-manage/role/list'
							component={RoleList}
						/>
						<Route
							path='/right-manage/right/list'
							component={RightList}
						/>
						<Redirect
							from='/'
							to='/home'
							exact
						/>
						<Route path='*' component={NoPermission} />
					</Switch>
				</Layout.Content>
			</Layout>
		</Layout>
	);
}
