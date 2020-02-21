import { combineReducers } from 'redux'
import HomeReducer from '../container/home/store/reducer.js'
import ShowReducer from '../component/show/store/reducer.js'
import CenterShowReducer from '../component/centerShow/store/reducer.js'
import HeaderReducer from '../component/header/store/reducer.js'
import PrimaryReducer from '../container/primary/store/reducer.js'
import SecondaryReducer from '../container/secondary/store/reducer.js'
import FlipPageReducer from '../component/flipPage/store/reducer.js'
import UniversityReducer from '../container/university/store/reducer.js'
import RegisterReducer from '../container/register/store/reducer.js'
import LoginReducer from '../container/login/store/reducer.js'
import HighschoolReducer from '../container/highschool/store/reducer.js'
import DetailReducer from '../container/detail/store/reducer.js'
import VipReducer from '../component/vip/store/reducer.js'

import HighFlipPageReducer from '../component/highFlipPage/store/reducer.js'
import UniReducer from '../container/uni/store/reducer.js'
import FocusReducer from '../component/focusSlider/store/reducer.js'
import SearchPageReducer from '../container/searchPage/store/reducer.js'
import MorePageReducer from '../container/morePage/store/reducer.js'
import MostPopReducer from '../component/mostPop/store/reducer.js'

export default combineReducers({
	HomeReducer:HomeReducer,
	ShowReducer:ShowReducer,
	CenterShowReducer:CenterShowReducer,
	HeaderReducer:HeaderReducer,
	PrimaryReducer:PrimaryReducer,
	SecondaryReducer:SecondaryReducer,
	FlipPageReducer:FlipPageReducer,
	UniversityReducer:UniversityReducer,
	RegisterReducer:RegisterReducer,
	LoginReducer:LoginReducer,
	HighschoolReducer:HighschoolReducer,
	DetailReducer:DetailReducer,
	VipReducer:VipReducer,

	HighFlipPageReducer:HighFlipPageReducer,
	UniReducer:UniReducer,
	FocusReducer:FocusReducer,
	SearchPageReducer:SearchPageReducer,
	MorePageReducer:MorePageReducer,
	MostPopReducer:MostPopReducer
})