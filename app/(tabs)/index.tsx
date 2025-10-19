import { Viikko } from '@/components/Leviosa';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <View style={{margin: 3, flexDirection: 'column'}}>
      <Text style={{textAlign: "center"}}>Viikkotaikuri</Text>
    <SafeAreaProvider>
        <SafeAreaView style={{flexDirection: 'row'}}>
            <Viikko weekday={0}/>
           <Viikko weekday={1}/>
           <Viikko weekday={2}/>
           <Viikko weekday={3}/>
           <Viikko weekday={4}/>
           <Viikko weekday={5}/>
           <Viikko weekday={6}/>
    </SafeAreaView>
    </SafeAreaProvider>
    </View>
  );
}
const [loaded] = useFonts({
  'DancingScript-Bold': require('@/assets/fonts/DancingScript-Bold.ttf'),
});

const styles = StyleSheet.create({
    title:{
    textAlign:"center",
    fontSize:140,
    fontFamily:"DancingScript-Bold"
  },

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
