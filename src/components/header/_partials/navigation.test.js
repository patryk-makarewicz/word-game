import { shallow } from 'enzyme';

import Navigation from './navigation';

describe('<Navigation />', () => {
  it('should render navigation list', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('ul'));
  });
  it('should render navigation list item', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('li'));
  });
});
