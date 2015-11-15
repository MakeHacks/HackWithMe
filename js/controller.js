angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.searchInput = '';
	vm.people = [
		{
			name: 'Lorem Ipsum',
			img: 'https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg',
			tags: [
				'Javascript', 'Html', 'CSS'
			],
			github: ''
		},
		{
			name: 'Ipsum Dolor',
			img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
			tags: [
				'Html', 'CSS'
			],
			github: ''
		}
	];
});