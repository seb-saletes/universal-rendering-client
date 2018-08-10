import React from 'react'
import PropTypes from 'prop-types'

import { withApollo } from 'react-apollo'

import withAuth from '../../decorators/_withAuth'

import { Container, Title, SwitchInfo, SwitchModeButton, Form, Label, Input, SubmitButton, Error } from './__style'

import CREATE_USER from './_createUser.gql'
import LOGIN from './_login.gql'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'CONNECT',
      title: 'Connect',
      altText: 'Create account',
      username: null,
      password: null,
      error: null,
      pending: false,
    }
  }

  toggleText = () => {
    if (this.state.mode === 'CREATE') {
      this.setState({ mode: 'CONNECT', title: 'Connect', altText: 'Create account', error: null })
    } else {
      this.setState({ mode: 'CREATE', title: 'Create Account', altText: 'login', error: null })
    }
  }

   handleSubmit = async () => {
     if (this.checkUsername() && this.checkPassword()) {
       this.setState({ pending: true, error: null })
       const mutation = this.state.mode === 'CREATE' ? CREATE_USER : LOGIN

       try {
         const res = await this.props.client.mutate({
           variables: { username: this.state.username, password: this.state.password },
           mutation,
           headers: { 'Access-Control-Allow-Origin': 'localhost:5000' },
         })
         const token = this.state.mode === 'CREATE' ? res.data.createUser : res.data.login
         document.cookie = `authToken=${token}`
         window.location = '/dashboard'
       } catch (err) {
         this.setState({ pending: false, error: err.message.replace('GraphQL error: ', '') })
       }
     }
   }

   checkPassword = () => {
     if (!this.state.password || this.state.password.length < 8) {
       this.setState({ error: 'Password must be at least 8 characters' })
       return false
     }
     return true
   }

  checkUsername = () => {
    if (!this.state.username || this.state.username.length < 6) {
      this.setState({ error: 'Username must be at least 6 characters' })
      return false
    }
    return true
  }

  isDisabled = () => this.state.pending || !this.state.username || !this.state.password

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
          <Label htmlFor="user">Username (6 characters min)</Label>
          <Input
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            name="user"
            id="user"
            autoCorrect="off"
            spellCheck="false"
            autoCapitalize="off"
            tabIndex="1"
            placeholder="ex.,  Nick, Joe, Steven..."
          />
          <Error>{this.state.errorUsername}</Error>
          <Label htmlFor="password">Password (8 characters min)</Label>
          <Input
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            name="password"
            id="password"
            tabIndex="2"
            placeholder="ex., ••••••••••••"
          />
          <Error>{this.state.error}</Error>

          <SubmitButton
            disabled={this.isDisabled()}
            type="button"
            onClick={this.handleSubmit}
          >
            {this.state.title}
          </SubmitButton>
        </Form>
      </Container>
    )
  }
}
Login.propTypes = { client: PropTypes.object.isRequired }
export default withApollo(withAuth(Login))
