loadform();
function loadform() {
	var servicesContent = new Vue({
		el: '#mainformid',
		data: {
			inwarddate: '',
			panchayatname: '',
			applicantname: '',
			mobileno: '',
			applicanttype: '',
			accoutno: '',
			serveno: '',
			area: '',
			adhar: '',
			bankaccountno: '',
			bankname: '',
			efcccode: ''
		}
	});
}
function printDiv(divId) 
{  
	var divContents = document.getElementById(divId).innerHTML;  
	var printWindow = window.open('', '', 'height=200,width=400');  
	printWindow.document.write('<html><head><title>Print DIV Content</title>');  
	printWindow.document.write('</head><body >');  
	printWindow.document.write(divContents);  
	printWindow.document.write('</body></html>');  
	printWindow.document.close();  
	printWindow.print();  
}  