import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/assets/images/ProfileImage.jpg";
import { GoMarkGithub } from "react-icons/go";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaDev } from "react-icons/fa";

const Intro = () => {
  return (
    <Box className=" bg-gradient-to-r from-gray-600 via-gray-700 to-cyan-50 text-black h-auto py-10 sm:p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box className=" flex flex-col gap-2 sm:mx-32 mx-20  my-10">
            <Typography variant="h5" className="font-bold text-white font-mono">
              Hi,
            </Typography>
            <Typography variant="h5" className="font-bold text-white font-mono">
              I'm{" "}
              <span className="ease-in duration-300 text-amber-700 normal-case cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-orange-600 font-mono">
                Zaw Zaw Myint,
              </span>
            </Typography>
            <Typography variant="h5" className="font-bold text-white font-mono">
              <span
                variant="subtitle1"
                className="font-bold ease-in duration-300 normal-case text-violet-50 tracking-wide hover:text-violet-100 font-mono"
              >
                Front
              </span>{" "}
              end developer,
            </Typography>
            <Typography
              variant="subtitle1"
              className=" ease-in duration-300 normal-case text-black tracking-wide hover:tracking-widest hover:text-violet-100 font-mono"
            >
              CSS / Javascript / React
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                className=" animate-bounce rounded-full  ease-in duration-300 normal-case text-amber-700  cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-orange-700 font-mono"
              >
                Hire me
              </Button>
              <Button
                variant="outlined"
                className="ease-in duration-300 normal-case rounded-full text-sky-100  cursor-pointer  font-bold tracking-wide hover:tracking-widest hover:text-sky-400  font-mono"
              >
                Contact me
              </Button>
            </Stack>
            <Stack direction="row" spacing={3} mt={1}>
              <GoMarkGithub
                fontSize="30px"
                className=" text-sky-300 bg-black rounded-full hover:animate-bounce font-mono"
              />
              <TiSocialLinkedinCircular
                fontSize="30px"
                className=" text-sky-300 bg-black rounded-full hover:animate-bounce font-mono"
              />
              <AiFillTwitterCircle
                fontSize="30px"
                className=" text-sky-300 bg-black rounded-full hover:animate-bounce font-mono"
              />

              <RiInstagramFill
                fontSize="30px"
                className=" text-sky-300 bg-black rounded-full hover:animate-bounce font-mono"
              />
              <FaDev
                fontSize="30px"
                className=" text-sky-300 bg-black hover:animate-bounce rounded-full font-mono"
              />
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            className=" mx-auto rounded-full  border-4 border-indigo-200 border-t-orange-500 border-b-orange-500 p-1 "
            width={300}
          >
            <Image
              src={profilePic}
              alt="Picture of the author"
              width={300}
              height={300}
              className=" mx-auto rounded-full  transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
