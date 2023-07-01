import "bootstrap/dist/css/bootstrap.min.css";
import React, { useMemo } from "react";
import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { NoteData, RawNote, Tag } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";
import NoteList from "./views/NoteList";

function App() {
	const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
	// 分开存储原因是 并不是每次都要更改所有东西，可能tag改，可能notes改
	const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

	const notesWithTags = useMemo(() => {
		return notes.map((note) => {
			return {
				...note,
				tags: tags.filter((tag) => note.tagIds.includes(tag.id))
			};
		});
	}, [notes, tags]);

	// 新增数据
	function onCreateNote({ tags, ...data }: NoteData) {
		setNotes((prevNotes) => {
			return [
				...prevNotes,
				{ ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) }
			];
		});
	}
	// 新增tag
	function addTag(tag: Tag) {
		setTags((prev) => [...prev, tag]);
	}
	// 修改数据
	function onUpdateNote(id: string, { tags, ...data }: NoteData) {
		setNotes((prevNotes) => {
			return prevNotes.map((note) => {
				if (note.id === id) {
					return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
				} else {
					return note;
				}
			});
		});
	}
	// 删除数据
	function onDeleteNote(id: string) {
		setNotes((prevNotes) => {
			return prevNotes.filter((note) => note.id !== id);
		});
	}

	// 删除Tag
	function onDeleteTag(id: string) {
		setTags((prevTags) => {
			return prevTags.filter((tag) => tag.id !== id);
		});
	}

	// 更改tag
	function onUpdateTag(id: string, label: string) {
		setTags((prevTags) => {
			return prevTags.map((tag) => {
				if (tag.id === id) {
					return { ...tag, label };
				} else {
					return tag;
				}
			});
		});
	}
	return (
		<Container className='my-4'>
			<Routes>
				<Route
					path='/'
					element={
						<NoteList
							notes={notesWithTags}
							availableTags={tags}
							onDeleteTag={onDeleteTag}
							onUpdateTag={onUpdateTag}
						/>
					}
				/>
				<Route
					path='new'
					element={lazyLoad("./views/NewNote", {
						onSubmit: onCreateNote,
						onAddTag: addTag,
						availableTags: tags
					})}
				/>
				<Route
					path='/:id'
					element={lazyLoad("./views/NoteLayout", { notes: notesWithTags })}>
					{/* 路径为id是展示笔记 */}
					<Route
						index
						element={lazyLoad("./views/Note", { onDeleteNote })}
					/>
					{/* 路径为id+edit时编辑 */}
					<Route
						path='edit'
						element={lazyLoad("./views/EditNote", {
							onUpdateNote,
							onAddTag: addTag,
							availableTags: tags
						})}
					/>
				</Route>
				<Route
					path='*'
					element={<Navigate to='/' />}
				/>
			</Routes>
		</Container>
	);
}


// 懒加载
const lazyLoad: (path: string, props?: object) => ReactNode = (
	path: string,
	props?: object
) => {
	// 使用import导入时，打包后会找不到页面文件，所有用vite提供的import.meta.glob
	const modules = import.meta.glob("./views/*.tsx");
	const Comp = React.lazy(modules[`${path}.tsx`] as any);
	return (
		<React.Suspense fallback={<>Loading...</>}>
			<Comp {...props} />
		</React.Suspense>
	);
};
export default App;
