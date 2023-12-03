# 사각형
* ```<rect>```
* 너비(width),높이(height),색상(fill / default : black)
* 위치(x,y)
* 둥근 테두리 (rx,ry)
```
<svg>
  <rect width="480" height="240" fill="#3d87fb" x="20" y="40" rx="20" ry="20" />
</svg>
```

# 원
* ```<circle/>```
* 원 중심(cx,cy) , 반지름(r), 색상(fill)
* 테두리 색상(stroke), 테두리 두께(stroke-width)
```
<svg>
  <circle cx="200" cy="200" r="50" fill="none" stroke="#f9b10a" stroke-width="14" />
</svg>
```


# 타원
* ```<ellipse>```
* 원 중심(cx,cy) , 반지름(rx,ry), 색상(fill)
```
<svg>
  <ellipse 
    cx="200" cy="200" rx="50" ry="100"
    fill="#dd3742" stroke="#b13138" stroke-width="8" />
</svg>
```

# 직선
* ```<line/>```
* 시작점(x1,y1) , 끝점(x2,y2)
```
<svg>
  <line x1="440" y1="40" x2="120" y2="200" stroke-width="5" stroke="#26b2a2" />
</svg>
```

# 폴리라인(Polyline)
* ```<polyline/>```
* 2개 이상의 점들이 직선으로 연결된 도형 그림
* 각 점들의 위치(position) 속성을 설정 할 수 있음.
* 점은(x,y) 공백으로 구분
* 예) x1,y1  x2,y2  x3,y3
```
<svg>
  <polyline
    points="0,0 40,40 40,80 80,80 80,120 120,120 160,160" 
    fill="none" stroke="#b38fac" stroke-width="6" />
</svg>
```

# 다각형(polygon)
* ```<polygon/>```
* 3개 이상의 점들이 연결된 다각형
```
<svg>
  <polygon 
    points="50,5 100,5 125,30 125,80 100,105 50,105 25,80 25,30" 
    fill="#4b6eec" />
</svg>
```