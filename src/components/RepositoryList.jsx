import { FlatList, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories.js';



const RepositoryList = () => {
    const { repositories } = useRepositories()

    return (
        <FlatList
            style={{ paddingTop: 10, paddingBottom: 10 }}
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