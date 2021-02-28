import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      Author: '',
      StoryTitle: '',
      Story: '',
    }

  }
    render(){
        return(
            <View style={styles.container}>
                <Header backgroundColor={'#F97EF6'} 
                centerComponent={{text: 'Story Hub', style:{color: '000000',fontSize:20, fontWeight: 1000}}}/>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Title"
                    value={this.StoryTitle}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Author"
                    value={this.Author}
                />
                <TextInput
                    style={styles.inputBoxBig}
                    placeholder="Write the Story"
                    value={this.Story}
                    multiline={true}
                />
                <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={this.handleTransaction}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>

                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      displayText:{
        fontSize: 15,
        textDecorationLine: 'underline'
      },
      scanButton:{
        backgroundColor: '#2196F3',
        padding: 10,
        margin: 10
      },
      buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
      },
      inputView:{
        flexDirection: 'row',
        margin: 20
      },
      inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
      },
      inputBoxBig:{
        width: 200,
        height: 300,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
      },
      scanButton:{
        backgroundColor: '#66BB6A',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
      },
      submitButton:{
        backgroundColor: '#FB602D',
        width: 100,
        height: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
      },
      submitButtonText:{
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      }
})