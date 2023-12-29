import React from "react"
import {connect} from "dva"
import {Button, Form, Icon, Input, Row, message} from "antd"

const FormItem = Form.Item

const Login = ({dispatch, loading, form}) => {
	const {getFieldDecorator, validateFieldsAndScroll, getFieldsValue, setFieldsValue} = form
	const handleOk = () => {
		validateFieldsAndScroll((errors, values) => {
			if (!errors) {
				console.log("values", values)
			}
		})
	}
	return (
		<div className={styles.form}>
			<div className={styles.logo}>
				<img alt="logo" style={{width: 180}} src={fullLogo}/>
			</div>
			<Form>
				<FormItem hasFeedback>
					{getFieldDecorator("loginName", {
						rules: [{
							required: true,
							message: "用户名不能为空"
						}]
					})(
						<Input
							prefix={<Icon type="user"/>}
							size="large"
							onPressEnter={handleOk}
							placeholder="用户名"/>
					)}
				</FormItem>
				<FormItem hasFeedback>
					{getFieldDecorator("password", {
						rules: [{
							required: true,
							message: "密码不能为空"
						}]
					})(
						<Input
							prefix={<Icon type="lock"/>}
							size="large"
							onPressEnter={handleOk}
							type="password"
							placeholder="请输入密码"/>
					)}
				</FormItem>
				<Row>
					<Button type="primary" size="large" onClick={handleOk} loading={loading.effects["login/login"]}>
						登录
					</Button>
				</Row>
			</Form>
		</div>
	)
}

export default connect(({app, loading}) => ({app, loading}))(Form.create()(Login))
