import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    /* template: '<h2> Course List </h2>' */
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imagemUrl: '/assets/imagens/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 2, 2021'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imagemUrl: '/assets/imagens/http.png',
                price: 49.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4.0,
                releaseDate: 'November, 10, 2021'
            },
        ]
    }
}