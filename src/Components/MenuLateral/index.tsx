import React from 'react';

import {
    Container,
    ProfileButton,
    CreateTweetButton
} from './styles';


const MenuLateral: React.FC = () => {
    return (
        <Container>
            <ul>
                <li>Home</li>
                <li>Explorer</li>
                <li>Notifications</li>
                <li>Messages</li>
                <li>Bookmarks</li>
                <li>Lists</li>
                <li>Profile</li>
                <li>More</li>
                <CreateTweetButton>Tweet</CreateTweetButton>
            </ul>
            <ProfileButton>
              <h2>Nome</h2>
              <h3>Nome de usuário</h3>
            </ProfileButton>
        </Container>
    );
}

export default MenuLateral;
