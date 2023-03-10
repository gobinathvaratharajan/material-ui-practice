import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Fab, Tooltip, Modal, Box, Typography, styled, Avatar, TextField, Stack, Button, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip title="Modal" sx={{position:"fixed" ,bottom: 20, left:{xs:"calc(50% - 25px)", md:30} }} onClick={() => setOpen(true)}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                <Typography variant="h6" color="gray" textAlign="center" >
                Create Posts
                </Typography>
                <UserBox>
                    <Avatar  alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
                    <Typography variant="span" fontWeight={500} >
                    Gobinath
                    </Typography>
                </UserBox>
                <TextField
                    sx={{ width: "100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={2}
                    placeholder="What's in your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={2} mt={2} mb={3}>
                    <EmojiEmotions color="primary" />
                    <Image color="secondary" />
                    <VideoCameraBack color="success" />
                    <PersonAdd color="error" />
                </Stack>
                <ButtonGroup variant="container" fullWidth>
                    <Button  variant="contained">Post</Button>
                    <Button sx={{width:"100px"}}  variant="contained"><DateRange /></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add
