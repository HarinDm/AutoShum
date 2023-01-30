$(document).ready(function () {
	var is_compleks = false;
	var dop_prices = 0;
	var dop_percents = 0;
	var current_doors = 4;

	$('.ask_slide').each(function () {
		$(this).find('span').css('width', $(this).find('span').data('percent') * 1.1 + '%');
		$(this).find('span.percents').html($(this).find('span').data('percent') + '%');
	});

	$('#CAR_MODEL').change(function () {
		$('.inner_step').fadeIn();
		$('.main_step').addClass('opened');
		$('.calc_wrapper').addClass('opened');
		$('.footer_controls a:first-child').addClass('active');
	});
	$('.counter .minus').click(function () {
		if ($(this).parents('.counter').find('input').val() > 1) {
			console.log($('.compleks_input_doors').data("price"));
			console.log(parseInt($(this).parents('.counter').find('input').val()));

			$('.compleks_input_doors').data("price", $('.compleks_input_doors').data("price") / parseInt($(this).parents('.counter').find('input').val()));
			$(this).parents('.counter').find('input').val(parseInt($(this).parents('.counter').find('input').val()) - 1);
			current_doors = current_doors - 1;
			$('.compleks_input_doors').data("price", $('.compleks_input_doors').data("price") * current_doors);

			console.log($('.compleks_input_doors').data("price"));
		}
	});
	$('.counter .pluss').click(function () {
		if ($(this).parents('.counter').find('input').val() < 4) {
			console.log($('.compleks_input_doors').data("price"));
			console.log(parseInt($(this).parents('.counter').find('input').val()));

			$('.compleks_input_doors').data("price", $('.compleks_input_doors').data("price") / parseInt($(this).parents('.counter').find('input').val()));
			$(this).parents('.counter').find('input').val(parseInt($(this).parents('.counter').find('input').val()) + 1);
			current_doors = current_doors + 1;
			$('.compleks_input_doors').data("price", $('.compleks_input_doors').data("price") * current_doors);

			console.log($('.compleks_input_doors').data("price"));
		}
	});
	$('.calc_toggle').click(function () {
		$(this).toggleClass('open');
		$('.calc_lines').toggleClass('open');
		$('.calc_desc').toggleClass('open');
	});


	$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[0]); });

	$('.compleks_input_doors').each(function () { $(this).data("price", $(this).data('prices').split(',')[0] * current_doors); });



	$('#complex').change(function () {
		if ($(this).prop('checked')) {
			$('.calc_car_inner .' + $(this).data('check') + '').addClass('active');
			$('.compleks_input').prop('checked', true);
			is_compleks = true;
		}
		else {
			$('.calc_car_inner .' + $(this).data('check') + '').removeClass('active');
			$('.compleks_input').prop('checked', false);
			is_compleks = false;
		}
	});



	$('.compleks_input').click(function () {
		$('.calc_car_inner .' + $(this).data('check') + '').toggleClass('active');
		if (is_compleks) {
			$('#complex').prop('checked', false);
			is_compleks = false;
		}
	});


	$('.additional_input').click(function () {
		$('.calc_car_inner .' + $(this).data('check') + '').toggleClass('active');
		if ($(this).prop('checked')) {
			dop_prices = dop_prices + parseInt($(this).data('price'));
			dop_percents = dop_percents + parseInt($(this).data('percent'));
		}
		else {
			dop_prices = dop_prices - parseInt($(this).data('price'));
			dop_percents = dop_percents - parseInt($(this).data('percent'));
		}
	});






	var coef = 0.6;
	$('.radio_checkboxes input[type="radio"]').change(function () {
		$('.step3_block').removeClass('active');
		$('.footer_controls a').removeClass('active');
		switch ($(this).data('check')) {
			case 'comfort':
				coef = 0.6;
				$('.step3_block:eq(0)').addClass('active');
				$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[0]); });
				$('.compleks_input_doors').data("price", $('.compleks_input_doors').data('prices').split(',')[0] * current_doors);
				$('.footer_controls a:eq(0)').addClass('active');
				break;
			case 'premium':
				coef = 0.8;
				$('.step3_block:eq(1)').addClass('active');
				$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[1]); });
				$('.compleks_input_doors').data("price", $('.compleks_input_doors').data('prices').split(',')[1] * current_doors);
				$('.footer_controls a:eq(1)').addClass('active');
				break;
			case 'extra':
				coef = 1;
				$('.step3_block:eq(2)').addClass('active');
				$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[2]); });
				$('.compleks_input_doors').data("price", $('.compleks_input_doors').data('prices').split(',')[2] * current_doors);
				$('.footer_controls a:eq(2)').addClass('active');
				break;
		}
	});
	$('.step3_block').click(function () {
		var index = $(this).index();
		$('.step3_block').removeClass('active');
		$(this).addClass('active');
		$('.radio_checkboxes input[type="radio"]').prop('checked', false);
		$('.footer_controls a').removeClass('active');
		switch (index) {
			case 0:
				coef = 0.6;
				$('input[type="radio"][data-check="comfort"]').prop('checked', true);
				$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[0]); });
				$('.compleks_input_doors').data("price", $('.compleks_input_doors').data('prices').split(',')[0] * current_doors);
				$('.footer_controls a:eq(0)').addClass('active');
				break;
			case 1:
				coef = 0.8;
				$('input[type="radio"][data-check="premium"]').prop('checked', true);
				$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[1]); });
				$('.compleks_input_doors').data("price", $('.compleks_input_doors').data('prices').split(',')[1] * current_doors);
				$('.footer_controls a:eq(1)').addClass('active');
				break;
			case 2: coef = 1;
				$('input[type="radio"][data-check="extra"]').prop('checked', true);
				$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[2]); });
				$('.compleks_input_doors').data("price", $('.compleks_input_doors').data('prices').split(',')[2] * current_doors);
				$('.footer_controls a:eq(2)').addClass('active');
				break;
		}
	});


	$('.footer_controls a').click(function () {
		var index = $(this).index();
		$('.footer_controls a').removeClass('active');
		$(this).addClass('active');
		$('.radio_checkboxes input[type="radio"]').prop('checked', false);
		$('.step3_block').removeClass('active');
		switch (index) {
			case 0:
				coef = 0.6;
				$('.step3_block:eq(0)').addClass('active');
				$('input[type="radio"][data-check="comfort"]').prop('checked', true);
				$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[0]); });
				$('.compleks_input_doors').data("price", $('.compleks_input_doors').data('prices').split(',')[0] * current_doors);
				break;
			case 1:
				coef = 0.8;
				$('.step3_block:eq(1)').addClass('active');
				$('input[type="radio"][data-check="premium"]').prop('checked', true);
				$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[1]); });
				$('.compleks_input_doors').data("price", $('.compleks_input_doors').data('prices').split(',')[1] * current_doors);
				break;
			case 2: coef = 1;
				$('.step3_block:eq(2)').addClass('active');
				$('input[type="radio"][data-check="extra"]').prop('checked', true);
				$('.compleks_input').each(function () { $(this).data("price", $(this).data('prices').split(',')[2]); });
				$('.compleks_input_doors').data("price", $('.compleks_input_doors').data('prices').split(',')[2] * current_doors);
				break;
		}
		return false;
	});


	function calculatePrice() {
		var final_price = 0;
		var final_price_old = 0;

		if (is_compleks) {
			$('.old_price_bottom').css('display', 'block');
			final_price = parseInt($('#complex').data('price')) * coef + dop_prices;


			var temp_prices_old = 0;
			$('.compleks_input:checked').each(function () {

				temp_prices_old = temp_prices_old + parseInt($(this).data('price'));
			});
			final_price_old = temp_prices_old + dop_prices;
			$('#old_price').html(final_price_old);
		}
		else {
			$('.old_price_bottom').css('display', 'none');
			var temp_prices = 0;
			$('.compleks_input:checked').each(function () {

				temp_prices = temp_prices + parseInt($(this).data('price'));
			});
			final_price = temp_prices + dop_prices;
		}
		if (final_price < 10000) {
			final_price = final_price + '';
			final_price = final_price.charAt(0) + " " + final_price.substr(1)
			$('#full_price').html(final_price);
			$('#bottom_price').html(final_price);
		}
		if (final_price > 9999) {
			final_price = final_price + '';
			final_price = final_price.charAt(0) + final_price.charAt(1) + " " + final_price.substr(2)
			$('#full_price').html(final_price);
			$('#bottom_price').html(final_price);
		}

	}

	function calculatePercents() {
		var final_percents = 0;
		if (is_compleks) {
			final_percents = parseInt($('#complex').data('percents')) * coef + dop_percents;
		}
		else {
			var temp_percents = 0;
			$('.compleks_input:checked').each(function () {
				temp_percents = temp_percents + parseInt($(this).data('percent'));
			});
			final_percents = temp_percents * coef + dop_percents * coef;
		}
		$('.statusbar span').css('width', final_percents + '%');
		$('#percents').html(final_percents);
	}

	setInterval(function () {
		calculatePrice();
		calculatePercents();
	}, 500);
	if ($(window).width() > 991) {
		$('.calc_status .ask').click(function () {
			$(this).toggleClass('open');
		});
	}
	$('.show_materials').click(function () {
		$(this).toggleClass('open');
		$('.materials_table').toggleClass('open');
		return false;
	});

	if ($(window).width() < 992) {
		$('.checkbox .ask').click(function (e) {
			e.stopPropagation();
			return false;
		});
	}
	$('.calculator_text + .link').click(function () {
		$(this).fadeOut(0);
		$('.calculator_text').addClass('open');
	});
});
$('.inner_step').fadeIn();
$('.main_step').addClass('opened');
$('.calc_wrapper').addClass('opened');
$('.footer_controls a:first-child').addClass('active');




// let matrialsOfPaths = window.allCars[BRAND][MODEL][TARIF]["door"];
function renderMaterialTable(){
	let BRAND = 'Audi';
	let MODEL = 'A1';
	let TARIF = 'extra';
	let matrialsOfPaths = {};
	let paths = ["door","floor"];
	for( path of paths){
		if(path == "complex"){
			matrialsOfPaths = window.allCars[BRAND][MODEL][TARIF];
		} else {
			Object.assign(matrialsOfPaths, {[path]: window.allCars[BRAND][MODEL][TARIF][path]})
		
		
		}
	}
	
	// console.log(matrials[BRAND][MODEL][TARIF]);
	
	let totalPrice = 0;
	function getTotalPrice(){
		return totalPrice;
	}
	function renderTR(matrials, calcTotalPrice) {
		let tr;
		for(matrial in matrials){
			let price = parseInt(matrials[matrial].qty) * parseInt(matrials[matrial].catalogItem.price);
			if(calcTotalPrice){
				totalPrice += price;
			}
			tr += `<tr>
			<td>${matrial}</td>
			<td>${matrials[matrial].qty} шт</td>
			<td>${price} ₽</td>
		</tr>`
		}
	
		return tr;
	}
	
	function renderBlockTrs(matrials) {
		let arr = [];
		let trs ='';
		for(materials in matrialsOfPaths){
			let title ='';
			switch (materials){
				case "door":
					title = "Двери";
					break;
				case "floor":
					title = "Пол";
					break;
				case "roof":
					title = "Крыша";
					break;
				case "trunk":
					title = "Багажник";
					break;
				case "аrcs":
					title = "Арки";
					break;
				case "hood":
					title = "Капот";
					break;
				case "shelf":
					title = "Торпеда";
					break;
			}
				
			let trBefore = `<tr class="title"><td colspan="2">${title}</td><td>5 044 ₽</td></tr>`;
			let trAfter = `<tr><td class="line"></td><td></td><td></td></tr>`;
		
			trs += trBefore;
			trs += renderTR(matrialsOfPaths[materials]);
			trs += trAfter;
			arr.push(materials);
		}
		return trs;
	}
	
	function renderBlockAllMaterials(matrialsOfPaths) {
		
		let trs;
		for(materials in matrialsOfPaths){
			trs += renderTR(matrialsOfPaths[materials], true);
		}
		
		let trBefore = `<tr class="title"><td colspan="2">Всего материалов</td><td><span>${getTotalPrice()}</span> ₽</td></tr>`;
		let trAfter = `<tr><td class="line"></td><td></td><td></td></tr>`;
		let tr = [trBefore, trs, trAfter];
		return tr;
	
	}
	
	$('.materials_table tbody').html('');
	$('.materials_table tbody').html(renderBlockAllMaterials(matrialsOfPaths));
	$('.materials_table tbody').append(renderBlockTrs(matrialsOfPaths));
	
	$('#materialsTotalPrice').text(getTotalPrice());
}


renderMaterialTable();