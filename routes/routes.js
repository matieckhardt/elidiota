const { Router } = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const router = Router();

const ruta = path.join(__dirname, "../public/");

// rutas del idiota

router.get("/", (req, res) => {
  res.send(index);
});
router.get("/index", function (req, res) {
  res.sendFile(ruta + "Index.html");
});
router.get("/Categories", function (req, res) {
  res.sendFile(ruta + "/categories/categories.html");
});
router.get("/Categories/Music", function (req, res) {
  res.sendFile(ruta + "/categories/music/music.html");
});
router.get("/Categories/Music/album1", function (req, res) {
  res.sendFile(ruta + "/categories/music/album-1.html");
});
router.get("/Categories/Art", function (req, res) {
  res.sendFile(ruta + "/categories/art/art.html");
});
router.get("/Categories/Books", function (req, res) {
  res.sendFile(ruta + "/categories/books/books.html");
});
router.get("/Categories/Books/Book1", function (req, res) {
  res.sendFile(ruta + "/categories/books/book-1.html");
});
router.get("/AboutUs", function (req, res) {
  res.sendFile(ruta + "about-us.html");
});
router.get("/Contact", function (req, res) {
  res.sendFile(ruta + "contact.html");
});
router.get("/binnacle", function (req, res) {
  res.sendFile(ruta + "binnacle.html");
});
router.get("/sales", function (req, res) {
  res.sendFile(ruta + "sales.html");
});



// POST 

router.post("/", (req, res) => {
  res.json(req.body);
});

module.exports = router;