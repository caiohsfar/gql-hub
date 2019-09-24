import React from 'react';
import { ActivityIndicator } from 'react-native'
import { Container } from './styles'
export default function Loading() {
    return (
        <ActivityIndicator type="large" color="blue" style={{ alignSelf: 'center'}}/>
    )
}