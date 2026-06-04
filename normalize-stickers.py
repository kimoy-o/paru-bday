"""
Resize all sticker images to a consistent max dimension.
Originals are backed up alongside as *.orig.ext before overwriting.
"""

from pathlib import Path
from PIL import Image
import shutil

STICKERS_DIR = Path(__file__).parent / "public" / "resources" / "photos" / "stickers"
BACKUP_DIR   = STICKERS_DIR.parent  # public/resources/photos/
MAX_DIM = 240  # px — good balance for hero (display ~100-130px) + retina clarity

EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp"}

for src in STICKERS_DIR.iterdir():
    if src.suffix.lower() not in EXTS:
        continue

    img = Image.open(src)
    w, h = img.size
    longest = max(w, h)

    if longest <= MAX_DIM:
        print(f"  skip  {src.name}  ({w}×{h}) — already small enough")
        continue

    scale = MAX_DIM / longest
    new_w, new_h = round(w * scale), round(h * scale)

    # Back up original to photos/ (not stickers/) so it doesn't re-process
    backup = BACKUP_DIR / (src.stem + ".orig" + src.suffix)
    shutil.copy2(src, backup)

    resized = img.resize((new_w, new_h), Image.LANCZOS)

    # Preserve PNG mode (keep transparency); convert JPEG to RGB
    if src.suffix.lower() in {".jpg", ".jpeg"} and resized.mode in ("RGBA", "P"):
        resized = resized.convert("RGB")

    resized.save(src)
    print(f"  {src.name}  {w}×{h} → {new_w}×{new_h}")

print("\ndone. originals saved as *.orig.*")
