import { shallow } from 'enzyme';

import About from './about';

describe('<About />', () => {
  it('should render link', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('a'));
  });
  it('should render img', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('img'));
  });
});
