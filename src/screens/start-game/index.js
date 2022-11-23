import React, { useState } from "react";
import { View, Text, Keyboard, Button, TouchableWithoutFeedback, Alert } from 'react-native'
import { styles } from './styles'
import { Card, Input, NumberContainer } from "../../components";
import  colors  from '../../constants/colors'

const StartGame = ({onStartGame}) => {
    
    const [number, setNumber] = useState('')
    const [selectedNumber, setSelectedNumber] = useState(null)
    const [confirmed, setConfirmed] = useState(false)

    const onHandleChange = (value) => {
        setNumber(value.replace(/[^0-9]/g, ''));
    }

    const onHandleReset = () => {
        setNumber('')
        setConfirmed(false)
    }

    const onHandleConfirm = () => {
        const chosenNumber = parseInt(number, 10)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: onHandleReset }])
        } else {
            setConfirmed(true)
            setSelectedNumber(chosenNumber)
            setNumber('')
        }
    }


    const confirmedOutput = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>You Selected</Text>
            <NumberContainer number={selectedNumber}/>
            <Button 
                title="START GAME" 
                color={colors.primary} 
                onPress={() => onStartGame(selectedNumber)}
            />
        </Card>
    ) : null 

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Let's start!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.label}>Select a number</Text>
                    <Input
                        style={styles.input}
                        placeholder="0" 
                        maxLength={2}
                        keyboardType="number-pad"
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={onHandleChange}
                        value={number}
                    />
                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Restart"
                            onPress={onHandleReset}
                            color={colors.primary}
                        />
                        <Button 
                            title="Confirm"
                            onPress={onHandleConfirm}
                            color={colors.primary}
                        />
                    </View>
                </Card>
                {confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame