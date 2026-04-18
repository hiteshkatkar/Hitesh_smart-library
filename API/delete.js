global.db = global.db || [];

export default function handler(req, res) {
  const ids = JSON.parse(req.body);

  global.db = global.db.filter(i => !ids.includes(i.id));

  res.json({ ok: true });
}
