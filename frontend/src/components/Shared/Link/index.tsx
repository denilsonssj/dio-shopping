import { LinkStyled, LinkStyledProps } from './styles';

export const Link = ({ to, children, ...rest }: LinkStyledProps) => {
    return (
        <LinkStyled to={to} {...rest}>{children}</LinkStyled>
    );
}