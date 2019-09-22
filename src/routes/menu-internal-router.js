import _admMain            from '@/views/main/admin/main'

// [1] 수입 업자
import _importer_1   from '@/views/main/importer/register-goods'
import _importer_2   from '@/views/main/importer/release-goods'

// [2] 정기 배송 센터

// [3] 창고
import _store_1      from '@/views/main/store/release-goods'
import _store_2      from '@/views/main/store/register-store-history'

// [4] 개인 카페
import _cafe_1    from '@/views/main/cafe/register-roast-history'
import _cafe_2    from '@/views/main/cafe/register-goods-release'
import _cafe_3    from '@/views/main/cafe/register-deliver-date'

import _show_list from '@/views/main/common/show-list'

// [1] 사용자 로그인 후 패널에서만 보이는 페이지
const menuBodyRouter = 
[
  {
    path     : 'admim/main',
    component: _admMain
  },
  {
    path     : 'common/show-list',
    component: _show_list
  },
  {
    path     : 'importer/register-goods',
    component: _importer_1
  },
  {
    path     : 'importer/release-goods',
    component: _importer_2
  },
  {
    path     : 'store/release-goods',
    component: _store_1,
  },
  {
    path     : 'store/register-history',
    component: _store_2,
  },
  {
    path     : 'cafe/register-roast-history',
    component: _cafe_1,
  },
  {
    path     : 'cafe/register-goods-release',
    component: _cafe_2,
  },
  {
    path     : 'cafe/register-deliver-date',
    component: _cafe_3,
  },
]

export default menuBodyRouter