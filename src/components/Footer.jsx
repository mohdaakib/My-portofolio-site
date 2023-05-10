import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {SiLeetcode  } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <div className=" mt-12 d-flex flex-row justify-center items-center">
        <ul className="flex flex-row justify-center items-center">
          <li className="mx-4 hover:scale-125 duration-150">
            <a
              href="https://github.com/mohdaakib"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={40} />
            </a>
          </li>
          <li className="mx-4  hover:scale-125 duration-150">
            <a
              href="https://www.linkedin.com/in/mohd-aakib-610833193/"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
          </li>
          <li className="mx-4  hover:scale-125 duration-150 ">
            <a
              href="https://drive.google.com/file/d/1goQkSbOyu3-L-OhPV0aKstZb3Kx7yXyI/view?usp=share_link"
              className=""
              target="_blank"
              rel="noreferrer"
              download={true}
            >
              <BsFillPersonLinesFill size={40} />
            </a>
          </li>
          <li className="mx-4  hover:scale-125 duration-150 ">
            <a
              href="mailto:mohd.aakib.e21@nsut.ac.in"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail size={40} />
            </a>
          </li>
          <li className="mx-4  hover:scale-125 duration-150 ">
            <a
              href="https://leetcode.com/MohdAakib/"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode  size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
