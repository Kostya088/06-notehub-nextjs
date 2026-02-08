import { fetchNoteById } from "@/lib/api";
import css from "./page.module.css";

interface singleNoteProps {
  params: Promise<{ id: string }>;
}

export default async function SingleNote({ params }: singleNoteProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  const createdIso = note.createdAt;
  const updatedIso = note.updatedAt;
  const creaeted = new Date(createdIso);
  const updated = new Date(updatedIso);

  return (
    <div className={css.noteContainer}>
      <h1>{note.title}</h1>
      <span className={css.tag}>{note.tag}</span>
      <p>{note.content}</p>
      <div className={css.date}>
        <p>
          Created at: {creaeted.getFullYear()}/
          {String(creaeted.getMonth() + 1).padStart(2, "0")}/
          {String(creaeted.getDate()).padStart(2, "0")}{" "}
          {String(creaeted.getHours()).padStart(2, "0")}:
          {String(creaeted.getMinutes()).padStart(2, "0")}
        </p>
        <p>
          Last updated at: {updated.getFullYear()}/
          {String(updated.getMonth() + 1).padStart(2, "0")}/
          {String(updated.getDate()).padStart(2, "0")}{" "}
          {String(updated.getHours()).padStart(2, "0")}:
          {String(updated.getMinutes()).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
