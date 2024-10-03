import type { Request, Response } from "express";
import SwapiService from "../services/SwapiService";
import { SpeciesAttributesMapping } from "../attributes-mapping/SpeciesAttributesMapping";

export const getSpecies = async (_: Request, res: Response) => {
  const species = await SwapiService.getSpecies();

  res.json({
    data: new SpeciesAttributesMapping().map(species),
  });
};
