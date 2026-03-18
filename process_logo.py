import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def process_image(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGB")
        data = img.getdata()
        
        new_data = []
        for r, g, b in data:
            # Alpha is determined by the brightest color channel (Luminance)
            alpha = max(r, g, b)
            if alpha == 0:
                new_data.append((0, 0, 0, 0))
            else:
                # Normalize colors so they maintain their hue but rely on alpha for darkness/glow fading
                new_data.append((int(r * 255 / alpha), int(g * 255 / alpha), int(b * 255 / alpha), alpha))
                
        new_img = Image.new("RGBA", img.size)
        new_img.putdata(new_data)
        new_img.save(output_path, "PNG")
        print("Successfully processed image to:", output_path)
    except Exception as e:
        print("Error:", e)
        sys.exit(1)

if __name__ == "__main__":
    process_image("public/brand logo2.png", "public/brand_logo_transparent.png")
