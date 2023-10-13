import { View, StyleSheet } from 'react-native';
import StyledText from './StyleDText';
import Constants from 'expo-constants'
import theme from '../theme.js';
import { Link } from 'react-router-native';

const AppBarTab = ({ active, children, to }) => {
    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={style.text}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={style.container}>
            <AppBarTab active={true} to='/'>Repositories</AppBarTab>
            <AppBarTab active={true} to='/signin'>Sign In</AppBarTab>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10
    }
})

export default AppBar
