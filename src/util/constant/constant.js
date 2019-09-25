export const API = {
    test    : 'https://jsonplaceholder.typicode.com',
    importer: '/importer-api',  // 'localhost:8080',
    store   : '/store-api'   ,  // 'localhost:8081',
    cafe    : '/cafe-api'    ,  // 'localhost:8082',
    deliver : '/deliver-api' ,  // 'localhost:8083',
}

/**
 * 유저 권한 종류
 * @author Dong-Min Seol
 * @since  2019.09.22
 */
export let roleNow;
export const setRole = function(role) { roleNow = role; }
// {'admin': 1, 'importer': 2, 'deliver': 3, 'store': 4, 'cafe': 5,}

/**
 * 달력
 * 
 * @author Dong-Min Seol
 * @since  2019.09.22
 */
export const calendar = {
    kor : {
        month : ['1월', '2월', '3월', "4월", "5월",'6월', '7월', '8월', "9월", "10월", "11월","12월"] ,
        day   : ['일', '월', '화', '수', '목', '금', '토']
    }
}

/**
 * 커피 정보
 * 
 * @author Dong-Min Seol
 * @since  2019.09.22
 */
export const coffeeMeta = {
    bean : [
        { name: 'AA',   value: 'AA',},
        { name: 'A',    value: 'A',},
        { name: 'AMEX', value: 'AMEX',},
        { name: 'B',    value: 'B',},
        { name: 'C',    value: 'C4',},
    ],
    
    origin : [
        { name: '에티오피아', value: '에티오피아'},
        { name: '케냐',       value: '케냐'},
        { name: '파나마',     value: '파나마'},
        { name: '과테말라',   value: '과테말라'},
        { name: '콜롬비아',   value: '콜롬비아'},
        { name: '브라질',     value: '브라질'},
        { name: '인도네시아', value: '인도네시아'},
    ],

    kinds : [
        { name: '아라비카', value: '아라비카'},
        { name: '로부스타', value: '로부스타'},
        { name: '리베리카', value: '리베리카'},
    ],

    cafe : [
        { name : '커피인더스트리 1호점', value : '커피인더스트리 1호점'},
        { name : '커피 프린스 1호점'   , value : '커피 프린스 1호점'},
        { name : '런던 다방'          , value : '런던 다방'},
        { name : '카페블리스'         , value : '카페블리스'},
    ],

    roastingWay : [
        { name : '라이트',   value : '라이트'  },
        { name : '시나몬',   value : '시나몬'  },
        { name : '미디엄',   value : '미디엄'  },
        { name : '하이'  ,   value : '하이'    },
        { name : '시티'  ,   value : '시티'    },
        { name : '풀시티' ,  value : '풀시티'  }, 
        { name : '프렌치' ,  value : '프렌치4' },
        { name : '이탈리아', value : '이탈리아' },
    ],
 
    flavor : [
        { name : 'fragrance(향)'   , desc : 'fragrance' },
        { name : 'balance(비율)'   , desc : 'balance'   },
        { name : 'bitterness(신랄)', desc : 'bitterness'},
        { name : 'sweetess(달콤)'  , desc : 'sweetess'  },
        { name : 'aftertaste(뒷맛)', desc : 'aftertaste'},
        { name : 'body(무게감)'    , desc : 'body'      },
        { name : 'acidity(신맛)'   , desc : 'acidity'   },
        { name : 'aroma(아로마) '  , desc : 'aroma'     },
    ]
}