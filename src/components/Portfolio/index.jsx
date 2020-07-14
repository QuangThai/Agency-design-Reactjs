import React from 'react'
import Data from '../../api/data.json';
import PortfolioItem from './PortfolioItem';

const index = () => {
  const ListPortfolio = Data.portfolio.map((item,index) => {
    return <PortfolioItem key={index} port={item}/>
  });

   return (
      <section className="portfolio">
        <div className="grid wide">
          <div className="service__inner">
            <h3 className="heading heading--feature">PORTFOLIO</h3><br />
            <p className="heading-desc">My Work Examples</p>
          </div>
          <div className="row ">
             {ListPortfolio}
          </div>
          <div className="service__btn">
            <a href="#!" className="btn btn--active btn--radius btn--center btn--view-all">View all</a>
          </div>
        </div>
      </section>
   )
}

export default index
