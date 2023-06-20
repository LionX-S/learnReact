import React, {
	FC,
	ReactElement,
	useCallback,
	useEffect,
	useState
} from "react";
import TdInput from "./TdInput";
import TdList from "./TdList";
import { ITodo } from "./typing";

const TodoList: FC = (): ReactElement => {
	const [todoList, setTodoList] = useState<ITodo[]>([]);
	useEffect(() => {
		console.log(todoList);
	}, [todoList]);
	const addTodo = useCallback((todo: ITodo) => {
		setTodoList((todoList) => [...todoList, todo]);
	}, []);
	return (
		<div>
			<TdInput
				addTodo={addTodo}
				todoList={todoList}
			/>
			<TdList />
		</div>
	);
};

export default TodoList;
