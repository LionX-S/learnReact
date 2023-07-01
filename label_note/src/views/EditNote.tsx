import NoteForm from "../components/NoteForm";
import { NoteData, Tag } from "../types";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
	onUpdateNote: (id: string, data: NoteData) => void;
	onAddTag: (tags: Tag) => void;
	availableTags: Tag[];
};
export default function EditNote({
	onUpdateNote,
	onAddTag,
	availableTags
}: EditNoteProps) {
	const { id,title, body, tags } = useNote();
	return (
		<>
			<h1 className='mb-4'>编辑笔记</h1>
			<NoteForm
				title={title}
				body={body}
				tags={tags}
				onSubmit={(data) => onUpdateNote(id, data)}
				onAddTag={onAddTag}
				availableTags={availableTags}
			/>
		</>
	);
}
