DELETE FROM high_scores
WHERE id IN (
  SELECT id
  FROM high_scores
  ORDER BY score ASC
  LIMIT 1
)
RETURNING *;
