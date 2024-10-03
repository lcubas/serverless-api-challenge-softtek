export default abstract class AttributeMapping {
  /**
   * Define the mapping of the attributes of the item
   *
   * @param item Record<string, any>
   * @returns Record<string, any>
   */
  abstract getAttributesMapping(item: Record<string, any>): Record<string, any>;

  map(data: Record<string, any> | Array<Record<string, any>>): Record<string, any> {
    if (Array.isArray(data)) {
      return data.map((item: Record<string, any>) => this.getAttributesMapping(item));
    }

    return this.getAttributesMapping(data);
  }
}
