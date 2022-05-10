import { Header } from './components/Header'
import { Controls } from './components/Controls'
import { Main } from './components/Main'

export const App = () => {
    return (
        <>
            <Header />
            <Main>
                <Controls />
            </Main>
        </>
    )
}
