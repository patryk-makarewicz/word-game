import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoaderDots = () => (
  <Wrapper>
    <Loader type="ThreeDots" color="#1a79d5" height={70} width={70} />
  </Wrapper>
);

export default LoaderDots;
