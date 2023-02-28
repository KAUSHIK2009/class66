import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import PhonicSoundButton from './components/PhonicSoundButton';

console.log(db["the"].chunks)


export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      text: '',
      displayText: '',
      chunks: [],
      phonicSounds:[],
    }
  }

  render() {
    return (

      <View style={styles.container}>
        <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'monkey-chunky',
            style: { color: 'orange', fontSize: 30 },
          }}
        />
        <Image style={styles.imageIcon}
          source={require('./assets/monkey.png')
          }
        />

        <TextInput style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text
            });
          }
          }
          value={this.state.text}
        />
        <TouchableOpacity style={styles.goButton}

          onPress={() => {
            console.log(db[this.state.text])
            var word=this.state.text.toLowerCase().trim()
            db[word]?(
            this.setState({chunks: db[this.state.text].chunks}),
            this.setState({phonicSounds: db[this.state.text].phones})
            ):
            Alert.alert("The word does not exist in our database")

          }}
        >
          <Text style={styles.buttonText}>
            go
          </Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item,index) => {
            return (
             <PhonicSoundButton
             wordChunk={this.state.chunks[index]}
             soundChunk={this.state.phonicSounds[index]}
             buttonIndex={index}
             />     
            )
          }

          )}

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none'
  },

  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },

  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 75,
  },

  chunkButton: {
    width: '70%',
    height: 50,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'red',
  }
});
