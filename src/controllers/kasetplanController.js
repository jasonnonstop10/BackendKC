const {
  postKasetplan,
  getKasetplan,
  putKasetplan,
  deleteKasetplan,
} = require("../functions/kasetplan");
exports.postKasetplan = async (req, res, next) => {
  const { userId } = req;
  const kasetplan = await postKasetplan(req.body, userId);
  res.send(kasetplan);
};
exports.getKasetplan = async (req, res, next) => {
  const kasetplan = await getKasetplan(req.body.kasetplan_id);
  res.send(kasetplan);
};
exports.putKasetplan = async (req, res, next) => {
  const kasetplan = await putKasetplan(
    req.body.kasetplan_id,
    req.body.kasetplan
  );
  res.send(kasetplan);
};
exports.deleteKasetplan = async (req, res, next) => {
  const kasetplan = await deleteKasetplan(req.body.kasetplan_id);
  res.send(kasetplan);
};
