from PIL import Image
import numpy as np

img_path = 'Photo(Linkdeln)-Photoroom.png'
out_path = 'public/profile-photo.png'

img = Image.open(img_path).convert('RGBA')
arr = np.array(img).astype(np.int16)

# Sample corners to estimate background color.
corner_coords = [(10, 10), (img.width - 10, 10), (10, img.height - 10), (img.width - 10, img.height - 10)]
corner_colors = [arr[y, x, :3] for x, y in corner_coords]
bg_color = np.mean(corner_colors, axis=0)

# Remove green background by color distance and relative green dominance.
diff = np.sqrt(np.sum((arr[:, :, :3] - bg_color) ** 2, axis=2))
g, r, b = arr[:, :, 1], arr[:, :, 0], arr[:, :, 2]
mask = (diff < 80) & (g > r + 20) & (g > b + 20) & (r < 220) & (b < 220)
mask |= (g > 130) & (g > r + 35) & (g > b + 35)
mask &= (arr[:, :, 3] > 0)

arr[mask, 3] = 0

# Save temporarily to inspect.
out = Image.fromarray(arr.astype(np.uint8), 'RGBA')

# Crop to content bounding box.
alpha = out.split()[-1]
bbox = alpha.getbbox()
print('bbox', bbox)
if bbox:
    x0, y0, x1, y1 = bbox
    w = x1 - x0
    h = y1 - y0
    side = max(w, h)
    cx = x0 + w // 2
    cy = y0 + int(h * 0.35)
    left = max(0, min(cx - side // 2, img.width - side))
    top = max(0, min(cy - side // 2, img.height - side))
    crop_box = (left, top, left + side, top + side)
    print('crop_box', crop_box)
    out = out.crop(crop_box)
    out = out.resize((900, 900), Image.LANCZOS)

out.save(out_path)
print('Saved cleaned profile image to', out_path, 'size', out.size)
