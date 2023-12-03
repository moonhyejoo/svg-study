# GIF 단점
- 이미지를 표현하는 방식은 비트맵 , 벡터
- JPG,GIF,PNG는 비트맵 방식으로 사각형의 픽셀이 모여 만들어진 이미지
- 확대 시 계단현상과 깨짐현상 발생
- GIF는 픽셀 이미지가 연속적으로 배치되어 있기 때문에 용량이 무거워짐

# Lottie란?
- 에어비엔비에서 개발한 오픈소스
- JSON 기반의 애니메이션 파일 형식 ( SVG는 정적 파일)
- GIF나 MP4 같은 형식에 비해 용량이 훨씩 작다 => 파일 용량과 로드시간이 절약됨
- 벡터 기반의 애니메이션
- 자유롭게 크기를 조정하여도 벡터 기반으로 해상도에 영향을 주지 않는다
- 개발에서 적용이 간단
- 클릭,스크롤,호버 같은 상호작용에 반응할 수 있음
- 웹,IOS,Android 등 여러 플롯폼을 위한 오픈소스 및 무료 플레이어가 있어 변환 없이 사용 가능

## Lottie 제작 방법
- Adobbe After Effects에서 필요한 애니메이션을 생성
- LottieFiles 플러그인을 통해 JSON형태의 애니메이션 파일로 Export


## Lottie를 사용해야 하는 이유
- GIF와 PNG 보다 파일 용량이 작고, 픽셀화가 발생하지 않아 해상도에 영향을 받지 않음
- 상호작용 라이브러리를 통해 애니메이션을 동적으로 움직일 수 있음

## HTML에 Lottie 애니메이션 추가하기
- 웹페이지 어디에나 Lottie 플레이어를 쉽게 추가할 수 있게 해주는 ```<lottie-player>```웹 구성요소를 지원
- 플레이어의 스크립트 URL을 ```<head/>```에 추가
```<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>```
- JSON파일 경로를 아래 ```<URL HERE>```에 삽입
- ```<lottie-player src="<URL HERE>" background="transparent"  speed="1"  style="width: 300px; height: 300px;" loop controls autoplay></lottie-player>```

## Javascript 컨트롤
- 버튼을 클릭하거나, 원하는 순간에 animation을 발생시키기 위해 ```lottie.js```를 사용
```<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.9/lottie.min.js"></script>```


## Lottie 속성 (커스터마이징)
- 재생 모드(Play Mode): 바운스(Bounce) 재생 모드를 설정
- 방향(Direction): 애니메이션을 앞으로 재생할지, 뒤로 재생할지 선택
- 배경(Background): 배경 색상을 설정
- 속도(Speed): 재생 속도를 설정
- 반복(Loop)
- 컨트롤(Controls) : 탐색기 바가 표시
- 호버(Hover): 체크하면 사용자가 애니메이션 위에 마우스 커서를 올릴 때만 애니메이션이 재생
- 자동 재생(Autoplay)

## Lottie Docs
- https://docs.lottiefiles.com/lottie-player/components/lottie-player/events
- https://docs.lottiefiles.com/lottie-player/components/lottie-player/methods

## Lottie interactitity
- 라이브러리 : https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js
- https://docs.lottiefiles.com/lottie-interactivity/methods
- 예제 : https://docs.lottiefiles.com/lottie-interactivity/animation-modes
```
LottieInteractivity.create({    
    player: string,
    mode: scroll , cursor, chain
    container: string, 
    actions:[
        {
            path : 'json 경로'
            state : 
            forceFlag: 
            frames:
            transition:
            count:
            reset :
            transition : "onCOmplete",
            visibility:[0, 1.0], //컨테이너 표시 비율 0~100% 
            type: stop , seek, play (표시되면 애니메이션 실행) , playOnce (한번만 실행)
            frames: [0, 300],
        }
    ]
})
```


https://hello-bryan.tistory.com/432