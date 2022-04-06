import { Container } from "./style";

export const Description = () => {
    return (
        <Container>
            <p>
                <span className="mark">O coronavírus (COVID-19)</span> é uma
                doença infecciosa causada pelo vírus{" "}
                <span className="mark">SARS-CoV-2</span>.
                <br />A maioria das pessoas que adoece em decorrência da
                <span className="mark">
                    {" "}
                    COVID-19 apresenta sintomas leves a moderados
                </span>{" "}
                e se recupera sem tratamento especial. No entanto,{" "}
                <span className="mark">
                    algumas desenvolvem um quadro grave e precisam de
                    atendimento médico
                </span>
                .
            </p>
            <div className="cards">
                <div className="card-documentary">
                    <div className="image">
                        <img
                            src="./watch-documentary.svg"
                            alt="Uma arvore com uma folha roxa em formato de circulo com uma mulher sentada embaixo segurando um tablet e um botão de play grande ao lado da arvore"
                        />
                    </div>
                    <div className="content-card">
                        <p>Assista ao Documentário Epicentro - 24h em Wuhan </p>
                        <a
                            href="https://www.youtube.com/watch?v=riYB5xFRHgg"
                            title="Ir para o Youtube"
                        >
                            Acessar
                        </a>
                    </div>
                </div>

                <div className="card-documentary">
                    <div className="image">
                        <img
                            src="./kid-documentary.svg"
                            alt="3 crianças brincando de pular corda"
                        />
                    </div>
                    <div className="content-card">
                        <p>Para Crianças - O que é o Covid 19?</p>
                        <a
                            href="https://www.youtube.com/watch?v=UeQyLgn_M2c&t=6s"
                            title="Ir para o Youtube"
                        >
                            Acessar
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
};
