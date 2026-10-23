from flask import Flask, request, jsonify
from datetime import datetime
import json, os

app = Flask(__name__)
FILE = os.path.join(os.path.dirname(__file__), "messages.json")


@app.post("/api/contact")
def contact():
    data = request.get_json(force=True)
    if not all(data.get(k) for k in ("name", "email", "message")):
        return jsonify(ok=False, error="Data belum lengkap"), 400
    items = json.load(open(FILE, encoding="utf-8")) if os.path.exists(FILE) else []
    items.append({**data, "at": datetime.now().isoformat()})
    json.dump(items, open(FILE, "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    return jsonify(ok=True)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
