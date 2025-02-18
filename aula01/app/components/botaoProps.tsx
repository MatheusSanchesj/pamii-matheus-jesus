import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const botaoProps = ({ label, corFundo, onPress }) => {

    const botaoStyle = {
        backgroundColor : corFundo,
        padding: 15,
        borderRadius: 20,
    };

    return (
        <TouchableOpacity onPress={onPress} style={botaoStyle}>
            <Text> {label}  </Text>
        </TouchableOpacity>
    );
};

export default botaoProps;
