import { Viikko } from '@/components/Leviosa';
import { Video } from 'expo-av';
import { useFonts } from 'expo-font';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
 
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Video } from "expo-av";

export default function Screen() {
  return (
    <View style={styles.container}>
      <Video
        source={require("@/assets/videos/output.mp4")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Viikkotaikuri</Text>

        <View style={{ flexDirection: "row" }}>
          <Viikko weekday={0} />
          <Viikko weekday={1} />
          <Viikko weekday={2} />
          <Viikko weekday={3} />
          <Viikko weekday={4} />
          <Viikko weekday={5} />
          <Viikko weekday={6} />
        </View>

        <View style={{ height: 40, width: "100%" }} />

        <View style={styles.creditsBox}>
          <Text style={styles.creditsTitle}>Credits:</Text>
          <Text style={styles.creditsText}>
            Icon made by Freepik from www.flaticon.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 3 },

  content: {
    paddingTop: 100,
    paddingBottom: 40,
  },

  title: {
    textAlign: "center",
    fontSize: 100,
    fontFamily: "Sacramento-Regular",
  },

  creditsBox: {
    backgroundColor: "#e4e2feC2", // OK: 8-digit hex with alpha
    padding: 20,
    width: "100%",
  },

  creditsTitle: {
    color: "#ffffff",
    fontSize: 20, // numero, ei string
  },

  creditsText: {
    color: "#ffffff",
  },
});
    
}
const [loaded] = useFonts({
  'Sacramento-Regular': require('@/assets/fonts/Sacramento-Regular.ttf'),
});

const styles = StyleSheet.create({
    title:{
    textAlign:"center",
    fontSize:140,
    fontFamily:"Sacramento-Regular"
  },
  backgroundVideo: { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%', },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  
  },
});
