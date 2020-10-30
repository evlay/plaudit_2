import express from "express";

let loggerMiddleware = (req: express.Request, res: express.Response, next: any) => {
  console.log(`${req.method} ${req.path}`)

  next()
}

export default loggerMiddleware;

