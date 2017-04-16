(function(jQuery){
	// Функции без создания коллекции
	jQuery.extend({
		bootstrapAddIntoCart: function(path, shop_item_id, count){
			$.clientRequest({
				path: path + '?add=' + shop_item_id + '&count=' + count,
				'callBack': $.bootstrapAddIntoCartCallback,
				context: $('.little-cart')
			});
			return false;
		},
		bootstrapAddIntoCartCallback: function(data, status, jqXHR)
		{
			$.loadingScreen('hide');
			jQuery(this).html(data);
		},
		subscribeMaillist: function(path, maillist_id, type){
			$.clientRequest({
				path: path + '?maillist_id=' + maillist_id + '&type=' + type,
				'callBack': $.subscribeMaillistCallback,
				context: $('#subscribed_' + maillist_id)
			});
			return false;
		},
		subscribeMaillistCallback: function(data, status, jqXHR)
		{
			$.loadingScreen('hide');
			jQuery(this).removeClass('hidden').next().hide();
		},
		oneStepCheckout: function(path, shop_item_id, count)
		{
			$("div#oneStepCheckout").remove();

			$.clientRequest({
				path: path + '?oneStepCheckout&showDialog&shop_item_id=' + shop_item_id + '&count=' + count,
				'callBack': $.oneStepCheckoutCallback,
				context: ''
			});
			return false;
		},
		oneStepCheckoutCallback: function(data, status, jqXHR)
		{
			$.loadingScreen('hide');
			$("body").append(data.html);
			$("#oneStepCheckout").modal("show");
		},
		getOnestepDeliveryList: function(path, shop_item_id, jForm)
		{
			var shop_country_id = jForm.find("#shop_country_id").val(),
				shop_country_location_id = jForm.find("#shop_country_location_id").val(),
				shop_country_location_city_id = jForm.find("#shop_country_location_city_id").val(),
				shop_country_location_city_area_id = jForm.find("#shop_country_location_city_area_id").val();

			$.clientRequest({
				path: path + '?oneStepCheckout&showDelivery&shop_country_id=' + shop_country_id + '&shop_country_location_id=' + shop_country_location_id + '&shop_country_location_city_id=' + shop_country_location_city_id + '&shop_country_location_city_area_id=' + shop_country_location_city_area_id + '&shop_item_id=' + shop_item_id,
				'callBack': $.getOnestepDeliveryListCallback,
				context: jForm.find("#shop_delivery_condition_id")
			});
		},
		getOnestepDeliveryListCallback: function(data, status, jqXHR)
		{
			$.loadingScreen('hide');
			$("#shop_delivery_condition_id").empty();

			$.each(data.delivery, function(key, object) {
				$('#shop_delivery_condition_id').append('<option value=' + object.shop_delivery_condition_id + '>' + object.name + '</option>');
			});
		},
		getOnestepPaymentSystemList: function(path, jForm)
		{
			var shop_delivery_condition_id = jForm.find("#shop_delivery_condition_id").val();

			$.clientRequest({
				path: path + '?oneStepCheckout&showPaymentSystem&shop_delivery_condition_id=' + shop_delivery_condition_id,
				'callBack': $.getOnestepPaymentSystemListCallback,
				context: jForm.find("#shop_payment_system_id")
			});
		},
		getOnestepPaymentSystemListCallback: function(data, status, jqXHR)
		{
			$.loadingScreen('hide');
			$("#shop_payment_system_id").empty();
			$.each(data.payment_systems, function(key, object) {
				$('#shop_payment_system_id').append('<option value=' + object.id + '>' + object.name + '</option>');
			});
		},
		changePrice: function(object)
		{
			var jOption = $(object).find('option:selected'),
				id = jOption.val(),
				price = jOption.data('price');

			// Подмена для корзины
			$('button#cart').data('item-id', id);

			// Подмена для быстрого заказа
			$('button#fast_order').data('item-id', id).data('target', '#oneStepCheckout' + id);

			// Подмена для цены
			$('.item-price').text(price);
		},
	});
})(jQuery);