export default function Note({ id, title, content, deleteNote }) {
  function handleDeleteButtonClick() {
    deleteNote(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDeleteButtonClick}>DELETE</button>
    </div>
  );
}
