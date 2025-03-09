import { useState } from "react";

export default function CreateArea({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleInputChange(event) {
    setTitle(event.target.value);
  }

  function handleContentInputChange(event) {
    setContent(event.target.value);
  }

  function handleAddButtonClick(event) {
    addNote(title, content);
    setTitle("");
    setContent("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleInputChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={handleContentInputChange}
        />
        <button onClick={handleAddButtonClick}>Add</button>
      </form>
    </div>
  );
}
