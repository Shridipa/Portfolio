from PIL import Image

img = Image.open('public/profile-photo.png')
print('size', img.size, 'mode', img.mode)
print('info', img.info)
if img.mode == 'RGBA':
    px = img.load()
    count = 0
    w, h = img.size
    for y in range(h):
        for x in range(w):
            if px[x, y][3] == 0:
                count += 1
    print('transparent count', count)
    print('sample corners:')
    for coord in [(0,0),(w-1,0),(0,h-1),(w-1,h-1),(w//2,0),(0,h//2),(w-1,h//2)]:
        print(coord, px[coord])
else:
    print('image not RGBA')
