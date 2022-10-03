/**
 * 
 Album: 
 Write a function called make_album() that builds a Object describing a music album. The function should take in an 
 artist name and an album title, and it should return a Object containing these two pieces of information. Use the 
 function to make three dictionaries representing different albums. Print each return value to show that Objects are 
 storing the album information correctly. Add an optional parameter to make_album() that allows you to store the 
 number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the 
 album’s Object. Make at least one new function call that includes the number of tracks on an album.
 * 
 */


album_description = {}
make_album = (artist, album) => {
    album_description['artist'] = artist
    album_description['album'] = album

    add_tracks = (tracks = 9) => {
        album_description['tracks'] = tracks
    }

    add_tracks()

    return album_description
}


console.log(make_album('Israr', 'Wissal'))

console.log(make_album('Abida APrveen', 'Phool Khill Jain'))

console.log(make_album('Myles Kennedy', 'Alter Bridge'))
