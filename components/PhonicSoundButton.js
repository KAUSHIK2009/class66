import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';


export default class PhonicSoundButton extends React.Component {
  constructor(props){
  super(props);
  this.state={
    pressedButtonIndex:'',
  }
  }

  playSound = async soundChunk => {
    console.log(soundChunk);
    var soundLink="https://s3-whitehatjrcontent.whjr.online/phones/"+soundChunk+".mp3"
    await Audio.Sound.createAsync(
      {
        uri:soundLink,
      },
      { shouldPlay: true }
    );
  };



  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex===this.state.pressedButtonIndex ?
          [styles.chunkButton,{backgroundColor:'white'}]:
          [styles.chunkButton,{backgroundColor:'red'}]
        }
        onPress={() => {
        this.setState({
          pressedButtonIndex:this.props.pressedButtonIndex
        });
          this.playSound(this.props.soundChunk);
        }}>
        <Text style=
        {
          this.props.buttonIndex===this.state.pressedButtonIndex ?
          [styles.chunkButton,{backgroundColor:'red'}]:
          [styles.chunkButton,{backgroundColor:'white'}]
        }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  chunkButton: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  displayText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'white',
  },
});


