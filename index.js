import express from 'express';
const forbs = [{
        "id": 1,
        "name": "Jeff Bezos",
        "worth": "$177B",
        "birth_year": "1964",
        "source": "Amazon",
        "country": "USA",
        "image": "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg"
    },
    {
        "id": 2,
        "name": "Elon Musk",
        "worth": "$151B",
        "birth_year": "1971",
        "source": "Tesla, SpaceX",
        "country": "USA",
        "image": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
    },
    {
        "id": 3,
        "name": "Bernard Arnault & family",
        "worth": "$150B",
        "birth_year": "1949",
        "source": "LVMH",
        "country": "France",
        "image": "https://static.euronews.com/articles/stories/07/30/20/52/808x539_cmsv2_ecce0c5e-0e9e-5f20-b218-da20148b726f-7302052.jpg"
    },
    {
        "id": 4,
        "name": "Bill Gates",
        "worth": "$124B",
        "birth_year": "1955",
        "source": "Microsoft",
        "country": "USA",
        "image": "https://i.insider.com/63c27beecddf2c00196e3679?width=700"
    },
    {
        "id": 5,
        "name": "Mark Zuckerberg",
        "worth": "$97B",
        "birth_year": "1984",
        "source": "Facebook",
        "country": "USA",
        "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/125B3/production/_107178157_178151.jpg"
    },
    {
        "id": 6,
        "name": "Warren Buffet",
        "worth": "$96B",
        "birth_year": "1930",
        "source": "Berkshire Hathaway",
        "country": "USA",
        "image": "https://image.cnbcfm.com/api/v1/image/104864179-20150331-0014-1180.jpg?v=1525456366"
    },
    {
        "id": 7,
        "name": "Larry Ellison",
        "worth": "$93B",
        "birth_year": "1944",
        "source": "Software",
        "country": "USA",
        "image": "https://www.thesoftwarereport.com/wp-content/uploads/2023/04/Larry-Ellison.jpg"
    },
    {
        "id": 8,
        "name": "Larry Page",
        "worth": "$91.5B",
        "birth_year": "1973",
        "source": "Google",
        "country": "USA",
        "image": "https://nairametrics.com/wp-content/uploads/2021/08/Larry-Page.jpeg"
    },
    {
        "id": 9,
        "name": "Sergey Brin",
        "worth": "$89B",
        "birth_year": "1973",
        "source": "Google",
        "country": "USA",
        "image": "https://i.insider.com/62b34f5e5bcf7200181ebc1d?width=700"
    },
    {
        "id": 10,
        "name": "Mukesh Ambani",
        "worth": "$84.5B",
        "birth_year": "1957",
        "source": "Petrochemicals, Oil & Gas",
        "country": "India",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaSF9_dsYyF-bQ8nyM06ZA6-Szb4kCz0hCg&usqp=CAU"
    }
]
const app = express();

app.get('/', (req, res) => {
    res.json(forbs);
})

app.get('/:id', (req, res) => {
    const { id } = req.params;
    const forb = forbs.find(forbes => forbes.id == id);
    if (!forb) {
        res.status(404).json({ error: 'Not found' });
    }
    res.json(forb);
})

app.listen(5400, () => {
    console.log('Server on port 5400');
})