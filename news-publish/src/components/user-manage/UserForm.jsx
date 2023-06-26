import React, { forwardRef, useMemo, useState } from "react";
import { Form, Input, Select } from "antd";

const UserForm = forwardRef((props, ref) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const { regionList, roleList } = props;
	// role数据改造
	const getRoleObject = useMemo(
		() => (roleList) => {
			return roleList.map((item) => {
				return {
					value: item.roleType,
					label: item.roleName
				};
			});
		},
		[roleList]
	);

	const changeRole = (value) => {
    console.log('change')
		if (value === 1) {
			setIsDisabled(true);
      ref.current.setFieldsValue({
        region: ''
      })
		} else {
			setIsDisabled(false);
		}
	};
	return (
		<Form
			layout='vertical'
			ref={ref}
      >
			<Form.Item
				label='用户名'
				name='username'
				rules={[{ required: true, message: "必填项" }]}>
				<Input />
			</Form.Item>
			<Form.Item
				label='密码'
				name='password'
				rules={[{ required: true, message: "必填项" }]}>
				<Input />
			</Form.Item>
			<Form.Item
				label='区域'
				name='region'
				rules={isDisabled ? [] : [{ required: true, message: "必填项" }]}>
				<Select
					options={regionList}
					disabled={isDisabled}
				/>
			</Form.Item>
			<Form.Item
				label='角色'
				name='roleId'
				rules={[{ required: true, message: "必填项" }]}>
				<Select
					options={getRoleObject(roleList)}
					onChange={changeRole}
				/>
			</Form.Item>
		</Form>
	);
});

export default UserForm;
