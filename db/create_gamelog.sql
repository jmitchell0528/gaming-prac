INSERT INTO gamelogs
  (user, character, points, level, score)
VALUES
  ($1, $2, $3, $4, $5)
RETURNING *;
