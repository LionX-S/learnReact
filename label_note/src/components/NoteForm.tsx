import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../types";
import { v4 as uuidV4 } from "uuid";

type NoteFormProps = {
	onSubmit: (data: NoteData) => void;
	onAddTag: (tags: Tag) => void;
	// 这个是从localStorage中拿到的总的tag数据
	availableTags: Tag[];
} & Partial<NoteData>;
export default function NoteForm({
	onSubmit,
	onAddTag,
	availableTags,
	title='',
	body='',
	tags=[]
}: NoteFormProps) {
	const titleRef = useRef<HTMLInputElement>(null);
	const bodyRef = useRef<HTMLTextAreaElement>(null);
	const navigate = useNavigate();
	// 标签state 这个是需要提交的tags数据
	const [selectTags, setSelectTags] = useState<Tag[]>(tags);
	// 提交方法
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit({
			title: titleRef.current!.value,
			body: bodyRef.current!.value,
			tags: selectTags
		});
		// 去到首页
		navigate("/");
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Stack gap={4}>
				<Row>
					<Col>
						<Form.Group controlId='title'>
							<Form.Label>标题</Form.Label>
							<Form.Control
								ref={titleRef}
								defaultValue={title}
								required
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId='tags'>
							<Form.Label>标签</Form.Label>
							<CreatableReactSelect
								onCreateOption={(label) => {
									const newTag = { id: uuidV4(), label };
									onAddTag(newTag);
									setSelectTags((prev) => [...prev, newTag]);
								}}
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
				<Form.Group controlId='markdown'>
					<Form.Label>内容</Form.Label>
					<Form.Control
						required
						defaultValue={body}
						as='textarea'
						ref={bodyRef}
						rows={15}
					/>
				</Form.Group>
				<Stack
					direction='horizontal'
					gap={2}
					className='justify-content-end'>
					<Button
						type='submit'
						variant='primary'>
						保存
					</Button>
					{/* 取消返回上一页 */}
					<Link to='..'>
						<Button
							type='button'
							variant='outline-secondary'>
							取消
						</Button>
					</Link>
				</Stack>
			</Stack>
		</Form>
	);
}
