export interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
    category: 'breakfast' | 'lunch' | 'dinner' | 'coffee';
    image: string;
    tags?: string[];
    isChefSpecial?: boolean;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    rating: number;
    text: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    description: string;
}

export interface GalleryItem {
    id: string;
    image: string;
    title: string;
    category: string;
}

export const MENU_ITEMS: MenuItem[] = [
    {
        id: 'crispy-chicken',
        name: 'Signature Crispy Chicken',
        price: 24.00,
        description: 'Herb-crusted crispy chicken breast served with seasonal microgreens, thin strips of red beet, and a rich balsamic reduction.',
        category: 'dinner',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxiIAXE3ftLqiOWUPBSSGhIUujoc4EozZWIHZLqhnlP6c1sa99pjMYYuUq3v3lpbjmVu1ArMjR-GkxQ8bt9AP7Ekcw_nuJmgU8v4j42OReMODeSAQB88Th0TeUKAKjU7bnSR3dTjrDvyE1SIMzc3rfwYIeZFSm_76rEkc7slDts_ao8pQ0L9AUHmXpDTZlOHi5ltxRx8G_qOv1Wrl-Mt1ot10H9PiKpQb20uwpJMNG2gdEG_zfJ5nvNP-cv0hcCsXEr1R2D3fyDzTa',
        tags: ['Signature', 'Crispy'],
        isChefSpecial: true
    },
    {
        id: 'grilled-medallions',
        name: 'Grilled Herb Medallions',
        price: 28.00,
        description: 'Succulent golden-brown chicken medallions resting in a pool of velvety, creamy herb sauce with fresh garden broccoli and steamed asparagus.',
        category: 'lunch',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuBlNBb_8p4rsqqdG9xpsC3LpDiRwByH4C4JGyQzdGQ5wsK_2FMahWTc6ZQfuujBQO6nZRKzTycNM0CuMNhGR4uIyZfqVCOZH2nD2Xkca4W6ngLNm7v870vDkNpp7lN7ss9wneT791AEB28Un3fm-uYGLt7e4YbvxTlX7CsY5ftfvVnKs-_gM_Q1gZR5GBi9rDjNyDam06fvWzTS9BF6XQmN1UeJhQWOOCdL9vRj7cYd-HOeQ_KOaM8hieL2W3S-AOiPnsKCUX18vs',
        tags: ['Healthy', 'Juicy']
    },
    {
        id: 'flamin-latte',
        name: "Flamin' Latte Art",
        price: 12.00,
        description: 'Our specialty flamed latte, roasted to order. Baristas ignite cinnamon and citrus elements table-side for a rich caramelized aroma.',
        category: 'coffee',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozU83DxfGt3P1E3HbcQjxEOnllXQ_DQmhDn1fv9mv8C_TJnoexNRtS0fXcCyRYC3SVlp40GD02U3tx8kciWhG18DwnLJdlpBsONRDmoIiHyXAmtkcdsVgxVa_KurmPBMPBL7skf5sqnBlvrS-SW8XMg3wHJ8vEih_UyfD6-8agmDL1uP6WFUxDUxuUufa1hXul4Jv4tt5SJ7P2DMMR5CWoDYxBnqKsvBOr4zej0TJ7IbEwXvVktFh_SxkiPuM7NENuoihgwLFpqof',
        tags: ['Interactive', 'Showstopper'],
        isChefSpecial: true
    },
    {
        id: 'chocolate-gateau',
        name: 'Artisan Chocolate Gateau',
        price: 14.00,
        description: 'Decadent chocolate dessert styled with gold details, fresh handpicked woodland berries, and a dust of cocoa.',
        category: 'breakfast',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4tzBB8Mt45g2dAnD4tl1Bi3sLCx0iZX1qM-QKaUboG2C3JG6pPZT1ulU_TbCWD8mwZWE2hf9uyGcIvWad9nRyl3vFamklRcpHj7ZDU_-4TZTh6ARiaGemqS81Qjm7kWHzTxQIc9nZe68-DT7Fkaz2fvpS9impOTx12M91DRjMWlp4eu7AFbEXjQmhuFStbhcgI6FU-gMybe9i68iCzXzv70EYs6Nd6IcnTna3drSimeUasAF7udtVz6hL72A2b5aYEN1E7SQnhZBU',
        tags: ['Sweet', 'Premium']
    },
    {
        id: 'roasted-salad',
        name: 'Vibrant Roasted Salad',
        price: 16.00,
        description: 'Oven-roasted root vegetables layered with local organic greens, toasted pine nuts, and our house artisan herb vinaigrette.',
        category: 'lunch',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlANoozqxArb9lDUtBdJZQstDUmEqn4y1xl0_BqPhSqSz7rluQb-ngS5KsLSUguITUuNNzzkLvGUV_ZRYbXIlISrHxfWwTHwKazFmBwEKIL6Bn_dtIPLWYAyM0luT4jzZowNkW72VwkDKiCvgyuIRjrdEys7Qprjw1DTqJSZ8ForFr8AQaeLvE5zfnPMh3IfLg_YH7nxrnsDPIW_b-k1pGPuPoJGUAg9kLtBnYIiuOkPiwNqxZOeNqa3PpgINCRCQIuSkwA1KDIfpd',
        tags: ['Vegan', 'Fresh']
    },
    {
        id: 'swan-latte',
        name: 'Classic Swan Latte',
        price: 6.50,
        description: 'Double-shot of locally sourced Nepali specialty coffee beans finished with velvety microfoam poured in elegant swan patterns.',
        category: 'coffee',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozU83DxfGt3P1E3HbcQjxEOnllXQ_DQmhDn1fv9mv8C_TJnoexNRtS0fXcCyRYC3SVlp40GD02U3tx8kciWhG18DwnLJdlpBsONRDmoIiHyXAmtkcdsVgxVa_KurmPBMPBL7skf5sqnBlvrS-SW8XMg3wHJ8vEih_UyfD6-8agmDL1uP6WFUxDUxuUufa1hXul4Jv4tt5SJ7P2DMMR5CWoDYxBnqKsvBOr4zej0TJ7IbEwXvVktFh_SxkiPuM7NENuoihgwLFpqof',
        tags: ['Classic', 'Local Beans']
    }
];

export const COFFEE_MENU = [
    { name: 'Transit Espresso Roast', price: 4.50, desc: 'Rich, dark chocolate notes with a velvety smooth crema.' },
    { name: 'Nitrogen Cold Brew', price: 6.00, desc: '24-hour steep infused with nitrogen for a creamy, sweet head.' },
    { name: 'Smoked Cinnamon Latte', price: 7.50, desc: 'Signature espresso topped with torched organic cinnamon bark.' },
    { name: 'Manual V60 Pour Over', price: 5.50, desc: 'Our single-origin hand-poured coffee showcasing complex profiles.' }
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 'suraj',
        name: 'Suraj Thapa',
        role: 'Executive Chef',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_A6LAmJwYtaI1cquUeaWJ56G6E5jeHnx7OsnDfrsx1RVfqe-8aJQA2DTxyl-nS2gIo3HCSnPMgP134l2e7rSoHRqXk3DBGLLa2bT0TVKIJzCz2lQE9A7pqdwD-NCot1j1Pg9pU631PgccKZdKIoalrppM0W9uTZHJwZyCNNNjVmHQdBNnqel1Uf1vo9oaM-GZQj1W3X_-EGf2HKYAzKoh40JwWKg3n3jmvwjzE7ezq5MR4omkg8Mnb0Uqp15GJVfjwX6rCZug64p4',
        description: 'Suraj crafts custom menus blending Himalayan herbs with global gastronomy, resulting in highly visual and flavorful masterpieces.'
    },
    {
        id: 'anmol',
        name: 'Anmol Gurung',
        role: 'Master Barista',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIu8M9qB_7xgjXMsqD9KuyrTvc6t8ZLyHa5gt0R5_zXiF6SimPisA2g6W9mwxbHP466PnvjR9vC9IHXTbvhmmNxNyu-u38kmdLgQepixct3AWSfuBOTIXw0THvu0R2fbK8tU-8DN3cAYOlNcMf0l8Hq3ANu6xy3fQIrJ2i_KmP7yD1Jg1VBnEvkT0BZI62WZdy7GqCuxh49D_-8AMG86AJALcGxOWA5erS7hfGkKEbr0pUoL7PPTBlHCaGg52_oBkqtT1CHKb9ip2V',
        description: 'Anmol heads the Transit Barista Academy, championing high-altitude premium organic beans and innovative theatrical service.'
    },
    {
        id: 'priya',
        name: 'Priya Rai',
        role: 'Guest Relations Manager',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_A6LAmJwYtaI1cquUeaWJ56G6E5jeHnx7OsnDfrsx1RVfqe-8aJQA2DTxyl-nS2gIo3HCSnPMgP134l2e7rSoHRqXk3DBGLLa2bT0TVKIJzCz2lQE9A7pqdwD-NCot1j1Pg9pU631PgccKZdKIoalrppM0W9uTZHJwZyCNNNjVmHQdBNnqel1Uf1vo9oaM-GZQj1W3X_-EGf2HKYAzKoh40JwWKg3n3jmvwjzE7ezq5MR4omkg8Mnb0Uqp15GJVfjwX6rCZug64p4',
        description: 'With a focus on curated hospitality, Priya guarantees every birthday celebration and corporate meeting at Transit runs flawlessly.'
    }
];

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: 'dessert-1',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4tzBB8Mt45g2dAnD4tl1Bi3sLCx0iZX1qM-QKaUboG2C3JG6pPZT1ulU_TbCWD8mwZWE2hf9uyGcIvWad9nRyl3vFamklRcpHj7ZDU_-4TZTh6ARiaGemqS81Qjm7kWHzTxQIc9nZe68-DT7Fkaz2fvpS9impOTx12M91DRjMWlp4eu7AFbEXjQmhuFStbhcgI6FU-gMybe9i68iCzXzv70EYs6Nd6IcnTna3drSimeUasAF7udtVz6hL72A2b5aYEN1E7SQnhZBU',
        title: 'Gourmet Gateau with Berries',
        category: 'Dessert'
    },
    {
        id: 'coffee-swan',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozU83DxfGt3P1E3HbcQjxEOnllXQ_DQmhDn1fv9mv8C_TJnoexNRtS0fXcCyRYC3SVlp40GD02U3tx8kciWhG18DwnLJdlpBsONRDmoIiHyXAmtkcdsVgxVa_KurmPBMPBL7skf5sqnBlvrS-SW8XMg3wHJ8vEih_UyfD6-8agmDL1uP6WFUxDUxuUufa1hXul4Jv4tt5SJ7P2DMMR5CWoDYxBnqKsvBOr4zej0TJ7IbEwXvVktFh_SxkiPuM7NENuoihgwLFpqof',
        title: 'Swan Microfoam Artistry',
        category: 'Specialty Coffee'
    },
    {
        id: 'salad-vibrant',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlANoozqxArb9lDUtBdJZQstDUmEqn4y1xl0_BqPhSqSz7rluQb-ngS5KsLSUguITUuNNzzkLvGUV_ZRYbXIlISrHxfWwTHwKazFmBwEKIL6Bn_dtIPLWYAyM0luT4jzZowNkW72VwkDKiCvgyuIRjrdEys7Qprjw1DTqJSZ8ForFr8AQaeLvE5zfnPMh3IfLg_YH7nxrnsDPIW_b-k1pGPuPoJGUAg9kLtBnYIiuOkPiwNqxZOeNqa3PpgINCRCQIuSkwA1KDIfpd',
        title: 'Artisan Garden Medley',
        category: 'Lunch'
    },
    {
        id: 'interior-space',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNh3b0GUp5bt3nqXyj-wERC7TX7RN8WB6yOsXr7Lo8dMt7oINFP0r-womQx04I9DxmzMi5qJ5m8HYhfeTK4JjLa1ITsgq_ZiA-QZFCMywez4ryzWMOS83CWW4ybWvkY2pDEdRwYdQnwgjktCRHvr5d3myRpP2DvSFI18daFgz19rvJm_FWTK8v9635T1_j9I8VoPSKfr3UPJInI-9l-ZAWw2Z2_8B6D_KBZsXAVG_2thwON1WUnWv0cUlgOyTMUD1jMTGnjHoqQri_',
        title: 'Elegant Dining Lounge',
        category: 'Interior'
    },
    {
        id: 'barista-lit',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozU83DxfGt3P1E3HbcQjxEOnllXQ_DQmhDn1fv9mv8C_TJnoexNRtS0fXcCyRYC3SVlp40GD02U3tx8kciWhG18DwnLJdlpBsONRDmoIiHyXAmtkcdsVgxVa_KurmPBMPBL7skf5sqnBlvrS-SW8XMg3wHJ8vEih_UyfD6-8agmDL1uP6WFUxDUxuUufa1hXul4Jv4tt5SJ7P2DMMR5CWoDYxBnqKsvBOr4zej0TJ7IbEwXvVktFh_SxkiPuM7NENuoihgwLFpqof',
        title: 'Barista Theatrical Pour',
        category: 'Experience'
    },
    {
        id: 'chef-plating-action',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNMBpCobdLUPcru0XzFcgIADAYePGM1ZYyNFuxy6w1nV5xMVb0Q94pCPNpUEFxcrqqsPd0jViHo-vZ19WGa6gjcw45owfqK1chW2X3SELLWHGFM_BAAYkuXM5ptsKaqbuzOg8KZgpP9gx1-FjyyKfGRqrq1g0Zzg9xUxgbc34Ll62QAcTlLj6knLP2SL-Sj4p1_s8AgcnyDU2YZlEm0Il4bE4yE0LMVt0Fu5x89YnIoM-HTRcc-LbDjPyyXIWFkP0zmCuL6W1NdR8L',
        title: 'Precision Herb Plating',
        category: 'Kitchen'
    },
    {
        id: 'birthday-balloon-group',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIu8M9qB_7xgjXMsqD9KuyrTvc6t8ZLyHa5gt0R5_zXiF6SimPisA2g6W9mwxbHP466PnvjR9vC9IHXTbvhmmNxNyu-u38kmdLgQepixct3AWSfuBOTIXw0THvu0R2fbK8tU-8DN3cAYOlNcMf0l8Hq3ANu6xy3fQIrJ2i_KmP7yD1Jg1VBnEvkT0BZI62WZdy7GqCuxh49D_-8AMG86AJALcGxOWA5erS7hfGkKEbr0pUoL7PPTBlHCaGg52_oBkqtT1CHKb9ip2V',
        title: 'Curated Birthday Gatherings',
        category: 'Celebrations'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Rajesh Shrestha',
        role: 'Local Food Critic & Regular Guest',
        rating: 5,
        text: 'Transit Restaurant has become our go-to for family dinners. The ambiance is elegant yet comfortable, and the crispy chicken is absolutely world-class. Truly an experience beyond expectations.'
    },
    {
        id: 't2',
        name: 'Sarah Jenkins',
        role: 'Traveler & Coffee Enthusiast',
        rating: 5,
        text: 'Their Flamin’ Latte is not just a drink, it’s an interactive performance. The high-altitude organic coffee from Nepal is outstandingly balanced.'
    }
];