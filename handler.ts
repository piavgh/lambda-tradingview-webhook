import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { exchanges } from 'ccxt'

export async function hello(
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v2.0! Your function executed successfully!',
      data: exchanges,
      context,
      event,
    }),
  }
}
