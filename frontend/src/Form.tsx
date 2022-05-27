import { FormEvent, useState } from "react";

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
        onChange={(e) => setText(e.target.value)}
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