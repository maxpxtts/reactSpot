import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import { useFonts, PlayfairDisplaySC_400Regular } from "@expo-google-fonts/playfair-display-sc";

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#fdfdfd",
	},

	title: {
		height: 100,
		fontSize: 60,
	 textAlign: "center",
		justifyContent: "center",
		fontFamily: "PlayfairDisplaySC_400Regular",
		backgroundColor: "#dedede",
		margin: 10,
		borderWidth: 3,
		borderRadius: 5,
	},

});

function Home() {
	let [fontsLoaded] = useFonts({ PlayfairDisplaySC_400Regular });
	const Stack = createStackNavigator();

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			// <NavigationContainer>
			// 	<Stack.Navigator>
			// 		<Stack.Screen name="Home" options={{
			// 			title: "Retify"
			// 		}} />
			// 	</Stack.Navigatoer>
			// </NavigationContainer>
			
			// View instead of SafeAreaView?
			<SafeAreaView style={styles.view}>

				<Text style={styles.title}>retify</Text>

			</SafeAreaView>
		);
	}
}


const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
