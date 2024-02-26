import './featuredinfo.css'
import { ArrowDownward,ArrowUpward} from '@mui/icons-material'
const Featuredinfo = () => {
  return (
    <div className='Featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,423</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,103</span>
            <span className="featuredMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$12,423</span>
            <span className="featuredMoneyRate">+5.4 <ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
    </div>
  )
}

export default Featuredinfo
