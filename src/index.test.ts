import request from "supertest";
// import nock from "nock"; // Uncomment this line if you want to mock the API calls
import app, { server } from "./index";

describe("GET /", () => {
  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    /* Here you can mock the API calls
     * Every time you call the specified url API, it will return the mocked data
     * Notice that this mock is defined for every test, so if you need to change the result or the query params
     *  you can do it in the test itself
     *
     * Example:
     * nock("https://football-stats-api.com")
     *  .get("/schedule")
     *  .reply(200, [
     *    {
     *      homeTeam: "Mocked Home Team",
     *      awayTeam: "Mocked Away Team",
     *      score: "1-1",
     *    },
     *  ]);
     *
     *  Check the docs for more info:
     *  https://github.com/nock/nock
     */
  });

  it("fetches quotes", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
