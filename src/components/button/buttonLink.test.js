import { shallow } from 'enzyme';

import ButtonLink from './buttonLink';

describe('<ButtonLink />', () => {
  it('should render button', () => {
    const wrapper = shallow(<ButtonLink to="" />);
    expect(wrapper.find('Link'));
  });
});
