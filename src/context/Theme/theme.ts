const colors = {
  darkSaturatedBlue: "hsl(227, 35%, 25%)",
  grayishBlue: "hsl(225, 20%, 60%)",
  lightGrayishBlue1: "hsl(223, 50%, 87%)",
  lightGrayishBlue2: "hsl(224, 65%, 95%)",
  lightGrayishRed: "hsl(14, 92%, 95%)",
  lightRed: "hsl(15, 100%, 70%)",
  paleBlue: "hsl(226, 100%, 87%)",
  softCyan: "hsl(174, 77%, 80%)",
  softerCyan: "hsl(174, 77%, 70%)",
  strongCyan: "hsl(174, 86%, 45%)",
  bitSoftCyan: "hsl(174, 86%, 60%)",
  strongerCyan: "hsl(174, 86%, 35%)",
  veryPaleBlue: "hsl(230, 100%, 99%)",
  white: "hsl(0, 0%, 100%)"
}

const theme = {
  cta: {
    backGround: colors.darkSaturatedBlue,
    text: colors.paleBlue
  },
  discount: {
    backGround: colors.lightGrayishRed,
    text: colors.lightRed
  },
  main: {
    backGround: colors.veryPaleBlue,
    darkText: colors.darkSaturatedBlue,
    defaultText: colors.grayishBlue
  },
  pricing: {
    backGround: colors.white,
  },
  slider: {
    active: colors.strongerCyan,
    backGround: colors.strongCyan,
    emptyBar: colors.lightGrayishBlue2,
    fullBar: colors.softCyan,
    hover: colors.softerCyan,
    shadow: colors.bitSoftCyan,
  },
  toggle: {
    backGround: colors.lightGrayishBlue1
  }
}

export default theme;