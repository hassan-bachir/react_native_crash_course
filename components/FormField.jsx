import { View, Text, TextInput } from "react-native";
import React from "react";

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}) => {
    return (
        <View className={`${otherStyles} space-y-2`}>
            <Text className="text-base text-gray-100 font-pmedium">
                {title}
            </Text>
            <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center">
                <TextInput />
            </View>
        </View>
    );
};

export default FormField;
