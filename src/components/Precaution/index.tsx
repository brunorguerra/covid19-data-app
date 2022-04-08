import { CardPrecaution } from "../CardPrecaution";
import { Container } from "./style";

export const Precaution = () => {
    return (
        <Container>
            <div className="title-precaution">
                <h3>Precauções</h3>
            </div>
            <div className="content-precaution">
                <CardPrecaution
                    description="Fique em casa durante a quarentena e só saia em caso de
                        necessidade."
                    imagePath="lockdown.svg"
                />
                <CardPrecaution
                    description="Mantenha distancia de 2 metros e use sempre mascaras em locais públicos"
                    imagePath="distancing.svg"
                />
                <CardPrecaution
                    description="Lave sempre as mãos por pelo menos 30 segundos"
                    imagePath="wash-hands.svg"
                />
                <CardPrecaution
                    description="Se estiver contraído o vírus e possuir sintomas de falta de ar procure a clínica médica mais próxima"
                    imagePath="medical.svg"
                />
            </div>
        </Container>
    );
};
