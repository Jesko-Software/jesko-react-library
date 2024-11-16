import Container from './Container/Container'
import Row from './Row/Row'
import Column from './Column/Column'
import Header from './Header/Header'
import Paragraph from './Paragraph/Paragraph'
import baseTheme from '../theme/base-theme'
import testTheme from '../theme/test-theme'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Components/Main',
  // component: Container,
}

export const TestPage = () => (
  <ThemeProvider theme={baseTheme}>
    <Container border='1px solid black'>
      <Row>
        <Header center>Welcome to Jesko</Header>
      </Row>
      <Row>
        <Container border='1px solid blue'>
          <Row>
            <Column width="25%">
              <Container border='1px solid red' padding='0px'>
                <Header>Hello 4</Header>
                <Paragraph center>Column 1</Paragraph>
              </Container>
            </Column>
            <Column width="25%">
              <Header>Hello 4</Header>
              <Paragraph center>Column 2</Paragraph>
            </Column>
            <Column width="25%">
              <Header>Hello 4</Header>
              <Paragraph center>Column 3</Paragraph>
            </Column>
            <Column width="25%">
              <Header>Hello 4</Header>
              <Paragraph center>Column 4</Paragraph>
            </Column>
          </Row>
        </Container>
      </Row>
    </Container>
  </ThemeProvider>
)

export const LoginPage = () => (
  <ThemeProvider theme={baseTheme}>
    <Container
    backgroundColor="white"
    justifyContent="center"
    alignItems="center"
    height="100vh"

    >
      <Header 
      center
      as="h2"
      >Login Here</Header>
    </Container>
  </ThemeProvider>
)

export const BasicThemePage = () => (
  <ThemeProvider theme={testTheme}>
    <Container
    backgroundColor="white"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    >
      <Header 
        center
        as="h2"
      >Login Here</Header>
    </Container>
  </ThemeProvider>
)