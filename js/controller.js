angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.searchInput = '';
	vm.people = [
		{
			name: 'Lorem Ipsum',
			img: '',
			language: '',
			github: ''
		}
	];
});