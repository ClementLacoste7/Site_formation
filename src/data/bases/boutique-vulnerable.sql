CREATE TABLE utilisateurs (
  id INTEGER PRIMARY KEY,
  identifiant TEXT NOT NULL,
  mot_de_passe TEXT NOT NULL
);

INSERT INTO utilisateurs (id, identifiant, mot_de_passe) VALUES
  (1, 'ALICE', 'motdepasse123'),
  (2, 'ADMIN', 's3cr3t-admin');

CREATE TABLE produits (
  id INTEGER PRIMARY KEY,
  nom TEXT NOT NULL,
  prix REAL NOT NULL
);

INSERT INTO produits (id, nom, prix) VALUES
  (1, 'Clavier mécanique', 79.90),
  (2, 'Souris sans fil', 29.90),
  (3, 'Casque audio', 59.90);
