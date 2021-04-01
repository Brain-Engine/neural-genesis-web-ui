/**
 * Created by OXOYO on 2020/5/13
 *
 * 通用工具
 */

// 节流
const throttle = function (func, timeFrame) {
  let lastTime = 0
  return function () {
    const now = new Date()
    if (now - lastTime >= timeFrame) {
      func()
      lastTime = now
    }
  }
}

// 首字母转大写
const firstUpperCase = ([first, ...rest]) => first.toUpperCase() + rest.join('')

// 是否左键触发
const isLeftKey = (event) => event.originalEvent.button === 0

const isInG6Area = (event) => {
  const obj = event.originalEvent.originalTarget
  const x = getElementLeft(obj)
  const y = getElementTop(obj)
  const offset = getMousePosition(event.originalEvent)
  return offset.x > x && offset.x < (x + obj.offsetWidth) && offset.y > y && offset.y < (y + obj.offsetHeight)
}

const getElementLeft = (element) => {
  var actualLeft = element.offsetLeft
  var current = element.offsetParent

  while (current !== null) {
    actualLeft += current.offsetLeft
    current = current.offsetParent
  }

  return actualLeft
}

const getElementTop = (element) => {
  var actualTop = element.offsetTop
  var current = element.offsetParent

  while (current !== null) {
    actualTop += current.offsetTop
    current = current.offsetParent
  }

  return actualTop
}

// 获取鼠标相对于文档的坐标（考虑页面滚动）
const getMousePosition = (event) => {
  var obj = document.getElementsByClassName('sketchpad-box')[0]
  var e = event || window.event
  var scrollX = obj.scrollLeft
  var scrollY = obj.scrollTop
  var x = e.clientX + scrollX || e.pageX
  var y = e.clientY + scrollY || e.pageY
  return { 'x': x, 'y': y }
}

export default {
  throttle,
  firstUpperCase,
  isLeftKey,
  isInG6Area
}
