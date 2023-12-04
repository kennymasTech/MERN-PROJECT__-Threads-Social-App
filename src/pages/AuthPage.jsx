import React from 'react'
import SignupCard from '../components/SignUpCard'
import LoginCard from '../components/LoginCard'

const AuthPage = () => {
  return <> "login" ? <LoginCard/> : <SignupCard/> </>
}

export default AuthPage