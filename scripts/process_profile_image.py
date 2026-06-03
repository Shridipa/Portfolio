from PIL import Image

img_path = 'Photo(Linkdeln)-Photoroom.png'
out_path = 'public/profile-photo.png'

img = Image.open(img_path).convert('RGBA')
width, height = img.size
pixels = img.load()

# Remove light green background using a conservative threshold.
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if g > 150 and g > r + 40 and g > b + 40 and r < 220:
            pixels[x, y] = (r, g, b, 0)
        elif g > 120 and r < 180 and b < 180 and g > r and g > b:
            pixels[x, y] = (r, g, b, 0)

# Crop to the non-transparent content.
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)
    print('Cropped bounding box:', bbox, 'result size:', img.size)
else:
    print('No crop applied; full image remains.')

img.save(out_path)
print('Saved cleaned profile image to', out_path)
