const express = require("express");
const router = express.Router();
const pool = require("../db");

// DISPLAY + SEARCH
router.get("/dashboard", async (req, res) => {
   const search = req.query.search || "";

   try {
      let sql = "SELECT * FROM records";
      let params = [];

      if (search) {
         sql += " WHERE category LIKE ? OR notes LIKE ?";
         params = [`%${search}%`, `%${search}%`];
      }

      sql += " ORDER BY record_date DESC";

      const [records] = await pool.query(sql, params);

      res.render("dashboard", {
         records,
         search
      });
   } catch (err) {
      console.error(err);
      res.send("Error loading dashboard.");
   }
});

// ADD PAGE
router.get("/add", (req, res) => {
   res.render("add");
});

// INSERT
router.post("/add", async (req, res) => {
   const { category, amount, record_date, notes } = req.body;

   try {
      await pool.query(
         "INSERT INTO records (category, amount, record_date, notes) VALUES (?, ?, ?, ?)",
         [category, amount, record_date, notes]
      );

      res.redirect("/dashboard");
   } catch (err) {
      console.error(err);
      res.send("Error adding record.");
   }
});

// EDIT PAGE
router.get("/edit/:id", async (req, res) => {
   const id = req.params.id;

   try {
      const [rows] = await pool.query(
         "SELECT * FROM records WHERE id = ?",
         [id]
      );

      if (rows.length === 0) {
         return res.send("Record not found.");
      }

      res.render("edit", { record: rows[0] });
   } catch (err) {
      console.error(err);
      res.send("Error loading edit page.");
   }
});

// UPDATE
router.post("/edit/:id", async (req, res) => {
   const id = req.params.id;
   const { category, amount, record_date, notes } = req.body;

   try {
      await pool.query(
         "UPDATE records SET category = ?, amount = ?, record_date = ?, notes = ? WHERE id = ?",
         [category, amount, record_date, notes, id]
      );

      res.redirect("/dashboard");
   } catch (err) {
      console.error(err);
      res.send("Error updating record.");
   }
});

// DELETE
router.post("/delete/:id", async (req, res) => {
   const id = req.params.id;

   try {
      await pool.query(
         "DELETE FROM records WHERE id = ?",
         [id]
      );

      res.redirect("/dashboard");
   } catch (err) {
      console.error(err);
      res.send("Error deleting record.");
   }
});

module.exports = router;
