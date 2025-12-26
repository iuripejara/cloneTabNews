import database from "infra/database";

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("DROP SCHEMA public CASCADE;CREATE SCHEMA public;");
}
test("POST to /api/v1/status/ should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/magrations", {
    method: "POST",
  });
  expect(response1.status).toBe(201);

  const response1body = await response1.json();

  expect(Array.isArray(response1body)).toBe(true);
  expect(response1body.length).toBeGreaterThan(0);

  const response2body = await fetch("http://localhost:3000/api/v1/magrations", {
    method: "POST",
  });
  expect(response2body.status).toBe(200);

  const response2bodybody = await response2body.json();

  expect(Array.isArray(response2bodybody)).toBe(true);
  expect(response2bodybody.length).toBe(0);
});
