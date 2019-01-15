require(['./config'], function (){
	require(['mui','jquery'], function(mui, $) {
		
		keyBoard();
		addEvent();
	});
});

// 判断键盘
function keyBoard () {
	keyboard.onclick = function (e) {
		if (e.target.tagName === 'SPAN') {
			var text = e.target.innerHTML;
			if (text === 'X') {
				moneyInp.innerHTML = moneyInp.innerHTML.substr(0,moneyInp.innerHTML.length -1);
			} else if (moneyInp.innerHTML.indexOf('.') != -1 && text === '.') {
				moneyInp.innerHTML = moneyInp.innerHTML;
			} else if (moneyInp.innerHTML.indexOf('.') != -1 && moneyInp.innerHTML.split('.')[1].length == 2) {
				moneyInp.innerHTML = moneyInp.innerHTML;
			} else {
				moneyInp.innerHTML = moneyInp.innerHTML + text;
			}
		}
	};
};

// 返回按钮
back.onclick = function () {
	location.href = '/';
}

// 点击确定
function addEvent () {
	
	sure.onclick = function () {
		location.href = './addBill.html';
		if (moneyInp.innerHTML !== '') {
			location.href = './addBill.html?money=' + moneyInp.innerHTML;
		} else {
			alert('请输入金额');
			location.href = './tally.html';
		}
	};
};
