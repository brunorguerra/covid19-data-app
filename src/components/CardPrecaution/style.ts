import styled from "styled-components";

export const Container = styled.div`
    border-radius: 0.4rem;
    border: 1px solid #dedede;
    background-color: #f0f2f3;
    max-width: 30rem;
    height: 32rem;

    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 16.8rem;
        img {
            max-height: 61.8%;
            max-width: 66%;
            transition: all 0.7s ease;
        }
    }
    p {
        font-size: 1.4rem;
    }
    &:hover {
        .image {
            img {
                transform: scale(1.05);
            }
        }
    }
`;
