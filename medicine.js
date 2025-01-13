const medicines = [
    {
        _id: "1",
        name: "Paracetamol",
        description: "Used to treat mild to moderate pain and reduce fever.",
        imageLink: "https://phabcart.imgix.net/cdn/scdn/images/uploads/m0459_web.jpg",
        price: 15,
        rating: 4.5,
        stock:30
    },
    {
        _id: "2",
        name: "Ibuprofen",
        description: "An anti-inflammatory drug used to reduce fever, pain, and inflammation.",
        imageLink: "https://www.ashcroftpharmacy.co.uk/uploads/images/products/large/ashcroft-pharmacy-ibuprofen-400mg-tablets-24-tablets-1722352606Ibuprofen-400mg-Tablets.jpg",
        price: 35,
        rating: 4.3,
        stock:25
    },
    {
        _id: "3",
        name: "Aspirin",
        description: "Used for pain relief, fever reduction, and to reduce inflammation.",
        imageLink: "https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets.jpg",
        price: 25,
        rating: 4.2,
        stock:35
    },
    {
        _id: "4",
        name: "Amoxicillin",
        description: "A penicillin-type antibiotic used to treat various infections.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYknUevTESwgs7Fp0Ixdj40MV2gZV5cnnlA&s",
        price: 50,
        rating: 4.6,
        stock:43
    },
    {
        _id: "5",
        name: "Cetirizine",
        description: "An antihistamine used to relieve allergy symptoms like sneezing and runny nose.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKO2LDgCw6xWrDRJuzSbcpQkxpXjZl-WmfYA&s",
        price: 20,
        rating: 4.4,
        stock:33
    },
    {
        _id: "6",
        name: "Loperamide",
        description: "Used to treat diarrhea by slowing down gut movement.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1zcqAcr9FMh4ko9bliM_kdVpIpbdv-P55w&s",
        price: 18,
        rating: 4.1,
        stock:54
    },
    {
        _id: "7",
        name: "Metformin",
        description: "A medication used to treat type 2 diabetes by controlling blood sugar levels.",
        imageLink: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2023/11/diabetes_metformin_GettyImages526612260_Header-1024x575.jpg",
        price: 120,
        rating: 4.7,
        stock:52
    },
    {
        _id: "8",
        name: "Losartan",
        description: "An antihypertensive used to treat high blood pressure and protect kidneys in diabetes.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYelZV985CxdTjtBZxn8DkPx8Wc-apAsvPw&s",
        price: 110,
        rating: 4.5,
        stock:23
    },
    {
        _id: "9",
        name: "Omeprazole",
        description: "Used to treat acid reflux, stomach ulcers, and GERD.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoU2YnQhwcp4T54WguU2FlwIEYUjvrT8QBaQ&s",
        price: 30,
        rating: 4.3,
        stock:74
    },
    {
        _id: "10",
        name: "Hydroxychloroquine",
        description: "Used to treat malaria and autoimmune diseases like lupus and rheumatoid arthritis.",
        imageLink: "https://pharmaceutical-journal.com/wp-content/uploads/2021/01/hydroxychloroquine-alamy-20-scaled.jpg",
        price: 60,
        rating: 4.2,
        stock:38
    },
    {
        _id: "11",
        name: "Doxycycline",
        description: "An antibiotic used to treat a variety of bacterial infections.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVj5LGXECR2XIZGKsBtaveMV-VqTji7V0Qg&s",
        price: 55,
        rating: 4.4,
        stock:42
    },
    {
        _id: "12",
        name: "Vitamin C",
        description: "A vitamin supplement to boost immune function and skin health.",
        imageLink: "https://5.imimg.com/data5/SELLER/Default/2024/1/380187518/PB/XT/UK/208131972/500mg-vitamin-c-chewable-tablets.jpeg",
        price: 20,
        rating: 4.6,
        stock:26
    },
    {
        _id: "13",
        name: "Folic Acid",
        description: "Used to treat or prevent folate deficiency and to support pregnancy.",
        imageLink: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/ndm/ndm01274/y/35.jpg",
        price: 15,
        rating: 4.5,
        stock:37
    },
    {
        _id: "14",
        name: "Levothyroxine",
        description: "Used to treat hypothyroidism by replacing the thyroid hormone.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCdyIqgbsUVc1J8TZtV58gzjqnz3zYr5sHw&s",
        price: 90,
        rating: 4.7,
        stock:63
    },
    {
        _id: "15",
        name: "Bromhexine",
        description: "Used to treat respiratory issues like cough and mucus congestion.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsV1nq4dUEaHsag3od36XHzNMcJQd_qqk1WA&s",
        price: 25,
        rating: 4.1,
        stock:34
    },
    {
        _id: "16",
        name: "Clindamycin",
        description: "An antibiotic used to treat a variety of bacterial infections, especially skin infections.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMRFIIWYRhjCIXzUbaztyulA-Q5Sj9Xsl9Q&s",
        price: 80,
        rating: 4.3,
        stock:32
    },
    {
        _id: "17",
        name: "Diphenhydramine",
        description: "An antihistamine used for allergy relief and as a sleep aid.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BYSYb1mnM_s2MKnFmuBMyj2aWeRjzWZoKw&s",
        price: 18,
        rating: 4.2,
        stock:37
    },
    {
        _id: "18",
        name: "Prednisolone",
        description: "A corticosteroid used to reduce inflammation in various conditions.",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmTQvUv5J_O9cIeGP11NOg3UJsiCGSoZlpA&s",
        price: 40,
        rating: 4.4,
        stock:34
    },
    {
        _id: "19",
        name: "Salbutamol",
        description: "A bronchodilator used to treat asthma and chronic obstructive pulmonary disease (COPD).",
        imageLink: "https://www.advacarepharma.com/static/ce1f4f083378e0f26e6473bbbc638332/salbutamol-syrup-box.png",
        price: 60,
        rating: 4.5,
        stock:36
    },
    {
        _id: "20",
        name: "Tramadol",
        description: "An opioid pain medication used to treat moderate to severe pain.",
        imageLink: "https://5.imimg.com/data5/SELLER/Default/2024/9/448163067/AZ/LC/OO/101405389/tramadol-hydrochloride-and-paracetamol-tablet.jpeg",
        price: 75,
        rating: 4.6,
        stock:63
    }
];

export default medicines
