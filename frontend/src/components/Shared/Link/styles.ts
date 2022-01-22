import { ReactNode } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { styled } from '@mui/system';

export interface LinkStyledProps {
    to: string;
    children: ReactNode;
}

export const LinkStyled = styled(LinkRouter)
(
    ({ theme }) =>`
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        font-weight: 500;

        &:not(:first-of-type) {
            margin-left: 6px;
        }
    `,
);
