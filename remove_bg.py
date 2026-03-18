import sys
import subprocess

# Auto-install rembg if not present
try:
    from rembg import remove
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "rembg", "Pillow"])
    from rembg import remove
    from PIL import Image

import io

print("Loading image...")
with open("public/brandlogo final.png", "rb") as f:
    input_data = f.read()

print("Running AI background removal (this may take a moment)...")
output_data = remove(input_data)

print("Saving transparent PNG...")
with open("public/brandlogo_clean.png", "wb") as f:
    f.write(output_data)

print("Done! Saved to public/brandlogo_clean.png")
