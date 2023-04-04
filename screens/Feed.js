import React,{Component} from "react";
import StoryCard from "./StoryCard"
import {Text, View, StyleSheet, Image, SafeAreaView, Platform, StatusBar} from "react-native";
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen";
import { FlatList } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();
var customFonts ={"Bubblegum-Sans":require("../assets/fonts/BubblegumSans-Regular.ttf")}
var stories = require("./temp-stories.json")
export default class Feed extends Component
{
    constructor(props){
        super(props);
        this.state={
fontsLoaded:false,
        }
    }
    async _loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded:true})
    }
    componentDidMount(){
        this._loadFontsAsync()
    }
    renderItem=({item:post})=>{
        return <PostCard post={post} navigation={this.props.navigation} />
    }
    keyExtractor=(item,index)=>index.toString()

render(){
    if(this.state.fontsLoaded){SplashScreen.hideAsync();
return (
    <View style={styles.container}>
<SafeAreaView style={styles.droidSafeArea}/>
<View style={styles.appTitle}>
<View style={styles.appIcon}>
<Image source={require("../assets/logo.png")} style={styles.iconImage}></Image>
</View>
<View style={styles.appTitleTextContainer}>
<Text style={styles.appTitleText}>Espectagram</Text>
</View>
</View>
<View style={styles.cardContainer}>
<FlatList keyExtractor={this.keyExtractor} data={posts} renderItem={this.renderItem}></FlatList>    
</View>
</View>
)


    }

}

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row",
    },
    appIcon: {
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.8,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
    },
    cardContainer: {
      flex: 0.85
    }
  });
  