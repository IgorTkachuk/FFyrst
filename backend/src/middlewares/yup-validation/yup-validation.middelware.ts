import { AnyObjectSchema } from 'yup';
import { RequestHandler } from 'express';

const yupValidation = (resourceSchema: AnyObjectSchema): RequestHandler => async (req, res, next) => {
  const resource = req.body;
  try {
    await resourceSchema.validate(resource);
    next();
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.errors.join(', ') });
  }
};

export { yupValidation };
