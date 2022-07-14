import { Routes, Route } from 'react-router-dom'
import { Home } from './Home';
import { Login } from './Login';
import { AuthProvider } from '../utils/auth';

const App = () => {
    return(
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login></Login>} />
            </Routes>
        </AuthProvider>
    )
}
export default App;