export default interface Education {
    school: string | null;
    degree: string | null;
    startDate: Date | null;
    endDate: Date | null;
    city: string | null;
    description: string | null;
    order?: number;
}
