import React from 'react'
import { Container, Title, SwitchInfo, SwitchModeButton, Form, Label, Input, SubmitButton } from './__styles'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'CREATE',
      title: 'Create Account',
      altText: 'login',
    }
  }

  toggleText = () => {
    if (this.state.mode === 'CREATE') {
      this.setState({ mode: 'CONNECT', title: 'Connect', altText: 'Create account' })
    } else {
      this.setState({ mode: 'CREATE', title: 'Create Account', altText: 'login' })
    }
  }

  render() {
    return (
      <Container>

        <Title>
          {this.state.title}
          <SwitchInfo>
            or <SwitchModeButton onClick={this.toggleText}>{this.state.altText}</SwitchModeButton>
          </SwitchInfo>
        </Title>


        <Form>
          <Label htmlFor="user">E-mail</Label>
          <Input
            type="email"
            name="user"
            id="user"
            autoCorrect="off"
            spellCheck="false"
            autoCapitalize="off"
            tabIndex="1"
            placeholder="ex.,  threepwood@grogmail.com"
          />
          <Label htmlFor="password">Mot de passe</Label>
          <Input type="password" name="password" id="password" tabIndex="2" placeholder="ex., ••••••••••••" />

          <SubmitButton type="button">{this.state.title}</SubmitButton>
        </Form>
      </Container>
    )
  }
}

export default Login