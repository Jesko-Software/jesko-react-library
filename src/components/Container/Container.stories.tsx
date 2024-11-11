import Container from './Container'
import Row from '../Row/Row'
import Column from '../Column/Column'
import Header from '../Header/Header'
import Paragraph from '../Paragraph/Paragraph'

export default {
  title: 'Components/Container',
  component: Container,
}

export const DefaultContainer = () => (
  <Container>
    <Row>
      <Header center>Welcome to Jesko</Header>
    </Row>
    <Row>
      <Container>
        <Row>
          <Column width="33%">
            <Paragraph center>Column 1</Paragraph>
          </Column>
          <Column width="33%">
            <Paragraph center>Column 2</Paragraph>
          </Column>
          <Column width="33%">
            <Paragraph center>Column 3</Paragraph>
          </Column>
        </Row>
      </Container>
    </Row>
  </Container>
)
