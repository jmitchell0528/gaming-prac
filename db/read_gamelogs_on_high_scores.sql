select g.username, g.character, g.level, g.time, h.score
from gamelogs as g
join high_scores as h
on h.gamelog_id = g.id;
