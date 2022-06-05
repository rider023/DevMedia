import { Button, Col, Input, Row } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { Link } from 'react-router-dom'
import moment from 'moment'
import TextArea from 'antd/lib/input/TextArea'
import { followUser, getallusers,unfollowUser } from '../redux/actions/userActions'
import { useEffect } from 'react'
import {
  UserAddOutlined,
  CheckOutlined
} from '@ant-design/icons'

function AllUsers() {
  const { users } = useSelector((state) => state.usersReducer)
  const currentuser = JSON.parse(localStorage.getItem('user')).user
  const { followLoading,unfollowLoading } = useSelector((state) => state.alertsReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getallusers())
  }, [followLoading,unfollowLoading])
  return (
    <DefaultLayout>
      <div>
        <Row justify="left">
          <Col lg={20} className="d-flex">
            <Input style={{ width: '60%' }} />
          </Col>
        </Row>
        <Row justify="center" gutter={16} className="mt-5">
          {users.map((user) => {
            return (
              <>
                {currentuser._id !== user._id && (
                  <Col lg={5} xs={24} className="text-left p-2 ">
                    <div className="bs1 p-2">
                      {user.profilePicUrl == '' ? (
                        <span className="profilepic2 d-flex align-items-center justify-content-center">
                          {user.username[0]}
                        </span>
                      ) : (
                        <img src={user.profilePicUrl} />
                      )}
                      <Link to="">{user.username}</Link>
                      <p>{moment(user.createAt).format('MM DD YYYY')}</p>
                      {user.followers.find((obj) => obj == currentuser._id) ? (
                        <div className="d-flex ">
                          <Button >Following</Button>
                          <Button
                          onClick={() => {
                            dispatch(
                              unfollowUser({
                                currentuserid: currentuser._id,
                                receiveruserid: user._id,
                              }),
                            )
                          }}>Unfollow</Button>
                        </div>
                      ) : (
                        <Button
                        icon ={< UserAddOutlined />}
                          onClick={() => {
                            dispatch(
                              followUser({
                                currentuserid: currentuser._id,
                                receiveruserid: user._id,
                              }),
                            )
                          }}
                        >
                          Follow
                        </Button>
                      )}
                    </div>
                  </Col>
                )}
              </>
            )
          })}
        </Row>
      </div>
    </DefaultLayout>
  )
}

export default AllUsers
