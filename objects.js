var playlist = { john: "Love", james: "Hate"};

function updatePlayList(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

