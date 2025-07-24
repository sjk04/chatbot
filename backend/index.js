const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const chat = req.body.chat;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: chat }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": "AIzaSyBMyCVGP-uRDxN9vkX28FSUL_pBZifHgBc",
        },
      }
    );

    const ans = response.data.candidates[0].content.parts[0].text;
    res.json({ ans });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ ans: "Error from Gemini API" });
  }
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
