import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const resut = await database.query("SHOW server_version;");
  const versionAt = resut.rows[0].server_version;

  const resutMax = await database.query("Show Max_connections");
  const maxConnections = resutMax.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;

  const resutActivity = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const activeConnections = resutActivity.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: versionAt,
        max_connections: parseInt(maxConnections),
        active_connections: activeConnections,
      },
    },
  });
}

export default status;
