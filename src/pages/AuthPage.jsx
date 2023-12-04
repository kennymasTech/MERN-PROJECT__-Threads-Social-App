import React from 'react'
import SignupCard from '../components/SignUpCard'
import LoginCard from '../components/LoginCard'

const AuthPage = () => {
    const authScreenAtom = AuthScreen
  return <> "login" ? <LoginCard/> : <SignupCard/> </>
}

export default AuthPage