export default interface Employement {
    jobTitle: string|null;
    employer: string|null;
    startDate: Date|null;
    endDate: Date|null;
    city: string|null;
    description: string|null;
    order?: number;
}
