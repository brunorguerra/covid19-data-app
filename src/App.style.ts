import styled from "styled-components";

export const Header = styled.header`
    width: min(110rem, 90%);
    margin: 0 auto;
    padding: 5rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 3rem;
    }
`;

export const Main = styled.main`
    padding: 7rem 0;
    width: min(110rem, 90%);
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        font-size: 2.2rem;
        align-self: flex-start;
    }
`;

export const Footer = styled.footer`
    width: min(110rem, 90%);
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    p {
        font-size: 1.4rem;
        color: var(--text-gray);
        a {
            color: var(--button);
            transition: all 0.2s ease;
            &:hover {
                color: var(--buttonHover);
                text-decoration: underline;
            }
        }
    }
`;
