import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Note, Tag } from "../types";
import { useMemo, useState } from "react";
import NoteCard from "../components/NoteCard";
import EditTagsModal from "../components/EditTagsModal";

type NoteListProps = {
	availableTags: Tag[];
	notes: Note[];
	onDeleteTag: (id: string) => void
	onUpdateTag: (id: string, label: string) => void
};
export default function NoteList({ availableTags, notes, onDeleteTag, onUpdateTag }: NoteListProps) {
	const [selectTags, setSelectTags] = useState<Tag[]>([]);
	const [title, setTitle] = useState<string>("");
	const filteredNotes = useMemo(() => {
		return notes.filter((note) => {
			return (
				(title === "" ||
					note.title.toLowerCase().includes(title.toLowerCase())) &&
				(selectTags.length === 0 ||
					selectTags.every((tag) =>
						note.tags.some((noteTag) => noteTag.id === tag.id)
					))
			);
		});
	}, [title, selectTags, notes]);
	const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
	return (
		<>
			<Row className='align-items-center mb-4'>
				<Col>
					<h1>Notes</h1>
				</Col>
				<Col xs='auto'>
					<Stack
						direction='horizontal'
						gap={2}>
						<Link to='/new'>
							<Button variant='primary'>新建</Button>
						</Link>
						<Button
							variant='outline-secondary'
							onClick={() => setEditModalIsOpen(true)}>
							编辑标签
						</Button>
					</Stack>
				</Col>
			</Row>
			{/* Tags */}
			<Form>
				<Row className='mb-4'>
					<Col>
						<Form.Group controlId='title'>
							<Form.Label>标题</Form.Label>
							<Form.Control
								type='text'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId='tags'>
							<Form.Label>标签</Form.Label>
							<ReactSelect
								options={availableTags.map((tag) => {
									return { label: tag.label, value: tag.id };
								})}
								value={selectTags.map((tag) => {
									return { label: tag.label, value: tag.id };
								})}
								onChange={(tags) => {
									setSelectTags(
										tags.map((tag) => {
											return { label: tag.label, id: tag.value };
										})
									);
								}}
								isMulti
							/>
						</Form.Group>
					</Col>
				</Row>
			</Form>
			{/* list */}
			<Row
				xs={1}
				sm={2}
				lg={3}
				xl={4}
				className='g-3'>
				{filteredNotes.map((note) => (
					<Col key={note.id}>
						<NoteCard
							id={note.id}
							title={note.title}
							tags={note.tags}
						/>
					</Col>
				))}
			</Row>
			<EditTagsModal
				show={editModalIsOpen}
				availableTags={availableTags}
				handleClose={() => setEditModalIsOpen(false)}
				deleteTag={onDeleteTag}
				updateTag={onUpdateTag}
			/>
		</>
	);
}
