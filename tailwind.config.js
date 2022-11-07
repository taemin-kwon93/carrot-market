/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", // .js, .jsx, .ts, .tsx로 끝나는 모든 파일에서 우리가 Tailwind를 사용한걸 찾아낸다.
    "./components/**/*.{js,jsx,ts,tsx}", // 위와 마찬가지로 해당 경로에서 Tailwind를 사용한다.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
