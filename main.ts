input.onButtonPressed(Button.A, function () {
    wuKong.mecanumRun(wuKong.RunList.left, 59)
    basic.pause(2000)
    wuKong.mecanumRun(wuKong.RunList.right, 59)
    basic.pause(2000)
    wuKong.mecanumRun(wuKong.RunList.Front, 59)
    basic.pause(2000)
    wuKong.mecanumRun(wuKong.RunList.rear, 59)
    basic.pause(2000)
    wuKong.mecanumRun(wuKong.RunList.stop, 59)
})
basic.forever(function () {
	
})
