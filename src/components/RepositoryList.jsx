import { FlatList, Text } from 'react-native';
import repositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
    return (
        // <View>
        //     {repositories.map(e => (
        //         <View key={e.id}>
        //             <Text>
        //                 {e.language}
        //             </Text>
        //         </View>
        //     ))}
        // </View>
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({ item: e }) => (
                <RepositoryItem {...e} />
            )}
        >

        </FlatList>
    )
}

export default RepositoryList