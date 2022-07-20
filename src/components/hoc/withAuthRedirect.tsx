import React, { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'

export function withAuthRedirect(Component: FC): ReactNode {
  const AuthRedirect = () => {
    const { token } = useAppSelector(state => state.authReducer)

    return !token ? <Navigate to={'/login'} replace={true} /> : <Component />
  }

  return <AuthRedirect />
}