import NoteForm from "../components/NoteForm";
import { NoteData, Tag } from "../types";

type NewNoteProps = {
	onSubmit: (data: NoteData) => void;
	onAddTag: (tags: Tag) => void;
	availableTags: Tag[];
};
export default function NewNote({
	onSubmit,
	onAddTag,
	availableTags
}: NewNoteProps) {
	return (
		<>
			<h1 className='mb-4'>新建笔记</h1>
			<NoteForm
				onSubmit={onSubmit}
				onAddTag={onAddTag}
				availableTags={availableTags}
			/>
		</>
	);
}
