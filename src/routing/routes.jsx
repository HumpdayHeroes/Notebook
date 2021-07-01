import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/header'

export const Routes = () => (
    <Router>
        <Route path="/" component={Header} />
    </Router>
)

export default Routes