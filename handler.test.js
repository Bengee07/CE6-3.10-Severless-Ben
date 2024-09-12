const { hello } = require('./handler');

describe('hello function', () => {
  it('should return a 200 status code and a success message', async () => {
    const event = {}; // You can pass any event data if needed
    const response = await hello(event);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
    }));
  });
});