const connection = require("../config/database");
const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Email from website",
      html: `<h1>Email from website</h1><p>${email}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    const [results, fields] = await connection.query(
      `INSERT INTO Emails (Email) VALUES (?)`,
      [email]
    );
    await connection.query('SET @new_id = 0')
    await connection.query(
      `
      UPDATE Emails
      SET id = (@new_id := @new_id + 1)
      ORDER BY id;`
    );
    // Sending response
    res.status(201).json({ status: 201, info, email, dbResult: results });
  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ status: 500, error: error.message });
  }
};

const addProduct = async (req, res) => {
  const { name, price, img } = req.body;

  const [results, fields] = await connection.query(
    `INSERT INTO Products (name,price,img) VALUES (?,?,?)`,
    [name, price, img]
  );
};

const showProducts = async (req, res) => {
  try {
    const [results, fields] = await connection.query(`SELECT * FROM Products`);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  sendEmail,
  addProduct,
  showProducts,
};
