# CRUD

Album - artist_id, titel, year
Artist - name

Song - album_id, titel
Review - album_id, score, text

# READ


```sql     
SELECT william_album.*, William_artist.name AS artist FROM william_album JOIN William_artist ON william_album.artist_id = William_artist.id

