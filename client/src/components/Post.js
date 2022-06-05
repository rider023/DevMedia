import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { HeartFilled, CommentOutlined } from '@ant-design/icons'
import {
  addComment,
  getallposts,
  likeOrUnlikePost,
} from '../redux/actions/postActions'
import { useEffect, useState } from 'react'
import Modal from 'antd/lib/modal/Modal'
import { Row, Col } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

function Post({ post }) {
  const dispatch = useDispatch()
  const currentuser = JSON.parse(localStorage.getItem('user')).user._id
  const alreadyLiked = post.likes.find(
    (obj) => obj.user.toString() == currentuser,
  )
  const { likeOrUnlikeLoading, addCommentLoading } = useSelector(
    (state) => state.alertsReducer,
  )
  const [comment, setComment] = useState('')
  const { users } = useSelector((state) => state.usersReducer)
  useEffect(() => {
    dispatch(getallposts())
  }, [likeOrUnlikeLoading, addCommentLoading])
  const [commentModalVisibility, setCommentModalVisibility] = useState(false)
  return (
    <div className="bs1 p-2">
      <div className="d-flex justify-content-between align-item-center">
        <div className="d-flex align-items-center">
          {/* {post.user.username} */}
          {post.user.profilePicUrl == '' ? (
            <span className="profilepic1 d-flex align-items-center justify-content-center">
              {post.user.username[0]}
            </span>
          ) : (
            <img src={post.user.profilePicUrl} />
          )}
          <Link to="" className="ml-2">
            {post.user.username}
          </Link>
        </div>
        <div>
          {/* npm i moment */}
          <p>{moment(post.createAt).format('MM DD YYYY')}</p>
        </div>
      </div>
      <img src={post.image} className="postimage" />
      <p className="mt-1 mb-1 text-left">{post.description}</p>
      <div className="d-flex align-items-center ">
        <div className="d-flex align-items-center mr-3">
          <HeartFilled
            style={{ color: alreadyLiked ? 'red' : 'grey' }}
            onClick={() => {
              dispatch(likeOrUnlikePost({ postid: post._id }))
            }}
          />
          <p>{post.likes.length}</p>
        </div>
        <div className="d-flex align-items-center mr-3">
          <CommentOutlined
            onClick={() => {
              setCommentModalVisibility(true)
            }}
          />
          <p>{post.comments.length}</p>
        </div>
      </div>
      <Modal
        visible={commentModalVisibility}
        title="comments"
        closable={false}
        width="900px"
        okText="Add Comment"
        onOk={() => {
          dispatch(addComment({ postid: post._id, comment: comment }))
          setCommentModalVisibility(false)
        }}
        onCancel={() => {
          setCommentModalVisibility(false)
        }}
      >
        <Row>
          <Col lg={13} xs={0}>
            <img src={post.image} height="350" className="w-100" />
          </Col>
          <Col lg={11} xs={24}>
            <TextArea
              placeholder="add your comment here"
              className="ml-2"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value)
              }}
            />
            {post.comments.map((comment) => {
              const user = users.find((obj) => obj._id == comment.user)
              console.log(comment)
              
              return (
                <div className="d-flex align-items-center m-1 p-1 justify-content-between">
                <div className="d-flex  align-items-center">
                {user.profilePicUrl == '' ? (
                    <span className="profilepic1 d-flex align-items-center justify-content-center" >
                      {user.username[0]}
                    </span>
                  ) : (
                    <img src={post.user.profilePicUrl} />
                  )}
                  <Link to='' className="ml-2" style={{fontSize:15}} >{user.username}</Link>
                  <p style={{fontSize:15}}>{comment.comment}</p>
                </div>
                 <div className="d-flex">
                    <p style={{fontSize:13}}>{comment.date}</p>
                 </div>
                </div>
              )
            })}
          </Col>
        </Row>
      </Modal>
    </div>
  )
}

export default Post
