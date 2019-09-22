
/**
 * 유저 권한 enum 
 * - value 순으로
 * 1. 총 관리자
 * 2. 수입 업자
 * 3. 유통 업자
 * 4. 보관 업자
 * 5. 카페
 * 
 * @author Dong-Min Seol
 * @since  2019.09.09
 */
export const AUTH = Object.freeze(
    {
        'admin'   : 'admin'     , 
        'importer': 'importer'  , 
        'deliver' : 'deliver'   , 
        'store'   : 'store'     , 
        'cafe'    : 'cafe'
    })