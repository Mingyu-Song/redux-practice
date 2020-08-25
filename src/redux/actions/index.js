export const addSong = (song) => {
  return {
    type: "ADD_SONG",
    payload: song,
  };
};
