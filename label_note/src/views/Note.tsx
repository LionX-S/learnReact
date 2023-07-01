import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

type NoteProps = {
	onDeleteNote: (id: string) => void;
};
export default function Note({ onDeleteNote }: NoteProps) {
	const { title, tags, id, body } = useNote();
  const navigate = useNavigate();
	return (
		<>
			<Row className=' align-items-center mb-4'>
				<Col>
					<h1>{title}</h1>
					{tags.length > 0 && (
						<Stack
							gap={1}
							direction='horizontal'
							className='flex-wrap'>
							{tags.map((tag) => (
								<Badge
									className='text-truncate'
									key={tag.id}>
									{tag.label}
								</Badge>
							))}
						</Stack>
					)}
				</Col>
				<Col xs='auto'>
					<Stack
						direction='horizontal'
						gap={2}>
						<Link to={`/${id}/edit`}>
							<Button variant='primary'>编辑</Button>
						</Link>
						<Button
							variant='outline-danger'
							onClick={()=>{
                onDeleteNote(id);
                navigate('/');
              }}>
							删除
						</Button>
						<Link to='/'>
							<Button variant='outline-secondary'>返回</Button>
						</Link>
					</Stack>
				</Col>
			</Row>
			<ReactMarkdown>{body}</ReactMarkdown>
		</>
	);
}
