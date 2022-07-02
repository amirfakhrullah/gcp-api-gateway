import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/v1/intro/:text", (req: Request, res: Response) => {
  const { text } = req.params;

  if (!text) {
    throw new Error("Not authorized");
  }

  return res.status(200).send({
    success: true,
    message: `Welcome ${text}`,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
