import Kontak from "../models/KontakModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getKontak = async (req, res) => {
  try {
    const kontak = await Kontak.findAll({
      attributes: ["id", "message", "name", "email", "subject"],
    });
    res.json(kontak);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
    try {
      await Kontak.create({
        message: message,
        name: name,
        email: email,
        subject: subject,
      });
      res.json({ msg: "Register Berhasil" });
    } catch (error) {
      console.log(error);
    }
  };





