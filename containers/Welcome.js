import React, { useState, Component } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  SafeAreaView
} from "react-native";

class Welcome extends Component{
    render(){
        return(
            <View>
                <Text>
                    Welcome
                </Text>
            </View>
        );
    }
}

export default Welcome;