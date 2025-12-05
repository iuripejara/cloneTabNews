import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const resut = await database.query("SELECT version();");
  const versionAt = resut.rows[0].version;
  const resutMax = await database.query("Show Max_connections");
  const maxConnections = resutMax.rows[0];
  const resutActivity = await database.query(
    "SELECT count(*) FROM pg_stat_activity; ",
  );
  const activeConnections = resutActivity.rows[0];

  response.status(200).json({
    update_at: updateAt,
    version_at: versionAt,
    max_connections: maxConnections,
    active_connections: activeConnections,
  });
}

export default status;
