export interface Category{
    name: string
    imageSrc: string
    description: string
}

export interface SpyroClass{
    name: string
    imageSrc: string
    category: string
    duration: number
    instructor: string
    noOfClasses: number
    difficulty: string
    noOfStudents: number
}

export interface InstructorType{
    name: string
    imageSrc: string
    role: string
}