import { Viikko } from '@/components/Leviosa';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View style={{margin: 3, flexDirection: 'column'}}>
      <Text style={{textAlign: "center"}}>Viikkotaikuri</Text>
    <SafeAreaProvider>
        <SafeAreaView style={{flexDirection: 'row'}}>
          <View style={{height:100, backgroundColor: 'pink', flex: 0.2}} >
            <Viikko weekday={0}/>
            </View>
          <View style={{height:100, backgroundColor: 'orange', flex: 0.2}} >
    <Viikko weekday={1}/>
    </View>
    <View style={{height:100, backgroundColor: 'pink', flex: 0.2}}>
      <Viikko weekday={2}/>
      </View>
      <View style={{height:100, backgroundColor: 'orange', flex: 0.2}}>
      <Viikko weekday={3}/>
      </View>
      <View style={{height:100, backgroundColor: 'pink', flex: 0.2}}>
      <Viikko weekday={4}/>
      </View>
      <View style={{height:100, backgroundColor: 'orange', flex: 0.2}}>
      <Viikko weekday={5}/>
        </View>
      <View style={{height:100, backgroundColor: 'pink', flex: 0.2}}>
      <Viikko weekday={6}/>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
    </View>
  );
}
const styles = StyleSheet.create({
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
