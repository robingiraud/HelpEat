let mealsPattern = [
  {
    name: 'Petit déjeuner',
    portions: 3
  },
  {
    name: 'Déjeuner',
    portions: 5
  },
  {
    name: 'Goûter',
    portions: 2
  },
  {
    name: 'Dîner',
    portions: 5
  }
]

let recommendations = [
  {
    id: 0,
    name: 'Fruits et légumes',
    min: 35,
    max: 50,
    period: 'week',
    cumulative: true
  },
  {
    id: 1,
    name: 'Viande rouge',
    min: 0,
    max: 5,
    period: 'week',
    cumulative: false
  },
  {
    id: 2,
    name: 'Charcuterie',
    min: 0,
    max: 1,
    period: 'week',
    cumulative: false
  },
  {
    id: 3,
    name: 'Viande blanche',
    min: 0,
    max: 7,
    period: 'week',
    cumulative: false
  },
  {
    id: 4,
    name: 'Féculents et produits céréaliers',
    min: 0,
    max: 14,
    period: 'week',
    cumulative: true
  },
  {
    id: 5,
    name: 'Poisson gras',
    min: 0,
    max: 1,
    period: 'week',
    cumulative: false
  },
  {
    id: 6,
    name: 'Poisson maigre',
    min: 0,
    max: 1,
    period: 'week',
    cumulative: false
  },
  {
    id: 7,
    name: 'Œuf',
    min: 0,
    max: 7,
    period: 'week',
    cumulative: false
  },
  {
    id: 8,
    name: 'Produits laitiers',
    min: 0,
    max: 21,
    period: 'week',
    cumulative: true
  },
  {
    id: 9,
    name: 'Légumineuses',
    min: 2,
    max: 50,
    period: 'week',
    cumulative: true
  }
]

let weekUptake = {
  'Lundi': {
    0: [
      {id: 1, name: 'Fruits et légumes',  portions: 1},
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
    ],
    2: [
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 1, name: 'Fruits et légumes',  portions: 1}
    ],
    3: [
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 1, name: 'Fruits et légumes',  portions: 1},
      {id: 5, name: 'Féculents et produits céréaliers',  portions: 3}
    ]
  },
  'Mardi': {
    0: [
      {id: 1, name: 'Fruits et légumes',  portions: 1},
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
    ],
    2: [
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 1, name: 'Fruits et légumes',  portions: 1}
    ]
  },
  'Mercredi': {
    0: [
      {id: 1, name: 'Fruits et légumes',  portions: 1},
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
    ],
    2: [
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 1, name: 'Fruits et légumes',  portions: 1}
    ]
  },
  'Jeudi': {
    0: [
      {id: 1, name: 'Fruits et légumes',  portions: 1},
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
    ],
    2: [
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 1, name: 'Fruits et légumes',  portions: 1}
    ]
  },
  'Vendredi': {
    0: [
      {id: 1, name: 'Fruits et légumes',  portions: 1},
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
    ],
    2: [
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 1, name: 'Fruits et légumes',  portions: 1}
    ]
  },
  'Samedi': {
    0: [
      {id: 1, name: 'Fruits et légumes',  portions: 1},
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
    ],
    1: [
      { id: 2, name: 'Viande rouge',  portions: 1}
    ],
    2: [
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 1, name: 'Fruits et légumes',  portions: 1}
    ]
  },
  'Dimanche': {
    0: [
      {id: 1, name: 'Fruits et légumes',  portions: 1},
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
    ],
    2: [
      {id: 9, name: 'Produits laitiers',  portions: 1},
      {id: 1, name: 'Fruits et légumes',  portions: 1}
    ]
  }
}

let saveMenus = {
  'name': 'Menu de la semaine 42',
  'weekUptake': {
    'Lundi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ],
      3: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 3}
      ]
    },
    'Mardi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Mercredi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Jeudi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Vendredi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Samedi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      1: [
        { id: 2, name: 'Viande rouge',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Dimanche': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    }
  },
  'name': 'Menu de la semaine 43',
  'weekUptake': {
    'Lundi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ],
      3: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 3}
      ]
    },
    'Mardi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Mercredi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Jeudi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Vendredi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Samedi': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      1: [
        { id: 2, name: 'Viande rouge',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    },
    'Dimanche': {
      0: [
        {id: 1, name: 'Fruits et légumes',  portions: 1},
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 5, name: 'Féculents et produits céréaliers',  portions: 1}
      ],
      2: [
        {id: 9, name: 'Produits laitiers',  portions: 1},
        {id: 1, name: 'Fruits et légumes',  portions: 1}
      ]
    }
  }
}
