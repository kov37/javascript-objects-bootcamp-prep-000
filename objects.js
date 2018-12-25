playlist = { john: 'Lovd', james: 'Hate'};

function updatePlayList(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName] : songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

