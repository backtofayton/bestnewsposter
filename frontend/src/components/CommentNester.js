import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CommentCreate from './CommentCreate'
import Comment from './Comment'

const CommentNester = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const [replies, setReplies] = useState({});
    const [activeTextFieldForReply, setActiveTextFieldForReply] = useState('');
    const [activeFieldForReply, setActiveFieldForReply] = useState('');
    const [replySwitchOn, setReplySwitchOn] = useState(true)
    const [localUserId, setLocalUserId] = useState(localStorage.getItem('userId'))

    function replyToComment(id) {
        // e.preventDefault()
        console.log(id)
        setActiveFieldForReply('')
        setActiveTextFieldForReply(id)
    }

    function showReplies(commentId, postId, updateMode = false) {
        console.log('show replies for: ', commentId)
        fetch(`/api/data/comment/?newspost=${postId}&replyTo=${commentId}`)
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(repliesToComment => {
                console.log('repliesToComment: ', repliesToComment)
                // setComments(repliesToComment.reverse())
                if (Object.keys(repliesToComment).length > 0) {
                    if (activeFieldForReply == commentId && !updateMode) {
                        //if button clicked on active frame close the frame.
                        console.log('toggle enabled')
                        setReplySwitchOn(!replySwitchOn)
                    } else { setReplySwitchOn(true) }
                    setReplies(repliesToComment.reverse())
                    console.log('replies: ', replies)
                    setActiveFieldForReply(commentId)
                    setActiveTextFieldForReply('')
                    if (updateMode) {
                        //find the parent comment of the comment to be refreshed
                        //this updates comment data and brings view reply button
                        console.log('update mode comment id: ', commentId)
                        props.onNewPost(commentId)
                    }
                } else {
                    if (updateMode) {
                        //if there is no replies left, update the comment field
                        let commentObj = { hasReplies: false }
                        fetch(`/api/data/comment/${commentId}/`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Token ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify(commentObj)
                        })
                            .then(() => {
                                //this closes the dropdown
                                setActiveFieldForReply('')
                                //find the parent comment of the comment to be refreshed
                                //this refreshes comment data and removes view reply button 
                                let commentToRefresh = replies.filter(id => id == commentId)
                                props.onCommentDelete(commentToRefresh.replyTo, props.postId, true)
                            })
                    } //else { setActiveFieldForReply(commentId) } // after cleaning database on second loop hide the deleted content
                }
            })
    }

    function cancelButton() {
        setActiveTextFieldForReply('')
    }

    function deleteComment(commentId, commentReplyTo) {
        fetch(`/api/data/comment/${commentId}/`, {
            method: 'DELETE',
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            },
        })
            // .then(res => res)
            .then(data => {
                console.log('delete reply: ', data)
                // if (commentReplyTo) {
                // console.log('commentReplyTo', commentReplyTo)
                props.onCommentDelete(commentReplyTo, props.postId, true)
                // }
                // window.location.reload()
            })
    }

    function updateHasReplies(commentId) {
        let newReplies = [...replies]
        let commentIndexUpdate = newReplies.findIndex(comment => comment.id == commentId)
        console.log('commentIndexUpdate: ', commentIndexUpdate)
        newReplies[commentIndexUpdate].hasReplies = true
        setReplies(newReplies)
    }

    return (
        Object.keys(props.comments).length > 0 // if there is any comment load comments
            ? props.comments.map((comment, index) => {
                return (
                    <div key={comment.id} className="m-2 ms-3">
                        <section className='commentHeader'>{comment.customuser} - {comment.comment_date}</section>
                        <div className='py-1'>{comment.text}</div>
                        <button className='btn btn-sm btn-outline-primary' onClick={() => replyToComment(comment.id)}>reply</button>
                        <span> </span>
                        {comment.hasReplies
                            ? <button className='btn btn-sm btn-outline-info' onClick={() => { showReplies(comment.id, props.postId) }}>view replies</button>
                            : ''
                        }
                        <span> </span>
                        {comment.user == localUserId
                            ? <button className='btn btn-sm btn-outline-danger' onClick={() => { deleteComment(comment.id, comment.replyTo) }}>delete</button>
                            : ''
                        }
                        {activeFieldForReply == comment.id && replySwitchOn
                            ? <Comment onNewPost={(a) => updateHasReplies(a)}
                                onCommentDelete={(c, p, u) => showReplies(c, p, u)}
                                comments={replies} postId={props.postId} />
                            : ''}
                        {activeTextFieldForReply == comment.id
                            ? <CommentCreate onNewComment={(a, b, u) => showReplies(a, b, u)} cancelButton={cancelButton} postId={props.postId} replyTo={comment.id} />
                            : ''}
                    </div>
                )
            })
            : ''
    )
};

export default CommentNester;