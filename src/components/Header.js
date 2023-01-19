import { Box, Button, Fade, Stack, Typography } from "@mui/material";
import React from "react";
import { SlMenu } from "react-icons/sl";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

import { RxCross1 } from "react-icons/rx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const Header = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className=" bg-black " sx={{ color: "white" }}>
      {!fullScreen && (
        <Stack
          mx={20}
          p={3}
          direction="row"
          spacing={65}
          // className="hidden sm:flex"
        >
          <Typography
            variant="subtitle2"
            className="ease-in duration-300 text-amber-500 uppercase cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-orange-600"
          >
            Portfolio
          </Typography>
          <Stack direction="row" spacing={3} className=" hidden sm:flex">
            <Typography
              variant="subtitle2"
              className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wide hover:border hover:tracking-widest px-1 rounded-lg  hover:bg-gray-50 hover:text-black"
            >
              About Me
            </Typography>
            <Typography
              variant="subtitle2"
              className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wider hover:border rounded-lg px-1 hover:tracking-widest hover:bg-gray-50 hover:text-black"
            >
              Skills
            </Typography>
            <Typography
              variant="subtitle2"
              className="ease-in duration-300 uppercase cursor-pointer  font-bold tracking-wider hover:border rounded-lg px-1 hover:tracking-widest hover:bg-gray-50 hover:text-black"
            >
              My Work
            </Typography>
          </Stack>
        </Stack>
      )}

      {/* responseive header  */}

      {fullScreen && (
        <Stack
          ml={5}
          p={3}
          direction="row"
          spacing={22}
          className="sm:hidden flex justify-center items-center"
        >
          <Typography
            variant="subtitle2"
            className="ease-in duration-300 text-amber-500 uppercase cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-orange-600"
          >
            Portfolio
          </Typography>
          <SlMenu
            fontSize="30px"
            className=" text-sky-300  rounded"
            onClick={handleClickOpen}
            size="20px"
          />

          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            transitionDuration={150}
            PaperProps={{
              style: {
                backgroundColor: "gray",
              },
            }}
          >
            <Box className="flex justify-end items-center m-7 ">
              <RxCross1 onClick={handleClose} fontSize="30px" color="white" />
            </Box>

            <Box
              sx={{
                width: "100%",
                bgcolor: "gray",
                color: "lightgrey",
              }}
            >
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem>
                    <ListItemButton
                      onClick={handleClose}
                      className="justify-center"
                    >
                      <Link href="/">Home</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      onClick={handleClose}
                      className="justify-center"
                    >
                      <Link href="/">About me</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      onClick={handleClose}
                      className="justify-center"
                    >
                      <Link href="/">Skills</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton
                      onClick={handleClose}
                      className="justify-center"
                    >
                      <Link href="/">My Work</Link>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Dialog>
        </Stack>
      )}
    </Box>
  );
};