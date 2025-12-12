import { Aside } from './components/Aside'
import { Container } from './components/Container'
import { Main } from './components/Main'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'
import Card from './components/Card'
import { DailyBudget } from './components/DailyBudget/index';
import { SavingStatus } from './components/SavingsStatus'

function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Typography variant='h2'>
            Olá, Rodrigo!
          </Typography>
          <Typography variant='body'>
            Veja como são suas finanças hoje.
          </Typography>
        </div>
        <section>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              <DailyBudget value={250} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Progresso da meta financeira:
            </Card.Header>
            <Card.Body>
              <SavingStatus percent={70} />
            </Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  )
}

export default App