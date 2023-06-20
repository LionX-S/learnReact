import React, { FC, ReactElement, useRef } from "react";
import { ITodo } from "../typing";

interface IProps {
  addTodo: (todo: ITodo) => void,
  todoList: ITodo[]
}

const TdInput: FC<IProps> = ({addTodo, todoList}): ReactElement => {
	const inputRef = useRef<HTMLInputElement>(null);
  const addItem = ():void => {
    // 肯定取得到值
    const inputValue:string = inputRef.current!.value.trim();
    if(inputValue.length>0) {
      const isExist = todoList.find(todo => todo.content === inputValue);
      if(isExist) {
        alert('已存在值');
        return;
      }
      addTodo({
        id: new Date().getTime(),
        content: inputValue,
        completed: false
      })

      // 清空输入框
      inputRef.current!.value = '';
    }
  }
	return (
		<div>
			<input
				type='text'
				placeholder='输入数据'
				ref={inputRef}
			/>
			<button onClick={
        addItem
      }>增加</button>
		</div>
	);
};

export default TdInput;
