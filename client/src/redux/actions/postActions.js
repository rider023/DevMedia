import axios from 'axios'
import { message } from 'antd'

export const addPost = (values) => async (dispatch) => {
  values.user = JSON.parse(localStorage.getItem('user')).user._id
  values.likes = []
  values.comments = []
  console.log(values.user)
  dispatch({ type: 'LOADING', payload: true })


  try {
    await axios.post('/api/posts/addpost', values)
    dispatch({ type: 'LOADING', payload: false })
    message.success('Post Added successfully')
   
  } catch (error) {
    console.log(error)
    dispatch({ type: 'LOADING', payload: false })
    message.error('Something went wrong')
  }
}

export const getallposts = () => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true })

  try {
    const response = await axios.get('/api/posts/getallposts')
    dispatch({ type: 'LOADING', payload: false })
    dispatch({ type: 'GET_ALL_POSTS', payload: response.data })
  } catch (error) {
    console.log(error)
    dispatch({ type: 'LOADING', payload: false })

    message.error('Something went wrong')
  }
}

export const likeOrUnlikePost = (values) => async (dispatch) => {
  values.userid = JSON.parse(localStorage.getItem('user')).user._id
 
  console.log(values)
  dispatch({ type: 'LIKE_UNLIKE_LOADING', payload: true })


  try {
    await axios.post('/api/posts/likeorunlikepost', values)
    dispatch({ type: 'LIKE_UNLIKE_LOADING', payload: false })
    // message.success('Post Liked/Unliked successfully')
   
  } catch (error) {
    console.log(error)
    dispatch({ type: 'LIKE_UNLIKE_LOADING', payload: false })
    message.error('Something went wrong')
  }
}

export const addComment = (values) => async (dispatch) => {
  values.userid = JSON.parse(localStorage.getItem('user')).user._id
  console.log(values)
  dispatch({ type: 'ADD_COMMENT_LOADING', payload: true })


  try {
    await axios.post('/api/posts/addcomment', values)
    dispatch({ type: 'ADD_COMMENT_LOADING', payload: false })
    // message.success('Post Liked/Unliked successfully')
   
  } catch (error) {
    console.log(error)
    dispatch({ type: 'ADD_COMMENT_LOADING', payload: false })
    message.error('Something went wrong')
  }
}