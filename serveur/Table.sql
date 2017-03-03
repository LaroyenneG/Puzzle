DROP TABLE IF EXISTS joueur;

CREATE TABLE joueur(
  idJoueur INT AUTO_INCREMENT,
  nomJoueur VARCHAR(50),
  timeGame FLOAT(5,2),
  sizeGrid INT NOT NULL,
  PRIMARY KEY(idJoueur)
);


INSERT INTO joueur VALUES (0,'GuiGui', 150.2, 2);
INSERT INTO joueur VALUES (0,'GuiGui2', 155.2, 2);
INSERT INTO joueur VALUES (0,'GuiGui3', 145.2, 2);
INSERT INTO joueur VALUES (0,'GuiGui4', 145.2, 2);

INSERT INTO joueur VALUES (0,'HyDs', 145.2, 3);
INSERT INTO joueur VALUES (0,'HyDs2', 14.0, 3);
INSERT INTO joueur VALUES (0,'TITI', 14.2, 3);