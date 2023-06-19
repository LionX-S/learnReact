import ShallowRender from 'react-test-renderer/shallow';
import App from '../App'
describe('react-test', () => {
  it('title is todo list', ()=>{
    const render = new ShallowRender();
    render.render(<App/>);
    expect(render.getRenderOutput().props.children[0].type).toBe('h1')
  })
})
