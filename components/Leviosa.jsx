import { StyleSheet, Text, View } from 'react-native';
export function Viikko ({weekday}){
    let weekdays=["maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai", "sunnuntai"];
    let day=new Date().getDay();
    let d=new Date().getDate();
    const adjustedDay = (day + 6) % 7;
    return(
        <View style={{ borderRadius:25, margin: 3, height: 500, flex: 0.2, backgroundColor: adjustedDay===weekday? 'pink':'orange'}} >
        <Text style={styles.smallTxt}>{weekdays[weekday]}</Text>
        <Text style={{color:"#6b05aaf6",textAlign:"center",fontSize:20}}>{d-(adjustedDay-weekday)}</Text>
        </View>
    );

}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  smallTxt:{
    textAlign:"center",
    fontSize: 30,
    
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