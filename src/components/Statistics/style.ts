import styled from "styled-components";

interface ContainerProps {
    status: boolean;
}

export const Container = styled.section<ContainerProps>`
    margin-top: 3rem;
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    column-gap: 4rem;
    row-gap: 2rem;
    .header h3 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.4rem;
        text-transform: uppercase;
    }
    .stats-global {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        column-gap: 0;
        row-gap: 1rem;
        .stats {
            padding: 0 2rem;
            border-left: 1px solid var(--text-gray);
            p {
                &:first-child {
                    font-size: 1.4rem;
                }
                &:last-child {
                    font-size: 2rem;
                    font-weight: 600;
                }
            }
        }
    }
    .separator {
        margin: 3rem 0;
        width: 100%;
        height: 0.1rem;
        background-color: var(--text-disabled);
    }
    .stats-country {
        width: 100%;
        .header {
            width: inherit;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
            p {
                text-align: left;
                font-size: 1.4rem;
                font-weight: 600;
                span {
                    text-transform: capitalize;
                    color: var(--button);
                }
            }
            .select-country {
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: center;
                gap: 1rem;

                label {
                    font-size: 1.4rem;
                    font-weight: 600;
                }
                select {
                    max-width: 20rem;
                    padding: 1rem;
                    background-color: var(--button);
                    color: var(--text-white);
                    font-size: 1.4rem;
                }
            }
        }

        .main {
            margin-top: 4rem;
            width: inherit;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: ${(props) =>
                props.status ? "center" : "flex-start"};
            gap: 4rem;
            position: relative;
            .load {
                padding: 10rem 0;
                display: ${(props) => (props.status ? "block" : "none")};
                @keyframes loadCountryData {
                    0%,
                    100% {
                        transform: scale(0.2);
                    }
                    50% {
                        transform: scale(1);
                    }
                }
                .dot {
                    display: inline-block;
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    margin: 0 1rem;
                    background-color: var(--button);
                    transform: scale(0.2);
                    animation: loadCountryData 1.2s infinite;
                    &:nth-child(1) {
                        animation-delay: 0.2s;
                    }
                    &:nth-child(2) {
                        animation-delay: 0.4s;
                    }
                    &:nth-child(3) {
                        animation-delay: 0.7s;
                    }
                    &:nth-child(4) {
                        animation-delay: 1s;
                    }
                    &:nth-child(5) {
                        animation-delay: 1.2s;
                    }
                }
            }
            .card-stats {
                width: 20rem;
                height: 15rem;

                padding: 1.5rem;
                border-radius: 2rem;
                background-color: var(--grayOpacity);

                display: ${(props) => (props.status ? "none" : "flex")};
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                p {
                    font-size: 1.5rem;
                    font-weight: 600;
                    &:last-child {
                        font-size: 2rem;
                        font-weight: 700;
                        align-self: flex-end;
                    }
                }
                &.confirmed {
                    background-color: var(--redOpacity);
                    p {
                        color: var(--red);
                    }
                }
                &.recovered {
                    background-color: var(--greenOpacity);
                    p {
                        color: var(--green);
                    }
                }
                &.deceased {
                    background-color: var(--grayOpacity);
                    p {
                        color: var(--gray);
                    }
                }
            }
        }

        @media (max-width: 750px) {
            .header {
                flex-direction: column-reverse;
                align-items: center;
                justify-content: center;
                gap: 3rem;
                p {
                    text-align: center;
                }
            }
            .main {
                align-items: center;
                justify-content: center;
                gap: 2rem;
            }
        }
    }

    @media (max-width: 560px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;
