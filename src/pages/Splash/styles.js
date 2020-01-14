import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
    flex : 1;
    background: #8B10AE;
    justify-content : center;
    align-items : center;
`;

export const Image = styled(Animated.Image)`
    width : 100px;
    height : 100px;
`;
