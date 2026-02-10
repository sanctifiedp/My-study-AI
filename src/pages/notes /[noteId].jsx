import { useRouter } from "next/router";

export default function NoteDetail() {
  const router = useRouter();
  const { noteId } = router.query;

  return <h1>Note ID: {noteId}</h1>;
}
