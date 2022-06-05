import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/actions/userActions'

function Login() {
  const dispatch = useDispatch()
  function login(values) {
    console.log(values)

    dispatch(userLogin(values))
  }
  return (
    <div>
      <Row
        className="register-div justify-content-center"
        style={{ marginLeft: '-10rem' }}
      >
        <Col lg={5} xs={24}>
          <Form
            layout="vertical"
            style={{ width: '150%' }}
            className="bs1 p-5"
            onFinish={login}
          >
            <h3>Login</h3>
            <hr />
            <Form.Item
              label="username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <div className="text-left">
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </div>
            <Link to="/register">
              Not yet registered, click here to register
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
