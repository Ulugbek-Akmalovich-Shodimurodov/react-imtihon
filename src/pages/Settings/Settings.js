// import { Switch } from '@mui/material'
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { Button } from '../../Components/Btn/Button'
import { Helper } from '../../Components/Helper/Helper'
import "./Setttings.scss"
import { Container } from '../../Components/container/Container'

export const Settings = () => {
  return (
    <Container>
    <div className='settings_page'>
      
        <h2>Settings</h2>
        <form className='settings_control'>
        <label for=" language" className='label' htmlFor="email">Email</label>
        <select className='page__input' name="language" id="language">
          <option className='select_option_item' value="1">O'zbek</option>
          <option className='select_option_item' value="2">Ingliz</option>
          <option className='select_option_item' value="3">Rus</option>
        </select>
        <Helper>Please enter your email address.</Helper>  
        </form>
        <div className="theme">
        <span>Theme</span>
        <div className=''>
        {/* <Switch className='settings_switch' {...isLabelWithInternallyDisabledControl} defaultChecked={false} /> */}
        </div>
        </div> 
        <hr className='settings_line'/>
        <Button className="settings-page__btn" type='submit'>Save Changes</Button>
      
    </div>
    </Container>
  )
}
