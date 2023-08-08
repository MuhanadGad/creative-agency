import React, { useState } from 'react'
import './Navbar.scss'
// import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Container, ListItem, IconButton, List, SwipeableDrawer, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronRight } from '@mui/icons-material';

// import SwipeableDrawer from '@mui/material';


export const Navbar = () => {

  const [open, setOpen] = useState(false)

  const navigationLinks = [
    { name: "Home", href: '#' },
    { name: "About us", href: '#' },
    { name: "Services", href: '#' },
    { name: "Test", href: '#' },
  ]


  return (
    <AppBar position="static" color="transparent">

      <Container maxWidth="lg" className='navbar-container'>
        <Avatar>P</Avatar>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>

      </Container>

      <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)}>
          <ChevronRight />
        </IconButton>
        <Divider />
        <List>
          {
            navigationLinks.map(item => {
              return <ListItem><Link className='navbar-link' href={item.href}>{item.name}</Link></ListItem>
            })
          }

        </List>
      </SwipeableDrawer>
    </AppBar>

  )
}
