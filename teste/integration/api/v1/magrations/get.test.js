import database from "infra/database";

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("DROP SCHEMA public CASCADE;");
  await database.query("CREATE SCHEMA public;");
}

test("Get to /api/v1/status/ should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/magrations");
  expect(response.status).toBe(200);

  const responsebody = await response.json();
  console.log(responsebody);
  expect(Array.isArray(responsebody)).toBe(true);
  expect(responsebody.length).toBeGreaterThan(0);
});
