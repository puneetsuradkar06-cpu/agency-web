import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#070A14"
      },
      boxShadow: {
        glow: "0 0 30px rgba(75, 122, 255, 0.35)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.2), 0 20px 60px rgba(3,7,18,0.5)"
      },
      backgroundImage: {
        noise: "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.14), transparent 35%), radial-gradient(circle at 80% 0%, rgba(20,184,166,0.12), transparent 30%), radial-gradient(circle at 60% 80%, rgba(168,85,247,0.18), transparent 40%)"
      },
      animation: {
        "gradient-flow": "gradientFlow 14s ease infinite",
        float: "float 8s ease-in-out infinite"
      },
      keyframes: {
        gradientFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
