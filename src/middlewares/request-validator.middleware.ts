import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";
import UnprocessableEntityException from "../exceptions/UnprocessableEntityException";

export const requestValidatorMiddleware = (schema: ZodSchema<any>) => {
  return async (
    req: Request,
    _: Response,
    next: NextFunction
  ): Promise<void> => {
    const zodValidationResult = await schema.safeParseAsync(req.body);

    if (!zodValidationResult.success) {
      const errors = zodValidationResult.error.errors.reduce((acc, error) => {
        const errorKey = error.path[0];

        if (!acc[errorKey]) {
          acc[errorKey] = [];
        }

        acc[errorKey].push(error.message);

        return acc;
      }, {});

      throw new UnprocessableEntityException("Unprocessable Entity", errors);
    }

    next();
  };
};
