import _admMain      from '@/views/main/admin/main'


import _importerMain     from '@/views/main/importer/main'
import _importerRegister from '@/views/main/importer/register-goods'


import _deliverMain  from '@/views/main/deliver/main'
import _storeMain    from '@/views/main/store/main'
import _cafeMain     from '@/views/main/cafe/main'

// [1] 사용자 로그인 후 패널에서만 보이는 페이지
const menuBodyRouter = 
[
  {
    path     : 'admim/main',
    component: _admMain
  },
  {
    path     : 'importer/main',
    component: _importerMain
  },
  {
    path     : 'importer/register',
    component: _importerRegister
  },
  {
    path     : 'deliver/main',
    component: _deliverMain
  },
  {
    path     : 'store/main',
    component: _storeMain
  },
]

export default menuBodyRouter