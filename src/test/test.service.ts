import { Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable({})
export class TestService {
    constructor(private readonly httpService: HttpService) {}

    /**
   * Retrieves data from an external API, sorts it by ID in descending order,
   * removes the 'address' property from each data item, and returns the resulting
   * data as an array of objects.
   *
   * @throws {Error} If there is an error retrieving or processing the data.
   * @returns {Promise<any[]>} An array of objects containing the processed data.
   */
  async getSomething() {
    try {
      // Define the URI for the external API.
      const api_uri = 'https://jsonplaceholder.typicode.com/users';

      // Retrieve data from the external API using the HTTP service from NestJS.
      // Use the 'firstValueFrom' function to get the first value emitted by the observable
      // returned by the 'get' method, and destructures the response data object to get the 'data' property
      const { data } = await firstValueFrom(this.httpService.get(api_uri));

      // Sort the data array by ID in descending order.
      const sorted_by_id = data.sort((a, b) => b.id - a.id);

      // Initialize an array to hold the processed data.
      const returned_data: any[] = [];

      // Iterate over each data item in the sorted array.
      sorted_by_id.forEach((data_item) => {
        // Create a new empty object to hold the processed data item
        const nw_obj = {};

        // Iterate over each property in the data item using the 'Object.keys' method.
        Object.keys(data_item).forEach((key) => {
          // If the property is not 'address', add it to the new object.
          if (key !== 'address') {
            console.log(key, data_item[key]);
            nw_obj[key] = data_item[key];
          }
        });

        // Add the processed data item to the returned data array.
        returned_data.push(nw_obj);
      });

      // Return the processed data array.
      return returned_data;
    } catch (error) {
      // If there is an error retrieving or processing the data, throw a new error with a custom message.
      throw new Error(`Error getting data: ${error.message}`);
    }
  }
}