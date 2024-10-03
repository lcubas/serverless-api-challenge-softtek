export default abstract class AttributeMapping {
  mapping(data: Record<string, any>): Record<string, any> {
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = this.getAttributesMapping(data);
      return acc;
    }, {});
  }

  fromArray(data: Array<Record<string, any>>): Array<Record<string, any>> {
    return data.map((item) => this.mapping(item));
  }

  /**
   * Define the mapping of the attributes of the item
   * 
   * @param item Record<string, any>
   * @returns Record<string, any>
   */
  abstract getAttributesMapping(item: Record<string, any>): Record<string, any>
}
