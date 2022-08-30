const request = require("supertest");
const app = require("../app");

describe("Post /new user", () => {
  describe("given a valid name, email, and email", () => {
    test("should respond with a 200 status code", async () => {
      const res = await request(app).post("/api/v1/user").send({
        name: "test",
        email: "test@gmail.com",
        password: "test123455",
      });
      expect(res.statusCode).toEqual(200);
    });

    test("should have json in the content type header", async () => {
      const res = await request(app).post("/api/v1/user").send({
        name: "test",
        email: "testgmail.com",
        password: "test123455",
      });
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("when a name, email, or password is missing", () => {});
});
