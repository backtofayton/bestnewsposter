import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router";
import CommentCreate from '../components/CommentCreate'
import Comment from '../components/Comment'

function PostId() {
    let { id } = useParams();
    console.log('id: ', id)
    return id;
}

const PostRender = () => {
    const [loading, setLoading] = useState(true);
    const [postId, setPostId] = useState(PostId());
    const [postData, setPostData] = useState({});
    const [comments, setComments] = useState({});
    const [reply_to, setReply_to] = useState('0');
    const [voteState, setVoteState] = useState('vote');
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites').split(','));
    // PostID()

    useEffect(() => {
        getComments(postId)
    }, [])

    function getComments(postId) {
        //fetch the post
        fetch(`/api/data/news/${postId}/`)
            .then(res => res.json())
            .then(dataOfPost => {
                // setUserEmail(data.email);
                // setUsername(data.username)
                console.log('dataOfPost: ', dataOfPost)
                setPostData(dataOfPost)
            })
            .then(() => {
                //fetch the comments of the post
                fetch(`/api/data/comment/?newspost=${postId}`)
                    .then(res => {
                        console.log(res)
                        return res.json()
                    })
                    .then(commentsOfPost => {
                        console.log('commentsOfPost: ', commentsOfPost)
                        setComments(commentsOfPost.reverse())
                        setLoading(false)
                    })
                    .catch(e => console.log('error for comment: ', e))
            })
            .catch(error => {
                window.location.reload()
                console.log(error, 'there is error')
            })
    }

    function toggleVote() {
        // console.log('favorites: ', favorites)
        if (voteState == 'vote') {
            fetch(`/api/data/news/${postId}/?vote=up`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('response from vote up:', data)
                    postData.point = data.point
                    // console.log('upvote old favorites: ', favorites)
                    // let updatedFavorites = [...favorites, postId]
                    // console.log('upvote favorites: ', updatedFavorites)
                    setFavorites([...favorites, postId])
                })
        } else {
            fetch(`/api/data/news/${postId}/?vote=down`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    postData.point = data.point
                    console.log('postId when removing: ', postId)
                    let newValuesOfFavorites = favorites.filter(item => item != postId)
                    setFavorites(newValuesOfFavorites)
                    // localStorage.setItem('favorites', )
                })
        }
    }

    function updateHasReplies(commentId) {
        let newComments = [...comments]
        let commentIndexUpdate = newComments.findIndex(comment => comment.id == commentId)
        console.log('commentIndexUpdate: ', commentIndexUpdate)
        newComments[commentIndexUpdate].hasReplies = true
        setComments(newComments)
    }

    useEffect(() => {
        localStorage.setItem('favorites', favorites.join())
        console.log('favorites: ', favorites)
        favorites.includes(postId.toString())
            ? setVoteState('vote on')
            : setVoteState('vote')
    }, [favorites, postData])

    return (
        <div>
            {/* {loading === false && ( */}
            <Fragment>
                <div className='col-md-8'>
                    <h4><a className="postRenderLinks" href={`${postData.url}`}>{postData.title}</a>
                        <span onClick={toggleVote} className={voteState}>
                        </span> <small className='mx-2'>{postData.point}</small></h4>
                </div>
                <CommentCreate onNewComment={(a, b) => getComments(b)}
                    mainPage={true} postId={postId} />
                <Comment onNewPost={(a) => updateHasReplies(a)}
                    onCommentDelete={(c, p, t) => getComments(p)}
                    comments={comments} postId={postId} />
            </Fragment>
            {/* )} */}
        </div>
    )
}

export default PostRender;