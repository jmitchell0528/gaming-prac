INSERT INTO gamelogs
  (username, character, level, time, points)
VALUES
  ($1, $2, $3, $4, $5)
RETURNING *;
