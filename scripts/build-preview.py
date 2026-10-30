"""Bundle each page with its CSS and JS inlined into preview/, for single-file viewing."""
from pathlib import Path

root = Path(__file__).resolve().parent.parent
css = (root / "assets/styles.css").read_text()
js = (root / "assets/app.js").read_text()
icons = (root / "assets/icons.js").read_text()
out = root / "preview"
out.mkdir(exist_ok=True)

for name in ["membership", "join", "travel", "insurance"]:
    html = (root / f"{name}.html").read_text()
    html = html.replace('<link rel="stylesheet" href="assets/styles.css">', f"<style>\n{css}\n</style>")
    html = html.replace('<script src="assets/icons.js"></script>', f"<script>\n{icons}\n</script>")
    html = html.replace('<script src="assets/app.js"></script>', f"<script>\n{js}\n</script>")
    (out / f"{name}.html").write_text(html)
    print(f"preview/{name}.html")
