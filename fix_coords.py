import re
import math

path_d = "M1117.0,2377.0 L1190.0,2394.0 1220.0,2474.0 1302.0,2493.0 1379.0,2546.0 1451.0,2502.0 1551.0,2533.0 1646.0,2451.0 1630.0,2280.0 1551.0,2110.0 1480.0,2067.0 1445.0,1968.0 1361.0,1938.0 1258.0,1784.0 1258.0,1665.0 1240.0,1575.0 1353.0,1506.0 1426.0,1515.0 1583.0,1411.0 1775.0,1483.0 1897.0,1506.0 1910.0,1396.0 2015.0,1371.0 2035.0,1333.0 1993.0,1285.0 2007.0,1081.0 1979.0,1016.0 2029.0,1016.0 2143.0,1075.0 2157.0,1000.0 2114.0,870.0 2062.0,775.0 1873.0,685.0 1775.0,585.0 1786.0,526.0 1687.0,458.0 1750.0,404.0 2089.0,224.0 2054.0,146.0 2077.0,89.0 2035.0,13.0 1836.0,6.0 1646.0,6.0 1543.0,95.0 1296.0,162.0 1277.0,206.0 1314.0,296.0 1240.0,411.0 1153.0,382.0 1117.0,336.0 992.0,365.0 796.0,296.0 709.0,445.0 616.0,469.0 584.0,544.0 433.0,639.0 433.0,725.0 34.0,760.0 6.0,815.0 52.0,948.0 169.0,994.0 215.0,1158.0 98.0,1320.0 78.0,1411.0 147.0,1531.0 328.0,1575.0 433.0,1575.0 456.0,1665.0 594.0,1763.0 639.0,1860.0 647.0,1948.0 796.0,1991.0 757.0,2043.0 998.0,2162.0 1064.0,2146.0 1147.0,2265.0 Z"

# Parse path
points = []
tokens = re.findall(r'[A-Z]|[-0-9.]+', path_d)
i = 0
while i < len(tokens):
    if tokens[i] == 'M' or tokens[i] == 'L':
        points.append((float(tokens[i+1]), float(tokens[i+2])))
        i += 3
    elif tokens[i] == 'Z':
        points.append(points[0])
        i += 1
    else:
        # Implicit L
        points.append((float(tokens[i]), float(tokens[i+1])))
        i += 2

# Calculate cumulative lengths
lengths = [0.0]
total_len = 0.0
for i in range(1, len(points)):
    dx = points[i][0] - points[i-1][0]
    dy = points[i][1] - points[i-1][1]
    dist = math.hypot(dx, dy)
    total_len += dist
    lengths.append(total_len)

def get_point_at_progress(progress):
    target = progress * total_len
    for i in range(1, len(lengths)):
        if lengths[i] >= target:
            segment_len = lengths[i] - lengths[i-1]
            if segment_len == 0:
                return points[i]
            t = (target - lengths[i-1]) / segment_len
            x = points[i-1][0] + t * (points[i][0] - points[i-1][0])
            y = points[i-1][1] + t * (points[i][1] - points[i-1][1])
            return x, y
    return points[-1]

# Read data.js
with open('assets/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace x and y based on st and ed
def replacer(match):
    st = float(match.group(1))
    ed = float(match.group(2))
    pt = (st + ed) / 2
    px, py = get_point_at_progress(pt)
    # Normalize to 0-1
    nx = px / 2163.0
    ny = py / 2552.0
    return f'st: {st},\n      ed: {ed},\n      x: {nx:.4f},\n      y: {ny:.4f},'

# Pattern looks for st, ed, x, y. Notice the exact formatting in data.js
pattern = r'st:\s*([0-9.]+),\s*ed:\s*([0-9.]+),\s*x:\s*[-0-9.]+,\s*y:\s*[-0-9.]+,'
new_content = re.sub(pattern, replacer, content)

with open('assets/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Total length calculated: {total_len:.2f}")
print("data.js updated successfully.")
