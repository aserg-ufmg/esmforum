import CommentForm from "./Form";
import { Comment } from "../../src/models/comment";

type Props = {
  comment: Comment;
  getReplies: any;
  setComment: any;
  listreplies: Comment[],
  activeComment: any;
  updateComment: any;
  deleteComment: any;
  addComment: any;
  parentid: any;
  currentUserid: number;
  getUser: any;
  cascade:any;
  setCascade: any;
  canCascade: boolean;
}

const ExhibitComment = (
  props: Props
) => {
  const isEditing = props.activeComment &&
    props.activeComment.id === props.comment.commentid &&
    props.activeComment.type === "editing"
  const isReplying = props.activeComment &&
    props.activeComment.id === props.comment.commentid &&
    props.activeComment.type === "replying"
  const canDelete =
    props.currentUserid === props.comment.userid && props.listreplies.length === 0
  const canReply = Boolean(props.currentUserid)
  const canEdit = props.currentUserid === props.comment.userid
  const canCascade = props.listreplies.length > 0 && props.canCascade && !props.cascade.enable
  const canCloseCascade = props.cascade.enable && props.canCascade &&  props.comment.commentid === props.cascade.id
  const createdAgo = ((new Date().getTime())-(new Date(props.comment.createdAt).getTime()))
  const createdAgoDays = Math.floor(createdAgo/(24*60*60*1000))
  const createdAgoHours  = Math.floor((createdAgo%(24*60*60*1000))/(60*60*1000))
  const createdAgoMinutes = Math.floor(((createdAgo%(24*60*60*1000))%(60*60*1000))/(60*1000))
  var createdDate = ""
  if(createdAgoDays !== 0){
    if(createdAgoDays === 1){
      createdDate = createdAgoDays.toString()+" day "
    }else{
      createdDate = createdAgoDays.toString()+" days "
    }
  }else if(createdAgoHours !== 0){
    if(createdAgoHours === 1){
      createdDate = createdDate+createdAgoHours.toString()+" hour "
    }else{
      createdDate = createdDate+createdAgoHours.toString()+" hours "
    }
  }else {
    createdDate = createdDate+createdAgoMinutes.toString()+" minutes "
  }
  createdDate = createdDate + "ago"
  if(createdAgo < 60000){
    createdDate = "now"
  }
  return (
    <div key={props.comment.commentid} className="comment">
      <div className="comment-image-container">
        <img src="/userlogo.png" alt=""/>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{props.getUser(props.comment.userid)[0].username}</div>
          <div className="comment-date">{createdDate}</div>
        </div>
        {!isEditing && <div className="comment-text">{props.comment.text}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton={true}
            initialText={props.comment.text}
            handleSubmit={(text) => props.updateComment(text, props.comment.commentid)}
            handleCancel={() => {
              props.setComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                props.setComment({ id: props.comment.commentid, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                props.setComment({ id: props.comment.commentid, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => props.deleteComment(props.comment.commentid)}
            >
              Delete
            </div>
          )}
          {(canCascade || (props.listreplies.length > 0 && !canCloseCascade && props.canCascade)) && (
            <div
              className="comment-action"
              onClick={() =>
                {
                props.setCascade({ id:props.comment.commentid, enable:true })
              }
              }
            >
              Show Answers
            </div>
          )}
          {canCloseCascade && (
            <div
              className="comment-action"
              onClick={() =>
                {
                props.setCascade({enable:false})
              }
              }
            >
              Hide Answers
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            hasCancelButton={true}
            handleSubmit={(text) => {
              props.addComment(text, props.comment.commentid)
              if(props.canCascade){props.setCascade({ id:props.comment.commentid, enable:true })}
            }}
            handleCancel={() => {
              props.setComment(null);
            }}
          />
        )}
        {props.cascade.enable && (props.comment.commentid === props.cascade.id || !props.canCascade) && props.listreplies.length > 0 && (
          <div className="replies">
            {props.listreplies.map((reply:Comment) => (
              <ExhibitComment
                comment={reply}
                key={reply.commentid}
                setComment={props.setComment}
                activeComment={props.activeComment}
                updateComment={props.updateComment}
                deleteComment={props.deleteComment}
                addComment={props.addComment}
                parentid={props.comment.commentid}
                listreplies={props.getReplies(reply.commentid)}
                getReplies={props.getReplies}
                canCascade={false}
                currentUserid={props.currentUserid}
                getUser={props.getUser}
                cascade={props.cascade}
                setCascade={props.setCascade}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExhibitComment;