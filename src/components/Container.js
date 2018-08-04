import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const Screen = Dimensions.get('window');

export default styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: ${Screen.width + 80};
  align-self: center;
`;