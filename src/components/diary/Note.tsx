import React from "react";
import { Month } from "../../Types";
import "./Note.scss";

type Props = {
  activeNote: Month[];
  updateNote: (updatedNote: Month) => void;
};

const Note = (props: Props) => {
  const { activeNote, updateNote } = props;
  const onEditNote = (value: string) => {
    updateNote({
      date: activeNote[0].date,
      id: activeNote[0].id,
      note: value,
    });
  };
  return (
    <div className="note">
      <textarea
        className="noteInput"
        placeholder="作成されたノートがありません"
        onChange={(e) => onEditNote(e.target.value)}
        value={activeNote[0].note}
      ></textarea>
    </div>
  );
};

export default Note;
