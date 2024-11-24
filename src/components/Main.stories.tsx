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
        <Container padding='0px'>
          <Header textAlign='center'>Welcome to Jesko</Header>
        </Container>
      </Row>
      <Row>
        <Container border='1px solid blue'>
          <Row>
            <Column width="25%">
              <Container border='1px solid red' padding='0px'>
                <Header textAlign='center'>Hello 4</Header>
                <Paragraph textAlign="center">Column 1</Paragraph>
              </Container>
            </Column>
            <Column width="25%">
              <Header>Hello 4</Header>
              <Paragraph  textAlign="center">Column 2</Paragraph>
            </Column>
            <Column width="25%">
              <Header>Hello 4</Header>
              <Paragraph  textAlign="center">Column 3</Paragraph>
            </Column>
            <Column width="25%">
              <Header>Hello 4</Header>
              <Paragraph  textAlign="center">Column 4</Paragraph>
            </Column>
          </Row>
          <Row>
            <Column width="50%">
                <Header>Hello 4</Header>
                <Paragraph  textAlign="center">Column 1</Paragraph>
            </Column>
            <Column width="50%">
              <Header>Hello 4</Header>
              <Paragraph  textAlign="center">Column 2</Paragraph>
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
    border='1px solid black'
    >
      <Container
      width='50%'
      border='2px solid blue'
      responsive={{
        small: { width: '90%' },
        medium: { width: '80%' }
      }}
      >
        <Header 
        textAlign='center'
        as="h2"
        >Login Here</Header>
        <Header as='h3' responsive={{small: { color: 'red'}}}>Username: ___________</Header>
        <Header as='h3' responsive={{large: { color: 'purple' }}}>Password: ___________</Header>
      </Container>
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
        textAlign='center'
        as="h2"
      >Login Here</Header>
    </Container>
  </ThemeProvider>
)