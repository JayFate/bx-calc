const calculate = require("../../utils/util.js").calculate
console.log(calculate('001+2/3*4+5-6'))
const buttons = [
  "c", "←", "%", "+",
  "9", "8", "7", "-",
  "6", "5", "4", "x",
  "3", "2", "1", "÷",
  "0", ".", "", "="
]
const operaters = buttons.filter(e => !e.match(/[\d]/))
const itemOrange = [
  true, true, true, true,
  false, false, false, true,
  false, false, false, true,
  false, false, false, true,
  false, false, false, true
]

Page({
  data: {
    buttons: buttons,
    currentExpr: "0",
    screenExpr: "",
    history: [],
    twoline: false,
    threeline: false,
    itemOrange: itemOrange
  },
  calcResult() {
    let result
    let formatCurrentExpr = this.data.currentExpr
      .replace(/^\./, "0.")
      .replace(/x/g, "*")
      .replace(/÷/g, "/")
      .replace(/\+\./, "+0.")
      .replace(/\-\./, "-0.")
      .replace(/\*\./, "*0.")
      .replace(/\/\./, "/0.")
    if (formatCurrentExpr.match(/^[*÷%]/)) {
      result = "输入表达式错误！"
    } else {
      result = calculate(formatCurrentExpr)
    }
    this.setData({
      currentExpr: this.data.currentExpr + "=\n" + result
    })
  },
  tap(e) {
    const id = e.currentTarget.id
    switch (id) {
      case "=":
        this.calcResult()
        let history = this.data.history.slice()
        history.push({
          content: this.data.currentExpr.trim(),
          twoline: this.data.currentExpr.trim().length > 8 && this.data.currentExpr.trim().length <= 16,
          threeline: this.data.currentExpr.trim().length > 16
        })
        this.setData({
          history: history,
          currentExpr: ""
        })
        break;
      case "c":
        this.setData({
          currentExpr: ""
        })
        break;
      case "←":
        this.setData({
          currentExpr: this.data.currentExpr.slice(0, -1)
        })
        break;
      case "":
        // this.calcResult()
        break;
      default:
        this.setData({
          currentExpr: this.data.currentExpr + id
        })
    }
    // 8 到 16 个字符显示为两行文本,16 个字符以上显示为三行
    if (this.data.screenExpr.length > 8 && this.data.screenExpr.length <= 16) {
      this.setData({
        twoline: true
      })
    } else if (this.data.currentExpr.length > 16) {
      this.setData({
        threeline: true
      })
    }
  },
  onLoad() {
    // test
    this.tap({
      currentTarget: {
        id: "0x777777777"
      }
    })
    this.tap({
      currentTarget: {
        id: "="
      }
    })
    this.tap({
      currentTarget: {
        id: "001+2/3x4+5-6"
      }
    })
    this.tap({
      currentTarget: {
        id: "="
      }
    })
    this.tap({
      currentTarget: {
        id: "001+2/3x4+5+3"
      }
    })
    this.tap({
      currentTarget: {
        id: "="
      }
    })
    this.tap({
      currentTarget: {
        id: "001+2/3x4+5+3"
      }
    })
  },
  history: function() {
    wx.navigateTo({
      url: '../history/history'
    })
  }
})