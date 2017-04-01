import {
    Alert
} from 'react-native';

export default function(params) {
    const {
        title,
        content,
        onConfirm
    } = params;

    Alert.alert(
        title,
        content, [{
            text: '取消',
            onPress: () => {}
        }, {
            text: '确定',
            onPress: () => {
                onConfirm && onConfirm();
            }
        }]
    )
}