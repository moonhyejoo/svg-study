# Animation 

## SVG Animation Elements
적용할 도형의 태그 안에 <animate/> 혹은 <animate></animate>
* <animate ... />  시간축에 속성이나 특성의 수치 값을 할당
* <set ... />   비수치값을 가지는 속성 애니메이션
* <animateMotion ... /> 패스에 따라 이동 path, mpath, keypoints, rotate 속성 추가
* <animateColor ... />  색상 애니메이션
* <animateTransform ... /> 변환 애니메이션
```
<animate 
    attributeName="바꿀속성이름" 
    attributeType="속성유형(XML | CSS | auto)" 
    from="시작값"  
    to="종료값" 
    begin="시작시간" 
    end="시간" 
    dur="지속시간s | indefinite | media" 
    restart="always | never" 
    repeatCount="횟수" 
    repeatDur="시간" 
    fill="freeze(애미메이션이 끝나는 위치에서 멈춤) | remove" 
/>
```
