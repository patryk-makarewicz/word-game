import { shallow } from 'enzyme';

import Start from './start';

describe('<Start />', () => {
  it('should render link', () => {
    const wrapper = shallow(<Start />);
    expect(wrapper.find('a'));
  });
});
