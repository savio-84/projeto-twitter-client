import React from 'react';

import MenuLateral from '../../Components/MenuLateral';

import {
    Container,
    ContentContainer
} from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <MenuLateral></MenuLateral>
            <ContentContainer></ContentContainer>
        </Container>
    );
}

export default Dashboard;
