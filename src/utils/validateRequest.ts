import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validateResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // res.status(400);
    // throw new Error(errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
