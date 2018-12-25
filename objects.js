playlist = { john: "Love", james: "Hate"};

function updatePlayList(playlist, artistName, songTitle) {
  var playlist = playlist;
  return Object.assign({}, playlist, {[artistName] : songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

