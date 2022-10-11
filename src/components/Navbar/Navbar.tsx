import { JSXElement } from '@swc/core';
import React, { ReactElement } from 'react';
import { Container } from './Navbar.styles';

interface NavbarProps {
    logo: ReactElement;
}

export const Navbar: React.FC<NavbarProps> = ({ logo }) => {
    return (
        <Container>
            <div className="logo-container">
                {logo}
            </div>
        </Container>

    )
}