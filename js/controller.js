angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.searchInput = '';
	vm.people = [
		{
			name: 'John Doe',
			img: 'https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg',
			tags: [
				'Javascript', 'Html', 'CSS'
			],
			github: 'johndoe12345',
                              email: 'johndoe@johndoe.com',
                              phone: '555-555-5555',
                              distance: '50 miles',
		},
              
		{
			name: 'Justin Wu',
			img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg',
			tags: [
				'Html', 'CSS'
			],

			github: 'bsmith123123',
                              email: 'bsmith12345@gmail.com',
                              phone: '555-555-5555',
                              distance: '11 miles',

			github: '',
                            email: '',
                              phone: '',
                              city: '',

		},
              
              {
			name: 'Joseph Stone',
			img: 'http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg',
			tags: [
				'Ruby', 'Html', 'C++" 
			],
			github: 'jjstone111222',
                              email: 'jjstone111222@hotmail.com',
                              phone: '555-555-5555',
                              distance: '9 miles',
		},
              
              {
			name: 'Stephanie Blossom',
			img: 'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg',
			tags: [
				'Javascript', 'JQuery', 
			],
			github: '',
                              email: '',
                              phone: '555-555-5555',
                              distance: '3 miles',
		},
              
              {
			name: 'Jonah Smith',
			img: 'http://www.morganstanley.com/assets/images/people/tiles/adam-parker-large.jpg',
			tags: [
				'AngularJS', 'Html', 'CSS', "Frameworks"
			],
			github: '',
                              email: '',
                              phone: '555-555-5555',
                              distance: '18 miles',
		},
              {
			name: 'George J. Blake',
			img: 'http://bestpetvacuumhub.com/wp-content/uploads/2015/05/Sacca_profile_400x400.jpg',
			tags: [
				'C', 'Html', 'CSS', 'Perl'
			],
			github: '',
                              email: '',
                              phone: '555-555-5555',
                              distance: '30 miles',
		},
              
              {
			name: 'Benjamin Arnold',
			img: 'https://cap.stanford.edu/profiles/viewImage?profileId=41457&type=square',
			tags: [
				'Html', 'CSS'
			],
			github: 'BAcodeweb01010',
                              email: 'ben@benejaminarnold.net',
                              phone: '555-555-5555',
                              distance: '20 miles',
		},
              {
			name: 'Lauren Cooper',
			img: 'https://static.licdn.com/scds/common/u/images/apps/plato/home/photo_profile_headshot_200x200_v2.jpg',
			tags: [
				'APIs', 'Mobile', 'Swift'
			],
			github: 'Lcooperrr',
                              email: 'lauren.cooper@gmail.com',
                              phone: '555-555-5555',
                              distance: '7 miles',
		},
              
              {
			name: 'James Francisco Key',
			img: 'http://www.beatpennystocks.com/wp-content/uploads/2013/06/profile_face_small_normal.jpg',
			tags: [
				'SDKs', 'Android', 'Mobile'
			],
			github: 'lockandkey51',
                              email: 'james.key@student.owsd.us',
                              phone: '555-555-5555',
                              distance: '6 miles',
		},
              

              
	];
});