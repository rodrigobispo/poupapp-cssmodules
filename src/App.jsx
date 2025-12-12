import { Aside } from './components/Aside'
import { Container } from './components/Container'
import { Main } from './components/Main'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'

function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <Typography variant='h2'>
          Olá, Rodrigo!
        </Typography>
        <Typography variant='body'>
          Veja como são suas finanças hoje.
        </Typography>
      </Main>
    </Container>
  )
}

export default App