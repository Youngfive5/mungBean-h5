require(['./config'], function () {
	require(['mui','jquery'], function (mui, $) {
		// moneyInp.innerHTML = 123;
		renderMoney();
		selectIcon();
		selectTypes();
		addBill();
	});
});

// 渲染金额
function renderMoney () {
	var money = location.search.split('=')[1];
	moneyInp.innerHTML = money;
};

// 选择icon
function selectIcon() {
	var selectList = document.getElementById('selectIcon');
	var dls = selectList.querySelectorAll('dl');
	dls.forEach(item =>{
		item.onclick = function () {
			dls.forEach(file =>{
				file.classList.remove('dl-active');
			});
			this.classList.add('dl-active');
		}
	});
	
};

// 选择账单类型
function selectTypes () {
	console.log(selectType);
	var types = selectType.querySelectorAll('span');
	types.forEach(item =>{
		item.onclick = function() {
			types.forEach(file =>{
				console.log(file)
				file.classList.remove('payment-active');
			});
			item.classList.add('payment-active');
			console.log(item.innerHTML);
		}
	})
};

// 点击完成添加账单
function addBill() {
	okBtn.onclick = function () {
		var uid = '5c34b5511fcbb93648e1115b';
		var timer = new Date().toLocaleDateString().split('/');
		timer[1] = timer[1].length < 2 ? "0" + timer[1] : timer[1];
		timer[2] = timer[2].length < 2 ? "0" + timer[2] : timer[2];
		// 获取时间
		timer = timer.join('-');
		var span = document.querySelector('.dl-active').querySelector('dt').querySelector('span');
		var icon = span.className;
		var intro = document.querySelector('.dl-active').querySelector('dd').innerHTML;
		var money = moneyInp.innerHTML;
		var type = document.querySelector('.payment-active').innerHTML;
		
		$.ajax({
			url: '/users/api/addBill',
			type: 'post',
			dataType: 'json',
			data: {
				uid: uid,
				timer: timer,
				type: type,
				money: money,
				intro: intro,
				icon: icon
			},
			success: function(data) {
				alert(data.msg);
				location.href = '/';
			}
		});
	}
};

back.onclick = function () {
	location.href = './tally.html';
};