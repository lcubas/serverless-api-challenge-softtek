import AttributeMapping from "./AttributesMapping";

export class SpeciesAttributesMapping extends AttributeMapping {
  getAttributesMapping(item: Record<string, any>): Record<string, any> {
    return {
      peso_promedio: item.average_height,
      esperanza_de_vida_promedio: item.average_lifespan,
      clasificacion: item.classification,
      creado: item.created,
      designacion: item.designation,
      editado: item.edited,
      color_de_ojos: item.eye_colors,
      color_de_dcabello: item.hair_colors,
      mundo_natal: item.homeworld,
      lenguaje: item.language,
      nombre: item.name,
      personas: item.people,
      peliculas: item.films,
      color_de_piel: item.skin_colors,
      url: item.url,
    };
  }
}
