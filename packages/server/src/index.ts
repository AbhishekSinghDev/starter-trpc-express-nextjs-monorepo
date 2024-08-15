import express, { Request, Response } from "express";

const PORT = Number(process.env.PORT) || 9090;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    status_code: 200,
    message: "Server is up and fine !",
  });
});

app.listen(PORT, () => console.log(`Server Listening on PORT: ${PORT}`));
