import { Response as res, Request as req, NextFunction as next  } from 'express';

export default (err: any, req: req, res: res, next: next) => {
  const {
        message,
        code = 500,
        detail = undefined
    } = err;

  let stack = err.stack;
  stack = stack && process.env.APP_DEBUG === 'true' ? err.stack.split('\n').map((item: string) => item.trim()) : undefined;

  return res.status(code).json({
    message,
    code,
    detail,
    stack
  });
};
