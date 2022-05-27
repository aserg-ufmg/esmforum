import { useState, useEffect } from "react"
import { Comment } from "../../src/models/comment"
import ExhibitComment from "./ExhibitComment"
import Form from "./Form"

const Forum = ( {commentsUrl= '', currentUserid = 1}) => {
  const [comment, setComment] = useState(null)

  const usersUrl = '/api/user/'
  const [users, setUsers] = useState<any[]>([])
  useEffect(()=> {
    const loadData = () => {
      const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
      }
      fetch(usersUrl, requestOptions)
      .then(response => response.json())
      .then(data => setUsers(data))
    }
    loadData()
  }, [])

  const [comments, setComments] = useState<any[]>([])
  useEffect(()=> {
      const loadData = () => {
          const requestOptions = {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
          }
          console.log(commentsUrl)
          fetch(commentsUrl, requestOptions)
          .then(response => response.json())
          .then(data => setComments(
            data.sort(
              (a: Comment, b: Comment) =>
                -(new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
            )
          ))
      }
      loadData()
  }, [commentsUrl])
  const questions = comments.filter((comment) => comment.parentid === 0)
  .sort((a, b) =>
      -(new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  );

  const getUser = (userid: number) => users.filter((user) => user.userid === userid)

  const getComments = (commentid: number) =>
    comments.filter((comment) => comment.parentid === commentid)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  
  
  const addComment = (text: string, parentid: number) => {
    console.log("Add",text, parentid)
    var updateUrl = commentsUrl
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'text': text, 'parentid': parentid, "userid": currentUserid})
    }
    if (parentid !== 0) { 
      updateUrl = commentsUrl+`${parentid}`
    }
    fetch(updateUrl, requestOptions)
      .then(response => response.json())
      .then(comment => {
        setComments([comment, ...comments])
        setComment(null)
      })
  };

  const updateComment = (text: string, commentid: number) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'text': text, "userid": currentUserid})
    }
    fetch(commentsUrl+`/${commentid}`, requestOptions)
      .then(response => response.json())
      .then(comment => {
        const updatedComments = comments.map((question: Comment) => {
          if(question.commentid === commentid){
            return { ...question, text:text}
          }
          return question
        })
        setComments(updatedComments)
        setComment(null);
      })
  };

  const deleteComment = (commentid: number) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
      }
      fetch(commentsUrl+`${commentid}`, requestOptions)
        .then(response => response.json())
        .then(comment => {
          console.log(comment.parentid, comment.commentid)
          const updatedComments = comments.filter(
            (question: Comment) => question.commentid !== commentid
          )
          setComments(updatedComments)
          setComment(null);
        });
    }
  };

  const [cascade, setCascade] = useState({enable:false});

  return (
    <div className="comments">
      <h3 className="comments-title">
        <text className="comments-title-text-a">ESM</text><text className="comments-title-text-b">FORUM</text>
      </h3>
      <div className="comment-formarea">
        <div className="comment-form-title">Please Write a new Topic:</div>
        <Form submitLabel="Write" handleSubmit={addComment} handleCancel={undefined} />
      </div>
      <div className="comments-container">
        {questions.map((question: Comment) => (
          <ExhibitComment
            key={question.commentid}
            comment= {question}
            getReplies={getComments}
            listreplies={getComments(question.commentid)}
            parentid={question.commentid}
            activeComment={comment}
            cascade={cascade}
            setCascade={setCascade}
            setComment={setComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserid={currentUserid}
            getUser={getUser}
            canCascade={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Forum;
