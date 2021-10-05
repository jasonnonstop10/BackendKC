const {
  postWatchlist,
  getWatchlist,
  putWatchlist,
  deleteWatchlist,
} = require("../functions/Watchlist");
exports.postWatchlist = async (req, res) => {
  const { userId } = req;
  const watchlist = await postWatchlist(req.body, userId);
  res.send(watchlist);
};
exports.getWatchlist = async (req, res) => {
  const { userId } = req;
  const watchlist = await getWatchlist(userId);
  res.send(watchlist);
};
exports.putWatchlist = async (req, res) => {
  const { userId } = req;
  const watchlist = await putWatchlist(req.body, userId);
  res.send(watchlist);
};
exports.deleteWatchlist = async (req, res) => {
  const { userId } = req;
  const watchlist = await deleteWatchlist(req.body, userId);
  res.send(watchlist);
};
