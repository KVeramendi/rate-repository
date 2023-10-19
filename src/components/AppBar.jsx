import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import theme from '../theme.js';
import { Link, useLocation } from 'react-router-native';
import { ScrollView } from 'react-native';
import StyledText from './StyledText';

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation();
    const active = pathname === to
    const textStyles = [
        style.text,
        active && style.active
    ]
    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={style.container}>
            <ScrollView horizontal style={style.scroll}>
                <AppBarTab to='/'>Repositorios</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
                <AppBarTab to='/news'>Noticias</AppBarTab>
                <AppBarTab to='/recomendations'>Recomendaciones</AppBarTab>
                <AppBarTab to='/feedback'>Feedback</AppBarTab>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
    },
    scroll: {
        paddingBottom: 10,
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.textPrimary,
    }
})

export default AppBar
