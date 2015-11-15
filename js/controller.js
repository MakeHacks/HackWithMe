//Resource: RevillWeb AngularJS in 30 minutes tutorial
//http://www.revillweb.com/tutorials/angularjs-in-30-minutes-angularjs-tutorial/
angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.searchInput = '';
	vm.hackathonInput = '';
	vm.gridView = false;
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
			img: 'https://cap.stanford.edu/profiles/viewImage?profileId=19142&type=square',
			tags: [
				'Javascript', 'HTML', 'CSS'
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
				'HTML', 'CSS', 'AngularJS'
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
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RhLIFhh_5aeM0nsZNNtp6uVbMiOEAY7oGwI-BnZlM4OetErL',
			tags: [
				'Ruby', 'Rails', 'Javascript', 'C++'
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
			img: "http://www.morganstanley.com/assets/images/people/tiles/audrey-choi-large.jpg",
			tags: [
				'Javascript', 'JQuery', 'HTML'
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
				'AngularJS', 'HTML', 'CSS', "Bootstrap"
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
			name: 'George Blake',
			img: "http://bestpetvacuumhub.com/wp-content/uploads/2015/05/Sacca_profile_400x400.jpg",
			tags: [
				'C', 'HTML', 'CSS', 'Perl'
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
				'HTML', 'CSS', 'Bootstrap'
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
			name: 'James Key',
			img: "http://www.momochicago.org/wp-content/uploads/2013/05/Seb-profile-square_normal.jpg",
			tags: [
				'Phonegap', 'HTML', 'CSS', 'Android'
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
		              {
			name: 'Tom Tucker',
			img: "http://www.american.edu/uploads/profiles/large/nisbet_portrait_profile.jpg",
			tags: [
				'Phonegap', 'HTML', 'CSS', 'Android'
			],
			github: 'ttuck1242',
          	email: 'TTucker@aol.com',
         	phone: '555-555-5555',
          	distance: 16,
          	address: 'Walnut Creek',
          	hackathons: [
            	'MakeHacks', 'TeenTechSF', 'HackingEDU'
            ]
		},
		              {
			name: 'Raj Patel',
			img: "https://pbs.twimg.com/profile_images/1215190827/DSC_3900_400x400.jpg",
			tags: [
				'Python', 'Django', 'Html', 'Javascript'
			],
			github: 'rPatel2431231',
          	email: 'rajPatel2984@yahoo.com',
         	phone: '555-555-5555',
          	distance: 26,
          	address: 'Palo Alto',
          	hackathons: [
            	'TeenTechSF'
            ]
		},
		              {
			name: 'Cindy Lopez',
			img: "http://1.bp.blogspot.com/-WVNJpabEzRA/U7Vx019EwHI/AAAAAAAAA38/nft9gcYlnFs/s1600/Zulimar-headshot1.jpg",
			tags: [
				'Java', 'IOS', 'Swift', 'Android'
			],
			github: 'cind242',
          	email: 'cind242@gmail.com',
         	phone: '555-555-5555',
          	distance: 46,
          	address: 'Davis',
          	hackathons: [
            	'HackingEDU', 'TeenTechSF'
            ]
		},


	];
});
