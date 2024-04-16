export function formatLanguageLevelLabel(level: number) {
    switch (level) {
        case 0:
            return 'A1';
        case 1:
            return 'A2';
        case 2:
            return 'B1';
        case 3:
            return 'B2';
        case 4:
            return 'C1';
        case 5:
            return 'C2';
        case 6:
            return 'Working knowledge';
        case 7:
            return 'Good working knowledge';
        case 8:
            return 'Very good command';
        case 9:
            return 'Highly proficient';
        case 10:
            return 'Native speaker';
    }
}


export function formatSkillLevelLabel(level: number) {
    return level === 0 ? 'Novice' : level === 1 ? 'Beginner' : level === 2 ? 'Skillfull' : level === 3 ? 'Experienced' : 'Expert'
}