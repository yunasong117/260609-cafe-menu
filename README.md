# MenuSnap ☕

카페 음료 사진과 가격을 한눈에 볼 수 있는 웹사이트 아이디어 랜딩페이지입니다.

## 기술 스택

- **Node.js** + **Express.js** — 정적 파일 서빙
- **HTML5 / CSS3 / Vanilla JS** — 프론트엔드

## 프로젝트 구조

```
cafe-landing/
├── server.js         # Express 서버
├── package.json
└── public/
    ├── index.html    # 랜딩페이지
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## 실행 방법

```bash
npm install
npm start
```

브라우저에서 `http://localhost:3000` 접속

## 랜딩페이지 구성

- **Hero** — 헤드라인 + 음료 카드 목업
- **Menu Preview** — 샘플 음료 6종 (사진 + 가격)
- **Features** — 핵심 기능 소개
- **CTA** — 이메일 등록 폼
