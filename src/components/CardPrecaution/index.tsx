import { Container } from "./style";

interface CardPrecautionProps {
    description: string;
    imagePath: string;
}

export const CardPrecaution = ({
    description,
    imagePath,
}: CardPrecautionProps) => {
    return (
        <Container>
            <div className="image">
                <img src={`./${imagePath}`} alt="" />
            </div>
            <p>{description}</p>
        </Container>
    );
};
