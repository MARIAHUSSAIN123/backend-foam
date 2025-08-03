// api/send-message.js

module.exports = async (req, res) => {
  if (req.method === "POST") {
    let body = "";

    // Collect raw body (since Vercel doesn’t parse it automatically)
    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        const { name, message } = data;

        // 👇 You can log, save to DB, or just return it
        res.status(200).json({
          success: true,
          received: {
            name,
            message,
          },
        });
      } catch (err) {
        res.status(400).json({ error: "Invalid JSON" });
      }
    });
  } else {
    res.status(405).json({ error: "Only POST allowed" });
  }
};
