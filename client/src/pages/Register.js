import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {userRegister} from '../redux/actions/userActions'
function Register() {
  const dispatch = useDispatch()
  function register(values) {
    console.log(values)
    delete values.cpassword

    dispatch(userRegister(values))
  }
  return (
    <div>
      <Row className="register-div justify-content-center" style={{marginLeft:"-10rem"}}>
        <Col lg={5} xs={24}>
          <Form layout="vertical" style={{width:"150%"}} className="bs1 p-5" onFinish={register}>
            <h3>Register</h3>
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
            <Form.Item
              label="confirm password"
              name="cpassword"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <div className="text-left">
            <Button type="primary"htmlType="submit">Register</Button>
           </div>
           <Link to='/login'>Already registered, Click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Register
