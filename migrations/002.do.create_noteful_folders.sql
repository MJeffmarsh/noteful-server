CREATE TABLE noteful_folders (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL
);

ALTER TABLE noteful_notes
  ADD COLUMN
    folder INTEGER REFERENCES noteful_folders(id)
    ON DELETE SET NULL;