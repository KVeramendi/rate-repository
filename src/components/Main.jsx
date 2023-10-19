import { View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Routes, Route, Navigate, useLocation } from 'react-router-native';
import LoginPage from '../pages/Login';

const Main = () => {
    const location = useLocation();
    return (
        <View style={{ flex: 1 }}>
            <AppBar location={location} />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<LoginPage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </View>
    )
}

export default Main