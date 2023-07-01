import { Note } from "../types";
import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";

type NoteLayoutProps = {
	notes: Note[];
};
export default function NoteLayout({ notes }: NoteLayoutProps) {
	const { id } = useParams();
	const note = notes.find((note) => note.id === id);
	if (note == null) {
		return (
			<Navigate
				to='/'
				replace></Navigate>
		);
	}
	return <Outlet context={note}></Outlet>;
}

//获取内容 这个useOutletContext hook可以理解为获取Outlet上通过context传进来的数据
export function useNote() {
  return useOutletContext<Note>();
}