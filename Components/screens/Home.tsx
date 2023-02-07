import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import Card from '../home/Card';

const words: any = [
  'Design is not just what it looks like and feels like. Design is how it works.',
  'Good design is as little design as possible.',
  'Design is a solution to a problem. Art is a question to a problem.',
  'Design is not for philosophy, it’s for life.',
  'Design is an opportunity to continue telling the story, not just to sum everything up.',
  'Design is thinking made visual.',
  'Design is the silent ambassador of your brand.',
  'Design is where science and art break even.',
  'Design is not just what it looks like and feels like. Design is how it works.',
  'Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.',
];

const wordAuthors: any = ['Steve Jobs', 'Dieter Rams', 'John Maeda', 'Issey Miyake', 'Tate Linden', 'Saul Bass', 'Paul Rand', 'Robin Mathew', 'Steve Jobs', 'Charles Eames'];
// parent
const Home = () => {
  const [currentAuthor, setCurrentAuthor] = useState(wordAuthors[0]);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextWord = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(nextWord);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextAuthor = wordAuthors[Math.floor(Math.random() * wordAuthors.length)];
      setCurrentAuthor(nextAuthor);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.titleTopContainer}>
        <Text style={styles.titleTop}>Discover</Text>
      </View>

      <View>
        <Card title={`"${currentWord}" - ${currentAuthor}`} />
      </View>

      <View>
        <View style={styles.cardContent}>
          <Text style={styles.titileContent}>User Experience Research</Text>
        </View>
        {/* <TouchableOpacity style={{backgroundColor:'white', height:50, width:50}} onPress={() => alert('Button Pressed') }></TouchableOpacity> */}
      </View>

      {/* <View>
        <View style={styles.cardContent}>
          <Text style={styles.titileContent}>User Experience Research</Text>
        </View>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0f0e17',
  },
  titleTopContainer: {
    // backgroundColor: '#232946',
    height: 75,
    width: 'auto',
    maxWidth: 380,
    minWidth: 240,
    marginHorizontal: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#fffffe30',
  },
  titleTop: {
    color: 'white',
    fontSize: RFValue(24, 680),
    fontWeight: '600',
  },
  cardContent: {
    paddingHorizontal: 20,
    marginTop: 60,
  },
  titileContent: {
    color: '#fffffe',
    fontWeight: '600',
    fontSize: RFValue(18, 680),
  },
});

export default Home;
