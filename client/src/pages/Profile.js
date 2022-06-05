import { Col, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'

function Profile() {
  // const {users} = useSelector(state => state.userreducer)
  // const user = users.find(obj => obj._id == match.params.userid)
  return (
    <DefaultLayout>
      <Row justify="center">
        <Col lg={12} sm={24} xs={24}>
          <h1></h1>
        </Col>
      </Row>
    </DefaultLayout>
  )
}

export default Profile