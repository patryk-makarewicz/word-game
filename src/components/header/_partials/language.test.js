import { shallow } from 'enzyme';

import Language from './language';

describe('<Language />', () => {
  it('should render button', () => {
    const wrapper = shallow(<Language />);
    expect(wrapper.find('button'));
  });
  it('should handle click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<button type="button" onClick={mockCallBack} label />);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('should handle click event button', () => {
    const wrapper = shallow(
      <button type="button" onClick>
        <img alt="" />
        <img alt="" />
      </button>,
    );
    expect(
      wrapper.containsMatchingElement(
        <button type="button" onClick>
          <img alt="" />
          <img alt="" />
        </button>,
      ),
    ).toEqual(true);
  });
});
