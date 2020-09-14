$('.formChoice').on('click','li',function(event){
	event.preventDefault();
	var elTab = $(this);
	$('li').removeClass('active');
	elTab.addClass('active');
	console.log(this);
	if(elTab.hasClass('pushTab')){
			$('.pullForm').addClass('hidden');
			$('.pushForm').removeClass('hidden');
			$('.HistoryForm').addClass('hidden');
		}
	else if(elTab.hasClass('pullTab')){
			$('.pushForm').addClass('hidden');
			$('.HistoryForm').addClass('hidden');
			$('.pullForm').removeClass('hidden');
		}
	
	else if(elTab.hasClass('HistoryTab')){
			$('.HistoryForm').removeClass('hidden');
			$('.pushForm').addClass('hidden');
			$('.pullForm').addClass('hidden');
		}
})
