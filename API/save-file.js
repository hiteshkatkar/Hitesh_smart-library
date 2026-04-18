global.db = global.db || [];

export default function handler(req, res) {
  const data = JSON.parse(req.body);
  data.id = Date.now();

  global.db.push(data);

  res.json({ ok: true });
}
