const medicines = [
    {
        _id: "1",
        name: "Paracetamol",
        description: "Used to treat mild to moderate pain and reduce fever.",
        imageLink: "https://api.deepai.org/job-view-file/f3e5a064-9eec-44ef-9973-c0469ede23b2/outputs/output.jpg",
        price: 15,
        rating: 4.5,
        stock:30
    },
    {
        _id: "2",
        name: "Ibuprofen",
        description: "An anti-inflammatory drug used to reduce fever, pain, and inflammation.",
        imageLink: "https://api.deepai.org/job-view-file/86a12d72-0482-4bd6-b756-5660d58e022d/outputs/output.jpg",
        price: 35,
        rating: 4.3,
        stock:25
    },
    {
        _id: "3",
        name: "Aspirin",
        description: "Used for pain relief, fever reduction, and to reduce inflammation.",
        imageLink: "https://api.deepai.org/job-view-file/d0b4883a-d96a-4e31-8c4c-22e180c8900d/outputs/output.jpg",
        price: 25,
        rating: 4.2,
        stock:35
    },
    {
        _id: "4",
        name: "Amoxicillin",
        description: "A penicillin-type antibiotic used to treat various infections.",
        imageLink: "https://api.deepai.org/job-view-file/dab5973e-3151-452b-9532-4c357b041263/outputs/output.jpg",
        price: 50,
        rating: 4.6,
        stock:43
    },
    {
        _id: "5",
        name: "Cetirizine",
        description: "An antihistamine used to relieve allergy symptoms like sneezing and runny nose.",
        imageLink: "https://api.deepai.org/job-view-file/b8712983-7fb2-48d5-8c71-d822f43beab0/outputs/output.jpg",
        price: 20,
        rating: 4.4,
        stock:33
    },
    {
        _id: "6",
        name: "Loperamide",
        description: "Used to treat diarrhea by slowing down gut movement.",
        imageLink: "https://api.deepai.org/job-view-file/90ead983-b563-43e9-a2c6-17515bfa25a7/outputs/output.jpg",
        price: 18,
        rating: 4.1,
        stock:54
    },
    {
        _id: "7",
        name: "Metformin",
        description: "A medication used to treat type 2 diabetes by controlling blood sugar levels.",
        imageLink: "https://api.deepai.org/job-view-file/5015bd21-8faa-4aff-afbe-3c9ecdc8d765/outputs/output.jpg",
        price: 120,
        rating: 4.7,
        stock:52
    },
    {
        _id: "8",
        name: "Losartan",
        description: "An antihypertensive used to treat high blood pressure and protect kidneys in diabetes.",
        imageLink: "https://api.deepai.org/job-view-file/925a70cd-4ad6-4688-8571-0bfe5f3ddf57/outputs/output.jpg",
        price: 110,
        rating: 4.5,
        stock:23
    },
    {
        _id: "9",
        name: "Omeprazole",
        description: "Used to treat acid reflux, stomach ulcers, and GERD.",
        imageLink: "https://api.deepai.org/job-view-file/f5f8e633-8cba-42a0-abb7-825874ea5d03/outputs/output.jpg",
        price: 30,
        rating: 4.3,
        stock:74
    },
    {
        _id: "10",
        name: "Hydroxychloroquine",
        description: "Used to treat malaria and autoimmune diseases like lupus and rheumatoid arthritis.",
        imageLink: "https://api.deepai.org/job-view-file/38c15936-db26-46b1-ad49-4dfe3982714c/outputs/output.jpg",
        price: 60,
        rating: 4.2,
        stock:38
    },
    {
        _id: "11",
        name: "Doxycycline",
        description: "An antibiotic used to treat a variety of bacterial infections.",
        imageLink: "https://api.deepai.org/job-view-file/3f234642-0e92-4158-826c-ef2735bd9d8e/outputs/output.jpg",
        price: 55,
        rating: 4.4,
        stock:42
    },
    {
        _id: "12",
        name: "Vitamin C",
        description: "A vitamin supplement to boost immune function and skin health.",
        imageLink: "https://api.deepai.org/job-view-file/30b08f22-8907-4aea-a63b-f9860d16c236/outputs/output.jpg",
        price: 20,
        rating: 4.6,
        stock:26
    },
    {
        _id: "13",
        name: "Folic Acid",
        description: "Used to treat or prevent folate deficiency and to support pregnancy.",
        imageLink: "https://api.deepai.org/job-view-file/7f78b57d-08c7-4445-8c6b-62df3daf56d6/outputs/output.jpg",
        price: 15,
        rating: 4.5,
        stock:37
    },
    {
        _id: "14",
        name: "Levothyroxine",
        description: "Used to treat hypothyroidism by replacing the thyroid hormone.",
        imageLink: "https://api.deepai.org/job-view-file/069171cd-3da5-4add-9d50-2787567fbf8a/outputs/output.jpg",
        price: 90,
        rating: 4.7,
        stock:63
    },
    {
        _id: "15",
        name: "Bromhexine",
        description: "Used to treat respiratory issues like cough and mucus congestion.",
        imageLink: "https://api.deepai.org/job-view-file/86765818-9c91-44eb-9cef-36d0f7970dd9/outputs/output.jpg",
        price: 25,
        rating: 4.1,
        stock:34
    },
    {
        _id: "16",
        name: "Clindamycin",
        description: "An antibiotic used to treat a variety of bacterial infections, especially skin infections.",
        imageLink: "https://api.deepai.org/job-view-file/1985dd74-0d31-447c-b532-202b9aed4c40/outputs/output.jpg",
        price: 80,
        rating: 4.3,
        stock:32
    },
    {
        _id: "17",
        name: "Diphenhydramine",
        description: "An antihistamine used for allergy relief and as a sleep aid.",
        imageLink: "https://api.deepai.org/job-view-file/6941e0f1-ff00-4e60-b68a-36e3c8742c8a/outputs/output.jpg",
        price: 18,
        rating: 4.2,
        stock:37
    },
    {
        _id: "18",
        name: "Prednisolone",
        description: "A corticosteroid used to reduce inflammation in various conditions.",
        imageLink: "https://api.deepai.org/job-view-file/24ac4069-ee43-42d3-b52c-5a318bfc4507/outputs/output.jpg",
        price: 40,
        rating: 4.4,
        stock:34
    },
    {
        _id: "19",
        name: "Salbutamol",
        description: "A bronchodilator used to treat asthma and chronic obstructive pulmonary disease (COPD).",
        imageLink: "https://api.deepai.org/job-view-file/3dd80aac-20d5-41c3-b59c-d5703227c743/outputs/output.jpg",
        price: 60,
        rating: 4.5,
        stock:36
    },
    {
        _id: "20",
        name: "Tramadol",
        description: "An opioid pain medication used to treat moderate to severe pain.",
        imageLink: "https://api.deepai.org/job-view-file/647b8aa0-7346-4fe4-a1c7-5f644c68db2d/outputs/output.jpg",
        price: 75,
        rating: 4.6,
        stock:63
    }
];

export default medicines
