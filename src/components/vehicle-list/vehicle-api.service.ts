export interface VehicleApiListResult<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface Vehicle {
  name: string;
  url: string;
}

export class VehicleApiService {
  private readonly pokeBaseUrl = 'https://pokeapi.co/api/v2/';

  loadPage(offset: number, size: number): Promise<VehicleApiListResult<Vehicle>> {
    return fetch(`${this.pokeBaseUrl}pokemon?offset=${offset}&limit=${size}`).then(response => response.json());
  }
}
