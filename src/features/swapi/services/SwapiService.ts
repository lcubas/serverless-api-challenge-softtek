import axios from 'axios';

class SwapiService {
  private static readonly baseUrl = 'https://swapi.dev/api';

  static async getSpecies(): Promise<any[]> {
    try {
      const response = await axios.get(`${SwapiService.baseUrl}/species`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching species:', error);
      throw error;
    }
  }

  static async getSpecieById(id: string): Promise<any> {
    try {
      const response = await axios.get(`${SwapiService.baseUrl}/species/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching species:', error);
      throw error;
    }
  }
}

export default SwapiService;