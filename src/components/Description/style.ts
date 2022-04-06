import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3rem;
    p {
        font-size: 1.6rem;
        color: var(--text-gray);
        line-height: 2.8rem;
        span.mark {
            color: var(--text-black);
            font-weight: 600;
        }
    }
    .cards {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 3rem;
        margin-top: 5rem;
        .card-documentary {
            padding: 2rem 3rem;

            height: 20rem;
            max-width: 50rem;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            gap: 3rem;

            background-color: var(--box);
            border-radius: 3rem;
            .image {
                max-width: 20rem;
                margin-top: -3rem;
                img {
                    width: 100%;
                }
            }
            .content-card {
                p {
                    color: var(--text-black);
                }
                a {
                    margin-top: 1rem;
                    padding: 1rem 2rem;

                    display: inline-block;
                    font-size: 1.6rem;
                    border-radius: 5rem;

                    background-color: var(--button);
                    color: var(--text-white);
                    transition: all 0.2s ease;
                    &:hover {
                        background-color: var(--buttonHover);
                    }
                }
            }
            &:last-child {
                .image {
                    margin-top: 0;
                }
            }
        }
    }
    @media (max-width: 520px) {
        margin-top: 0;
        .cards {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            .card-documentary {
                flex-direction: column;
                align-items: flex-start;
                height: auto;
                width: 100%;
                padding: 3rem 3rem;
                .image {
                    align-self: center;
                    margin-top: 0;
                }
            }
        }
    }
`;
