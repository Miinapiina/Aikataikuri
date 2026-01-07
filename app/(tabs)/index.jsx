import { Viikko } from '@/components/Leviosa';
import { ResizeMode, Video } from 'expo-av';
import { useFonts } from 'expo-font';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  // 1. Hook must be inside the component
  const [loaded] = useFonts({
    'Sacramento-Regular': require('@/assets/fonts/Sacramento-Regular.ttf'),
  });

  if (!loaded) return null; // Wait for fonts to load

  return (
    <View style={styles.container}>
      <View style={styles.videoWrapper}>
  <Video 
    source={require('@/assets/videos/output.mp4')} 
    style={styles.video} 
    videoStyle={{
      objectFit: 'fill', // Forces HTML5 video to stretch to the <div> edges
      width: '100%',
      height: '100%',
    }}
    resizeMode={ResizeMode.STRETCH} 
    shouldPlay 
    isLooping 
    isMuted 
  /> 
</View>

      {/* 3. Content Overlay */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Viikkotaikuri</Text>
        
        <View style={styles.weekRow}>
          {[0, 1, 2, 3, 4, 5, 6].map((day) => (
            <Viikko key={day} weekday={day}/>
          ))}
        </View>

        {/* Use View instead of <p> (which is for web) */}
        <View style={styles.spacer} />

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Credits:</Text>
          <Text style={styles.footerText}>Icon made by Freepik from www.flaticon.com</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
videoWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
    aspectRatio: 16 / 9,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 50,
  },
  title: {
    textAlign: "center", 
    fontSize: 80, 
    fontFamily: "Sacramento-Regular",
    color: '#000',
  },
  weekRow: {
    flexDirection: 'row', 
    justifyContent: 'center',
    flexWrap: 'wrap' // Helps if icons are too wide for one row
  },
  spacer: {
    height: 100,
  },
  footer: {
    backgroundColor: 'rgba(228, 226, 254, 0.76)', // use rgba for transparency
    padding: 20,
  },
  footerTitle: {
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  footerText: {
    color: '#fff'
  }
});