import { FormEvent, useState } from "react";

const hasURL = (text: string) => (
  text.split(" ").filter((word) => word.slice(0,4)==="http").length > 0
);

function tagURL(text: string) {
  const listURLs = text.split(" ").filter((word) => word.slice(0,4)==="http")
  if (listURLs.length>0) {
    let newtext = text;
    for (let i = 0; i < listURLs.length; i++) {
      newtext = newtext.replace(listURLs[i], "<a href=\""+listURLs[i]+"\">"+listURLs[i]+"</a>")
    }
    return newtext
  } else {
    return text
  }
}

const searchURL = (text: string) => (tagURL(text));

const Form = ({
  handleSubmit = (text: string, parentid: number) => {},
  submitLabel = "",
  hasCancelButton = false,
  handleCancel = () => {},
  initialText = "",
  parentid = 0
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleSubmit(text, parentid)
    setText("")
  }
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => {
          if(hasURL(e.target.value)){
            console.log("URL not allowed")
          }else {
            setText(e.target.value)
          }
        }}
      />
      <button className="comment-form-button comment-form-left" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button comment-form-left"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  )
}

export default Form;
export const URL = {
  hasURL,
  searchURL
}