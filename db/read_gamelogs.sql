SELECT gamelogs.username, gamelogs.character, gamelogs.level, gamelogs.time, gamelogs.points
FROM gamelogs
ORDER BY gamelogs.points DESC LIMIT 10;
