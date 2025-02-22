
export interface MainCarouselData {
    id: number;
    imageUrl: any;
    tag: any;
    title: string;
    buttonLabel: string;
    buttonAction: () => void;
}

export interface ClassMemoriesData {
    id: number;
    imageUrl: any;
    title: string;
    buttonLabel: string;
    buttonAction: () => void;
}

export interface ExploreData {
    id: number;
    imageUrl: any;
    title: string;
}


export const exploreData: ExploreData[] = [
    {
        id: 1,
        imageUrl: require('../assets/images/HomeBuddy/explore-1.png'),
        title: 'The Brave Little Exp..'
    },
    {
        id: 2,
        imageUrl: require('../assets/images/HomeBuddy/explore-2.png'),
        title: 'Space'
    },
    {
        id: 3,
        imageUrl: require('../assets/images/HomeBuddy/explore-3.png'),
        title: 'Jungle Story'
    },
    {
        id: 4,
        imageUrl: require('../assets/images/HomeBuddy/explore-2.png'),
        title: 'Space'
    },
    {
        id: 5,
        imageUrl: require('../assets/images/HomeBuddy/explore-1.png'),
        title: 'The Brave Little Exp..'
    }
];

export const classMemories: ClassMemoriesData[] = [
    {
        id: 1,
        imageUrl: require('../assets/images/HomeBuddy/class-memories-1.png'),
        title: 'Water way of Transport',
        buttonLabel: 'Watch Video',
        buttonAction: () => alert('Watch Video Clicked')
    },
    {
        id: 2,
        imageUrl: require('../assets/images/HomeBuddy/class-memories-2.png'),
        title: 'Father’s Day Celebration',
        buttonLabel: 'See post',
        buttonAction: () => alert('See Post Clicked')
    },
    {
        id: 3,
        imageUrl: require('../assets/images/HomeBuddy/class-memories-1.png'),
        title: 'Water way of Transport',
        buttonLabel: 'Watch Video',
        buttonAction: () => alert('Watch Video Clicked')
    },
    {
        id: 4,
        imageUrl: require('../assets/images/HomeBuddy/class-memories-2.png'),
        title: 'Father’s Day Celebration',
        buttonLabel: 'See post',
        buttonAction: () => alert('See Post Clicked')
    },
    {
        id: 5,
        imageUrl: require('../assets/images/HomeBuddy/class-memories-1.png'),
        title: 'Water way of Transport',
        buttonLabel: 'Watch Video',
        buttonAction: () => alert('Watch Video Clicked')
    },
    {
        id: 6,
        imageUrl: require('../assets/images/HomeBuddy/class-memories-2.png'),
        title: 'Father’s Day Celebration',
        buttonLabel: 'See post',
        buttonAction: () => alert('See Post Clicked')
    },
    {
        id: 7,
        imageUrl: require('../assets/images/HomeBuddy/class-memories-1.png'),
        title: 'Water way of Transport',
        buttonLabel: 'Watch Video',
        buttonAction: () => alert('Watch Video Clicked')
    },
    {
        id: 8,
        imageUrl: require('../assets/images/HomeBuddy/class-memories-2.png'),
        title: 'Father’s Day Celebration',
        buttonLabel: 'See post',
        buttonAction: () => alert('See Post Clicked')
    },
    {
        id: 9,
        imageUrl: require('../assets/images/HomeBuddy/class-memories-1.png'),
        title: 'Water way of Transport',
        buttonLabel: 'Watch Video',
        buttonAction: () => alert('Watch Video Clicked')
    }
];

export const data: MainCarouselData[] = [
    {
        id: 1,
        imageUrl: require('../assets/images/HomeBuddy/main-corousel-banner.png'),
        title: 'The Teacher and Barber',
        tag: require('../assets/images/HomeBuddy/scientific-thinking.png'),
        buttonLabel: 'PLAY',
        buttonAction: () => alert('Play Button Clicked')
    },
    {
        id: 2,
        imageUrl: require('../assets/images/HomeBuddy/main-corousel-banner.png'),
        title: 'The Teacher and Barber',
        tag: require('../assets/images/HomeBuddy/scientific-thinking.png'),
        buttonLabel: 'PLAY',
        buttonAction: () => alert('Play Button Clicked')
    },
    {
        id: 3,
        imageUrl: require('../assets/images/HomeBuddy/main-corousel-banner.png'),
        title: 'The Teacher and Barber',
        tag: require('../assets/images/HomeBuddy/scientific-thinking.png'),
        buttonLabel: 'PLAY',
        buttonAction: () => alert('Play Button Clicked')
    },
    {
        id: 4,
        imageUrl: require('../assets/images/HomeBuddy/main-corousel-banner.png'),
        title: 'The Teacher and Barber',
        tag: require('../assets/images/HomeBuddy/scientific-thinking.png'),
        buttonLabel: 'PLAY',
        buttonAction: () => alert('Play Button Clicked')
    },
    {
        id: 5,
        imageUrl: require('../assets/images/HomeBuddy/main-corousel-banner.png'),
        title: 'The Teacher and Barber',
        tag: require('../assets/images/HomeBuddy/scientific-thinking.png'),
        buttonLabel: 'PLAY',
        buttonAction: () => alert('Play Button Clicked')
    }
];


export const contentData: MainCarouselData[] = [
    {
        id: 1,
        imageUrl: require('../assets/images/HomeBuddy/content-banner.png'),
        title: 'Mathematics',
        tag: require('../assets/images/HomeBuddy/math-tag.png'),
        buttonLabel: 'SEE',
        buttonAction: () => alert('SEE Button Clicked')
    },
    {
        id: 2,
        imageUrl: require('../assets/images/HomeBuddy/content-banner.png'),
        title: 'Mathematics',
        tag: require('../assets/images/HomeBuddy/math-tag.png'),
        buttonLabel: 'SEE',
        buttonAction: () => alert('SEE Button Clicked')
    },
    {
        id: 3,
        imageUrl: require('../assets/images/HomeBuddy/content-banner.png'),
        title: 'Mathematics',
        tag: require('../assets/images/HomeBuddy/math-tag.png'),
        buttonLabel: 'SEE',
        buttonAction: () => alert('SEE Button Clicked')
    },
    {
        id: 4,
        imageUrl: require('../assets/images/HomeBuddy/content-banner.png'),
        title: 'Mathematics',
        tag: require('../assets/images/HomeBuddy/math-tag.png'),
        buttonLabel: 'SEE',
        buttonAction: () => alert('SEE Button Clicked')
    },
    {
        id: 5,
        imageUrl: require('../assets/images/HomeBuddy/content-banner.png'),
        title: 'Mathematics',
        tag: require('../assets/images/HomeBuddy/math-tag.png'),
        buttonLabel: 'SEE',
        buttonAction: () => alert('SEE Button Clicked')
    }
];