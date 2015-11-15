//Resource: RevillWeb AngularJS in 30 minutes tutorial
//http://www.revillweb.com/tutorials/angularjs-in-30-minutes-angularjs-tutorial/ 
angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.searchInput = '';
	vm.hackathonInput = '';
	vm.hackathonList = [	
		{
			name: 'HackingEDU'
		},
		{
			name: 'TeenTechSF'
		},
		{
			name: 'MakeHacks'
		}
	];
	vm.people = [
		{
			name: 'John Doe',
			img: 'https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg',
			tags: [
				'Javascript', 'Html', 'CSS', 'Front End'
			],
			github: 'johndoe12345',
            email: 'johndoe@johndoe.com',
            phone: '555-555-5555',
            distance: 50,
            address: 'San Jose',
            hackathons: [
            	'HackingEDU', 'TeenTechSF'
            ]
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
         	distance: 11,
         	address: 'Sacramento',
         	hackathons: [
            	'MakeHacks', 'TeenTechSF'
            ]
		},
              
              {
			name: 'Joseph Stone',
			img: 'http://www.realtimearts.net/data/images/art/46/4640_profile_nilssonpolias.jpg',
			tags: [
				'Ruby', 'Rails', 'Javascript', 'Html', 'CSS', 'C++' 
			],
			github: 'jjstone111222',
            email: 'jjstone111222@hotmail.com',
            phone: '555-555-5555',
            distance: 9,
            address: 'Mountain View',
            hackathons: [
            	'HackingEDU'
            ]
		},
              
              {
			name: 'Stephanie Blossom',
			img: "http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg",
			tags: [
				'Javascript', 'JQuery', 
			],
			github: '',
          	email: '',
          	phone: '555-555-5555',
          	distance: 3,
          	address: 'Sunnyvale',
          	hackathons: [
            	'TeenTechSF'
            ]
		},
              
              {
			name: 'Jonah Smith',
			img: "http://www.morganstanley.com/assets/images/people/tiles/adam-parker-large.jpg",
			tags: [
				'AngularJS', 'Html', 'CSS', "Bootstrap"
			],
			github: '',
         	email: '',
         	phone: '555-555-5555',
          	distance: 18,
          	address: 'Cupertino',
          	hackathons: [
            	'HackingEDU', 'MakeHacks', 'TeenTechSF'
            ]
		},
              {
			name: 'George J. Blake',
			img: "http://bestpetvacuumhub.com/wp-content/uploads/2015/05/Sacca_profile_400x400.jpg",
			tags: [
				'C', 'Html', 'CSS', 'Perl'
			],
			github: '',
         	email: '',
          	phone: '555-555-5555',
          	distance: 30,
          	address: 'Roseville',
          	hackathons: [
            	'HackingEDU', 'MakeHacks', 'TeenTechSF'
            ]
		},
              
              {
			name: 'Benjamin Arnold',
			img: "https://cap.stanford.edu/profiles/viewImage?profileId=41457&type=square",
			tags: [
				'Html', 'CSS'
			],
			github: 'BAcodeweb01010',
          	email: 'ben@benejaminarnold.net',
          	phone: '555-555-5555',
          	distance: 20,
          	address: 'Oakland',
          	hackathons: [
            	'HackingEDU'
            ]
		},
              {
			name: 'Lauren Cooper',
			img: "https://static.licdn.com/scds/common/u/images/apps/plato/home/photo_profile_headshot_200x200_v2.jpg",
			tags: [
				'JSON', 'Java', 'Android', 'IOS', 'Swift'
			],
			github: 'Lcooperrr',
          	email: 'lauren.cooper@gmail.com',
          	phone: '555-555-5555',
          	distance: 7,
          	address: 'Elk Grove',
          	hackathons: [
            	'TeenTechSF'
            ]
		},
              
              {
			name: 'James Francisco Key',
			img: "http://www.beatpennystocks.com/wp-content/uploads/2013/06/profile_face_small_normal.jpg",
			tags: [
				'Phonegap', 'Html', 'CSS', 'Android', 'Mobile'
			],
			github: 'lockandkey51',
          	email: 'james.key@student.owsd.us',
         	phone: '555-555-5555',
          	distance: 6,
          	address: 'Plesanton',
          	hackathons: [
            	'MakeHacks', 'TeenTechSF'
            ]
		},
              

              
	];
});