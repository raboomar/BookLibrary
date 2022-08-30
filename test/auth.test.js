const request = require("supertest");
const app = require("../app");
const DB = require("../config/db");

describe("Get /Auth user", () => {
  describe("given a valid token passed into headers", () => {
    test("should response with a 200 status code", async () => {
      const response = await request(app)
        .get("/api/v1/auth")
        .set(
          "x-auth-token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwZTdlYjk0ZmUzYWY1ODNlZjI1ZWQ3In0sImlhdCI6MTY2MTg5NDMzMCwiZXhwIjoxNjk3ODk0MzMwfQ.P0fSdfw9RywPwFjfMda1Aa50aXIPUxoh1UCX66A01_A"
        );
      expect(response.statusCode).toEqual(200);
    });
  });
  afterAll((done) => {
    DB.disconnect(done);
  });
});
