/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-10": "#1a1a1a",
        "grey-15": "#262626",
        "grey-60": "#98989a",
        "grey-90": "#e6e6e6",
        darkslategray: "#2e2e2e",
        "absolute-white": "#fff",
        blue: "#6868e5",
        dimgray: {
          "100": "#595959",
          "200": "rgba(87, 87, 87, 0.2)",
        },
        mediumslateblue: {
          "100": "#8282ff",
          "200": "#6868e6",
        },
        gray: {
          "100": "#1e1e1e",
          "200": "rgba(36, 36, 36, 0.2)",
          "300": "rgba(36, 36, 36, 0.5)",
        },
        "grey-20": "#333",
        "grey-40": "#656567",
        "green-99": "#fdfffa",
        lightgray: "#ccc",
        lb: "#ababf7",
      },
      spacing: {},
      fontFamily: {
        barlow: "Barlow",
        inter: "Inter",
      },
      borderRadius: {
        "96xl": "115px",
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "18px",
      "3xl": "22px",
      "9xl": "28px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      xl: "20px",
      base: "16px",
      "4xl": "23px",
      "11xl": "30px",
      "5xl": "24px",
      lgi: "19px",
      "7xl": "26px",
      "2xl": "21px",
      "131xl": "150px",
      "41xl": "60px",
      "18xl": "37px",
      "49xl": "68px",
      "22xl": "41px",
      "35xl": "54px",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
