export function formatLanguageLevelLabel(level: number) {
    switch (+level) {
        case 0: return 'A1';
        case 1: return 'A2';
        case 2: return 'B1';
        case 3: return 'B2';
        case 4: return 'C1';
        case 5: return 'C2';
        case 6: return 'Working knowledge';
        case 7: return 'Good working knowledge';
        case 8: return 'Very good command';
        case 9: return 'Highly proficient';
        case 10: return 'Native speaker';
        default: return null;
    }
}


export function formatSkillLevelLabel(level: number) {
    switch (+level) {
        case 0: return 'Novice';
        case 1: return 'Beginner';
        case 2: return 'Skillfull';
        case 3: return 'Experienced';
        case 4: return 'Expert';
        default: return null;
    }
}
