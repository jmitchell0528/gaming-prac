INSERT INTO high_scores
  (gamelog_id, score)
VALUES
  ($1, $2)
RETURNING *;
