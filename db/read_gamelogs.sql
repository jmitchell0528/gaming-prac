SELECT gamelogs.user, gamelogs.character, gamelogs.points, gamelogs.level, gamelogs.score, gamelogs.time
FROM gamelogs
ORDER BY gamelogs.points DESC LIMIT 10;
