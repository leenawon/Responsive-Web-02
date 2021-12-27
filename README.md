## 반응형 웹 사이트 (Business Web Site)

---

### 💻 비즈니스를 주제로 한 Responsive Web Site 제작

반응형 css 작업과 javascript를 이용한 메뉴 버튼을 포함한 한 페이지 웹 사이트 개발

### 사용 기술

- HTML
- CSS
- Javascript

### 데모 링크 : https://leenawon.github.io/Responsive-Web-02/

---

### **완성** 모습

- Main Section

  - 로고와 커다란 이미지, 그리고 텍스트 구성으로 제작
  - pink color를 기본 색상으로 통일감을 주었음
  - 좌측의 소셜 아이콘들과 메뉴버튼은 고정되게끔 제작

![image](https://user-images.githubusercontent.com/76942087/147108636-45489cdf-8fdb-4fef-8b9d-efe7ae622637.png)

- About Section

  - 메인 화면과 유사하게 좌우 이미지 및 텍스트 구성의 화면 제작

![image](https://user-images.githubusercontent.com/76942087/147208227-41a1869d-be43-4db4-b4fe-9365e264799e.png)

- Features Section

  - 세 가지 아이템을 한 눈에 보기 쉽게 나열하여 제작

![image](https://user-images.githubusercontent.com/76942087/147216219-0aa2f354-3338-4dbc-a47a-b4dcfb02390b.png)

- Courses Section

  - About & Offer 화면과 반전되면서 동일한 형식의 화면 제작

![image](https://user-images.githubusercontent.com/76942087/147216657-c77504f4-3edb-457b-8286-00eb1a380759.png)

- Offer Section

  - About 화면과 같은 레이아웃으로 통일성 있는 화면 제작

![image](https://user-images.githubusercontent.com/76942087/147218469-3f8dffa1-c0a3-4c4a-a84a-72fa18e712e0.png)

- Contact Section

  - 사용자의 이름과 이메일, 비밀번호를 입력할 수 있는 form 제작

![image](https://user-images.githubusercontent.com/76942087/147216744-cbd8a9cb-e5cb-4e1d-aff7-e3db62d215c5.png)

- Footer Section

  - 사이트의 다양한 정보에 대한 부분을 확인할 수 있는 footer 제작

![image](https://user-images.githubusercontent.com/76942087/147220075-0a191614-cadd-47f3-8ea4-ccbb4d7dafd9.png)

---

### Advanced Feature

- 사용자의 Click Event에 따라 보여지는 Menu를 Javascript를 사용해 구현

```Javascript
// Navigation Click Event

var menuButton = document.querySelector('.nav-menu-button');
var navigation = document.querySelector('.navigation');

// Menu Button EventListener

menuButton.addEventListener('click', clickMenu);

// Function clickMenu

function clickMenu() {
  navigation.classList.toggle('nav-list');
}
```

![image](https://user-images.githubusercontent.com/76942087/147112163-442caf12-8cd5-4562-a679-4180500792d4.png)

- 모바일 반응형

  - ![image](https://user-images.githubusercontent.com/76942087/147222169-47f048e1-9fa8-4fa4-bd83-a53d89d9c95d.png)
  - ![image](https://user-images.githubusercontent.com/76942087/147222286-1876ac86-8639-4eb6-a925-53d1d59fec12.png)
  - ![image](https://user-images.githubusercontent.com/76942087/147222465-d2caeb16-5608-45ed-9817-157107eb8622.png)
  - ![image](https://user-images.githubusercontent.com/76942087/147222503-8f8aca10-fa43-4a2e-aed0-709a1c7bd21a.png)
  - ![image](https://user-images.githubusercontent.com/76942087/147222589-4a1ec37f-bc2a-48bb-942c-ff903e670355.png)
  - ![image](https://user-images.githubusercontent.com/76942087/147222671-84d1c8df-87d7-451b-a8f6-202072d60d89.png)
  - ![image](https://user-images.githubusercontent.com/76942087/147222731-2dca0996-fb4d-4640-8b8c-549c8aea2bd0.png)

### 개선 사항

- Sign Up form을 정말 로그인 및 회원가입 할 수 있도록 한 단계 나아가 개선 필요
