# ChatApp - Real-time Multi-user Chat Application

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8.1-green?logo=socket.io)](https://socket.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)](https://typescriptlang.org)

## 🚀 Overview

ChatApp is a modern, responsive real-time chat application built with Next.js 14 (App Router), React 18, and Socket.io. Users can join with a username, send messages instantly to all connected users, see online user lists, and receive join/leave notifications. Features a clean UI with sidebar, auto-scrolling messages, and login form.

Perfect for learning real-time features, Socket.io integration with Next.js API routes, and full-stack development.

## ✨ Features

- ✅ Real-time messaging with Socket.io
- ✅ User authentication (simple username login)
- ✅ Online users sidebar with indicators
- ✅ Join/leave system notifications
- ✅ Auto-scrolling chat window
- ✅ Responsive design (desktop-focused)
- ✅ Logout functionality
- ✅ Styled with Tailwind CSS + CSS Modules + custom gradients

## 🛠 Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Frontend**: React 18, TypeScript 5.9.3
- **Real-time**: Socket.io 4.8.1 (server + client)
- **Styling**: Tailwind CSS 3.4.1, PostCSS, CSS Modules, Geist font
- **Other**: Vercel Analytics

## 📋 Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm

## 🏗 Installation

1. Clone the repo:
   ```bash
   git clone <your-repo-url>
   cd ChatApp-master
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Usage

1. Enter a username and click **Join Chat**.
2. Start typing and sending messages (Enter or Send button).
3. See messages from all users in real-time.
4. View online users in the sidebar.
5. Test multi-user: Open in multiple tabs/windows.
6. Click **Logout** to leave.

**Demo Flow**:
- Login as User1 → Joins, sees \"User1 has joined\"
- Login as User2 → Both see notification + user list updates
- User1 sends \"Hello!\" → Both see message with username
- User2 disconnects → User1 sees leave message

## 🗂 Project Structure

```
ChatApp-master/
├── app/
│   ├── layout.js          # Root layout (fonts, metadata)
│   ├── page.tsx           # Main chat page (client component, state/socket logic)
│   ├── globals.css        # Global styles
│   └── favicon.ico
├── components/            # UI components
│   ├── ChatWindow.jsx?    # Messages display + input
│   ├── Sidebar.jsx?       # Users list + logout
│   └── LoginForm.jsx?     # Login UI
│   └── Chat.module.css    # Core styles
├── pages/api/
│   └── socket.js          # Socket.io server handler
├── public/                # Static assets
├── tailwind.config.js     # Tailwind config
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript config
└── README.md              # This file!
```

*Note: Some components inferred from imports; pages/index.js is unused.*

## 📸 Screenshots

*(Add screenshots here: login screen, chat with multiple users)*

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub.
2. Import repo at [vercel.com/new](https://vercel.com/new).
3. Deploy instantly! Socket.io works out-of-box.

### Other Platforms
- Ensure `socket.io` server attaches correctly.
- Set `NODE_ENV=production`.

## 🔍 Scripts

```bash
npm run dev     # Development server (localhost:3000)
npm run build   # Build production
npm run start   # Production server
npm run lint    # Lint code
```

## 🤝 Contributing

1. Fork the repo.
2. Create branch: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Open PR!

## 📄 License

MIT - feel free to use/modify!

## 🙏 Acknowledgments

Built with ❤️ using Next.js, Socket.io. Inspired by real-time chat tutorials.

---

**TODO**: Clean up unused files, add tests, mobile responsiveness, persistence (DB), auth (JWT), file uploads.

*Star the repo if helpful!* ⭐
