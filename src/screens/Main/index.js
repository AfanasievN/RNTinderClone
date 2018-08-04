import React, { Component } from 'react';
import { StyleSheet, Dimensions, Animated } from 'react-native';
import { Container, Img, OverlayText, Text, BottomContainer } from '../../components';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class MainScreen extends Component {

  state = {
    overlayText: {
      trash: 'Trash',
      keep: 'Keep'
    },
    swipeLeftText: 'Swipe LEFT to trash',
    swipeRightText: 'or RIGHT to keep'
  };

  _deltaX = new Animated.Value(0);

  render() {
    const { overlayText, swipeLeftText, swipeRightText } = this.state;
    return (
      <Container>
        <Container>
          <Interactable.View
            horizontalOnly={true}
            snapPoints={[ { x: 390 }, { x: 0, damping: 0.8 }, { x: -390 } ]}
            animatedValueX={this._deltaX}
          >
            <Animated.View style={[styles.card, {
              transform: [{
                rotate: this._deltaX.interpolate({
                  inputRange: [-250, 0, 250],
                  outputRange: ['10deg', '0deg', '-10deg']
                }) }] }]}
            >
              <Img source={require('../../assets/tinder-photo.jpg')} />
              <Animated.View style={[styles.overlay, { backgroundColor: '#de6d77' }, {
                opacity: this._deltaX.interpolate({
                  inputRange: [-120, 0],
                  outputRange: [0.8, 0],
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp'
                })
              }]}
              >
                <OverlayText>
                  {overlayText.trash}
                </OverlayText>
              </Animated.View>
              <Animated.View style={[styles.overlay,{ backgroundColor: '#2f9a5d' },
                { opacity: this._deltaX.interpolate({
                  inputRange: [0, 120],
                  outputRange: [0, 0.8],
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp'
                }) }]}
              >
                <OverlayText>
                  {overlayText.keep}
                </OverlayText>
              </Animated.View>
            </Animated.View>
          </Interactable.View>
        </Container>
        <BottomContainer>
          <Text>
            {swipeLeftText}
          </Text>
          <Text>
            {swipeRightText}
          </Text>
        </BottomContainer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: Screen.width - 40,
    marginHorizontal: 20,
    borderColor: 'white',
    borderWidth: 3
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
