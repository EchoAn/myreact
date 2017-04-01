import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.incresefive = this.incresefive.bind(this)
        this.gotoOhter = this.gotoOhter.bind(this)
    }

    incresefive(){
        const {
            increnum,
        } = this.props;

        increnum(5)
    }

    gotoOhter(){
        const { navigate } = this.props;
        navigate('chart');
    }

    render() {
        const {
            counter,
            increment,
            decrement,
            increnum,
        } = this.props;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{counter}</Text>
                <TouchableOpacity onPress={increment} style={styles.button}>
                    <Text>up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={decrement} style={styles.button}>
                    <Text>down</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.incresefive} style={styles.button}>
                    <Text>increase</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoOhter} style={styles.button}>
                    <Text>gotoOther</Text>
                </TouchableOpacity>
            </View>
        );
    }
}