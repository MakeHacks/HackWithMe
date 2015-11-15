angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.searchInput = '';
	vm.people = [
		{
			name: 'Lorem Ipsum',
			img: '',
			tags: [
				'Javascript', 'Html', 'CSS'
			],
			github: ''
		},
		{
			name: 'Ipsum Dolor',
			img: '',
			tags: [
				'Html', 'CSS'
			],
			github: ''
		}
	];
});