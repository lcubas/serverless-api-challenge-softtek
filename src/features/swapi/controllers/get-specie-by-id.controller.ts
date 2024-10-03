import type { Request, Response } from "express";
import SwapiService from "../services/SwapiService";
import HttpException from "../../../exceptions/HttpException";
import { HttpStatus } from "../../../enums/HttpStatus";
import { SpeciesAttributesMapping } from "../attributes-mapping/SpeciesAttributesMapping";
import NotFoundException from "../../../exceptions/NotFoundException";

export const getSpeciesById = async (req: Request, res: Response) => {
  const specieId = req.params.id;

  if (!specieId) {
    throw new HttpException(HttpStatus.BAD_REQUEST, "Specie ID is required");
  }

  const specie = await SwapiService.getSpecieById(specieId);

  if (!specie) {
    throw new NotFoundException("Specie not found");
  }

  res.json({
    data: new SpeciesAttributesMapping().map(specie),
  });
};
