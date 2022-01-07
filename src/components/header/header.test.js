import { shallow } from 'enzyme';

import Header from './header';
import Navigation from './_partials/navigation';
import Language from './_partials/language';

describe('<Header />', () => {
  it('should render navigation list', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('a'));
  });
  it('should render navigation list item', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(<Navigation />));
  });
  it('should render navigation list item', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(<Language />));
  });
});
