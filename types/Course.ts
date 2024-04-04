export default interface Course {
    school: string | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    order?: number;
}
