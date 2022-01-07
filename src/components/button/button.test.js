import { shallow } from 'enzyme';

import Button from './button';

describe('<Button />', () => {
  it('should render button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button'));
  });
  it('should have handle click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<button type="button" onClick={mockCallBack} label />);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
