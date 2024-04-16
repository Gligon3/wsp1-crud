# CRUD
Create, Read, Update, Delete

## Tabeller för databas

Album - artist_id, titel, year
Artist - name

Song - album_id, titel
Review - album_id, score, text

## ROUTES, REST

GET / - landing

Get /artists - Hämta och visa alla artister, SELECT * FROM artist
GET /artisits:id - Hämta och visa artist, SELECT * FROM artist WHERE id = :id

GET /artists/new - Skapa en ny artist, visa formulär
POST /artist/new -Skapar den nya artisten, INSERT INTO 

# READ


```sql     
SELECT william_album.*, William_artist.name AS artist FROM william_album JOIN William_artist ON william_album.artist_id = William_artist.id

