const request = require("supertest");
const app = require("../app");
const DB = require("../config/db");
require("dotenv").config();
describe("Get /Auth user", () => {
  describe("given a valid token passed into headers", () => {
    test("should response with a 200 status code", async () => {
      const response = await request(app)
        .get("/api/v1/auth")
        .set("x-auth-token", process.env.AUTH_TOKEN);

      expect(response.statusCode).toEqual(200);
    });
  });
  afterAll((done) => {
    DB.disconnect(done);
  });
});
