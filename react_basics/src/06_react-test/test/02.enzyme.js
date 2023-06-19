import App from '../App'
import Enzyme, { shallow } from 'enzyme'
// enzyme 适配器
import adpater from '@cfaester/enzyme-adapter-react-18'

Enzyme.configure({adapter: new adpater()})
describe(' react  enzyme', () => {
  it('标题为todo list',()=>{
    let app = shallow(<App/>);
    expect(app.find('h1').text()).toEqual('todo list')
  })
})
