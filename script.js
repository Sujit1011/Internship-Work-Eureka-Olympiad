document.getElementById('profile1').addEventListener('click',function()
														   {
				
				document.querySelector('.profile1').style.display = 'flex';
				document.querySelector('.profile2').style.display = 'none';
				document.querySelector('.profile3').style.display = 'none';
			});
document.getElementById('profile2').addEventListener('click',function()
														   {
				
				document.querySelector('.profile1').style.display = 'none';
				document.querySelector('.profile2').style.display = 'flex';
				document.querySelector('.profile3').style.display = 'none';
			});
document.getElementById('profile3').addEventListener('click',function()
														   {
				
				document.querySelector('.profile1').style.display = 'none';
				document.querySelector('.profile2').style.display = 'none';
				document.querySelector('.profile3').style.display = 'flex';
			});