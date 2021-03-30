import React from 'react';

import MenuLateral from '../../Components/MenuLateral';

import {
    Box
} from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <h1>Página Dashboard</h1>
            <MenuLateral></MenuLateral>
            <Box/>
        </>
    );
}

export default Dashboard;