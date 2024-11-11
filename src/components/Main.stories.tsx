import Container from './Container/Container'
import Row from './Row/Row'
import Column from './Column/Column'
import Header from './Header/Header'
import Paragraph from './Paragraph/Paragraph'

export default {
  title: 'Components/Main',
  // component: Container,
}

export const TestPage = () => (
  <Container>
    <Row>
      <Header center>Welcome to Jesko</Header>
    </Row>
    <Row>
      <Container>
        <Row>
          <Column width="25%">
            <Paragraph center>Column 1</Paragraph>
          </Column>
          <Column width="25%">
            <Paragraph center>Column 2</Paragraph>
          </Column>
          <Column width="25%">
            <Paragraph center>Column 3</Paragraph>
          </Column>
          <Column width="25%">
            <Paragraph center>Column 4</Paragraph>
          </Column>
        </Row>
      </Container>
    </Row>
  </Container>
)
