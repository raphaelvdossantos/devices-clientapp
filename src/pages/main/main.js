import Header from "../../components/header/header";
import Dashboard from "../../containers/dashboard/dashboard";

import * as S from './styles';

export default function Main() {

    return (
        <S.Container>
            <Header />
            <Dashboard />
        </S.Container>
    );
}