test("POST to /api/v1/status/ should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/magrations", {
    method: "POST",
  });
  expect(response.status).toBe(200);

  const responsebody = await response.json();
  console.log(responsebody);
  expect(Array.isArray(responsebody)).toBe(true);
});
