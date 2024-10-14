/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Container 
      maxWidth: {
        'headerContainer': '1300px',
      },
      // Container 
      // Font Family
      fontFamily: {
        'dm': ["DM Sans"],
        
      },
      // Font Family
      // Color 
      colors: {
        menuC: '#767676',
        menuHc: '#262626',
        categoryBg: '#F5F5F3',
      },
      // Color 
      // Background Images 
      backgroundImage: {
       bannerImg: "url('././src/assets/bannerBg.png')",
       adsBg: "url('././src/assets/ads_bg.png')",
       
      }
      // Background Images 
    },
  },
  plugins: [],
}

