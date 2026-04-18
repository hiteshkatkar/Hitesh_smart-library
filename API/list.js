global.db = global.db || [];

export default function handler(req, res) {
  res.json(global.db);
}
