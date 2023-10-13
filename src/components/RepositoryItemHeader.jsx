import { View, Image, StyleSheet } from 'react-native';
import StyledText from './StyleDText';
import theme from '../theme.js';

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }} >
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View style={{ flex: 1 }} >
            <StyledText fontWeight='bold'>
                FullName: {fullName}
            </StyledText>
            <StyledText color={'secondary'} >Description: {description}</StyledText>
            <StyledText style={styles.language}>Language: {language}</StyledText>
        </View>
    </View>
)

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 4
    }
})

export default RepositoryItemHeader