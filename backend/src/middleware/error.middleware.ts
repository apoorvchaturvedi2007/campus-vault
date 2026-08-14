// src/common/middleware/error-handler.ts

import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { AppError } from "../utils/appError";
import { error } from "console";

export const globalErrorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(error);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    return res.status(409).json({
      success: false,
      message: "Record already exists.",
    });
  }

  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2025"
  ) {
    return res.status(404).json({
      success: false,
      message: "Record not found.",
    });
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
    });
  }

  if (error instanceof TokenExpiredError) {
    return res.status(401).json({
      success: false,
      message: "Token expired.",
    });
  }

  if (error instanceof JsonWebTokenError) {
    return res.status(401).json({
      success: false,
      message: "Invalid token.",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
};