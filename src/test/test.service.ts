import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
// import client, {Connection, connect} from "amqplib";
import { connect } from 'amqplib';

const exchangeName = 'users';
const exchangeType = 'fanout';
const queueName = 'users-requested';

@Injectable({})
export class TestService {
  constructor(private readonly httpService: HttpService) {}
  private async publishUsers(message: string) {
    try {
      const connection = await connect('amqp://guest:guest@localhost:5672');
      const channel = await connection.createChannel();

      // assert the exchange and queue
      await channel.assertExchange(exchangeName, exchangeType, {
        durable: false,
      });
      await channel.assertQueue(queueName, { durable: false });
      await channel.bindQueue(queueName, exchangeName, '');

      channel.publish(exchangeName, '', Buffer.from(message));
      // console.log(
      //   `Published message to exchange '${exchangeName}': ${message}`,
      // );
    } catch (error) {
      console.error('Error publishing message to exchange:', error);
    }
  }

  /**
   * Retrieves data from an external API, sorts it by ID in descending order,
   * removes the 'address' property from each data item, and returns the resulting
   * data as an array of objects.
   *
   * @throws {Error} If there is an error retrieving or processing the data.
   * @returns {Promise<any[]>} An array of objects containing the processed data.
   */
  async getUsers() {
    try {
      // Define the URI for the external API.
      const api_uri = 'https://jsonplaceholder.typicode.com/users';

      // Retrieve data from the external API using the HTTP service from NestJS.
      // Use the 'firstValueFrom' function to get the first value emitted by the observable
      // returned by the 'get' method, and destructures the response data object to get the 'data' property
      const { data } = await firstValueFrom(this.httpService.get(api_uri));

      // Sort the data array by ID in descending order.
      const sortedById = data.sort((a, b) => b.id - a.id);

      const returnedData = sortedById.map((data_item) => {
        // Create a new empty object to hold the processed data item
        const nw_obj = {};
        // Iterate over each property in the data item using the 'Object.keys' method.
        Object.keys(data_item)
          .filter((item) => item != 'address')
          // Add the processed data item to the returned data array.
          .forEach((key) => (nw_obj[key] = data_item[key]));

        return nw_obj;
      });

      // Before to leave
      const usersWithEvenId = returnedData.filter((user) => user.id % 2 == 0);
      await this.publishUsers(JSON.stringify(usersWithEvenId));
      // Return the processed data array.
      return returnedData;
    } catch (error) {
      // If there is an error retrieving or processing the data, throw a new error with a custom message.
      throw new Error(`Error getting data: ${error.message}`);
    }
  }
}


