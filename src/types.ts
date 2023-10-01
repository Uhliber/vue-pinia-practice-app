export type eventCategories =
    'sustainability' |
    'nature' |
    'animal welfare' |
    'housing' |
    'education' |
    'food' |
    'community';

export interface EventItem {
    id: number | string;
    category: eventCategories;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    organizer: string;
}

type TaskType = 'personal' | 'work' | 'miscellaneous'

export interface TodoItem {
    label: string
    type: TaskType
    isComplete: boolean
}