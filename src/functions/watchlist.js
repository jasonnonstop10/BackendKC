const watchlistModel = require("../models/watchlist.model");
const mongoose = require("mongoose");
const valid_id = mongoose.Types.ObjectId.isValid;

module.exports.postWatchlist = async (input, user_id) => {
  const { watchlist_no, no } = input;
  return await watchlistModel.create({
    no: no,
    watchlist_no: watchlist_no,
    u_id: user_id,
  });
};
module.exports.getWatchlist = async (user_id) => {
  if (valid_id(user_id)) {
    return await watchlistModel.find({ u_id: user_id });
  } else {
    console.log(user_id);
    throw {
      message: "watchlist not found",
      status: 404,
    };
  }
};
module.exports.putWatchlist = async (payload, userId) => {
  const { no, watchlist_no } = payload;
  if (valid_id(userId)) {
    const watchlist = await watchlistModel.findOneAndUpdate(
      { no: no, u_id: userId },
      { watchlist_no },
      { new: true }
    );
    console.log(watchlist);
    return watchlist;
  } else {
    throw {
      message: "Watchlist not found",
      status: 404,
    };
  }
};
module.exports.deleteWatchlist = async (input, userId) => {
  const { no } = input;
  if (valid_id(userId)) {
    const watchlist = await watchlistModel.findOneAndUpdate(
      { no, u_id: userId, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );
    console.log(watchlist);
    return watchlist;
  } else {
    throw {
      message: "Watchlist not found",
      status: 404,
    };
  }
};
