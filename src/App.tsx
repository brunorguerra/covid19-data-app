import { Description } from "./components/Description";
import * as S from "./App.style";
import { Statistics } from "./components/Statistics";
import { Precaution } from "./components/Precaution";

const App = () => {
    return (
        <>
            <S.Header>
                <h1>Dados do Covid 19</h1>
                <Description />
            </S.Header>

            <S.Main>
                <h2>Estatísticas de Casos por País</h2>
                <Statistics />
                <Precaution />
            </S.Main>

            <S.Footer>
                <p>
                    Todos os Direitos Reservados © 2022{" "}
                    <a href="https://www.bruno-guerra.dev">Bruno Guerra</a>.{" "}
                </p>
            </S.Footer>
        </>
    );
};

export default App;
