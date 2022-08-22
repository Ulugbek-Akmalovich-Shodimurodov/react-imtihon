import { Switch } from '@mui/material'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { Button } from '../../components/Btn/Button'
import { Helper } from '../../components/Helper/Helper'
import { Input } from '../../components/Input/Input'
import { Container } from '../../components/container/Container'
import "./Setttings.scss"

export const Settings = () => {
  return (
    <Container>
    <div>
        <h2>Salom</h2>
        <label className='label' htmlFor="email">Email</label>
        <Input className="page__input" HtmlId='email' type='text' placeholder='Email' />
        <Helper>Please enter your email address.</Helper>  
        <div className="theme">
        <span>Theme</span> 
        <Switch {...isLabelWithInternallyDisabledControl} defaultChecked={false} />
        </div>
        <Button className="settings-page__btn" type='submit'>Save Changes</Button>
    </div>
    </Container>
  )
}
