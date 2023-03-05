import { LocalLibrary, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, styled, Toolbar, Typography, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled("div")(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled("div")(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: "2px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" }}}>
        Go Material
        </Typography>
        <LocalLibrary sx={{ display: { xs: "block", sm: "none"}}}/>
        <Search>
          <InputBase placeholder='search.......' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} onClick={() => setOpen(true)} />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
          <Typography variant='span'>User</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar
