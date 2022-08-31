const request = require("supertest");
const app = require("../app");
const DB = require("../config/db");
require("dotenv").config();
describe("post /login user", () => {
  describe("given no email or password are passed in", () => {
    test("should response with a 400 status code", async () => {
      const response = await request(app).post("/api/v1/auth");
      expect(response.statusCode).toBe(400);
    });

    test("should response with a email error message", async () => {
      const response = await request(app)
        .post("/api/v1/auth")
        .send({ password: 123456 });
      expect(response.body.errors[0].msg).toBe("Please include a valid email");
    });

    test("should response with a email password message", async () => {
      const response = await request(app)
        .post("/api/v1/auth")
        .send({ email: "test@Test.com" });
      expect(response.body.errors[0].msg).toBe("Password is required");
    });
  });

  describe("given email and password are passed in but are not valid", () => {
    test("should response with 'invalid credentials'", async () => {
      const body = [
        { email: "t@test.com", password: "test12545" },
        { email: "test@test.com", password: "test43357" },
      ];

      for (const jsonBody of body) {
        const response = await request(app).post("/api/v1/auth").send(jsonBody);
        expect(response.body.errors[0].msg).toBe("invalid credentials");
      }
    });
  });

  describe("given valid username and password", () => {
    test("should response with token in response", async () => {
      const body = {
        email: process.env.AUTH_EMAIL,
        password: process.env.AUTH_PASSWORD,
      };
      const response = await request(app).post("/api/v1/auth").send(body);

      expect(response.body.token).toBeDefined();
    });
  });

  afterAll((done) => {
    DB.disconnect(done);
  });
});
