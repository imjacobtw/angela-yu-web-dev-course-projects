import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

export default function CreateArea({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function handleTitleInputChange(event) {
    setTitle(event.target.value);
  }

  function handleContentInputChange(event) {
    setContent(event.target.value);
  }

  function handleContentInputClick() {
    setIsEditing(true);
  }

  function handleAddButtonClick(event) {
    addNote(title, content);
    setTitle("");
    setContent("");
    setIsEditing(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isEditing && (
          <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleInputChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isEditing ? 3 : 1}
          value={content}
          onChange={handleContentInputChange}
          onClick={handleContentInputClick}
        />
        <Zoom in={isEditing}>
          <Fab onClick={handleAddButtonClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
