module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FiveUnits": "80px",
        "ThreeUnits": "48px",
        "HalfUnit": "8px",
        "FourUnits": "64px",
        "SixUnits": "96px",
        "Unit": "16px",
        "TwoUnits": "32px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Radius2": "2px",
        "Radius4": "4px",
        "Round": "50%",
        "Radius8": "8px"
      },
      "scale": {
        "Medium": "96px",
        "XXLarge": "288px",
        "Large": "144px",
        "Small": "48px",
        "XLarge": "192px",
        "MaxWidth": "1400px",
        "XSmall": "16px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}