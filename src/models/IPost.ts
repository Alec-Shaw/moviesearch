export interface IPost {
    poster_path: string;
    overview?: string;
    title: string;
    id: number;
}

export interface MovieCardProps {
    poster_path: string;
    overview?: string;
    title: string;
    id: number;
}

export interface IMovie {
    loading: boolean
    error: null | string
    data: []
    results: []
}

export interface DMovie {
    loading: boolean
    error: null | string
    data: []
    overview: []
    poster_path: any
    original_title: string
}


