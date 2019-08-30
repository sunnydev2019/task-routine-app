import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Image, View, Text} from 'react-native'

import styles from './styles'
import {Colors} from "../../Themes";
import LinearGradient from "react-native-linear-gradient";
import Images from "../../Themes/Images";
import VectorIcon from "../VectorIcon";


export default class SelectedRoute extends Component {
    static propTypes = {
        item: PropTypes.object
    }
    static defaultProps = {
        item: {}
    }

    render() {
        const {item: {locationName = '', name = '',}} = this.props
        return (
            <LinearGradient start={{x: 0, y: 0.3}} end={{x: 0, y: 0.8}}
                            colors={[Colors.primaryColor, Colors.primaryColorI]} style={styles.gradientContainer}>
                <Image source={Images.greenLocationFull} style={styles.greenLocation}/>
                <View style={styles.contentContainer}>
                    <View style={styles.accomplishedContainer}>
                        <Text style={styles.accomplished}>0 Out of 1 Accomplished</Text>
                        <VectorIcon name={'close-o'} type={'EvilIcons'} style={styles.closeIcon}/>
                    </View>
                    <Text style={styles.taskText}>{name}</Text>
                    <View style={styles.borderLine}/>
                    <Text style={styles.taskText}>{locationName}</Text>
                </View>
            </LinearGradient>
        )
    }
}