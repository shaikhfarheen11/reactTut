
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextprovider } from './Components/store/auth-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextprovider>
    <App />
</AuthContextprovider>
);
