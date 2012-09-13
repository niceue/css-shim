/* Nice表单增强：
 * 使IE支持“placeholder”和“autofocus”，并且给不支持:focus伪类的IE67添加class，给不支持属性选择器的IE6添加class
 * 可以通过设置ns的属性来添加命名空间
 */
;(function($){
	var ns = '', //Namespace
		ltIE8= window.ActiveXObject && $.browser.version<8,
		x = function(a, b) {return !!~ a.indexOf(b)},
		ck = function(s){return s in document.createElement('input')},
		b = {ph:ck('placeholder'),af:ck('autofocus')};
	if(!b.ph || !b.af){
		$('input,textarea').each(function(){
			var input = $(this),
				type = input.attr('type') || 'textarea',
				attrPh = input.attr('placeholder'),
				attrAf = input.attr('autofocus');
			if (attrPh && !b.ph) {
				input.attr('value', attrPh).addClass('placeholder').bind({
					focus: function() {if(input.val() === attrPh) input.val('').removeClass('placeholder');},
					blur:  function() {if(input.val() === '') input.val(attrPh).addClass('placeholder');}
				});
			}
			if((attrAf || attrAf==='') && !b.af)input.focus();
			if(ltIE8){
				if(x('text password textarea',type)){
					input.addClass(ns+'text').bind({
						focus: function() {input.addClass('focus');},
						blur:  function() {input.removeClass('focus');}
					});
				}else if(x('button reset submit',type)){
					input.addClass(ns+'button');
				}else{
					input.addClass(ns+type);
				}
			}
		});
	}
})(jQuery);