require(['./config'], function () {
	require(['mui','jquery','better'], function(mui, $,better) {
		$.ajax({
			url: '/users/api/getBill',
			type: 'post',
			dataType: 'json',
			success: function(data) {
				var data = data.data;
				render(data);
				selectTab();
			}
		});
		
		var BScroll = new better('section', {
			probeType: 2,
		});
		
	});
});

// 首页渲染
function render (data) {
	var html = '';
	data.forEach(item =>{
		html += `
		<div class="bills" id="bills">
			<p>
				<span class="${item.icon}"></span>
			</p>
			<p>
				<span class="title">${item.intro}</span>
				<span class="postscript">${item.type}</span>
			</p>
			<p class="money">￥${item.money}</p>
		</div>
		`;
	});
	billCont.innerHTML = html;
};

// 切换tab页
function selectTab () {
	var tab = document.querySelector('.footer-tab');
	var c1 = document.querySelector('.bill-cont');
	var c2 = document.querySelector('.bill-two');
	var p1 = tab.querySelector('#detail');
	var p2 = tab.querySelector('#account');
	p1.onclick = function () {
		c1.style.display = "block";
		c2.style.display = "none";
	};
	p2.onclick = function () {
		c2.style.display = "block";
		c1.style.display = "none";
	};
};

addBtn.onclick = function() {
	location.href = './page/tally.html'
};