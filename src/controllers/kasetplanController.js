const {
  postKasetplan,
  getKasetplan,
  putKasetplan,
  deleteKasetplan,
  getporforio,
} = require("../functions/kasetplan");
exports.postKasetplan = async (req, res) => {
  const { userId } = req;
  const kasetplan = await postKasetplan(req.body, userId);
  res.send(kasetplan);
};
exports.getKasetplan = async (req, res) => {
  const { userId } = req;
  const kasetplan = await getKasetplan(userId);
  res.send(kasetplan);
};
exports.putKasetplan = async (req, res) => {
  const { userId } = req;
  const kasetplan = await putKasetplan(req.body, userId);
  res.send(kasetplan);
};
exports.deleteKasetplan = async (req, res) => {
  const { userId } = req;
  const kasetplan = await deleteKasetplan(req.body, userId);
  res.send(kasetplan);
};
exports.getporforio = async (req, res) => {
  const { userId } = req;
  const porforio = await getporforio(userId);
  res.send(porforio);
};
