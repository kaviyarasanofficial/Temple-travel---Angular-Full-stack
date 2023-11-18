import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { Temple } from 'src/app/temple.model';
import {UserDataService } from '../../Shared/usershared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  temples: Temple[] = [
    {
      "temple_name": "Ranganathaswamy Temple, Srirangam",
      "district": "Srirangam",
      "details": "Temple details for Ranganathaswamy Temple, Srirangam."
    },
    {
      "temple_name": "Andal Temple, Srivilliputtur",
      "district": "Srivilliputtur",
      "details": "Temple details for Andal Temple, Srivilliputtur."
    },
    {
      "temple_name": "Namagiri Thayar Sametha Narasimhaswamy perumal temple, Namakkal",
      "district": "Namakkal",
      "details": "Temple details for Namagiri Thayar Sametha Narasimhaswamy perumal temple, Namakkal."
    },
    {
      "temple_name": "Gunaseelam Prasana Venkatachalapathy Perumal Temple",
      "district": "Gunaseelam",
      "details": "Temple details for Gunaseelam Prasana Venkatachalapathy Perumal Temple."
    },
    {
      "temple_name": "Chakrapani Temple, Kumbakonam",
      "district": "Kumbakonam",
      "details": "Temple details for Chakrapani Temple, Kumbakonam."
    },
    {
      "temple_name": "Sarangapani temple, Kumbakonam",
      "district": "Kumbakonam",
      "details": "Temple details for Sarangapani temple, Kumbakonam."
    },
    {
      "temple_name": "Ulagalantha Perumal Temple, Kanchipuram",
      "district": "Kanchipuram",
      "details": "Temple details for Ulagalantha Perumal Temple, Kanchipuram."
    },
    {
      "temple_name": "Parthasarathy Temple, Triplicane",
      "district": "Triplicane",
      "details": "Temple details for Parthasarathy Temple, Triplicane."
    },
    {
      "temple_name": "Bhu Varaha Swamy temple",
      "district": "Unknown",
      "details": "Temple details for Bhu Varaha Swamy temple."
    },
    {
      "temple_name": "Adi Srinivasa perumal temple",
      "district": "Unknown",
      "details": "Temple details for Adi Srinivasa perumal temple."
    },
    {
      "temple_name": "Varadharaja Perumal Temple, Kanchipuram",
      "district": "Kanchipuram",
      "details": "Temple details for Varadharaja Perumal Temple, Kanchipuram."
    },
    {
      "temple_name": "Ashtabujakaram",
      "district": "Unknown",
      "details": "Temple details for Ashtabujakaram."
    },
    {
      "temple_name": "Adikesava Perumal Temple, Kanyakumari",
      "district": "Kanyakumari",
      "details": "Temple details for Adikesava Perumal Temple, Kanyakumari."
    },
    {
      "temple_name": "Pandava Thoothar Perumal Temple",
      "district": "Unknown",
      "details": "Temple details for Pandava Thoothar Perumal Temple."
    },
    {
      "temple_name": "Rajagopalaswamy Temple, Mannargudi",
      "district": "Mannargudi",
      "details": "Temple details for Rajagopalaswamy Temple, Mannargudi."
    },
    {
      "temple_name": "Ulagalantha Perumal Temple, Tirukoyilur",
      "district": "Tirukoyilur",
      "details": "Temple details for Ulagalantha Perumal Temple, Tirukoyilur."
    },
    {
      "temple_name": "Mudikondan Kothandaramar Temple",
      "district": "Unknown",
      "details": "Temple details for Mudikondan Kothandaramar Temple."
    },
    {
      "temple_name": "Thirupullabhoothangudi Temple",
      "district": "Unknown",
      "details": "Temple details for Thirupullabhoothangudi Temple."
    },
    {
      "temple_name": "Kola Valvill Ramar Temple, Tiruvelliyangudi",
      "district": "Tiruvelliyangudi",
      "details": "Temple details for Kola Valvill Ramar Temple, Tiruvelliyangudi."
    },
    {
      "temple_name": "Vijayaraghava Perumal temple",
      "district": "Unknown",
      "details": "Temple details for Vijayaraghava Perumal temple."
    }
  ];

  surveys: any[] = [];
  users: any[] = [];
  currentUser: any;
  userStatus!: string;

  constructor(private usersService: UsersService,private userDataService: UserDataService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((userData: any) => {
      this.users = userData.data;
    });

    this.usersService.getSurveys().subscribe((surveyData: any) => {
      this.surveys = surveyData;
      console.log(surveyData);
    });

    this.currentUser = this.userDataService.getUser();
    if (this.currentUser && this.currentUser.username) {
      console.log('User name is:', this.currentUser.username);
    } else {
      console.log('User is not logged in or username is undefined.');
    }

    {
      this.userStatus = this.userDataService.getUserStatus();
      console.log('User name is:', this.userStatus); // Get the user's status
    }
  }

 

  submitForm(formData: any) {
    // Call the postSurveyData method to post the form data
    this.postSurveyData(formData);
    console.log(formData)
  }

  postSurveyData(data: any) {
    this.usersService.postSurvey(data).subscribe((response: any) => {
      console.log('Post Survey Response:', response);
    });
  }

  displayUsers() {
    console.log('Users:');
    this.users.forEach((user) => {
      console.log(user);
    });
  }
}
