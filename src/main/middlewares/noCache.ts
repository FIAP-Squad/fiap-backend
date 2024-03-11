import {
  type Request,
  type Response,
  type NextFunction
} from 'express'

export const noCache = (_: Request, res: Response, next: NextFunction): void => {
  res.set('cache-controle', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.set('pragma', 'no-cache')
  res.set('expires', '0')
  res.set('surrogate-control', 'no-store')
  next()
}
