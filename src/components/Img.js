import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const Screen = Dimensions.get('window');
const ScreenSize = Screen.width - 40 - 6;

export default styled.Image`
   width: ${ScreenSize};
   height: ${ScreenSize};
   border-radius: 20px;
`;