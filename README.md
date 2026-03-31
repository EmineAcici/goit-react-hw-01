# GoIT React Homework 01 - React Temelleri

Bu proje, GoIT Full Stack Developer eğitimi React modülünün ilk ödevidir. Bu çalışmada; **Vite** ile React projesi kurulumu, bileşen yapısı (components), veri aktarımı (props), liste render etme ve **CSS Modülleri** ile stil yönetimi üzerine odaklanılmıştır.

## 📁 Proje Yapısı

Her bileşen, mantıksal bir bütünlük sağlamak adına kendi klasöründe JSX ve `.module.css` dosyasıyla birlikte yapılandırılmıştır:

```text
src/
├── components/
│   ├── Profile/
│   │   ├── Profile.jsx
│   │   └── Profile.module.css
│   ├── FriendList/
│   │   ├── FriendList.jsx
│   │   └── FriendList.module.css
│   └── TransactionHistory/
│   |    ├── TransactionHistory.jsx
│   |    └── TransactionHistory.module.css
|   ├── App.jsx
|   └── App.css
├── userData.json
├── friends.json
├── transactions.json
└── main.jsx
