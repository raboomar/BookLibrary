const request = require("supertest");
const app = require("../app");
const DB = require("../config/db");

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

  afterAll((done) => {
    DB.disconnect(done);
  });
});
